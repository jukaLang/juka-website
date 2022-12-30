---
sidebar_position: 8
---

# Fonction Azure

### Exécution locale

Juka can run locally without Azure Web server if you prefer to test Juka before uploading to your server. Pour cela, effectuez les étapes suivantes :

- Ouvrez Juka.sln dans Windows Visual Studio 2022
- Cliquez sur le bouton "Start AzureJukaFunction" qui lancera un émulateur Azure localement.
- Utilisez Postman pour envoyer des fonctions au serveur Azure dans "body" comme requête brute dans le format suivant :

### Fonction Microsoft Azure

Télécharger le package sur Azure Web Server Utiliser le déploiement web pour publier Juka (Azure Function) sur le cloud

## Appel de la fonction Juka Azure

Juka peut exécuter le code sur le serveur de la fonction Juka Azure en envoyant un message de requête brute au format suivant :

```json
{
  "code": "func main() = { printLine(\"Hello World\"} }"
}
```

NOTE: vous devez échapper aux citations, sinon Juka retournera une erreur.
