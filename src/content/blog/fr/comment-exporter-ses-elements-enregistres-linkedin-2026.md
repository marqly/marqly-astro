---
title: "Comment exporter vos éléments enregistrés LinkedIn en 2026 (Télécharger vos données, pas à pas)"
seoTitle: "Comment Exporter vos Éléments Enregistrés LinkedIn (2026) | Marqly"
description: "LinkedIn exporte les éléments enregistrés comme dates et URLs seulement. Voici le chemin de téléchargement, ce que contient l'archive, et comment transformer vos saves en bibliothèque consultable."
pubDate: 2026-10-07
category: "Guides"
targetKeyword: "exporter elements enregistres linkedin"
tags:
  - "exporter elements enregistres linkedin"
  - "telecharger vos donnees linkedin"
  - "export articles enregistres linkedin"
  - "export csv donnees linkedin"
  - "backup newsletters linkedin"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
ogImage: "https://www.marqly.com/og/export-linkedin-saved-items.png"
faqs:
  - q: "Comment exporter mes éléments enregistrés sur LinkedIn ?"
    a: "Cliquez sur l'icône Moi, allez dans Paramètres et confidentialité, ouvrez Confidentialité des données dans la colonne de gauche, et utilisez Télécharger vos données sous la section « How LinkedIn uses your data » (Comment LinkedIn utilise vos données). Sélectionnez la catégorie Saved Items (Éléments enregistrés) et demandez l'archive ; l'article d'aide de LinkedIn dit qu'une demande sur une catégorie précise est envoyée par email en quelques minutes et que le lien reste utilisable 72 heures."
  - q: "L'export LinkedIn inclut-il le contenu de ce que j'ai enregistré ?"
    a: "Non. La description officielle de LinkedIn pour la catégorie Saved Items est qu'elle contient la date d'enregistrement et l'URL d'un post, d'un article ou d'un autre contenu — rien de plus. L'article dit aussi explicitement que LinkedIn ne fournit que vos propres données personnelles, pas celles des autres membres, donc les posts et articles que vous avez enregistrés appartiennent à d'autres : ils ne reviennent qu'en liens."
  - q: "Puis-je exporter les newsletters LinkedIn que je suis ?"
    a: "La liste publiée des catégories de données exportables par LinkedIn ne comprend pas de catégorie newsletters. Company Follows (abonnements aux entreprises) vous donne les entreprises suivies avec les dates, Member Follows les personnes, mais les numéros des newsletters que vous suivez ne sont pas un export détaillé. Tout ce qui n'est pas couvert retombe sur le formulaire de demande d'accès aux données de LinkedIn."
  - q: "Pourquoi une partie de mon archive LinkedIn est arrivée plus vite que le reste ?"
    a: "LinkedIn échelonne la livraison par catégorie : une liste de catégories est disponible dans les 10 minutes suivant la demande, une autre dans les 48 heures, et une téléchargement complet de toutes les catégories prend jusqu'à 24 heures juste pour recevoir l'email de demande. Saved Items se trouve dans le lot le plus lent."
  - q: "Puis-je importer mes éléments enregistrés LinkedIn dans Marqly ?"
    a: "Après une conversion légère, oui. Les données des éléments enregistrés sont un tableau date-et-URL ; versez les URLs dans un CSV simple avec une colonne URL et l'import CSV générique de Marqly l'avale (le HTML de favoris de navigateur fonctionne aussi). L'importation ne conserve pas vos dates d'enregistrement LinkedIn d'origine — les éléments prennent la date d'import — et l'auto-étiquetage des éléments importés est une fonctionnalité Pro."
---

LinkedIn a une seule exportation officielle pour les enregistrements : Paramètres et confidentialité → Confidentialité des données → Télécharger vos données, avec une catégorie **Saved Items** dédiée. C'est exactement ce que le nom suggère — pour chaque article ou post sur lequel vous avez tapé le signet, vous recevez la **date d'enregistrement et l'URL**, jamais le contenu. Voici le chemin vérifié, ce que l'archive contient et ne contient pas (les newsletters : presque rien), et comment transformer un tableau à deux colonnes en bibliothèque de veille.

## Ce que « enregistré » veut vraiment dire sur LinkedIn

Le bouton Enregistrer de LinkedIn est devenu discrètement l'une des exportations les plus utiles à demander, parce que la catégorie Saved Items inclut un horodatage. Le piège est le périmètre :

- **Des liens, pas des copies.** Un post enregistré est la donnée d'un autre membre ; LinkedIn dit platement qu'il ne fournira que vos propres données personnelles et pas celles des autres membres (vérifié le 5 octobre 2026, source : https://www.linkedin.com/help/linkedin/answer/a1339364). Les posts supprimés pourrissent dans l'archive exactement comme dans votre écran des Enregistrements.
- **Les offres d'emploi sont à part.** Les offres enregistrées, les alertes emploi enregistrées et les candidatures ont chacune leurs propres catégories — Saved Items, ce sont les articles et posts, pas le concept « enregistré » dans son ensemble.
- **Les newsletters sont le trou.** Les newsletters suivies ne sont pas une catégorie exportable, et les numéros que vous avez enregistrés ne sont pas non plus détaillés. Plus bas, on détaille.

Si vos Enregistrements ont débordé de la vue intégrée — même mode de panne qu'avec les [signets X](/fr/blog/comment-exporter-ses-signets-twitter-x-2026) — voici comment les sortir.

## Vos voies d'exportation en un coup d'œil

<table>
  <thead>
    <tr>
      <th>Voie</th>
      <th>Ce que vous obtenez</th>
      <th>Format de fichier</th>
      <th>Limites</th>
      <th>Piège</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Confidentialité des données → Télécharger vos données → Saved Items</td>
      <td>Date d'enregistrement + URL par élément</td>
      <td>Fichiers de données par catégorie dans l'archive</td>
      <td>Email en quelques minutes (demande ciblée) à 48 heures ; lien valide 72 heures</td>
      <td>Ordinateur uniquement ; pas de contenu, juste des liens</td>
    </tr>
    <tr>
      <td>Même outil → Saved Jobs / Saved Job Alerts / Job Applications</td>
      <td>Date d'enregistrement, intitulé, entreprise, URL de l'annonce</td>
      <td>Fichiers de données par catégorie</td>
      <td>Catégorie rapide (lot des 10 minutes)</td>
      <td>Les URLs d'offres hébergées par LinkedIn expirent quand l'annonce se ferme</td>
    </tr>
    <tr>
      <td>Même outil → Company Follows / Member Follows</td>
      <td>Qui et quoi vous suivez, avec les dates</td>
      <td>Fichiers de données par catégorie</td>
      <td>Les abonnements seulement, pas leur contenu</td>
      <td>Pas une archive de newsletters ; aucun numéro exporté</td>
    </tr>
    <tr>
      <td>Manual : ouvrir un article enregistré, l'enregistrer avec votre navigateur</td>
      <td>La vraie page, titre compris</td>
      <td>Ce que votre gestionnaire stocke</td>
      <td>Un élément à la fois</td>
      <td>Surtout des articles externes, donc la récupération est propre — la voie la plus fidèle pour les rescapés</td>
    </tr>
    <tr>
      <td>Membres UE/EEE/Suisse : API de portabilité</td>
      <td>Accès programmatique à vos données LinkedIn</td>
      <td>Sortie d'API</td>
      <td>Éligibilité régionale</td>
      <td>Voie de développeur ; documentée dans l'article d'aide LinkedIn sur les Member Portability APIs</td>
    </tr>
  </tbody>
</table>

## Pas à pas : demander l'export Saved Items

L'article d'aide « Télécharger vos données » de LinkedIn pose le chemin actuel (vérifié le 5 octobre 2026, source : https://www.linkedin.com/help/linkedin/answer/a1339364) :

1. Sur linkedin.com, cliquez sur l'icône **Moi** en haut de votre page d'accueil.
2. Sélectionnez **Paramètres et confidentialité** (accessible aussi directement sur https://www.linkedin.com/psettings/data-privacy/).
3. Cliquez sur **Confidentialité des données** dans la colonne de gauche.
4. Sous la section **Comment LinkedIn utilise vos données**, cliquez sur **Télécharger vos données**.
5. Choisissez **Sélectionner les données qui vous intéressent**, cochez **Saved Items** — ajoutez **Saved Jobs**, **Company Follows** ou **Connections** si vous les voulez dans la même passe.
6. Cliquez sur **Demander une archive**, puis ouvrez l'email et téléchargez sous **72 heures**.

Trois règles énoncées par l'article, bonnes à répéter parce qu'elles surprennent : le téléchargement doit se faire depuis un **ordinateur personnel** — la fonction n'est pas disponible sur mobile ; une demande sur une catégorie précise est envoyée par email **en quelques minutes** alors qu'un téléchargement complet de toutes les catégories prend jusqu'à **24 heures** ; et les catégories arrivent sur des horloges différentes, Saved Items étant dans le lot des **48 heures**. Vous ne recevez que les catégories qui s'appliquent à votre compte — pas de fichier certifications si vous n'avez jamais listé de certification, et pas de fichier éléments enregistrés si vos Enregistrements sont vides.

## Ce que le fichier contient vraiment

Selon les descriptions de catégories elles-mêmes par LinkedIn :

- **Saved Items** — « la date d'enregistrement et l'URL d'un post, article ou autre contenu. »
- **Saved Jobs** — date d'enregistrement, intitulé du poste, nom de l'entreprise et l'URL de l'annonce LinkedIn.
- **Saved Job Alerts** — le terme de recherche et la date.
- **Articles** — les URLs des articles que *vous* avez publiés (pas ceux que vous avez enregistrés).
- **Company Follows / Member Follows** — noms et dates d'abonnement/désabonnement.
- **Réactions, Commentaires, Partages** — dates et URLs de vos interactions, si vous les cochez.

L'export des Enregistrements est donc une vérité à deux colonnes : **quand vous avez enregistré, et où pointait le lien**. Deux conséquences pratiques :

1. **Les URLs de posts LinkedIn ont un péage de connexion.** Un lien `linkedin.com/posts/...` enregistré ne s'ouvrira pas pour quelqu'un qui n'est pas connecté, et les récupérateurs tiers obtiennent une page vide — votre propre archive contiendra des liens que vous ne pourrez pas rouvrir dans dix ans. Les enregistrements d'articles externes (ceux qui redirigent vers les éditeurs) sont les solides.
2. **Les liens d'offres sont périssables.** Les URLs d'annonces LinkedIn expirent quand le poste est pourvu ; exportez vos Saved Jobs dans vos dossiers le jour où vous en avez encore besoin, pas au moment de la vérification de références.

Et le manque honnête : **les newsletters**. Vous pouvez suivre des newsletters et enregistrer leurs posts, mais la liste publiée des catégories exportables de LinkedIn n'a pas de ligne newsletters. Company Follows et Member Follows couvrent qui vous suivez ; les numéros eux-mêmes ne sont pas un jeu de données exportable. Pour tout ce qui dépasse les catégories listées, LinkedIn renvoie vers son formulaire de demande d'accès aux données (vérifié le 5 octobre 2026, source : https://www.linkedin.com/help/linkedin/ask/TS-DCR) — lent, et sans promesse de structure. Les membres UE/EEE/Suisse ont en plus la voie programmatique documentée sur https://www.linkedin.com/help/linkedin/answer/a6214075.

## Transformer le tableau en bibliothèque

L'export est une liste d'URLs datées — matière première, pas base de connaissances.

**Le meilleur résultat rapide : trier et ré-enregistrer.** Travaillez la moitié récente de la liste des éléments enregistrés. Tout ce qui est en réalité un article externe — le post sectoriel, le benchmark de recrutement, l'essai — ouvrez-le et enregistrez-le proprement avec le [gestionnaire de favoris de votre navigateur](/fr/gestionnaire-favoris-chrome) (Chrome, Edge, Firefox et Safari sont couverts, plus iOS et Android). Vous obtenez le titre, la page entière et votre propre étiquette, à l'endroit où vous chercherez vraiment plus tard.

**La voie en masse : convertir et importer.** Donnez le fichier des éléments enregistrés à un script ou à un assistant et faites-lui écrire un CSV simple avec une colonne URL (gardez la colonne date pour vos dossiers — voir pourquoi plus bas). Marqly importe les CSV génériques, le HTML de favoris de navigateur, le HTML de Raindrop et le list.csv de Pocket (pas son HTML), en `.html`, `.htm` ou `.csv`, jusqu'à 10 Mo en gratuit / 30 Mo en Pro, 10 000 favoris par fichier ; les liens importés sont récupérés et indexés, ce qui veut dire que les enregistrements d'articles externes reviennent en entrées titrées et lisibles — tandis que les liens `linkedin.com/posts` s'importeront maigres, pour la raison de péage de connexion ci-dessus. Dites les limites platement : **vos dates d'enregistrement LinkedIn ne survivent pas à l'importation** — chaque élément prend la date où vous l'importez — et **l'auto-étiquetage des éléments importés est une fonctionnalité Pro** ; le plan gratuit (100 enregistrements, bibliothèque entière consultable par mots-clés) préserve les étiquettes que vous placez vous-même dans le fichier. Prévisualisez un fichier converti avec la [visionneuse de fichiers de favoris](/tools/bookmark-file-viewer) avant une passe complète.

**Pourquoi la reconstruction bat l'archive :** l'intérêt de sauver des enregistrements professionnels est de les retrouver à froid. « Le papier sur la supply-chain du T3 » devrait remonter d'une description, pas de votre souvenir de la date d'enregistrement — c'est à ça que sert la [recherche de favoris par sens](/fr/blog/quest-ce-que-la-recherche-semantique), et ça s'applique doublement aux chercheurs assis sur des listes de plusieurs centaines de liens (voir la [page chercheurs](/fr/pour-chercheurs)). Pour la moitié « file de lecture » de vos enregistrements, la voie [alternative à Pocket](/fr/alternatives/pocket) couvre la même question de conversion depuis l'autre côté.

## Quand NE PAS utiliser Marqly

- **Copies de conformité.** Si l'export sert à une demande de dossier ou à la portabilité RGPD (la Politique de confidentialité de LinkedIn couvre les droits : https://www.linkedin.com/legal/privacy-policy), gardez l'archive LinkedIn intacte — une bibliothèque triée n'est pas le même artefact.
- **Données de réseau.** Les relations, messages et invitations sont des données de personnes avec leurs propres outils et leurs propres règles d'éthique ; un gestionnaire de favoris est la mauvaise maison pour elles.
- **Pipeline de recherche d'emploi.** Si vous gérez activement des offres enregistrées, l'expérience Jobs de LinkedIn bat tout réenregistrement ; utilisez l'export pour solder les anciennes recherches, pas pour piloter les actuelles.

## FAQ

**Comment exporter mes éléments enregistrés sur LinkedIn ?**
Icône Moi → Paramètres et confidentialité → Confidentialité des données → Télécharger vos données → cochez Saved Items → Demander une archive. Les demandes sur une catégorie précise partent par email en quelques minutes ; le lien de téléchargement est bon 72 heures. Ordinateur uniquement (vérifié le 5 octobre 2026, source : https://www.linkedin.com/help/linkedin/answer/a1339364).

**L'export inclut-il le contenu de ce que j'ai enregistré ?**
Non — la date d'enregistrement et l'URL d'un post, article ou autre contenu. LinkedIn n'exporte explicitement pas les données des autres membres, donc les posts enregistrés arrivent en liens.

**Puis-je exporter les newsletters que je suis ?**
Il n'y a pas de catégorie newsletters dans la liste publiée. Les abonnements (entreprises, membres) sont exportables ; les numéros de newsletters, non. Au-delà de la liste, c'est territoire du formulaire de demande d'accès aux données, avec une sortie lente et non spécifiée.

**Pourquoi mon archive est arrivée par morceaux ?**
Les catégories partent sur deux horloges — un lot de 10 minutes et un lot de 48 heures — et un téléchargement de compte entier n'envoie l'email que dans les 24 heures suivant le dépôt. Saved Items est dans le lot lent.

**Puis-je importer le fichier des éléments enregistrés dans Marqly ?**
Convertissez-le d'abord en CSV avec une colonne URL — Marqly accepte les CSV génériques, le HTML de favoris, Pocket list.csv et Raindrop HTML. Les dates d'enregistrement ne sont pas conservées (les éléments prennent la date d'import), et l'auto-étiquetage des imports est Pro. Pour le [guide d'importation pas à pas](/fr/blog/exporter-favoris-chrome), la mécanique est la même.

## Récap express

1. **Paramètres et confidentialité → Confidentialité des données → Télécharger vos données**, cochez **Saved Items**, demandez depuis un ordinateur personnel.
2. Attendez-vous à un **tableau date + URL**, email en quelques minutes pour une demande ciblée, **72 heures** pour télécharger.
3. **Pas de contenu, pas d'export newsletters** ; les liens de posts LinkedIn pourrissent derrière la connexion, donc triez tôt.
4. Convertissez les rescapés en CSV, importez dans une bibliothèque consultable multiplateforme — comme [Marqly](https://app.marqly.com) — et sachez que l'import estampille la date du jour, pas vos dates d'enregistrement.
