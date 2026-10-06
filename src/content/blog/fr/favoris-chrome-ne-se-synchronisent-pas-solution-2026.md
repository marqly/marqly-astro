---
title: "Les favoris Chrome ne se synchronisent pas ? 8 solutions efficaces (2026)"
seoTitle: "Favoris Chrome ne se synchronisent pas : 8 Solutions (2026) — Marqly"
description: "Vos favoris Chrome refusent de se synchroniser ? Suivez ces 8 correctifs dans l'ordre : synchro suspendue, comptes différents, sync-internals et réinitialisation."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "favoris chrome ne se synchronisent pas"
tags:
  - "favoris chrome"
  - "synchronisation chrome"
  - "chrome sync"
  - "chrome sync internals"
  - "sauvegarde favoris"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
faqs:
  - q: "Pourquoi Chrome a-t-il soudainement arrêté de synchroniser mes favoris ?"
    a: "La cause la plus fréquente est la synchronisation suspendue : après un changement de mot de passe Google ou un événement de sécurité, Chrome met la synchro en pause en silence jusqu’à ce que vous vous reconnectiez, et il est facile de rater le petit bandeau « Synchronisation suspendue ». Autres causes fréquentes : des comptes Google différents selon les appareils, et le curseur Favoris désactivé dans « Gérer les données synchronisées »."
  - q: "Comment forcer Chrome à synchroniser mes favoris tout de suite ?"
    a: "Ouvrez chrome://settings/syncSetup, vérifiez que la synchronisation est activée et non suspendue, puis désactivez-la et réactivez-la : cela force un nouveau cycle. Si rien ne bouge, déconnectez-vous totalement de Chrome puis reconnectez-vous. Vous pouvez observer la synchronisation en direct dans chrome://sync-internals, où Transport state doit indiquer « Active »."
  - q: "Qu’est-ce que chrome://sync-internals et comment le lire ?"
    a: "C’est la page de diagnostic de synchronisation intégrée à Chrome — tapez chrome://sync-internals dans la barre d’adresse. Vérifiez trois choses : Transport state doit afficher « Active », Username doit être le compte attendu, et d’éventuelles erreurs apparaissent en haut. Dans la section Types, la ligne BOOKMARKS indique si les données de favoris circulent réellement."
  - q: "Réinitialiser la synchronisation efface-t-il mes favoris ?"
    a: "Non — la réinitialisation supprime la copie stockée sur les serveurs de Google, pas les favoris présents sur vos appareils. Vos favoris locaux restent en place et se retéléversent quand la synchronisation repart. Exportez quand même vos favoris en fichier HTML d’abord (Gestionnaire de favoris → Exporter les favoris) : une réinitialisation est exactement le mauvais moment pour découvrir un cas limite."
---

Dans neuf cas sur dix, les favoris Chrome cessent de se synchroniser parce que **la synchronisation est suspendue** (généralement après un changement de mot de passe), parce que vous êtes connecté à **des comptes Google différents** selon les appareils, ou parce que **le curseur Favoris est désactivé** dans « Gérer les données synchronisées ». Suivez les correctifs ci-dessous dans l’ordre — ils sont classés par fréquence à laquelle ils sont le coupable — et vous serez resynchronisé en cinq minutes. Et comme cela arrive sans arrêt aux gens, la dernière section explique pourquoi la synchro prisonnière du navigateur est fragile par conception, et à quoi ressemble un montage plus solide.

Avant toute chose : **sauvegardez d’abord.** Ouvrez le gestionnaire de favoris (`Ctrl/Cmd+Maj+O`) → menu ⋮ → **Exporter les favoris**, et enregistrez le fichier HTML. Tous les correctifs qui suivent sont sûrs, mais vous allez manipuler l’état de la synchronisation, et une sauvegarde de trente secondes rend l’exercice entièrement sans risque.

## Correctif 1 : vérifier si la synchronisation est suspendue

Après un changement de mot de passe Google, une alerte de sécurité ou une session expirée, Chrome suspend la synchronisation et n’affiche qu’un petit bandeau que vous pouvez ne pas remarquer pendant des semaines.

1. Regardez l’avatar de votre profil dans le coin supérieur droit de Chrome : un badge de pause ou d’erreur y apparaît.
2. Ouvrez **chrome://settings/syncSetup**. Si vous voyez **« Synchronisation suspendue »** ou **« Synchronisation désactivée »**, cliquez et reconnectez-vous.
3. Refaites le test sur chaque appareil : la synchro peut être suspendue sur le portable et en pleine forme sur le fixe, ce qui ressemble exactement à « mes favoris ne se synchronisent plus ».

Ce seul correctif résout la majorité des cas.

## Correctif 2 : confirmer que chaque appareil utilise le même compte Google

Évident sur le papier, mais cela piège plus de monde que n’importe quel bug exotique : profil professionnel sur une machine, personnel sur l’autre, et les favoris se synchronisent fidèlement — vers deux comptes différents.

1. Sur chaque appareil, ouvrez **chrome://settings** et vérifiez l’adresse e-mail affichée en haut.
2. Sur Android/iOS, ouvrez l’app Chrome → avatar du profil → confirmez le compte.
3. S’ils diffèrent, déconnectez celui qui est de trop et reconnectez-le avec le bon compte.

Vérifiez aussi que vous êtes dans le bon **profil Chrome** sur ordinateur : chaque profil se synchronise indépendamment, et cliquer un lien depuis une autre application peut ouvrir le mauvais profil sans que vous le voyiez.

Un dernier piège de compte : les **comptes gérés**. Si vous êtes connecté avec un compte Google Workspace (travail) ou scolaire, l’administrateur peut désactiver entièrement la synchronisation Chrome par politique — aucun réglage de votre côté ne la rallumera. Consultez **chrome://policy** pour repérer d’éventuelles entrées liées à la synchro ; si elle est bloquée par l’administration, vos options sont un profil personnel pour les favoris personnels, ou un gestionnaire de favoris qui ne dépend pas du tout de la synchronisation Chrome.

## Correctif 3 : contrôler « Gérer les données synchronisées »

Synchronisation active ne veut pas dire favoris inclus.

1. Allez dans **chrome://settings/syncSetup** → **Gérer les données synchronisées**.
2. Si **Personnaliser la synchronisation** est sélectionné, vérifiez que le curseur **Favoris** est activé.
3. Vérifiez sur chaque appareil : un appareil dont les favoris sont décochés ne les envoie ni ne les reçoit correctement.

## Correctif 4 : désactiver puis réactiver la synchronisation, puis se déconnecter et se reconnecter

Le grand classique, et il marche vraiment parce qu’il force Chrome à renouveler son jeton d’authentification et à démarrer un nouveau cycle :

1. **chrome://settings/syncSetup** → **Désactiver** la synchronisation (conservez les données locales quand on vous le demande).
2. Redémarrez Chrome, réactivez la synchronisation.
3. Toujours bloqué ? Déconnectez-vous totalement de Chrome (Paramètres → votre compte → Se déconnecter), redémarrez, reconnectez-vous et réactivez la synchro.

Se déconnecter ne supprime pas vos favoris locaux : Chrome les conserve sur l’appareil par défaut. (C’est pour cela que vous avez fait la sauvegarde de toute façon.)

## Correctif 5 : mettre à jour Chrome sur chaque appareil

Le protocole de synchronisation change constamment, et un Chrome très ancien sur un appareil peut enrailler sa synchro pendant que tout le reste a l’air normal. **chrome://settings/help** sur ordinateur lance la vérification des mises à jour ; sur mobile, passez par l’app store. Redémarrez après la mise à jour : elle ne s’applique que là.

## Correctif 6 : diagnostiquer avec chrome://sync-internals

Quand les évidences ont échoué, arrêtez de deviner et regardez ce que fait réellement la synchronisation. Tapez **chrome://sync-internals** dans la barre d’adresse. Ça intimide ; trois lectures suffisent :

1. **Transport state** (en haut du Summary) : doit indiquer **« Active »**. « Paused », « Initializing » ou une erreur d’authentification vous disent quel correctif précédent revoir.
2. **Username** : confirme à quel compte ce profil se synchronise vraiment.
3. **Type Info → ligne BOOKMARKS** : montre si le type de données Favoris est activé et sans erreur, avec le nombre d’éléments synchronisés. Un zéro ici alors que votre barre de favoris est pleine signifie que les favoris ne quittent pas l’appareil.

Vous n’avez rien à réparer depuis cette page — elle existe pour vous dire où est la panne. Une erreur d’authentification renvoie aux correctifs 1/4 ; un type BOOKMARKS désactivé renvoie au correctif 3 ; tout « Active » avec des compteurs justes sur un appareil mais pas sur l’autre pointe vers l’autre appareil.

## Correctif 7 : réinitialiser la synchronisation depuis le tableau de bord Google (dernier recours)

Si sync-internals affiche un état sain mais que les appareils restent en désaccord, la copie côté serveur est peut-être corrompue. L’option nucléaire-mais-sûre :

1. Confirmez que la sauvegarde HTML de l’étape zéro existe.
2. Rendez-vous sur le tableau de bord de synchronisation Chrome à **chrome.google.com/sync**, connecté.
3. Faites défiler vers le bas et choisissez **Réinitialiser la synchronisation**. Cela supprime la copie synchronisée **sur les serveurs de Google uniquement** — les favoris sur vos appareils restent en place.
4. Réactivez la synchronisation en commençant par l’appareil qui possède le meilleur jeu de favoris. Lui retéléverse, et les autres appareils tirent la copie fraîche.

## Correctif 8 : récupérer des favoris disparus depuis la sauvegarde locale

Si des favoris ne se sont pas contentés de ne pas se synchroniser mais ont disparu d’un appareil, Chrome garde une sauvegarde locale d’une génération :

1. Fermez complètement Chrome.
2. Dans le dossier de profil (macOS : `~/Library/Application Support/Google/Chrome/Default` ; Windows : `%LOCALAPPDATA%\Google\Chrome\User Data\Default`), repérez les fichiers **`Bookmarks`** et **`Bookmarks.bak`**.
3. Renommez `Bookmarks` en `Bookmarks.old`, puis copiez `Bookmarks.bak` en `Bookmarks`.
4. Rouvrez Chrome : il charge l’état de la sauvegarde.

Agissez vite et gardez Chrome fermé pendant l’opération : `Bookmarks.bak` est écrasé à la session suivante, emportant la bonne copie avec lui.

## La partie honnête : cela se reproduira

Tout ce qui précède est un traitement, pas une guérison. La synchronisation Chrome échoue comme elle échoue à cause de ce qu’elle est : un processus d’arrière-plan invisible, accroché au système de comptes d’un seul constructeur, qui se met en pause en silence et enferme vos données dans un seul navigateur. Vous ne découvrez qu’elle est cassée que le jour où vous tendez la main vers un favori qui n’est pas là. Et la même histoire se rejoue sur Safari, Edge et Firefox : la synchro de chaque navigateur est un silo avec les mêmes modes de panne.

Si vos favoris comptent assez pour que vous veniez de passer vingt minutes dans sync-internals, ils ne devraient sans doute pas vivre dans la synchronisation du navigateur du tout. Le montage plus solide : un gestionnaire de favoris adossé à un compte — votre bibliothèque vit sur son propre compte, et chaque navigateur n’est qu’une fenêtre dessus.

- **Pas de pause silencieuse** — soit vous êtes connecté et vous voyez votre bibliothèque, soit vous ne l’êtes pas, visiblement.
- **Inter-navigateur par nature.** Marqly, par exemple, a des extensions pour Chrome, Edge, Firefox et Safari plus une app web et une app iOS : la bibliothèque est identique partout, donc changer de navigateur (ou en utiliser trois à la fois) cesse d’être un problème de synchronisation.
- **Pour démarrer, il suffit d’un fichier.** Exportez vos favoris en HTML — la sauvegarde que vous avez déjà faite à l’étape zéro — et [importez-la en quelques minutes](/fr/blog/exporter-favoris-chrome). Marqly étiquette tout à l’import, ce qui fait à votre place [le rangement que vous n’alliez jamais faire à la main](/fr/blog/organiser-favoris-navigateur).
- **La retrouvabilité progresse, pas seulement la fiabilité.** La recherche sémantique fait que « l’article sur la négociation d’augmentation » retrouve la page même si son titre ne contient rien de tout cela — [un modèle fondamentalement différent des hiérarchies de dossiers](/fr/blog/arretez-d-organiser-vos-favoris-dossiers-obsoletes-2026).

Les favoris du navigateur conviennent très bien à la douzaine de la barre : les sites que vous ouvrez chaque jour. Mais les centaines d’enregistrements « il me servira un jour » méritent un stockage qui ne dépend pas de la santé silencieuse d’un processus d’arrière-plan. [Commencez gratuitement](https://app.marqly.com) — importez cette sauvegarde HTML et vos favoris cessent d’être otages de l’état de la synchronisation.

## Récap express

1. Sauvegarde : exportez les favoris en HTML.
2. Reprenez la synchro suspendue (chrome://settings/syncSetup).
3. Même compte et même profil partout.
4. Curseur Favoris activé dans « Gérer les données synchronisées ».
5. Basculez la synchronisation ; déconnectez/reconnectez.
6. Mettez Chrome à jour partout.
7. Lisez chrome://sync-internals : Transport state, Username, type BOOKMARKS.
8. Réinitialisez à chrome.google.com/sync ; récupérez via `Bookmarks.bak` si des éléments ont localement disparu.
