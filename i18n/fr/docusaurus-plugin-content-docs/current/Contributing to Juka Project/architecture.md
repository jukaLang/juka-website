---
sidebar_position: 1
---

# Architecture

## Structure du dossier :

### ./exemples
- Vous fournit des exemples pour commencer à utiliser Juka

### ./src/JukaCompiler
- Le cœur de la langue. Le code se compile en .NET . bibliothèque qui peut être utilisée dans n'importe quel projet C# y compris Xamarin/MAUI pour construire des applications iOS/Android, Il est principalement utilisé pour construire des applications multi-plateformes pour Mac/OS, Windows Apps et Windows Desktop.

### ./src/JukaAzureFunction
- Code d'exécution de la fonction Azure. Utilisé pour exécuter la fonction Juka Azure sur le serveur Azure Cloud de Microsoft

### ./src/JukaNetwork
- Implémenté en tant que réseau blockchain pour stocker et gérer les paquets. Utilisé comme gestionnaire de paquets décentralisé.

### ./src/JukaUnitTest
- Tests unitaires pour tester JukaCompiler

### ./src/Juka
- Contient l'interface (à venir)

### Exigences de développement / Studio Visuel
##### Assurez-vous que vous avez installé la dernière version de Visual Studio

Les paquets Visual Studio suivants requis pour exécuter et développer Juka :

- Développement Azure
- Développement du bureau .NET

### Juka utilise le schéma suivant pour exécuter le code:
![Mise en page](/img/Runtime.png)
