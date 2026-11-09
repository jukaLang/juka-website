"""Render the raster images the site needs from the JukaHub brand sources.

    python3 tools/make_images.py <JukaHubV2 checkout> <Inter variable .ttf>

Writes into public/:
  assets/img/og.jpg      1200x630 social card (Open Graph / Twitter)
  assets/img/icon-192.png, icon-512.png   web-app manifest icons

The logo itself is never redrawn here: it is JukaHubV2/branding/jukahub-logo-1024.png
(rendered by branding/mklogo.py), only resized. The backdrop uses the same tokens as
the Home screen and the logo: navy #070B14 -> #0B1426, a cyan #22D3EE bloom upper left
and a violet #7C3AED bloom lower right. Needs Pillow and numpy.
"""
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public")


def hex_rgb(h):
    h = h.lstrip("#")
    return np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)], dtype=np.float64)


def backdrop(w, h):
    """Home's backdrop: a navy diagonal with two soft blooms and 2% grain."""
    y, x = np.mgrid[0:h, 0:w].astype(np.float64)
    t = np.clip((x / w + y / h) / 2.0, 0, 1)[..., None]
    img = hex_rgb("#070B14") * (1 - t) + hex_rgb("#0B1426") * t

    def bloom(cx, cy, r, color, alpha):
        d = np.sqrt((x - cx) ** 2 + (y - cy) ** 2) / r
        a = (np.clip(1 - d, 0, 1) ** 2.2 * alpha)[..., None]
        return a, hex_rgb(color)

    for cx, cy, r, col, al in (
        (w * 0.16, h * 0.18, w * 0.55, "#22D3EE", 0.34),
        (w * 0.70, h * -0.10, w * 0.45, "#2563EB", 0.20),
        (w * 0.96, h * 1.05, w * 0.62, "#7C3AED", 0.42),
        (w * 0.05, h * 1.10, w * 0.30, "#C084FC", 0.10),
    ):
        a, c = bloom(cx, cy, r, col, al)
        img = img * (1 - a) + c * a

    rng = np.random.default_rng(7)
    grain = rng.normal(0, 1, (h, w, 1)) * 255 * 0.012
    img = np.clip(img + grain, 0, 255)
    return Image.fromarray(img.astype(np.uint8), "RGB")


def font(path, size, wght, opsz=None):
    f = ImageFont.truetype(path, size)
    try:
        axes = {a["name"].decode() if isinstance(a["name"], bytes) else a["name"]: a for a in f.get_variation_axes()}
        vals = []
        for a in f.get_variation_axes():
            name = a["name"].decode() if isinstance(a["name"], bytes) else a["name"]
            if name.lower().startswith("optical"):
                vals.append(opsz if opsz is not None else min(32, max(14, size)))
            elif name.lower().startswith("weight"):
                vals.append(wght)
            else:
                vals.append(a["default"])
        f.set_variation_by_axes(vals)
        del axes
    except (OSError, AttributeError):
        pass
    return f


def wrap(draw, text, fnt, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=fnt) <= width:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def og_image(logo_png, inter):
    w, h = 1200, 630
    img = backdrop(w, h).convert("RGBA")

    logo = Image.open(logo_png).convert("RGBA").resize((300, 300), Image.LANCZOS)
    img.alpha_composite(logo, (78, 165))

    d = ImageDraw.Draw(img)
    x = 420
    title = font(inter, 104, 640, 32)
    d.text((x, 150), "JukaHub", font=title, fill=(255, 255, 255, 255))

    lead = font(inter, 38, 430, 28)
    lines = wrap(d, "The shell your TrimUI handheld should have shipped with.", lead, 700)
    yy = 292
    for line in lines:
        d.text((x, yy), line, font=lead, fill=(232, 238, 246, 205))
        yy += 52

    small = font(inter, 26, 560, 20)
    d.text((x, yy + 34), "jukalang.com", font=small, fill=(34, 211, 238, 255))
    tail = font(inter, 26, 430, 20)
    d.text((x + d.textlength("jukalang.com", font=small) + 22, yy + 34),
           "Free and open source", font=tail, fill=(232, 238, 246, 150))
    return img.convert("RGB")


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    jh, inter = sys.argv[1], sys.argv[2]
    logo_png = os.path.join(jh, "branding", "jukahub-logo-1024.png")
    img_dir = os.path.join(OUT, "assets", "img")
    os.makedirs(img_dir, exist_ok=True)

    # JPEG: the grain makes a PNG ten times larger for no visible gain.
    og_image(logo_png, inter).save(os.path.join(img_dir, "og.jpg"), quality=86, optimize=True,
                                   progressive=True, subsampling=0)

    logo = Image.open(logo_png).convert("RGBA")
    for size in (192, 512):
        logo.resize((size, size), Image.LANCZOS).save(os.path.join(img_dir, f"icon-{size}.png"), optimize=True)
    print("wrote og.jpg, icon-192.png, icon-512.png to", img_dir)


if __name__ == "__main__":
    main()
