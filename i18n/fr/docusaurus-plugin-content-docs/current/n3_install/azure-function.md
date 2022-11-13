---
sidebar_position: 8
---

# Azure Function

### Exécution locale
Juka peut fonctionner localement sans serveur Azure Web si vous préférez tester Juka avant de télécharger sur votre serveur. Pour cela, effectuez les étapes suivantes :
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