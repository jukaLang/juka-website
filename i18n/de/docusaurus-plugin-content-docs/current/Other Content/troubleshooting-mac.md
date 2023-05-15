---
sidebar_position: 50
---

# Fehlerbehebung Macintosh

## Fehlermeldung

Wenn Sie Juka auf Macintosh starten, erhalten Sie möglicherweise folgende Fehlermeldung:


![Schritt1](/img/macintosh/cannotbeopened.png)

Kann nicht geöffnet werden, da es von einem unbekannten Entwickler stammt.

## Workaround

Um dieses Problem zu lösen, folgen Sie diesen Schritten:

Doppelklicken Sie auf die Juka App.
1. Wenn es versucht, die Anwendung im Texteditor zu öffnen, öffnen Sie ein Terminal im selben Ordner und führen Sie ./Juka aus.
2. Klicken Sie auf das Apple-Symbol in der oberen linken Ecke Ihres Bildschirms und gehen Sie zu den Systemeinstellungen.
3. Klicken Sie auf Sicherheit & Privatsphäre.
4. Klicken Sie auf die Registerkarte Allgemein.
5. Klicke auf die Schaltfläche Trotzdem öffnen neben der Juka App. ![Schritt2](/img/macintosh/openanyway.png)

6. Du solltest jetzt in der Lage sein, Juka zu betreiben.


## Alternativer Workaround

Sie können folgende Problemumgehung verwenden:

Unter der Annahme, dass Juka auf Ihrem Desktop gespeichert ist, öffnen Sie ein Terminal Fenster und navigieren Sie zum Juka Verzeichnis. Führen Sie die folgenden Befehle aus:

```jsx
chmod +x ./Juka
sudo spctl --master-deaktiviert ./Juka
```

3. Dadurch wird der Gatekeeper für die aktuelle Sitzung deaktiviert, so dass du Juka ausführen kannst.
4. Sobald du Juka benutzt hast, führe den folgenden Befehl aus, um den Gatekeeper wieder zu aktivieren:

```jsx
sudo spctl --master-enable
```

Dadurch wird der "Gatekeeper" wieder aktiviert.

**Notizen**
- Juka ist derzeit nicht von Apple signiert, daher könnte diese Fehlermeldung auftreten, wenn Sie sie zum ersten Mal ausführen.
- Wir arbeiten daran, Juka von Apple zu unterzeichnen, daher sollte diese Fehlermeldung in Zukunft kein Problem sein.
- Wenn Sie weitere Fragen haben, zögern Sie nicht uns zu kontaktieren.