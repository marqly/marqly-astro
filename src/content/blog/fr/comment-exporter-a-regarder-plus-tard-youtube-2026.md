---
title: "Comment exporter sa liste « À regarder plus tard » de YouTube en 2026 (Takeout ne l'inclut pas)"
seoTitle: "Exporter À Regarder Plus Tard YouTube (2026) | Marqly"
description: "Google Takeout exclut « À regarder plus tard » de l'export des playlists YouTube. Les contournements qui marchent encore en 2026, et pourquoi capter en avant bat archiver en arrière."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Guides"
targetKeyword: "exporter a regarder plus tard youtube"
tags:
  - "exporter a regarder plus tard youtube"
  - "google takeout youtube"
  - "sauvegarde regarder plus tard"
  - "exporter playlist youtube"
  - "alternative regarder plus tard"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Commencez gratuitement avec Marqly"
lang: "fr"
faqs:
  - q: "Google Takeout inclut-il ma liste « À regarder plus tard » ?"
    a: "Non. L'export YouTube de Takeout couvre vos playlists au format CSV, mais « À regarder plus tard » en est exclue — elle est traitée comme une playlist système, pas comme une des vôtres. La surprise se répète à chaque fois, car toutes les autres listes du compte sortent bien. Aucun réglage ne l'ajoute."
  - q: "Alors comment exporter « À regarder plus tard » ?"
    a: "Indirectement. La voie fiable consiste à déplacer les vidéos qui comptent dans une playlist ordinaire, que Takeout exporte bien, ou à copier vous-même les liens depuis la page de la playlist. Les deux sont manuels. Il n'existe aucun export officiel en un clic de « À regarder plus tard » en 2026."
  - q: "Puis-je recopier « À regarder plus tard » dans une playlist normale en masse ?"
    a: "Pas nativement. YouTube n'a pas de bouton « dupliquer la playlist », donc vous ajoutez les vidéos à la nouvelle playlist une par une via le menu ⋮ de la page « À regarder plus tard ». Pour une liste de dizaines, c'est correct ; pour des centaines, c'est une soirée — d'où l'intérêt de trier d'abord, en ne gardant que ce que vous regarderiez vraiment."
  - q: "Pourquoi ma liste « À regarder plus tard » contient-elle des entrées [Vidéo privée] et [Vidéo supprimée] ?"
    a: "Parce qu'une vidéo enregistrée a ensuite été supprimée ou passée en privée par son auteur. YouTube garde l'emplacement mais pas le contenu, et rien de votre côté ne le fait revenir — le titre a disparu aussi, donc vous ne pouvez même pas chercher une remise en ligne. Chacune de ces lignes est un argument pour sauvegarder hors de YouTube ce qui compte."
  - q: "Y a-t-il une limite au nombre de vidéos de « À regarder plus tard » ?"
    a: "Oui. Les playlists YouTube plafonnent autour de 5 000 vidéos, et « À regarder plus tard » est une playlist. Très peu atteignent le plafond officiel, mais beaucoup atteignent bien avant celui du réel : aucune recherche dans la liste, donc passé quelques centaines d'éléments elle cesse de fonctionner comme file d'attente et commence à fonctionner comme décharge."
---

Voici la version courte : **Google Takeout n'exportera pas votre liste « À regarder plus tard ».** Takeout vous donne vos playlists ordinaires en fichiers CSV, vos abonnements et votre historique — mais « À regarder plus tard » est exclue, et aucun réglage n'y change quoi que ce soit. Si vous voulez sortir ces vidéos, toutes les voies restantes sont manuelles. Ce billet couvre les contournements qui marchent réellement en 2026, ce que chacun vous coûte en effort, et pourquoi la meilleure correction se trouve en amont du problème.

La [documentation officielle de Takeout](https://support.google.com/accounts/answer/3024190) par Google (vérifiée le 6 octobre 2026) fait foi sur le contenu de l'archive et les règles d'expiration — liens de téléchargement et copies disparaissent après des fenêtres fixes, donc téléchargez et dupliquez immédiatement. « À regarder plus tard », vous le constaterez, ne fait pas partie des services que Takeout exporte ; c'est cette omission qui justifie cette page.

## Ce que Takeout vous donne et ce qu'il ne vous donne pas

Demandez un export YouTube depuis takeout.google.com et vous obtiendrez un dossier de CSV de playlists — chacun une liste d'identifiants vidéo et des dates d'ajout — plus les abonnements, les commentaires et l'historique de visionnage selon vos sélections.

Ce que vous ne trouverez pas, c'est **« À regarder plus tard »**. C'est une playlist système, et les playlists système restent hors de l'export des playlists. Les gens téléchargent l'archive, la fouillent, et concluent qu'ils ont coché les mauvaises options. Non : elle n'y est pas.

Autant le savoir avant d'y passer une heure, car « À regarder plus tard » est exactement la liste que la plupart des gens veulent sortir. C'est là qu'est parti le talk de conférence de deux heures, le tutoriel qui vous servira quand vous remonterez enfin cette lampe, et quatre cents autres choses « pour plus tard ».

## Pourquoi « À regarder plus tard » tourne à la décharge

Le trou d'export ne serait pas grave si la liste fonctionnait bien. Elle ne fonctionne pas, pour quatre raisons structurelles :

- **Pas de recherche.** Impossible de chercher dans la playlist. Vous pouvez trier par date d'ajout ou popularité, et c'est tout. Passé quelques centaines de vidéos, retrouver veut dire faire défiler.
- **Pas de notes, pas de tags.** Rien n'enregistre *pourquoi* vous avez gardé quelque chose. Un titre, six mois plus tard, ne vous le dit pas.
- **Les vidéos s'évaporent.** Les auteurs suppriment des vidéos et les passent en privé. Votre ligne devient `[Vidéo privée]` — ni titre, ni chaîne, rien à chercher ailleurs.
- **Elle est privée et bloquée.** « À regarder plus tard » ne peut être ni partagée ni rendue publique, et, comme établi, pas exportée.

Ajoutez le plafond — les playlists YouTube s'arrêtent autour de 5 000 vidéos — et vous obtenez une file d'attente qui n'accepte que des dépôts.

## Contournement 1 : déplacer les vidéos dans une playlist ordinaire, puis Takeout

La voie la plus fiable vers un vrai fichier d'export :

1. Créez une nouvelle playlist — appelez-la « Archive À regarder plus tard ».
2. Ouvrez **youtube.com/playlist?list=WL** sur ordinateur.
3. Pour chaque vidéo à garder, menu ⋮ → **Enregistrer dans une playlist** → votre nouvelle playlist.
4. Lancez Google Takeout, sélectionnez YouTube → playlists, et votre nouvelle playlist sort en CSV de liens.

La friction est réelle et il n'y a pas de parade : **YouTube n'a pas de bouton de duplication de playlist**, donc c'est une vidéo à la fois. Pour cinquante vidéos, vingt minutes. Pour huit cents, une soirée que vous ne passerez pas.

C'est pourquoi le conseil honnête est de trier pendant que vous y êtes. Vous n'êtes pas obligé de conserver les huit cents. Les listes « À regarder plus tard » sont à 80 % d'impulsion — des vidéos enregistrées dans un moment d'intérêt depuis passé. Ne déplacer que ce que vous regarderiez vraiment transforme une corvée impossible en corvée courte, et vous laisse une liste qui vaut la peine d'exister.

## Contournement 2 : copier les liens vous-même

Si vous n'avez pas besoin d'un fichier en forme de Takeout et voulez juste les URL :

1. Ouvrez la liste « À regarder plus tard » sur ordinateur et **faites défiler jusqu'au bas** pour que chaque entrée se charge — la liste est virtualisée, donc ce que vous n'avez pas encore survolé n'existe pas encore dans la page.
2. Clic droit sur une vidéo → **Copier le lien**, et collez dans un document au fur et à mesure.
3. Ou sélectionnez le texte chargé de la page, collez-le quelque part et nettoyez le résultat.

C'est grossier, et la version collée arrive avec titres, vues et noms de chaînes enchevêtrés autour des liens. Pour une liste courte, c'est le plus rapide disponible. Pour une longue, c'est pire que le contournement 1.

## Contournement 3 : ouvrir en onglets et enregistrer tout le lot d'un coup

C'est celui qui scale le mieux, et il marche avec un gestionnaire de favoris plutôt que contre YouTube :

1. Sur la page « À regarder plus tard », clic du milieu (ou Ctrl/Cmd-clic) sur un écran de vidéos pour les ouvrir en onglets d'arrière-plan.
2. Une fois vingt ou trente onglets de vidéos à garder ouverts, **[enregistrez tous les onglets ouverts en un clic](/faq/how-do-i-save-all-my-open-tabs)** dans votre bibliothèque.
3. Fermez la fenêtre et recommencez plus bas dans la liste.

Vous touchez toujours la liste à la main — cette part est inévitable — mais vous groupez l'étape d'enregistrement au lieu de la répéter par vidéo, et ce qui en sort vaut mieux qu'un CSV d'identifiants : chaque vidéo atterrit dans une bibliothèque consultable, étiquetée automatiquement, avec sa transcription jointe. Le cas général de ce flux est dans la [page de l'enregistreur d'onglets](/fr/sauvegarder-onglets).

## Un mot sur les exporteurs tiers

Des extensions et des scripts promettant d'exporter « À regarder plus tard » existent, et certains marchent. Deux mises en garde : tout ce qui atteint votre liste a soit besoin de l'accès à votre compte Google, soit exécute du code dans la page pendant que vous êtes connecté — beaucoup de confiance pour un export ponctuel — et les outils à base d'API butent sur les quotas et cassent quand l'API change, ce qui explique pourquoi tant sont abandonnés. Si vous en utilisez un, préférez l'open source que vous pouvez lire, puis révoquez son accès sur myaccount.google.com/permissions.

## Pourquoi capter en avant bat archiver en arrière

Chaque voie ci-dessus est une façon de payer, après coup, une décision prise au moment où vous avez cliqué sur Enregistrer : la vidéo est entrée dans une liste qui ne sait ni chercher, ni annoter, ni exporter. L'arriéré est le symptôme.

La correction consiste à changer là où « plus tard » pointe. Quand vous trouvez une vidéo que vous comptez regarder, enregistrez-la dans une bibliothèque qui la traite comme du contenu au lieu d'une position dans une file :

- **La transcription vient avec.** Enregistrer une vidéo YouTube dans Marqly [garde sa transcription jointe](/faq/how-do-i-save-a-youtube-video-with-its-transcript), ce qui veut dire que les *mots* de la vidéo sont cherchables — chose qu'aucune playlist n'a jamais offerte. Le détail est dans [obtenir la transcription d'une vidéo YouTube](/fr/blog/obtenir-transcription-youtube), et il y a un [outil de transcription](/fr/outils/transcription-youtube) gratuit si vous voulez voir avant de créer un compte.
- **Vous pouvez trier sans regarder.** Un résumé IA vous dit en vingt secondes si un talk de 90 minutes mérite ces 90 minutes. À lui seul, cela tue le gros d'un arriéré. Voir [résumer des vidéos YouTube avec l'IA](/fr/blog/resumer-videos-youtube-avec-ia-2026) ou l'[outil de résumé](/fr/outils/resume-youtube).
- **Vous pouvez poser des questions à la vidéo.** Avec Pro, [discutez avec une vidéo enregistrée](/fr/blog/discuter-avec-une-video-youtube-2026) — « qu'ont-ils dit sur les prix ? » — et la transcription synchronisée à la lecture vous amène au moment où c'est dit.
- **Vous pouvez la retrouver en la décrivant.** « Celle sur la réparation d'un dérailleur de vélo » fait remonter la vidéo des mois plus tard sans le titre ni la chaîne, parce que la [recherche marche par le sens](/fr/blog/quest-ce-que-la-recherche-semantique).

Rien de tout cela n'exige d'abandonner YouTube. « À regarder plus tard » reste une boîte de réception de dix secondes très correcte pour « peut-être ce soir ». C'est un très mauvais endroit pour « j'en aurai besoin en mars ». Séparez les deux emplois et l'arriéré cesse de se reformer — la version complète de l'argument est dans [enregistrer des vidéos YouTube à regarder plus tard](/fr/blog/enregistrer-videos-youtube-a-regarder-plus-tard-2026), et la [page watch-later](/fr/enregistrer-videos-youtube) couvre le quotidien du flux.

## Récap express

1. **Takeout exclut « À regarder plus tard ».** Les playlists ordinaires s'exportent ; pas celle-ci. Aucun réglage n'y change rien.
2. **Meilleure voie d'export :** déplacez les vidéos à garder dans une playlist ordinaire (un par un), puis exportez cette playlist en CSV via Takeout.
3. **Voie pratique la plus rapide :** ouvrez des lots de vidéos en onglets et enregistrez tous les onglets ouverts dans une bibliothèque en un clic.
4. **Triez pendant que vous y êtes** — le gros d'une longue liste est du poids mort, et les lignes `[Vidéo privée]` sont déjà irrécupérables.
5. **Changez là où pointe « plus tard »** pour que les quatre cents prochaines vidéos atterrissent quelque part de consultable.

C'est réellement plus grave qu'[exporter les enregistrements Reddit](/fr/blog/comment-exporter-ses-posts-sauvegardes-reddit-2026) ou les [signets X](/fr/blog/comment-exporter-ses-signets-twitter-x-2026), qui produisent tous deux un fichier officiel au bout du processus. « À regarder plus tard » n'a pas ce fichier — donc le gain vient moins de sauver l'arriéré que de s'assurer de ne plus jamais en construire. Commencez aujourd'hui sur [app.marqly.com](https://app.marqly.com).
