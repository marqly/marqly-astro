---
title: "Comment exporter ses enregistrements Instagram en 2026 (Télécharger vos informations, pas à pas)"
seoTitle: "Comment Exporter ses Enregistrements Instagram (2026) — Marqly"
description: "Instagram n'offre aucun bouton d'export pour ses enregistrements. Voici la voie « Télécharger vos informations », ce que contient saved_posts.json et comment les rendre utiles."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "exporter enregistrements instagram"
tags:
  - "exporter enregistrements instagram"
  - "telecharger informations instagram"
  - "saved_posts json"
  - "sauvegarde instagram"
  - "export données instagram"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
faqs:
  - q: "Puis-je exporter mes enregistrements Instagram directement depuis l’application ?"
    a: "Non. Il n’y a aucun bouton d’export sur l’écran Enregistrés et aucun moyen de s’envoyer une collection par e-mail. La seule voie officielle est l’outil « Télécharger vos informations » de Meta, accessible via Paramètres → Espace Comptes → Vos informations et autorisations → Télécharger vos informations. Il produit une archive qui inclut un fichier saved_posts listant tout ce que vous avez enregistré."
  - q: "Où se trouve saved_posts.json dans l’archive Instagram ?"
    a: "Dans le ZIP, sous votre activité Instagram, dans un dossier « saved » — le fichier s’appelle saved_posts.json (ou saved_posts.html si vous avez choisi HTML). Les collections que vous avez créées apparaissent séparément sous saved_collections. Les noms de dossiers ont changé selon les versions de l’archive : si vous ne le voyez pas, cherchez « saved » dans le dossier décompressé."
  - q: "L’export inclut-il les photos et vidéos que j’ai enregistrées ?"
    a: "Non. Les posts enregistrés appartiennent à d’autres comptes, donc l’archive stocke pour chacun un lien et un horodatage, pas le média. Les photos et vidéos de votre archive sont celles que vous avez publiées vous-même. Si un post enregistré est supprimé ensuite ou si son compte passe en privé, le lien de votre export cesse de fonctionner et rien ne le fait revenir."
  - q: "Combien de temps prend un téléchargement de données Instagram ?"
    a: "Meta parle de 30 jours maximum, mais une demande limitée aux seuls Enregistrés arrive en général entre quelques heures et deux jours. Vous recevez un e-mail avec un lien de téléchargement quand l’archive est prête, et ce lien expire au bout de quelques jours : téléchargez le ZIP rapidement au lieu de le laisser dans votre boîte."
  - q: "Faut-il choisir JSON ou HTML ?"
    a: "HTML si vous voulez juste parcourir vos enregistrements dans un navigateur ; JSON si vous prévoyez de convertir la liste en autre chose, par exemple un fichier de favoris à importer. JSON est le point de départ le plus utile pour construire une vraie bibliothèque, car ce sont des données structurées et pas une page mise en forme."
---

Instagram vous laisse enregistrer un post d’un tap et ne vous laissera jamais emporter ces enregistrements ailleurs. Pas de bouton d’export sur l’écran Enregistrés, pas de lien pour partager une collection, pas de CSV. La seule sortie officielle est l’outil **Télécharger vos informations** de Meta — et ce qu’il rend est une liste de liens et d’horodatages, pas les posts eux-mêmes. Voici le chemin exact, ce que contient vraiment le fichier, et comment transformer une liste de liens bruts en quelque chose de consultable.

## Pourquoi exporter des enregistrements que vous voyez déjà

L’écran Enregistrés d’Instagram fonctionne bien — jusqu’à ce que ça ne marche plus. Trois choses dérapent à mesure que la collection grossit :

- **Il n’y a pas de recherche dans vos enregistrements.** Vous pouvez créer des collections, mais pas les chercher par texte. Passé quelques centaines d’éléments, retrouver « le truc sur les pâtes » veut dire faire défiler une grille de vignettes.
- **Les enregistrements meurent en silence.** Quand un créateur supprime un post ou passe son compte en privé, l’élément disparaît de votre grille sans prévenir. Vous ne le remarquerez que le jour où vous le chercherez.
- **Tout vit dans une seule application.** Les recettes, les références de design, les recommandations de matériel, l’inspiration déco — rien de tout cela ne peut rejoindre l’outil avec lequel vous réfléchissez.

Ce dernier point, c’est la leçon de [la fermeture de Pocket](/fr/blog/comment-exporter-migrer-donnees-pocket-2026) appliquée à une plateforme qui ne risque pas de fermer : les enregistrements stockés dans l’application d’un autre ne sont accessibles que si cette application le décide. Instagram choisit « à peine ». C’est tout autant vrai des [favoris X](/fr/blog/comment-exporter-ses-signets-twitter-x-2026) et des [enregistrements Reddit](/fr/blog/comment-exporter-ses-posts-sauvegardes-reddit-2026) : c’est un schéma, pas une bizarrerie.

Avant les étapes : Meta documente ce parcours dans ses propres pages d’aide — [télécharger vos informations](https://help.instagram.com/1662330571473) et [l’outil d’accès](https://www.instagram.com/accounts/accesstool/) (tous deux accessibles le 6 octobre 2026). Les libellés de menu bougent entre les versions de l’app ; si une étape ci-dessous ne correspond pas à votre écran, cherchez « download your information » dans ce centre d’aide plutôt que de vous fier à cette liste.

## Étape 1 : demander le téléchargement

L’outil a déménagé dans l’Espace Comptes de Meta, donc les vieilles instructions trouvées ailleurs sont périmées. Le chemin actuel :

1. Ouvrez Instagram → **Paramètres** (ou **Paramètres et activité**).
2. Touchez **Espace Comptes** en haut.
3. Allez dans **Vos informations et autorisations**.
4. Touchez **Télécharger vos informations**, puis lancez une nouvelle demande.

Vous pouvez aussi atteindre le même outil sur accountscenter.instagram.com depuis un navigateur desktop, plus pratique si de toute façon vous allez décompresser des fichiers.

Ensuite, trois choix :

- **Combien :** prenez « Une partie de vos informations » et cochez **Enregistrements** sous votre activité Instagram. Tout demander fonctionne aussi, mais la préparation prend plus de temps et produit un ZIP bien plus grand à fouiller.
- **Format :** **JSON** ou **HTML**. HTML donne une page que l’on parcourt ; JSON donne des données structurées que l’on peut convertir. Si vous voulez en tirer une vraie bibliothèque, choisissez JSON.
- **Période :** tout l’historique.

Validez, et Meta vous envoie un e-mail avec un lien de téléchargement quand l’archive est prête.

## Étape 2 : attendre l’e-mail, puis télécharger vite

La version officielle de Meta est « jusqu’à 30 jours ». En pratique, une demande ciblée comme Enregistrements aboutit entre quelques heures et deux jours.

Le piège dans lequel on se fait avoir : **le lien de téléchargement expire** au bout de quelques jours, et le laisser expirer veut dire tout recommencer. Quand l’e-mail arrive, récupérez le ZIP et rangez-le là où vous garderiez un document fiscal, pas dans Téléchargements.

Si rien n’apparaît au bout d’une semaine, vérifiez les spams pour un expéditeur Meta et consultez le statut de la demande dans l’Espace Comptes — les téléchargements terminés y sont listés même quand l’e-mail se perd.

## Étape 3 : trouver saved_posts.json et voir ce qu’on a récupéré

Décompressez l’archive et cherchez, sous votre activité Instagram, un dossier **saved**. Le fichier pour lequel vous êtes là :

- **`saved_posts.json`** — tout ce sur quoi vous avez appuyé sur Enregistrer.
- **`saved_collections.json`** — les collections dans lesquelles vous avez rangé vos enregistrements, si vous en utilisez.

(Vous avez choisi HTML ? Mêmes noms, extension `.html`. Les noms de dossiers ont bougé entre les versions d’archive, donc si les chemins ne collent pas, cherchez simplement « saved » dans le dossier décompressé.)

Ouvrez `saved_posts.json` et tempérez vos attentes. Chaque entrée vous donne à peu près :

- le **compte** dont vous avez enregistré le post,
- un **permalink** vers le post,
- un **horodatage** de l’enregistrement.

C’est tout le record. **Pas de légende. Pas d’image. Pas de vidéo. Pas de note sur la raison de l’enregistrement.** Ce qui se comprend : les médias appartiennent aux comptes des autres, alors Meta exporte un pointeur, pas une copie. Vos propres photos et vidéos sont ailleurs dans l’archive ; vos enregistrements sont une liste de liens.

Deux conséquences à intégrer tout de suite :

1. **Un post supprimé est perdu.** Votre export préserve l’URL de quelque chose qui n’existe plus — un argument pour exporter tôt plutôt que tard. Pour les enregistrements issus de comptes publics, [comment archiver du contenu Instagram](https://viewinsta.com/blog/how-to-archive-instagram-content) détaille ce qui reste récupérable une fois le lien mort — et ce qui ne l’est définitivement pas.
2. **Une liste de liens n’est pas une bibliothèque.** Deux mille URL `instagram.com/p/...` avec horodatages ne vous disent pas laquelle était la méthode du levain qui marchait.

L’export est donc une matière brute. C’est à l’étape 4 qu’il devient utile.

## Étape 4 : transformer la liste de liens en quelque chose de consultable

Trois pistes, selon le volume et votre appétit pour l’outillage.

### Option A : trier à la main (le plus courant, et honnêtement le meilleur résultat)

Ouvrez `saved_posts.html` — ou le JSON dans un éditeur de texte — et parcourez la liste du plus récent au plus ancien. Pour chaque élément à garder, ouvrez-le et enregistrez-le dans un vrai gestionnaire de favoris via l’extension de navigateur, un clic à la fois.

Ça sonne fastidieux et c’est justement l’option qui vous laisse le mieux équipé, parce qu’une liste de posts enregistrés est à 80 % d’impulsion et que toucher chaque élément fait l’élagage. Une heure sur une liste de mille éléments vous rend les deux cents que vous voudriez vraiment récupérer, déjà étiquetés et consultables, au lieu d’une archive complète que vous n’ouvrez jamais. (Plus de détail sur cet arbitrage dans [organiser ses favoris de navigateur](/fr/blog/organiser-favoris-navigateur).)

### Option B : convertir le JSON en fichier de favoris (pour techniciens)

`saved_posts.json` est structuré, donc un petit script — ou un assistant IA à qui vous donnez la forme du fichier — peut le convertir en un **fichier HTML de favoris standard**, le même format `<DT><A HREF=...>` que tous les navigateurs exportent. C’est le format d’import universel, et une fois obtenu, vous pouvez le vérifier dans un [visualiseur de fichier de favoris](/tools/bookmark-file-viewer) avant de l’importer où que ce soit.

De là, il s’importe comme un [export des favoris Chrome](/fr/blog/exporter-favoris-chrome) : Marqly avale le HTML standard de favoris, récupère chaque page, puis l’étiquette et l’indexe. Une limite, dite franchement : Marqly n’interprète pas directement le `saved_posts.json` d’Instagram, et Instagram résiste à la récupération automatisée — le résultat est donc plus pauvre qu’un import d’article normal.

### Option C : reconstruire la collection volontairement

Si vos enregistrements étaient surtout des références visuelles — design, décoration d’intérieur, tenues, photographie de produit — traitez l’export comme une check-list plutôt qu’un import, et reconstruisez les bonnes parties dans une [swipe file](/fr/swipe-file) qui vous appartient : le lien source plus votre propre note sur la raison de sa présence. Cette note, voilà ce que vos enregistrements Instagram n’ont jamais eu, et c’est elle qui rend une collection de références utilisable des années plus tard.

## Corriger l’habitude, pas seulement l’arriéré

L’export règle le passé. Les mille prochains enregistrements reconstruiront le même problème, car le bouton Enregistrer d’Instagram sera encore une grille non consultable l’année prochaine.

Le pattern qui tient :

- **Continuez à utiliser le bouton Enregistrer d’Instagram** comme boîte de réception rapide dans le flux. Pour ça, il est bon.
- **Sortez ce qui mérite d'être gardé dès que vous le reconnaissez.** Partagez le post vers votre navigateur ou ouvrez-le et enregistrez-le en un clic — le lien, plus une étiquette, plus une phrase de vous. Plus tard, [décrivez ce dont vous vous souvenez](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) et ça revient : « la vidéo sur la réparation d’une charnière qui grince » la retrouve sans légende, sans pseudo, sans hashtag. C’est la [recherche sémantique](/fr/blog/quest-ce-que-la-recherche-semantique) qui fait le travail que la grille Enregistrés d’Instagram n’a jamais pu faire.

Instagram reste votre flux de découverte. Les choses dont vous aurez besoin dans cinq ans vivent quelque part avec un bouton d’export.

## Récap express

1. **Paramètres → Espace Comptes → Vos informations et autorisations → Télécharger vos informations.**
2. Cochez **Enregistrements**, choisissez **JSON**, toute la période, validez.
3. **Téléchargez le ZIP sans traîner** — le lien expire en quelques jours.
4. Trouvez **`saved_posts.json`** : liens et horodatages uniquement, pas de médias, pas de légendes.
5. **Triez et réenregistrez** l'essentiel dans une bibliothèque consultable — par exemple [Marqly](https://app.marqly.com).

Demandez-le aujourd’hui même si vous ne le traitez pas ce mois-ci. C’est une demande de deux minutes, et chaque semaine d’attente est quelques posts enregistrés de plus supprimés en silence sous vos pieds.
