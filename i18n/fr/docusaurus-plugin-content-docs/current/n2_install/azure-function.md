---
sidebar_position: 8
---

# Fonction Azure

## Exécuter Juka localement

Juka peut être exécuté localement sans serveur Azure Web. Ceci est utile pour tester Juka avant de le télécharger sur un serveur.

Pour exécuter Juka localement, suivez ces étapes :

1. Ouvrez le projet Juka.sln dans Visual Studio 2022.
2. Cliquer sur le bouton **Démarrer la fonction AzureJuka**. Cela démarrera un émulateur Azure localement.
3. Utilisez Postman pour envoyer des fonctions à l'émulateur Azure. Pour cela, créez une nouvelle requête et définissez la méthode de requête à **POST**. Dans l'onglet **Body** , sélectionnez **Raw** et collez le code suivant :

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

4. Cliquez sur **Envoyer**. L'émulateur Juka exécute la fonction et affiche le message "Hello World" sur la console.

## Exécution de Juka sur Azure

Pour exécuter Juka sur Azure, suivez ces étapes:

1. Téléchargez le paquet Juka sur Azure.
2. Utiliser le déploiement web pour publier Juka sur Azure.
3. Pour appeler Juka depuis un client, envoyez un message de demande brute à l'extrémité de la Juka. Le message de la requête doit avoir le format suivant :

```json
{
  "code": "func main() { printLine(\"Hello World\") }"
}
```

**Remarque :** Vous devez échapper aux citations, sinon Juka retournera une erreur.