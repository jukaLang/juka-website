---
sidebar_position: 2
---

# Architecture

## Structure du dossier

La base de code Juka est organisée dans les dossiers suivants :

* **./examples** - Ce dossier contient des exemples de code Juka.
* **./src/JukaCompiler** - Ce dossier contient le noyau du compilateur Juka.
* **./src/JukaAzureFunction** - Ce dossier contient le code pour exécuter les fonctions Juka Azure sur le serveur Azure Cloud de Microsoft.
* **./src/JukaNetwork** - Ce dossier contient le code du réseau Juka, qui est un réseau blockchain pour stocker et gérer les paquets.
* **./src/JukaUnitTest** - Ce dossier contient des tests unitaires pour le compilateur Juka.
* **./src/Juka** - Ce dossier contient le code de l'interface de Juka (à venir).

## Exigences de développement / Studio Visuel

Pour développer et gérer Juka, vous aurez besoin des éléments suivants :

* La dernière version de Visual Studio.
* Les paquets Visual Studio suivants :
  * Développement Azure
  * Développement du bureau .NET

## Temps d'exécution

Juka utilise le schéma suivant pour exécuter le code:

![Mise en page](/img/Runtime.png)

Le compilateur Juka compile du code Juka dans une bibliothèque .NET .dll. Cette bibliothèque peut ensuite être utilisée dans n'importe quel projet C#, y compris Xamarin/MAUI pour construire des applications iOS/Android, et il est principalement utilisé pour construire des applications multi-plateformes pour Mac/OS, Windows Apps et Windows Desktop.

Le code d'exécution de la fonction Juka Azure est utilisé pour exécuter les fonctions Juka Azure sur le serveur Azure Cloud de Microsoft.

Le réseau Juka est un réseau blockchain pour stocker et gérer les paquets. Il est utilisé comme gestionnaire de paquets décentralisé.

Les tests unitaires de Juka sont utilisés pour tester le compilateur Juka.

L'interface utilisateur de Juka est une interface graphique pour Juka qui est en cours de développement.

## Notes

* Le projet Juka est encore en cours de développement, donc certaines fonctionnalités peuvent ne pas encore être disponibles.
* Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter.