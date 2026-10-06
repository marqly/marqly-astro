---
title: "Comment exporter ses posts sauvegardés Reddit en 2026 (Guide pas à pas)"
seoTitle: "Comment Exporter ses Posts Sauvegardés Reddit (2026) | Marqly"
description: "Exportez vos posts sauvegardés Reddit via la demande officielle de données : procédure exacte, contenu du CSV, limite des 1 000 éléments et réorganisation."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "exporter posts sauvegardes reddit"
tags:
  - "exporter posts sauvegardes reddit"
  - "demande donnees reddit"
  - "limite sauvegardes reddit"
  - "sauvegarde reddit"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
faqs:
  - q: "Comment exporter mes posts sauvegardés de Reddit ?"
    a: "Allez sur reddit.com/settings/data-request dans un navigateur d'ordinateur, connectez-vous, choisissez l'historique complet du compte et validez. Reddit prépare un ZIP de fichiers CSV — dont saved_posts.csv et saved_comments.csv — et envoie un lien de téléchargement dans votre boîte Reddit et votre email vérifié. C'est le seul export officiel que Reddit propose (voir l'aide de Reddit sur les [posts sauvegardés](https://www.reddit.com/help/saved-posts/), vérifié le 6 octobre 2026)."
  - q: "Combien de temps prend une demande de données Reddit ?"
    a: "Reddit annonce jusqu'à 30 jours, mais la plupart des demandes aboutissent bien plus vite — souvent en quelques heures à quelques jours. On ne peut soumettre qu'une demande toutes les 30 jours, donc choisissez l'historique complet du compte plutôt qu'une plage de dates restreinte dès la première fois."
  - q: "Que contient concrètement le fichier saved_posts.csv ?"
    a: "Exactement deux colonnes par ligne : un identifiant de post et un lien permanent. Pas de titres, pas de texte, pas de noms de subreddit, pas de dates de sauvegarde. Pour transformer ces liens nus en quoi que ce soit de parcourable, il faut une deuxième étape — un script open source qui récupère les détails, ou l'import des liens dans un gestionnaire de favoris qui récupère titres et tags pour vous."
  - q: "L'export Reddit inclut-il les sauvegardes au-delà de la limite des 1 000 ?"
    a: "Généralement, oui. L'application et l'API de Reddit n'affichent qu'environ vos 1 000 sauvegardes les plus récentes, mais la demande de données est construite depuis les enregistrements stockés par Reddit plutôt que depuis le flux en direct, et les utilisateurs rapportent régulièrement l'intégralité de leur historique dans l'export. C'est votre meilleure — et de fait unique — chance sur les vieilles sauvegardes, donc n'attendez pas pour la demander."
---

La seule voie officielle pour exporter vos posts sauvegardés Reddit est la demande de données : allez sur **reddit.com/settings/data-request**, choisissez l'historique complet du compte, et Reddit vous envoie sous 30 jours (souvent bien plus vite) un ZIP de fichiers CSV — dont `saved_posts.csv`. L'astuce : le CSV ne contient que des liens nus, sans titres ni contenu, et l'interface Reddit n'affiche que vos ~1 000 sauvegardes les plus récentes. Voici le processus complet, les limites que personne ne mentionne, et comment transformer l'export en quelque chose d'utilisable.

## Pourquoi s'embêter à exporter

La liste de sauvegardes Reddit est un cul-de-sac par conception. Pas de bouton d'export, pas de recherche dans les sauvegardes pour la plupart des applications, et — la partie qui surprend tout le monde — **l'interface et l'API ne chargent qu'environ vos 1 000 éléments sauvegardés les plus récents.** La sauvegarde numéro 1 001 n'en supprime aucune, mais votre sauvegarde la plus ancienne tombe silencieusement hors de la liste visible. La plupart des Redditors de longue date ont des années de sauvegardes auxquelles ils ne peuvent plus remonter en scrollant.

La demande de données est l'exception : elle est générée depuis les enregistrements stockés de Reddit en vertu de lois sur la vie privée comme le RGPD et la CCPA, pas depuis le flux en direct, et elle peut atteindre des sauvegardes que l'app ne vous montre plus. Ça fait d'elle moins « gentille sauvegarde » que « seule copie restante ». La [fermeture de Pocket](/fr/blog/comment-exporter-migrer-donnees-pocket-2026) l'a démontré de la manière dure : une sauvegarde qui vit dans une plateforme n'est aussi durable que l'intérêt de cette plateforme à la garder.

## Étape 1 : Soumettre la demande de données

1. Ouvrez **reddit.com/settings/data-request** dans un navigateur d'ordinateur et connectez-vous. (L'ancien chemin de Reddit est Paramètres → Confidentialité → Demander vos données.)
2. Sous la plage de dates, choisissez l'option **historique complet du compte** — pas une plage personnalisée. C'est ce qui attire les vieilles sauvegardes, et comme vous n'avez droit qu'à une demande par 30 jours, ne la gaspillez pas sur une tranche.
3. Sélectionnez les données voulues (tout est le choix sûr) et validez.

N'importe qui peut demander, pas seulement les résidents de l'UE — Reddit étend le mécanisme à tous les comptes. Vous verrez une confirmation que la demande est en file.

## Étape 2 : Attendre, puis télécharger le ZIP

La ligne officielle de Reddit est « jusqu'à 30 jours ». En pratique, la plupart des exports arrivent en quelques heures à quelques jours. Quand il est prêt :

1. Un message arrive dans votre **boîte Reddit** (et votre email vérifié, si vous en avez un) avec un lien de téléchargement.
2. Téléchargez le ZIP rapidement et gardez une copie en lieu sûr — traitez-le comme la sauvegarde qu'il est.

Souvenez-vous de la limite : **une demande par 30 jours.** Si vous réalisez avoir choisi une plage restreinte, vous attendez un mois pour corriger.

Si rien n'apparaît après deux semaines, vérifiez que votre compte a un email vérifié (Paramètres → Compte), regardez dans le spam pour un expéditeur reddit.com, et re-vérifiez l'onglet messages de votre boîte Reddit plutôt que les notifications. Passé la barre des 30 jours sans rien reçu, soumettez à nouveau la demande — le délai de refroidissement est alors réinitialisé.

## Étape 3 : Comprendre ce que vous avez vraiment reçu

Décompressez le fichier et vous trouverez une pile de CSV : vos posts, commentaires, votes, historique de chat — et les deux pour lesquels vous étiez là, `saved_posts.csv` et `saved_comments.csv`.

Ouvrez `saved_posts.csv` et tempérez vos attentes. Chaque ligne contient exactement deux choses :

- un **identifiant de post**
- un **lien permanent**

C'est tout. **Pas de titres. Pas de texte. Pas de noms de subreddit. Pas de dates.** Les lignes sont ordonnées par identifiant, pas par date de sauvegarde. L'export de Reddit satisfait l'obligation légale — voici un enregistrement de ce que vous avez sauvegardé — sans être le moins du monde parcourable. Mille lignes de liens `https://www.reddit.com/r/.../comments/...` ne vous disent pas lequel était le fil génial de dépannage du levain.

Pendant que vous êtes dans le ZIP, quelques voisins valent aussi la peine d'être gardés : `saved_comments.csv` (même format nu, pour les commentaires sauvegardés), plus vos propres `posts.csv` et `comments.csv` — le seul backup qui existe hors de Reddit pour les choses que *vous* avez écrites. Archivez le ZIP entier, pas seulement les sauvegardes.

Donc l'export seul n'est pas la ligne d'arrivée. Il vous faut l'étape 4.

## Étape 4 : Transformer des liens nus en bibliothèque utilisable

Deux voies praticables, selon votre niveau technique :

### Option A : scripts open source (technique)

Des outils comme **export-saved-reddit** et **reddit-saved-to-csv** sur GitHub récupèrent vos sauvegardes via l'API Reddit et les enrichissent en titres, subreddits et URLs ; export-saved-reddit sort même un **fichier HTML de favoris** standard qu'importe quel gestionnaire de favoris peut importer. Deux avertissements honnêtes :

- Les outils basés sur l'API butent sur la même **limite de pagination des ~1 000 éléments** que l'app — ils ne voient pas vos vieilles sauvegardes. Pour celles-là, l'export de la demande de données est la source de vérité.
- Ils exigent de créer un identifiant API Reddit et de faire tourner Python en local. Correct pour des développeurs, un mur pour tous les autres.

Certains scripts (dans l'esprit de reddit-stash) fonctionnent dans l'autre sens : ils prennent la liste d'identifiants de votre export RGPD et récupèrent les détails de chaque lien, ce qui vous fait dépasser la limite des 1 000. Plus de mise en place, résultat plus complet.

### Option B : importer dans un gestionnaire de favoris (tout le monde)

Si un script vous a donné un fichier HTML de favoris, importez-le directement dans un gestionnaire de favoris — Marqly avale le HTML de favoris standard comme il gère les [exports de favoris Chrome](/fr/blog/exporter-favoris-chrome), puis récupère chaque page et laisse l'IA la taguer et l'indexer. Vos permaliens anonymes reprennent vie en entrées titrées, taguées et consultables.

Pour être franc sur les limites : Marqly ne parse pas directement le `saved_posts.csv` brut de Reddit — le pont est un fichier HTML de favoris, ou l'enregistrement un par un des liens qui comptent. Et aucun importateur ne ressuscite une sauvegarde dont le post sous-jacent a été supprimé ; un lien mort reste un lien mort dans n'importe quel outil.

### Option C : le passage manuel (petites collections)

Si votre liste de sauvegardes compte quelques dizaines d'éléments, oubliez l'outillage. Ouvrez vos posts sauvegardés dans le navigateur, parcourez la liste, et enregistrez en un clic les indispensables directement dans votre gestionnaire de favoris via son extension. Vingt minutes, pas de script, pas d'archéologie de CSV — et comme vous touchez chaque élément de toute façon, le tri se fait gratis. C'est aussi le bon repli pendant les jours d'attente de l'export officiel.

## Étape 5 : Trier, ne pas accumuler

Avant ou après l'import, passez la liste au crible vite. Des années de sauvegardes, ce sont des années de « je pourrais en avoir besoin » qui n'ont jamais eu lieu. Filtre pratique : si vous ne vous souvenez pas pourquoi vous avez sauvegardé et que le titre n'évoque rien, laissez partir. Ce qui survit au tri est votre vraie bibliothèque de référence — généralement 20 à 30 % de la liste brute — et une bibliothèque plus petite et délibérée bat une archive complète mais inutilisable. (Plus de détails sur le rendu d'une bibliothèque consultable dans [organiser ses favoris](/fr/blog/organiser-favoris-navigateur).)

## Corriger l'habitude, pas seulement l'arriéré

L'export règle le passé. Le même problème recommence à se reconstruire dès que vous appuyez sur Sauvegarder sur le prochain fil, parce que le bouton de Reddit sera encore dans un an une liste sans recherche, plafonnée et hostile à l'export.

Le modèle durable est à deux niveaux :

- **Continuez d'utiliser le bouton Sauvegarder de Reddit** comme boîte de réception rapide pendant que vous scrollez.
- **Externalisez les indispensables** dès que vous les reconnaissez. Avec l'extension d'un gestionnaire de favoris, c'est un clic sur le fil : Marqly sauvegarde le lien, le tagu automatiquement, et le rend retrouvable plus tard en décrivant ce dont vous vous souvenez — « le fil où un plombier expliquait les anodes de chauffe-eau » — sans titre, subreddit ni username. C'est la recherche sémantique faisant ce que la liste Reddit n'a jamais pu, et c'est l'épine dorsale d'un [second cerveau qui retrouve vraiment les choses](/fr/blog/comment-creer-un-second-cerveau-2026).

Reddit reste votre flux de découverte. Votre bibliothèque vit quelque part avec un bouton d'export.

## Récap express

1. **reddit.com/settings/data-request** → historique complet → valider.
2. **Téléchargez le ZIP** depuis le lien dans votre boîte (jusqu'à 30 jours ; souvent bien moins).
3. **Attendez-vous à des liens nus** — `saved_posts.csv` n'est que des identifiants et permaliens.
4. **Enrichissez et importez** : script open source → HTML de favoris → dans un gestionnaire comme [Marqly](https://app.marqly.com).
5. **Changez l'habitude** : les sauvegardes Reddit comme boîte de réception, un clic vers votre propre bibliothèque pour les indispensables.

Demandez l'export aujourd'hui même si vous ne le traitez pas cette semaine — c'est la seule copie de vos sauvegardes d'avant la limite des 1 000 qui existe, et elle vous coûte deux minutes.
