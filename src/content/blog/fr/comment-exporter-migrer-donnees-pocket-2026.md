---
title: "Comment exporter et migrer vos données Pocket en 2026 (Guide pas à pas)"
seoTitle: "Exporter et Migrer ses Données Pocket (Guide 2026) — Marqly"
description: "Pocket a fermé et vos sauvegardes sont en risque. Voici comment exporter vos données Pocket et les migrer vers une nouvelle app en quelques minutes."
pubDate: 2026-05-08
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "exporter donnees pocket migrer"
tags:
  - "migrer de pocket"
  - "exporter pocket"
  - "alternatives a pocket"
  - "importer favoris pocket"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
faqs:
  - q: "Puis-je encore exporter mes données directement depuis Pocket aujourd'hui ?"
    a: "Non. Pocket a officiellement fermé le 8 juillet 2025, et Mozilla a clôturé la fenêtre d'export le 12 novembre 2025, les données restantes étant mises en file pour suppression. Ce guide aide les utilisateurs qui avaient téléchargé leur archive contenant list.csv à migrer leurs sauvegardes vers Marqly, ou à récupérer les liens synchronisés dans les favoris de leur navigateur."
  - q: "Vais-je perdre mes tags en migrant depuis Pocket ?"
    a: "Non. L'export Pocket inclut les tags, et les bons importateurs les préservent. Marqly les mappe automatiquement : vos sauvegardes arrivent avec titres et tags intacts. Le temps d'import dépend de la taille du fichier et du traitement ; conservez votre archive d'origine et vérifiez le nombre d'éléments importés."
  - q: "Faut-il une carte bancaire pour migrer sa bibliothèque Pocket ?"
    a: "Pas avec un outil qui offre un niveau gratuit. Marqly propose un compte gratuit jusqu'à 100 sauvegardes avec recherche par mot-clé. La recherche sémantique, les résumés et l'étiquetage automatique à l'import exigent le plan Pro ; vérifiez la taille de votre bibliothèque avant d'importer."
  - q: "Que faire si j'ai raté la date limite d'export de Pocket ?"
    a: "Si vous avez raté l'échéance du 12 novembre 2025, les serveurs de Mozilla ne peuvent plus générer d'export. En revanche, si vos liens Pocket étaient synchronisés avec Firefox ou si vous aviez exporté les favoris de votre navigateur, vous pouvez importer ce fichier HTML de navigateur directement dans Marqly."
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Guide pour exporter et migrer les données Pocket en 2026"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
---

Mozilla a officiellement fermé Pocket le 8 juillet 2025 et a clôturé sa fenêtre d'export le 12 novembre 2025. Si vous aviez téléchargé votre fichier d'export avant la mise hors ligne des serveurs, vos sauvegardes sont en sécurité — il vous faut juste une maison moderne pour les accueillir. Ce guide vous accompagne pas à pas pour migrer votre archive Pocket vers Marqly, avec la recherche par mot-clé sur le plan gratuit et la recherche sémantique sur Pro.

## Étape 1 : retrouver votre archive d'export Pocket

Puisque l'endpoint d'export de Mozilla est fermé, vous allez utiliser le fichier de sauvegarde téléchargé préalablement :

1. Cherchez dans vos dossiers **Téléchargements** ou **Documents** un `ril_export.html`, `pocket-export.html` ou une archive `pocket-export.zip`.
2. Si vous avez une archive ZIP, décompressez-la — vous y trouverez vos sauvegardes Pocket au format HTML ou CSV.
3. Si vous n'avez jamais téléchargé votre archive Pocket avant le 12 novembre 2025, vérifiez si vos liens étaient synchronisés avec les favoris de votre navigateur (par exemple Firefox). Vous pouvez exporter vos favoris du navigateur en fichier HTML et importer celui-ci à la place.

> **Note de confidentialité :** votre fichier Pocket est traité de façon sécurisée. Vous pouvez aussi l'inspecter ou le convertir hors ligne avec notre utilitaire gratuit pour navigateur : le [Pocket Export Converter](/tools/pocket-export-converter).

L'aperçu HTML historique de Pocket est une simple liste, pas le HTML de favoris de navigateur standard. Utilisez list.csv pour Marqly, ou convertissez l'aperçu avant d'employer un importateur de HTML navigateur. Si vous êtes curieux de savoir précisément [ce que contient le fichier d'export Pocket](/fr/blog/que-contient-le-fichier-d-export-pocket-2026) — et ce qu'il laisse derrière lui — cela vaut une lecture rapide avant d'importer.

## Étape 2 : choisir où migrer

Votre export est portable, donc la vraie question est *où* il doit atterrir. Les trois destinations les plus courantes des réfugiés de Pocket en 2026 :

- **Marqly** — si vous voulez une bibliothèque consultable par le sens (recherche IA sur Pro), avec étiquetage automatique et résumés sur Pro. Importe votre fichier Pocket avec ses tags intacts. (Voir exactement comment il se défend dans [Pocket vs Marqly](/fr/comparer/marqly-vs-pocket).)
- **Raindrop.io** — si vous voulez un gestionnaire de favoris généraliste et gratuit.
- **Instapaper** — si vous voulez simplement [une application de lecture différée](/fr/blog/meilleures-applications-lecture-differee-2026) minimaliste, sans artifice.

(Pour une analyse complète, voir [les 8 meilleures alternatives à Pocket en 2026](/fr/blog/alternatives-a-pocket-2026).)

## Étape 3 : importer votre bibliothèque

Une note sur les formats, parce que c'est le piège classique : le `ril_export.html` de Pocket est une simple liste `<ul>`, pas le format standard de favoris de navigateur, donc la plupart des importateurs — **Marqly compris** — ne savent pas le lire. Le fichier fiable est le `list.csv` contenu dans l'archive d'export — nous [avons mesuré un vrai export HTML Pocket de 261 éléments contre notre importateur : il analyse zéro sauvegarde](/research/bookmark-import-fidelity). Si vous avez récupéré le CSV (ou le ZIP), vous êtes armé ; si vous n'avez que le HTML, convertissez-le ou inspectez-le d'abord avec notre [Pocket Export Converter](/tools/pocket-export-converter) gratuit et le [Bookmark File Viewer](/tools/bookmark-file-viewer). Pour un déroulé détaillé avec dépannage, suivez notre [guide de migration Pocket vers Marqly](/migrate/pocket) ou visitez notre [Migration Center](/migrate).

Dans **Marqly**, par exemple :

1. Créez un compte gratuit.
2. Pendant l'onboarding (ou dans Paramètres → Importer), choisissez **Importer des favoris**.
3. Ouvrez le ZIP de l'export Pocket et glissez le fichier `list.csv` dans l'importateur (pas l'aperçu `.html` — Marqly lit le CSV).
4. Vos sauvegardes apparaissent — titres et tags préservés — avec la recherche par mot-clé sur le plan gratuit et la recherche sémantique sur Pro. (L'étiquetage automatique à l'import est une fonctionnalité Pro ; sur le plan gratuit, vos liens s'importent quand même avec les tags portés par le fichier.)

Le temps d'import dépend de la taille du fichier et du traitement ; conservez votre archive d'origine et vérifiez le nombre de sauvegardes importées.

À noter aussi : l'import ne conserve pas les dates d'enregistrement d'origine — chaque élément prend la date de l'import.

## Étape 4 : reconnecter votre habitude de sauvegarde

L'export rapatrie votre *historique*. Il faut maintenant reconstruire l'*habitude* :

- **Installez l'extension de navigateur** pour que sauvegarder ne coûte qu'un clic, comme le bouton de Pocket.
- **Ajoutez l'app mobile** pour enregistrer depuis le partage de votre téléphone.
- **Configurez les intégrations** dont vous vous servez (certains outils supportent Raycast, les Raccourcis iOS, etc.).

En une journée, sauvegarder redevient exactement comme avec Pocket — sauf que désormais tout est consultable.

## L'amélioration que la plupart des gens ratent

Migrer est l'occasion de corriger ce que Pocket n'a jamais résolu : **nous sauvegardons bien plus que nous ne retrouvons jamais.** Dossiers et recherche par mot-clé ne passent pas l'échelle de quelques centaines d'éléments.

Quand vous déplacez votre bibliothèque, envisagez de la poser quelque chose qui offre la **recherche sémantique** — où vous tapez ce dont vous vous *souvenez* (« l'article sur télétravail et confiance ») et récupérez l'article même si vous avez oublié son titre. C'est le cœur de ce que fait [Marqly](https://app.marqly.com/lp/replace-pocket) : importer votre historique Pocket, puis réellement tout retrouver. Voir notre comparaison complète [Pocket vs Marqly](/fr/comparer/marqly-vs-pocket) pour les détails côte à côte. Commencez gratuitement avec jusqu'à 100 sauvegardes ; la recherche sémantique exige Pro.

---

*Conseil : quel que soit l'outil choisi, gardez votre archive d'export Pocket d'origine, `list.csv` inclus, sauvegardée. C'est votre copie portable, indépendante du fournisseur — toute la leçon de Pocket.*

Source : [avis de fermeture de Mozilla Pocket](https://support.mozilla.org/en-US/kb/future-of-pocket), consulté le 6 octobre 2026. L'accès à l'export a pris fin le 12 novembre 2025 ; Mozilla indique que la suppression a commencé alors.
