---
title: "Comment exporter ses signets X (Twitter) en 2026 (Toutes les méthodes qui marchent)"
seoTitle: "Comment Exporter les Signets X (Twitter) en 2026 | Marqly"
description: "L'archive officielle de X n'inclut pas vos signets. Comment vraiment exporter vos signets Twitter en 2026 — et rendre vos prochains enregistrements retrouvables."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "exporter signets twitter x"
tags:
  - "exporter signets twitter"
  - "signets x twitter"
  - "limite signets twitter"
  - "sauvegarde twitter"
  - "archive données twitter"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
faqs:
  - q: "L'archive de données de X (Twitter) inclut-elle les signets ?"
    a: "Non. L'archive officielle que vous demandez via Paramètres → Votre compte → Télécharger une archive de vos données contient vos posts, vos likes, vos MP et vos listes d'abonnés — mais pas vos signets. C'est une décision produit délibérée, pas un bug. Pour exporter les signets, il faut un outil d'export basé sur le navigateur ou l'API payante de X."
  - q: "Combien de signets puis-je réellement voir sur X ?"
    a: "En pratique, à peu près vos 800 à 1 000 plus récents. X ne publie aucun plafond officiel, mais la page des signets cesse de charger les plus anciens autour de ce point, et l'API s'épuise en pagination vers un nombre semblable. Les signets plus vieux n'apparaissent nulle part dans l'interface — c'est exactement pourquoi exporter ceux qui restent accessibles compte."
  - q: "Les dossiers de signets et la recherche dans les signets sont-ils gratuits sur X ?"
    a: "Non. Créer des dossiers de signets et chercher dans vos signets exigent tous deux un abonnement X Premium. Les comptes gratuits ont une seule liste chronologique inversée sans recherche — la seule option est de faire défiler. Aucune de ces fonctions ne remonte le plafond d'affichage sur les signets anciens."
  - q: "Quelle est la meilleure façon de garder les signets X consultables sur le long terme ?"
    a: "Enregistrez hors de X ceux qui méritent d'être gardés, au moment même où vous les mettez en signet. Un gestionnaire de favoris comme Marqly sauve le lien en un clic depuis le navigateur, l'étiquette automatiquement et le rend retrouvable par le sens — « ce fil sur la psychologie des prix » remonte même quand vous avez oublié qui l'a posté. X reste votre boîte de réception ; votre bibliothèque vit là où vous la contrôlez."
---

Voici la vérité inconfortable d'emblée : **l'archive officielle des données de X n'inclut pas vos signets.** Vous pouvez télécharger vos posts, vos likes, vos messages privés et vos listes d'abonnés — mais les signets accumulés pendant des années sont laissés dehors, délibérément. Pour les exporter en 2026, il vous faut un outil d'export basé sur le navigateur, l'API payante de X, ou un tri manuel. Ce guide couvre chaque voie, ses limites, et le seul changement qui empêche le problème de se représenter.

## Pourquoi exporter les signets X est plus difficile que nécessaire

Trois décisions de la plateforme s'empilent contre vous :

- **L'archive de données saute les signets.** Tous les autres grands types de données sont dans l'export officiel. Les signets non, et ils ne l'ont jamais été.
- **Il y a un plafond pratique d'environ 800 à 1 000 signets visibles.** X ne documente pas de limite officielle, mais la page des signets cesse de charger les éléments anciens autour de ce point, et l'API s'épuise vers un nombre semblable. Les signets plus vieux sont de fait inaccessibles — aucun outil ne peut exporter ce que la plateforme ne sert plus.
- **Dossiers et recherche sont réservés à Premium.** Les comptes gratuits ont une seule longue liste en ordre chronologique inversé, sans recherche. Premium ajoute des dossiers et une barre de recherche, mais rien de tout cela ne ramène les éléments déjà sortis du plafond.

La conséquence pratique : exportez ce que vous atteignez encore, et cessez de traiter les signets X comme un stockage longue durée. Si la fermeture de Pocket a appris quelque chose à ceux qui gardent des liens, c'est que [les enregistrements qui vivent dans la plateforme d'un autre sont toujours en risque](/fr/blog/comment-exporter-migrer-donnees-pocket-2026).

## Étape 1 : demandez quand même l'archive officielle (pour tout sauf les signets)

Même sans les signets, l'archive vaut la peine : c'est la seule sauvegarde officielle de vos posts, likes et messages privés.

1. Sur x.com, ouvrez **Paramètres et confidentialité → Votre compte → Télécharger une archive de vos données**.
2. Confirmez votre mot de passe (et la double authentification si activée).
3. Cliquez sur **Demander une archive**. X indique que la préparation peut prendre 24 heures ou plus ; vous recevrez une notification et un e-mail quand elle est prête.
4. Téléchargez le ZIP depuis la même page de paramètres. Le lien ne reste pas actif indéfiniment, donc récupérez-le vite.

Vous y trouverez vos posts, likes, messages directs, listes d'abonnés/abonnements et données publicitaires en JSON — et aucun `bookmarks.js`. C'est attendu. Place aux voies qui sortent réellement vos signets.

## Étape 2 : exporter avec une extension de navigateur (la voie la plus utilisée)

Faute d'export officiel, un petit écosystème d'extensions d'export existe. Elles fonctionnent toutes pareil : vous ouvrez la page de signets connecté, l'extension la fait défiler dans votre propre session, et écrit ce qu'elle trouve dans un fichier — en général CSV, JSON, Markdown ou un fichier HTML de favoris.

Le flux générique :

1. **Installez une extension d'export** depuis le Chrome Web Store (cherchez « export X bookmarks » — plusieurs options gratuites et payantes existent).
2. **Ouvrez x.com/i/bookmarks** dans ce navigateur, connecté à votre compte.
3. **Lancez l'export** depuis l'extension. Elle fait défiler la page automatiquement, en collectant chaque post mis en signet au fur et à mesure du chargement. Une grande bibliothèque prend quelques minutes.
4. **Téléchargez le fichier** et gardez-en une copie en lieu sûr : c'est votre copie assurance.

Réserves honnêtes avant d'en choisir une :

- **Ces outils scrapent la page, donc ils cassent quand X change son balisage.** Vérifiez la date de dernière mise à jour de l'extension et les avis récents avant de lui faire confiance.
- **Elles ne peuvent exporter que ce que X affiche encore** — les ~800 à 1 000 plus récents. Rien ne récupère les signets déjà sortis de la liste.
- **Lisez les autorisations demandées.** Un exporteur a besoin d'accéder à x.com ; il n'a pas besoin d'accéder à tous les sites que vous visitez. Soyez difficile.
- **Exportez le texte, pas l'expérience.** Vous obtenez le texte, l'auteur et le lien de chaque post. Fils, images et vidéos ne sont souvent que des liens de retour vers X — si le post est supprimé, le lien meurt avec lui.

Il existe aussi des services de gestion de signets spécifiques à X (Dewey et Tweetsmash sont les noms établis) qui synchronisent vos signets en continu et offrent un export CSV ou Markdown. Ils sont solides si les signets X sont votre bibliothèque principale, mais ils sont payants et héritent du même plafond de visibilité que tout le monde.

### Quel format d'export choisir ?

Si l'outil laisse le choix, prenez **deux formats** : un **fichier HTML de favoris** s'il est proposé (c'est celui que les gestionnaires de favoris importent directement — le même format standard exporté par les navigateurs), et **CSV ou JSON** comme archive brute, puisqu'ils conservent le plus de champs (texte du post, auteur, date, lien). Markdown est agréable à coller dans une app de notes mais c'est le pire point de départ pour importer ailleurs. L'espace disque est gratuit : exportez une fois dans les deux et vous n'aurez jamais à refaire le défilement.

## Étape 3 : la voie de l'API X (développeurs seulement)

L'API v2 de X a un endpoint signets, mais il est derrière les paliers développeurs payants, et la pagination tarit vers 800 signets par utilisateur. Sauf si vous avez déjà un accès API payant et que vous aimez écrire des boucles de pagination, cette voie coûte plus d'effort et d'argent qu'une extension pour le même résultat. Elle existe ; vous n'en avez presque certainement pas besoin.

## Étape 4 : le tri manuel (petites bibliothèques seulement)

Si vous avez moins d'une centaine de signets, sautez l'outillage. Ouvrez x.com/i/bookmarks, faites défiler, et enregistrez directement dans le gestionnaire que vous utiliserez désormais les posts à garder — un clic chacun via une extension de navigateur. Fastidieux au-delà de cent éléments, mais cela fait aussi office d'élagage : la plupart des gens découvrent que la moitié de leurs signets ne compte plus.

## X Premium ne règle pas le problème ?

Partiellement, et seulement à l'intérieur des murs. Premium ajoute des **dossiers** de signets et une **barre de recherche** sur la page — réellement utiles pour les enregistrements que vous voyez encore. Mais rien ne change au problème de fond : le plafond d'affichage reste, les dossiers ne restituent pas les éléments déjà sortis, et il n'y a toujours aucun bouton d'export à aucun niveau d'abonnement. Premium réorganise vos signets récents ; il ne vous en donne pas la propriété. Payer pour de l'organisation dans une plateforme qui ne laisse pas sortir les données, c'est traiter le symptôme.

## Étape 5 : mettez l'export quelque part d'utile

Un CSV dans Téléchargements est une sauvegarde, pas une bibliothèque. Vous ne l'ouvrirez pas, et vous ne pouvez pas le chercher depuis votre navigateur. Deux options :

- **Garder le fichier brut en archive.** Très bien comme assurance — la même logique que garder son fichier d'export Pocket.
- **L'importer dans un vrai gestionnaire de favoris.** Si votre exporteur sait produire un fichier **HTML** de favoris standard, des outils comme Marqly l'importent directement — le même importateur qui traite les [exports des favoris Chrome](/fr/blog/exporter-favoris-chrome). Vos posts enregistrés deviennent des entrées consultables avec étiquettes générées par IA, au lieu de lignes dans un tableur.

Une note d'honnêteté : Marqly n'a pas d'import natif « connectez votre compte X ». Le pont est un fichier HTML de favoris produit par votre exporteur, ou l'enregistrement des liens un par un. Ce qui nous amène à la correction qui compte vraiment.

## La correction durable : arrêtez de laisser à X l'unique copie

Chaque voie d'export ci-dessus est un contournement du même design : les signets X sont faits pour retrouver quelque chose de la semaine dernière, pas pour tenir une bibliothèque de références. Le plafond, l'export absent, la recherche sous paywall Premium — rien de cela ne changera en votre faveur.

Le pattern qui tient sur la durée est un système à deux étages :

1. **Continuez à mettre en signet librement sur X.** C'est le plus rapide pour marquer quelque chose en plein défilement. Traitez-le comme une boîte de réception.
2. **Sortez ce qui vaut le coup, immédiatement.** Quand un fil mérite vraiment d'être gardé, enregistrez son lien dans votre gestionnaire de favoris au même moment — avec l'extension Marqly, c'est un clic sur la page, aucune décision de classement. L'IA l'étiquette toute seule, et la recherche sémantique le retrouve par le sens plus tard : tapez « ce fil sur la psychologie des prix » et il remonte, même si vous avez oublié depuis longtemps qui l'a posté. Cette récupération par description est le cœur de la raison pour laquelle [le classement par dossiers ne survit pas au contact du volume réel d'enregistrements](/fr/blog/arretez-d-organiser-vos-favoris-dossiers-obsoletes-2026).

La boîte de réception reste jetable ; la bibliothèque devient permanente, consultable et indépendante de la plateforme. Si X change encore ses limites — et sa politique sur les signets n'a fait que se durcir avec le temps — vous ne perdez rien qui comptait.

## Récap express

1. **Demandez l'archive officielle** pour posts, likes et MP — en acceptant que les signets n'y sont pas.
2. **Exportez les signets avec une extension** tant que X les affiche encore ; rangez le fichier en lieu sûr.
3. **Évitez la voie API** sauf si vous êtes déjà un développeur payant.
4. **Importez l'export dans un gestionnaire de favoris** (via HTML de favoris) au lieu de le laisser en CSV mort.
5. **Changez l'habitude** : X pour le défilement, [Marqly](https://app.marqly.com) pour garder. Un clic par gardé, consultable pour toujours.

Vos signets ont survécu à votre intérêt pour la plupart d'entre eux. Faites que les bons survivent aussi à la patience de la plateforme.
