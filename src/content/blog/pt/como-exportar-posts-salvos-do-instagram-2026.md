---
title: "Como exportar posts salvos do Instagram em 2026 (Baixar suas informações, passo a passo)"
seoTitle: "Como Exportar Posts Salvos do Instagram (2026) | Marqly"
description: "O Instagram não tem botão de exportar salvos. Veja o caminho Baixar suas Informações, o que há no saved_posts.json e como buscar esses links depois."
pubDate: 2026-08-16
updatedDate: 2026-10-06
category: "Guias"
targetKeyword: "exportar posts salvos do instagram"
tags:
  - "exportar posts salvos instagram"
  - "baixar informacoes instagram"
  - "saved_posts json"
  - "backup instagram"
  - "exportar dados instagram"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
ogImage: "https://www.marqly.com/og/export-instagram-saved-posts.png"
faqs:
  - q: "Posso exportar meus posts salvos direto do aplicativo do Instagram?"
    a: "Não. Não existe botão de exportação na tela de Salvos nem como enviar uma coleção por e-mail. A única rota oficial é a ferramenta «Baixar suas informações» da Meta, acessível por Configurações → Central de Contas → Suas informações e permissões → Baixar suas informações. Ela gera um arquivo que inclui um arquivo de posts salvos com tudo o que você guardou."
  - q: "Onde fica o saved_posts.json no arquivo do Instagram?"
    a: "Dentro do ZIP, sob a sua atividade do Instagram, numa pasta saved — o arquivo se chama saved_posts.json (ou saved_posts.html, se você escolheu HTML). Coleções que você criou aparecem separadamente como saved_collections. Os nomes exatos das pastas mudam entre versões do arquivo, então, se não encontrar, procure por «saved» na pasta extraída."
  - q: "A exportação inclui as fotos e vídeos que salvei?"
    a: "Não. Posts salvos pertencem a outras contas, então o arquivo guarda um link e um timestamp de cada um, não a mídia. As fotos e vídeos que vêm no arquivo são os que você mesmo postou. Se um post salvo for apagado depois ou a conta ficar privada, o link na sua exportação para de funcionar e nada o traz de volta."
  - q: "Quanto tempo leva o download de dados do Instagram?"
    a: "A Meta diz até 30 dias, mas um pedido só de Salvos normalmente chega em horas a dois dias. Você recebe um e-mail com o link de download quando estiver pronto, e o link expira em poucos dias — então baixe o ZIP logo, em vez de deixá-lo na caixa de entrada."
  - q: "Devo escolher JSON ou HTML?"
    a: "HTML se você só quer clicar pela lista de salvos em um navegador; JSON se pretende converter a lista em outra coisa, como um arquivo de favoritos para importar. JSON é o ponto de partida mais útil para construir uma biblioteca de verdade, porque são dados estruturados, não uma página formatada."
---

O Instagram deixa você salvar um post com um toque e nunca deixa levar esses salvos para outro lugar. Não há botão de exportação na tela de Salvos, nem link para compartilhar uma coleção, nem CSV. A única rota oficial para fora é a ferramenta **Baixar suas informações** da Meta — e o que ela devolve é uma lista de links e timestamps, não os posts em si. Aqui está o caminho exato, o que realmente existe no arquivo e como transformar uma lista nua de links em algo que você consegue pesquisar.

## Por que se dar ao trabalho de exportar salvos que você já consegue ver

A tela de Salvos do Instagram funciona bem até não funcionar mais. Três coisas dão errado conforme a coleção cresce:

- **Não existe busca dentro dos salvos.** Você pode criar coleções, mas não consegue pesquisá-las por texto. Depois de algumas centenas de itens, achar «aquela coisa de massa» significa rolar uma grade de miniaturas.
- **Salvos morrem em silêncio.** Quando um criador apaga um post ou fecha a conta, o item desaparece da sua grade de salvos. Você não recebe aviso, e só percebe quando for procurá-lo.
- **Tudo mora dentro de um único app.** As receitas, as referências de design, as recomendações de equipamento, a inspiração de apartamento — nada disso pode ser puxado para qualquer outra ferramenta que você use para pensar.

Esse último ponto é a lição do [encerramento do Pocket](/pt/blog/como-exportar-migrar-dados-pocket-2026) aplicada a uma plataforma que não corre perigo de fechar: salvos dentro do app de outra pessoa são acessíveis apenas na medida que esse app escolher. O Instagram escolhe «quase nada». O mesmo vale para os [bookmarks do X](/pt/blog/como-exportar-itens-salvos-do-twitter-x-2026) e os [salvos do Reddit](/pt/blog/como-exportar-posts-salvos-do-reddit-2026) — é um padrão, não uma excentricidade.

Antes dos passos: a Meta documenta esse fluxo em suas próprias páginas de ajuda — [baixar suas informações](https://help.instagram.com/1662330571473) e a [ferramenta de acesso](https://www.instagram.com/accounts/accesstool/) (ambas acessíveis em 6 de outubro de 2026). Os rótulos de menu mudam entre versões do app; se um passo abaixo não bater com a sua tela, busque «download your information» na central de ajuda em vez de confiar nesta lista.

## Passo 1: solicite o download

A ferramenta migrou para a Central de Contas da Meta, então instruções antigas que você encontra por aí estão defasadas. O caminho atual:

1. Abra o Instagram → **Configurações** (ou **Configurações e atividade**).
2. Toque em **Central de Contas** no topo.
3. Vá em **Suas informações e permissões**.
4. Toque em **Baixar suas informações** e inicie uma nova solicitação.

Você também pode chegar à mesma ferramenta em accountscenter.instagram.com pelo navegador do computador, o que é mais prático se você vai extrair arquivos de qualquer jeito.

Depois, faça três escolhas:

- **Quanto:** escolha "Algumas das suas informações" e marque **Salvos** sob sua atividade do Instagram. Pedir tudo também funciona, mas demora mais para ficar pronto e produz um ZIP muito maior para cavar.
- **Formato:** **JSON** ou **HTML**. HTML dá uma página que você clica; JSON dá dados estruturados que você converte. Se a ideia é construir uma biblioteca de verdade, escolha JSON.
- **Intervalo de datas:** todo o período.

Envie, e a Meta manda um e-mail com o link de download quando o arquivo estiver pronto.

## Passo 2: aguarde o e-mail e baixe rápido

A linha oficial da Meta é até 30 dias. Na prática, um pedido estreito como Salvos costuma chegar em horas a dois dias.

A parte que queima as pessoas: **o link de download expira** em poucos dias, e deixá-lo caducar significa recomeçar. Quando o e-mail chegar, pegue o ZIP e guarde onde você manteria um documento fiscal, não em Downloads.

Se nada aparecer em uma semana, cheque o spam por remetente Meta e veja o status da solicitação na Central de Contas — downloads concluídos ficam listados lá mesmo quando o e-mail se perde.

## Passo 3: encontre o saved_posts.json e veja o que você recebeu

Extraia o arquivo e procure, sob a sua atividade do Instagram, uma pasta **saved**. O arquivo que você veio buscar é:

- **`saved_posts.json`** — tudo em que você tocou em Salvar.
- **`saved_collections.json`** — as coleções em que organizou os salvos, se você usa.

(Escolheu HTML? Mesmos nomes, extensão `.html`. Os nomes das pastas variam entre versões do arquivo; se os caminhos não baterem, é só procurar por "saved" na pasta extraída.)

Abra o `saved_posts.json` e modere as expectativas. Cada entrada dá mais ou menos:

- a **conta** cujo post você salvou,
- um **permalink** para o post,
- um **timestamp** de quando você salvou.

Esse é o registro inteiro. **Sem legenda. Sem imagem. Sem vídeo. Sem nota sobre por que você salvou.** O que faz sentido — a mídia pertence a contas de outras pessoas, então a Meta exporta um ponteiro, não uma cópia. Suas próprias fotos e vídeos estão em outra parte do arquivo; seus salvos são uma lista de links.

Duas consequências que vale absorver já:

1. **Um post apagado sumiu.** Sua exportação preserva a URL de algo que não existe mais — argumento a favor de exportar antes, não depois. Para salvos de contas públicas, [como arquivar conteúdo do Instagram](https://viewinsta.com/blog/how-to-archive-instagram-content) cobre o que ainda é recuperável quando um link morre — e o que genuinamente não é.
2. **Uma lista de links não é uma biblioteca.** Dois mil `instagram.com/p/...` com timestamps não dizem nada sobre qual deles era o método de fermentação natural que dava certo.

Então a exportação é matéria-prima. O passo 4 é onde ela fica útil.

## Passo 4: transforme a lista de links em algo pesquisável

Três rotas, dependendo do volume e da disposição para usar ferramentas.

### Opção A: triagem na mão (a maioria das pessoas, e honestamente o melhor resultado)

Abra o `saved_posts.html` — ou o JSON em um editor de texto — e percorra a lista dos mais novos aos mais velhos. Para cada item que valha a pena, abra e salve em um gerenciador de favoritos de verdade com a extensão do navegador, um clique cada.

Parece tedioso e é a opção com mais chance de te deixar em melhor estado, porque listas de posts salvos são 80% impulso e tocar em cada item é a poda. Uma hora numa lista de mil itens te devolve os duzentos que você realmente queria de volta, já marcados e pesquisáveis, em vez de um arquivo completo que você nunca abre. (Mais sobre esse trade-off em [como organizar favoritos](/pt/blog/organizar-favoritos-navegador).)

### Opção B: converter o JSON em arquivo de favoritos (técnico)

O `saved_posts.json` é estruturado, então um script curto — ou um assistente de IA com o formato do arquivo — pode convertê-lo em um **arquivo HTML padrão de favoritos**, o mesmo formato `<DT><A HREF=...>` que todo navegador exporta. Esse é o formato universal de importação, e com um em mãos você pode conferi-lo num [visualizador de arquivo de favoritos](/tools/bookmark-file-viewer) antes de importar em qualquer lugar.

Daí ele importa como uma [exportação de favoritos do Chrome](/pt/blog/exportar-favoritos-chrome): o Marqly ingere HTML de favoritos padrão, busca cada página e depois a marca e indexa. Um limite, dito com franqueza — o Marqly não interpreta o `saved_posts.json` do Instagram diretamente, e o Instagram resiste à busca automatizada, então o que volta é mais raso que uma importação normal de artigo.

### Opção C: reconstruir a coleção de propósito

Se seus salvos eram sobretudo referências visuais — design, interiores, looks, fotografia de produto — trate a exportação como checklist, não como importação, e reconstrua o que presta em um [swipe file](/pt/swipe-file) sob seu controle: link de origem mais uma nota sua sobre por que está ali. Essa nota é o que seus salvos do Instagram nunca tiveram, e é o que torna uma coleção de referências utilizável anos depois.

## Conserte o hábito, não só o backlog

Exportar resolve o passado. Os próximos mil salvos reconstroem o mesmo problema, porque o botão de salvar do Instagram ainda será uma grade sem como pesquisar no ano que vem.

O padrão que se sustenta:

- **Continue usando o botão Salvar do Instagram** como inbox rápido no feed. Ele é bom nisso.
- **Salve os guardáveis para fora** quando você os reconhecer. Compartilhe o post para o navegador ou abra e salve com um clique — o link, mais uma tag, mais uma frase sua. Depois, [descreva o que você lembra](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of) e ele volta: "o vídeo sobre consertar uma dobradiça rangendo" encontra sem legenda, sem @, sem hashtag. É a [busca semântica](/pt/blog/o-que-e-busca-semantica) fazendo o trabalho que a grade de salvos do Instagram nunca conseguiu.

O Instagram continua sendo seu feed de descoberta. As coisas que você vai querer daqui a cinco anos moram em algum lugar com botão de exportação.

## Resumo rápido

1. **Configurações → Central de Contas → Suas informações e permissões → Baixar suas informações.**
2. Marque **Salvos**, escolha **JSON**, todo o período, envie.
3. **Baixe o ZIP rápido** — o link expira em poucos dias.
4. Encontre o **`saved_posts.json`**: só links e timestamps, sem mídia, sem legenda.
5. **Faça triagem e ressalve** os guardáveis numa biblioteca que você consegue pesquisar — como o [Marqly](https://app.marqly.com).

Peça hoje, mesmo que não vá processar este mês. É uma solicitação de dois minutos, e cada semana que você espera são mais posts salvos apagados debaixo de você em silêncio.
