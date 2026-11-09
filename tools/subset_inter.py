"""Cut the site's font file from the Inter that ships with JukaHub.

    pip install fonttools brotli
    python3 tools/subset_inter.py <JukaHubV2>/player/Inter-Regular.ttf public/assets/fonts/Inter.woff2

JukaHub's Inter-Regular.ttf is Inter 4 as a variable font with two axes: weight
(100-900) and optical size (14-32). Both are kept, so headlines get Inter's
display cut automatically (font-optical-sizing: auto) and the device and the
site draw text with the same font file. The subset keeps Latin-1, the
punctuation and arrows the pages use, and the OpenType features the CSS asks
for; hinting is dropped (browsers ignore it). About 80 KB as WOFF2.
"""
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

FEATURES = ['kern', 'liga', 'calt', 'ccmp', 'locl', 'mark', 'mkmk', 'case', 'tnum', 'pnum',
            'zero', 'frac', 'numr', 'dnom', 'sups', 'ss01', 'cv05', 'cv08', 'cv11']

EXTRA = (0x131, 0x152, 0x153, 0x2C6, 0x2DA, 0x2DC, 0x2009, 0x200A, 0x2010, 0x2011, 0x2013, 0x2014,
         0x2018, 0x2019, 0x201A, 0x201C, 0x201D, 0x201E, 0x2022, 0x2026, 0x202F, 0x2032, 0x2033,
         0x2039, 0x203A, 0x2044, 0x20AC, 0x2122, 0x2190, 0x2191, 0x2192, 0x2193, 0x2194, 0x2195,
         0x21B5, 0x21E7, 0x2212, 0x2303, 0x2318, 0x2325, 0x232B, 0x2713, 0x25B6, 0x25CF, 0x00D7)


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, dst = sys.argv[1], sys.argv[2]
    unicodes = list(range(0x20, 0x7F)) + list(range(0xA0, 0x100)) + list(EXTRA)

    opts = subset.Options()
    opts.flavor = 'woff2'
    opts.layout_features = FEATURES
    opts.name_IDs = ['*']
    opts.name_languages = ['*']
    opts.notdef_outline = True
    opts.hinting = False

    font = TTFont(src)
    sub = subset.Subsetter(options=opts)
    sub.populate(unicodes=unicodes)
    sub.subset(font)
    font.flavor = 'woff2'
    font.save(dst)
    print(dst, len(font.getGlyphOrder()), 'glyphs, axes',
          [(a.axisTag, a.minValue, a.maxValue) for a in font['fvar'].axes])


if __name__ == '__main__':
    main()
