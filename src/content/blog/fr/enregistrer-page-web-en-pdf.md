---
title: "Comment enregistrer une page web en PDF (sans le désordre habituel)"
seoTitle: "Enregistrer une Page Web en PDF (3 Méthodes) | Marqly"
description: "Ctrl+P fonctionne jusqu'à ce que les images sortent blanches et le texte coupé. Trois méthodes pour enregistrer une page en PDF — et obtenir une copie fidèle à la page réelle."
pubDate: 2026-07-04
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "enregistrer page web pdf"
tags:
  - "enregistrer page web pdf chrome"
  - "page web en pdf sans coupure"
  - "convertir page web en pdf"
  - "imprimer une page en pdf"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Installer l'extension gratuite"
lang: "fr"
faqs:
  - q: "Comment enregistrer une page web en PDF gratuitement ?"
    a: "Appuyez sur Ctrl+P sous Windows ou Cmd+P sur Mac, réglez la destination sur « Enregistrer au format PDF » et cliquez sur Enregistrer. Tous les grands navigateurs l'intègrent, et c'est gratuit. Sur une page-article simple, le résultat est bon. Sur les pages à mise en page riche, attendez-vous à une mise en forme cassée, des images blanches et du contenu tronqué : le navigateur imprime une version stylée pour l'impression, pas ce que vous voyez à l'écran."
  - q: "Pourquoi les pages web sont-elles coupées quand je les enregistre en PDF ?"
    a: "Parce que la boîte d'impression reconstruit la page pour le papier, pas pour votre écran. Les sites livrent une feuille de style d'impression séparée, les éléments à largeur fixe ne se reforment pas à la page, et tout ce qui est plus large que la zone imprimable est tronqué au bord. Les outils qui capturent la mise en page écran au lieu de la mise en page impression — comme l'extension Marqly sur Chrome et Edge — évitent le problème."
  - q: "Pourquoi les images sont-elles blanches ou absentes de mon PDF ?"
    a: "Le chargement différé. La plupart des sites modernes ne chargent les images que lorsque vous approchez en faisant défiler, et la boîte d'impression ne défile pas : tout ce qui était sous la ligne de flottaison n'avait jamais été chargé au moment de la capture. Le correctif rapide : faire défiler la page jusqu'en bas avant d'imprimer. L'enregistrement PDF de Marqly pré-fait défiler la page automatiquement, si bien que les images différées sont déjà en place quand il capture."
  - q: "Puis-je enregistrer en PDF une page protégée par une connexion ?"
    a: "Oui, si la capture se fait dans votre propre navigateur. La boîte d'impression et les extensions voient la page exactement telle que votre session connectée l'affiche. Les sites convertisseurs en ligne ne le peuvent pas : ils récupèrent l'URL depuis leurs serveurs, qui ne sont pas connectés, et récupèrent la version déconnectée ou un mur de connexion. Pour tout ce qui est privé, gardez la capture en local."
  - q: "Comment enregistrer une page web en PDF dans Chrome sans qu'elle paraisse cassée ?"
    a: "Installez l'extension Marqly, ouvrez la boîte d'enregistrement sur la page et choisissez « Enregistrer au format PDF » dans le menu ⋯. Elle capture la mise en page écran que Chrome est réellement en train d'afficher, pré-fait défiler pour que les images se chargent, et télécharge le PDF sur votre machine — rien n'est téléversé. La page est enregistrée en favori dans le même temps, si bien que le lien vivant et la copie figée restent ensemble."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Enregistrer une page web en PDF sans coupure — illustration"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Pour enregistrer une page web en PDF, appuyez sur **Ctrl+P** (**Cmd+P** sur Mac) et choisissez **Enregistrer au format PDF** comme destination. En dépannage, cela marche. Pour une capture qui ressemble à la vraie page — images chargées, rien de coupé — utilisez une extension navigateur qui photographie la mise en page écran au lieu de la mise en page impression.

C'est la deuxième phrase qui fait tout le travail. Tout le monde connaît l'astuce de l'impression ; si vous lisez ceci, c'est que le résultat est si souvent raté. Ce guide couvre les trois vraies façons de convertir une page web en PDF — la boîte intégrée, les sites convertisseurs et l'extension — et dit honnêtement où chacune casse.

## Comment enregistrer une page web en PDF avec la boîte d'impression ?

La méthode intégrée fonctionne dans Chrome, Edge, Firefox et Safari, sur tous les systèmes, gratuitement :

1. Ouvrez la page et laissez-la finir de charger.
2. Appuyez sur **Ctrl+P** sous Windows et Linux, ou **Cmd+P** sur Mac. (Dans Chrome, cela équivaut à Menu → Imprimer.)
3. Réglez la **Destination** sur **Enregistrer au format PDF**.
4. Dans **Plus de paramètres**, activez **Graphiques d'arrière-plan** si l'aperçu semble délavé, et réduisez un peu l'échelle si le texte est rogné aux bords.
5. Cliquez sur **Enregistrer** et choisissez l'emplacement.

Pour une page-article simple — une colonne, essentiellement du texte — c'est réellement très bien, et cela devrait être votre réflexe par défaut. Rien à installer, rien téléversé nulle part, et cela fonctionne derrière les connexions puisque cela capture votre propre session.

Les ennuis commencent sur les pages du monde réel. Quatre modes de panne reviennent sans arrêt :

- **La mise en page casse.** La page s'affiche dans son style « impression », pas dans celui que vous regardiez : les colonnes s'effondrent, les espacements deviennent bizarres.
- **Les images sortent blanches.** Tout ce qui était sous la ligne de flottaison et pas encore chargé s'imprime en case vide.
- **Les ordures sont capturées aussi.** Bannières cookies, popups newsletter et bulles de chat atterrissent en plein milieu de la capture.
- **Le contenu est coupé.** Tableaux larges, blocs de code et sections à largeur fixe sont tronqués au bord de la page.

Si l'aperçu d'impression a l'air juste, validez. Sinon, aucun réglage de marges ne corrigera rien de façon fiable — le problème est dans la façon dont la page est rendue, pas dans vos réglages.

## Pourquoi les pages sortent-elles coupées ou cassées en PDF ?

Parce que l'impression ne capture pas la page que vous regardez : le navigateur **reconstruit la page pour le papier** et capture cette reconstruction. Trois choses dérapent :

**Les feuilles de style d'impression.** Beaucoup de sites livrent un second jeu de règles de mise en page qui ne s'appliquent qu'à l'impression. Elles ont été écrites une fois, il y a des années, généralement pour une version plus simple du site. Dès que vous appuyez sur Ctrl+P, la page que vous voyez est remplacée par cette version d'impression — et si elle est périmée ou à moitié finie, le PDF hérite de chaque défaut.

**Le chargement différé.** Les sites modernes ne chargent pas toutes les images d'un coup ; ils les chargent quand vous approchez en faisant défiler. La boîte d'impression ne fait pas défiler. Donc toute image que vous n'avez jamais atteinte n'existe tout simplement pas encore quand la capture démarre, et elle s'imprime en case blanche ou en placeholder gris.

**Les mises en page dépendantes du viewport.** Les pages se dimensionnent sur votre fenêtre, peut-être 1 400 pixels de large. Le papier est un canevas fixe, plus étroit. Les éléments flexibles se reforment ; les éléments à largeur fixe — tableaux, embeds, blocs de code — non. Tout ce qui ne peut pas rétrécir est tranché au bord imprimable. C'est tout le problème de « la page web coupée », en une phrase.

Popups et bannières cookies sont un quatrième souci, plus bête : les superpositions sont de simples éléments de page comme les autres, donc si vous ne les fermez pas d'abord, elles s'impriment aussi.

Le correctif est partout le même : capturer la **mise en page écran** — la page telle que votre navigateur est réellement en train de l'afficher — au lieu de demander au navigateur de la reconstruire pour le papier.

## Faut-il utiliser un convertisseur en ligne de page web en PDF ?

Les sites convertisseurs laissent coller une URL et télécharger un PDF, sans rien installer. C'est un choix correct pour une capture ponctuelle d'une page **publique** — par exemple sur une machine professionnelle verrouillée où vous ne pouvez pas ajouter d'extension.

Ils viennent avec trois vrais inconvénients :

- **Ils ne voient pas les pages derrière une connexion.** Le serveur du convertisseur récupère l'URL à neuf, sans accès à votre session — tableaux de bord privés, confirmations de commande et contenus réservés reviennent en mur de connexion.
- **Vous téléversez l'URL chez un tiers.** Pour tout ce qui est sensible, c'est un non ferme.
- **Les paliers gratuits sont gorgés de publicités**, et la qualité de sortie varie énormément d'un site à l'autre.

Utilisez-les pour des captures publiques, non sensibles, ponctuelles. Pour tout le reste, gardez la capture dans votre propre navigateur.

## Comment enregistrer une page web en PDF qui ressemble à la vraie page ?

Utilisez l'extension Marqly. Son enregistrement PDF capture la page **telle qu'elle apparaît vraiment à votre écran** — mise en page écran, pas impression — ce qui esquive tous les modes de panne ci-dessus :

1. [Installez l'extension Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (gratuite).
2. Sur la page voulue, cliquez sur l'icône Marqly pour ouvrir la boîte d'enregistrement.
3. Ouvrez le menu **⋯** de la boîte et choisissez **Enregistrer au format PDF**.
4. Réglez format et options de mise en page si vous le souhaitez, ou acceptez les valeurs par défaut.
5. Le PDF se télécharge sur votre machine — et la page est enregistrée en favori dans votre bibliothèque Marqly dans le même élan.

Sous le capot, l'outil **fait d'abord défiler la page entière**, si bien que les images à chargement différé sont complètement chargées avant la capture — pas de cases blanches. Et comme il photographie le rendu écran plutôt qu'une feuille de style d'impression, les mises en page larges ressortent comme vous les avez vues au lieu d'être tronquées.

Deux réserves honnêtes. La capture la plus fidèle fonctionne sur **Chrome et Edge** ; sur les autres navigateurs l'extension retombe sur le flux d'impression standard, donc vous obtenez le même résultat que Ctrl+P. Et tout tourne **en local dans votre navigateur** — la page n'est jamais téléversée — ce qui veut aussi dire que cela fonctionne très bien derrière les connexions.

Le point facile à sous-estimer : le PDF et le favori voyagent ensemble. Un PDF solitaire dans le dossier Téléchargements, c'est là que les documents vont mourir. Ici, la copie figée et le lien vivant siègent dans la même entrée de bibliothèque, si bien que dans six mois vous pouvez retrouver l'un ou l'autre.

## Quelle méthode choisir ?

| | Boîte d'impression | Convertisseur en ligne | Extension Marqly |
| --- | --- | --- | --- |
| Ressemble à la vraie page | ⚠️ Mise en page d'impression, souvent cassée | ⚠️ Au petit bonheur | ✅ Mise en page écran (Chrome, Edge) |
| Images différées incluses | ❌ Blanches sous la ligne de flottaison | ⚠️ Selon le site | ✅ Pré-défile d'abord |
| Fonctionne derrière une connexion | ✅ Oui | ❌ Non | ✅ Oui |
| Reste dans votre bibliothèque | ❌ Fichier isolé | ❌ Fichier isolé | ✅ Enregistré automatiquement |

Version courte : boîte d'impression pour les pages-articles simples, convertisseurs en ligne pour les captures publiques ponctuelles sur des machines qui ne vous appartiennent pas, et l'extension quand le PDF doit ressembler à la page que vous avez vue.

## Quand enregistrer un PDF plutôt que juste un favori ?

Enregistrez un PDF quand vous devez **figer un instant précis**. Un favori pointe vers une page vivante ; la page peut changer, passer derrière un paywall ou disparaître — la mort des liens emporte chaque année une part stupéfiante du web. Le PDF est votre preuve de ce que la page affichait le jour où vous l'avez enregistrée.

Cela fait du PDF le bon choix pour :

- **Reçus, factures et confirmations de commande**
- **Détails de réservation**
- **Conditions, politiques et pages de tarifs** que vous devrez peut-être citer plus tard
- **Tout ce dont vous attendez qu'il soit modifié ou retiré**

Pour tout le reste — articles, références, recherche — le favori est meilleur, car il reste consultable et à jour. Mieux : enregistrez en favori et [surlignez ce qui compte vraiment](/fr/blog/comment-surligner-du-texte-sur-un-site-2026), pour garder l'idée sans stocker un fichier. Si votre pile d'enregistrements est surtout faite de longues lectures, une vraie [application de lecture différée](/fr/blog/meilleures-applications-lecture-differee-2026) écrase un dossier de PDF de loin.

Le flux de travail qui tient dans la durée : favori par défaut, PDF pour l'irremplaçable, et l'on garde les deux dans un seul endroit consultable — c'est le noyau ennuyeux et fiable de [l'organisation des favoris](/fr/blog/organiser-favoris-navigateur) pour qu'ils restent retrouvables, et le premier pas honnête vers [construire un second cerveau](/fr/blog/comment-creer-un-second-cerveau-2026) au lieu d'un tiroir à fourre-tout.

## Enregistrez la page, gardez le lien

Ctrl+P sera toujours là, et pour un article simple il suffit. Mais le jour où il vous faut une page capturée *exactement* — images chargées, rien de coupé, aucune bannière cookies venue se photographier en plein milieu — la boîte d'impression est le mauvais outil.

[Installez gratuitement l'extension Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), ouvrez le menu ⋯ quand vous enregistrez une page, et appuyez sur « Enregistrer au format PDF ». La copie figée atterrit sur votre machine, le lien vivant atterrit dans votre bibliothèque, et rien ne quitte votre navigateur.

---

*À lire aussi : [Organiser ses favoris pour vraiment les retrouver](/fr/blog/organiser-favoris-navigateur) · [Les meilleures applications de lecture différée en 2026](/fr/blog/meilleures-applications-lecture-differee-2026)*
