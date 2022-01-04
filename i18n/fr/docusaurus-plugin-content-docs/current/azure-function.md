---
sidebar_position: 997
---

# Fonction Azure

- Ouvrir Juka.sln
- Exécutez DreamUnitTests en utilisant Test->Run->Tous les tests pour vous assurer que tous les tests sont passés.
- Cliquez sur le bouton "Start AzureJukaFunction" qui lancera un émulateur Azure localement.
- Utilisez Postman pour envoyer des fonctions au serveur Azure dans "body" comme requête brute dans le format suivant :
```json
{
    "code": "func main() = {}"
}
```
