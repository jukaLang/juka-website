---
sidebar_position: 6
slug: /packagemanager
---

# Gestionnaire de paquets

<h1>📖 Table des matières</h1>

- [**Qu'est-ce que JLDN ?**](#about)
- [**Quel est le but ?**](#used-for)
- - [**Comment fonctionne notre réseau décentralisé ?**](#how-our-decentralized-network-works)
- [**Qu'est-ce qu'un fichier `manifest.yaml`?**](#manifest-file)
- - [**Format de fichier manifeste**](#manifest-format)
- [**Pourquoi les bibliothèques installées sont-elles chiffrées ?**](#encryption)
- [**Quelles sont les commandes?**](#usage)
- - [**Installer le paquet**](#install-usage)
- - [**Mise à niveau de la version**](#bump-usage)
# À propos de

## Utilisé pour
**JLDN** est un gestionnaire de paquets créé et maintenu par l'organisation Juka Language. Il permet aux utilisateurs de créer, publier et utiliser des bibliothèques. *Par exemple* si vous créiez un serveur web, au lieu de recréer l'ensemble du protocole https, vous pouvez installer une bibliothèque juka qui vous donne un cadre solide.

## Comment fonctionne notre réseau décentralisé
Notre réseau décentralisé est la façon dont JLDN est capable de recevoir des données de paquets. Cela inclut le contenu des bibliothèques. Nous tirons les données directement de github, ce qui rend la réception de paquets plus facile et plus rapide.

# Fichier manifeste
Le fichier `manifest.yaml` est utilisé pour donner des spécifications sur un package. Cela inclut la version actuelle, la description et le contenu.

## Format du manifeste
Le manifeste est formé comme suit :
```yaml
version : 0.0.1
package_name: name
package_description: descr
library_directory: lib
main_repo_branch: main
repo_name: JLDN
repo_author_name: jukaLang
```

# Chiffrement
Nous utilisons une solution chiffrée lorsque vous installez des paquets à partir de **JLDN**. Puisque la cible principale de Juka est le cryptage de la vitesse d'exécution est le moyen le plus rapide de l'exécution.

# Usage
## Installer l'utilisation
*Installe un paquet en utilisant le réseau décentralisé*
```bash
jldn installer {git_repo_author} {git_repo} {branch} { FLAGS }
```

Drapeaux :

'-nm' - Spécifie que le dépôt ne contient pas de fichier manifeste et que vous voulez installer quand même

'--force' - Force d'écraser si le nom du paquet existe déjà

## Consommation de bump
*Revient à la version **JLDN** spécifiée*
```bash
jldn bump {service} {version}
```

Services :

**JLDN**

**Juka**

Drapeaux :

**AUCUN FLAGS N'EST TROUVÉ POUR CETTE COMMANDE**

# Comment installer
## Fenêtres
Pour installer sur Windows, il vous suffit d'installer le programme 'win_installer.exe' et de le lancer et tout le reste sera automatisé ! Vous pouvez trouver ce fichier dans la version assest.

## Linux
*Bientôt disponible*
