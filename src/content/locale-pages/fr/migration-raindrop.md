---
lang: "fr"
path: "/fr/migration/raindrop"
title: "Migrer ses favoris de Raindrop vers Marqly"
seoTitle: "Migrer de Raindrop vers Marqly : guide 2026"
description: "Exportez vos favoris Raindrop en HTML ou CSV, vérifiez collections et tags, puis importez-les dans Marqly sans perdre votre sauvegarde."
eyebrow: "Guide de migration"
hero:
  heading: "Passer de Raindrop à Marqly sans perdre ses favoris"
  subheading: "Créez d'abord une sauvegarde complète, contrôlez localement vos collections et vos tags, puis importez le fichier dans Marqly. Voici la procédure pour les deux formats Raindrop."
crumbHome: "Accueil"
trustLine: "Analyse locale du fichier · Exports HTML et CSV · Offre Marqly gratuite sans carte"
faqHeading: "Questions fréquentes sur la migration"
faqs:
  - q: "Quel format d'export choisir dans Raindrop ?"
    a: "Le HTML convient à un transfert simple des URL et des collections. Le CSV contient davantage de colonnes, notamment les tags, notes et dates de création, et facilite un contrôle détaillé. Conservez idéalement les deux fichiers comme sauvegarde."
  - q: "Mes collections et tags Raindrop seront-ils conservés ?"
    a: "Marqly reprend les données de liens présentes dans l'export Raindrop. Les collections sont adaptées à une structure plus plate et consultable ; les collections imbriquées peuvent donc apparaître autrement. Vérifiez l'aperçu avant l'import et gardez le fichier d'origine."
  - q: "Mon fichier est-il envoyé lorsque je l'analyse ?"
    a: "Non. L'analyseur gratuit traite les fichiers HTML et CSV entièrement dans votre navigateur. Le fichier n'est pas envoyé à un serveur pour l'analyse."
  - q: "Dois-je résilier Raindrop avant d'importer ?"
    a: "Non. Gardez votre compte Raindrop jusqu'à la fin des vérifications. Contrôlez quelques collections, tags, notes et anciens liens dans Marqly avant de résilier un abonnement payant."
  - q: "Combien coûte Marqly Pro ?"
    a: "Marqly Free stocke jusqu'à 2 000 favoris et permet une recherche par mots-clés dans toute la bibliothèque. Pro coûte 72 $ par an ou 9 $ par mois, avec une offre permanente de 39 $ la première année. Le paiement peut afficher le prix local en €. Les résumés IA, la recherche sémantique et l'organisation par IA sont réservés à Pro."
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencer gratuitement"
ctaSecondaryLabel: "Ajouter à Chrome — gratuit"
updatedDate: 2026-09-13
---

## Avant la migration : créer deux sauvegardes

Dans Raindrop, ouvrez **Settings → Backups**. Exportez votre bibliothèque une fois en **HTML**, puis une fois en **CSV**. Ne modifiez pas ces fichiers et conservez une copie séparée. Vous pourrez ainsi recommencer l'import ou retrouver une information précise plus tard.

Le HTML suit le format de favoris Netscape, largement reconnu par les navigateurs et les gestionnaires de favoris. Le CSV est plus pratique pour contrôler les tags, les notes, les dates de création et les chemins de collection.

## Étape 1 : vérifier l'export avant l'import

Ouvrez l'[analyseur d'export Raindrop](/tools/raindrop-export-analyzer), puis déposez votre fichier HTML ou CSV dans la zone prévue. L'analyse s'effectue **localement dans votre navigateur** et le fichier n'est pas téléversé.

Vérifiez quatre points :

1. Le nombre de favoris correspond-il approximativement à votre bibliothèque Raindrop ?
2. Vos collections et tags principaux sont-ils détectés ?
3. La période entre l'élément le plus ancien et le plus récent paraît-elle correcte ?
4. L'analyse signale-t-elle un nombre inattendu d'URL dupliquées ou non valides ?

Si les résultats diffèrent fortement, générez un nouvel export dans Raindrop. Si vous ouvrez le CSV dans un tableur, ne réenregistrez pas l'unique copie : l'encodage UTF-8 et les champs multilignes pourraient être modifiés.

## Étape 2 : importer dans Marqly

1. Créez un compte Marqly gratuit, sans carte bancaire.
2. Ouvrez l'outil d'import et choisissez Raindrop ou l'import HTML correspondant.
3. Sélectionnez le fichier que vous venez de vérifier.
4. Attendez la fin du traitement ; pour une grande bibliothèque, ne fermez pas l'onglet trop tôt.
5. Comparez ensuite plusieurs éléments avec leur version dans Raindrop.

## Correspondance des données

| Donnée Raindrop | Contrôle après import |
| --- | --- |
| URL et titre | Le lien s'ouvre et son titre reste lisible |
| Collection / sous-collection | Chemin de collection ou tags transférés |
| Tags | Orthographe, accents et tags imbriqués |
| Notes | Paragraphes, virgules et caractères accentués |
| Date de création | Ordre des anciens et nouveaux éléments |

Raindrop privilégie les collections imbriquées, tandis que Marqly s'appuie davantage sur les tags et la recherche. Une migration fiable ne reproduit donc pas forcément la même arborescence à l'identique ; elle doit surtout conserver les liens et les rendre faciles à retrouver.

## Contrôles à faire après l'import

Recherchez cinq titres connus et cinq sujets anciens. Ouvrez des liens issus d'une collection principale et de deux sous-collections. Contrôlez aussi des éléments avec accents, longues notes, plusieurs tags et URL dupliquées.

Marqly Free comprend l'enregistrement manuel, les tableaux, les surlignages et la recherche par mots-clés dans toute la bibliothèque. **Les tags et résumés IA, la recherche sémantique, AI Organizer et les fonctions IA pour YouTube sont réservés à Pro.** Cette distinction permet de tester gratuitement le transfert sans promettre des fonctions payantes dans l'offre gratuite.

## Résoudre les problèmes courants

### L'import contient moins de liens que Raindrop

Relancez l'export et comparez les versions HTML et CSV. Vérifiez que Raindrop a terminé la sauvegarde et que le navigateur a téléchargé le fichier complet.

### Les accents sont mal affichés

Refaites l'export et conservez l'encodage UTF-8. Un tableur peut modifier l'encodage au moment de l'enregistrement ; utilisez le fichier d'origine non modifié.

### Les collections imbriquées semblent différentes

Il s'agit d'une différence de modèle d'organisation. Vérifiez que l'ancien chemin de collection reste disponible sous forme de tag ou d'autre valeur recherchable. Gardez le CSV pour refaire une correspondance si nécessaire.

### La bibliothèque est très volumineuse

Ne fractionnez l'import que si le traitement complet échoue plusieurs fois. Ne supprimez jamais des lignes dans votre seule sauvegarde : travaillez toujours sur une copie.

## Vérifier avant de quitter Raindrop

Ne résiliez pas immédiatement. Utilisez les deux bibliothèques en parallèle pendant quelques jours, puis comparez les résultats. Pour décider entre les deux produits, consultez [Marqly vs Raindrop](/fr/comparer/marqly-vs-raindrop) et les [alternatives à Raindrop classées par besoin](/fr/alternatives/raindrop).
