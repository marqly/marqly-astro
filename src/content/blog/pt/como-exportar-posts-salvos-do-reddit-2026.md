---
title: "Como exportar seus posts salvos do Reddit em 2026 (pedido de dados, passo a passo)"
seoTitle: "Como exportar posts salvos do Reddit em 2026 — Marqly"
description: "Exporte posts salvos do Reddit pelo pedido oficial de dados: passos exatos, o que o CSV contém, o limite de 1.000 salvos e como transformar seus favoritos em algo utilizável."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/export-reddit-saved-posts.png"
category: "Guias"
targetKeyword: "exportar posts salvos do reddit"
tags:
  - "exportar posts salvos reddit"
  - "pedido de dados reddit"
  - "limite de salvos reddit"
  - "backup de salvos reddit"
  - "export reddit lgpd"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis"
lang: "pt"
faqs:
  - q: "Como exporto meus posts salvos do Reddit?"
    a: "Acesse reddit.com/settings/data-request em um navegador de desktop, faça login, escolha o histórico completo da conta e envie. O Reddit prepara um ZIP de arquivos CSV — incluindo saved_posts.csv e saved_comments.csv — e envia um link de download para a sua inbox do Reddit e para o e-mail verificado. É a única exportação oficial que o Reddit oferece (veja a ajuda do Reddit sobre [posts salvos](https://www.reddit.com/help/saved-posts/), verificado em 6 de outubro de 2026)."
  - q: "Quanto tempo demora um pedido de dados do Reddit?"
    a: "O Reddit declara até 30 dias, mas a maioria dos pedidos termina bem mais rápido — frequentemente entre horas e poucos dias. Você só pode enviar um pedido a cada 30 dias, então escolha a opção de histórico completo da conta em vez de um intervalo estreito já na primeira tentativa."
  - q: "O que exatamente tem dentro do saved_posts.csv?"
    a: "Apenas duas colunas por linha: um ID de post e um permalink. Sem títulos, sem texto dos posts, sem nomes de subreddits, sem datas de salvamento. Para transformar esses links nus em algo navegável você precisa de uma segunda etapa — um script open-source que busque os detalhes, ou importar os links para um gerenciador de favoritos que busque títulos e tags por você."
  - q: "A exportação do Reddit inclui salvos além do limite de 1.000?"
    a: "Geralmente sim. O app e a API do Reddit só exibem aproximadamente seus 1.000 salvos mais recentes, mas o pedido de dados é montado a partir dos registros armazenados do Reddit, não do feed ao vivo, e usuários relatam rotineiramente o histórico completo de salvos na exportação. É a sua melhor — e na prática única — chance de recuperar salvos antigos, então não espere para pedir."
---

A única forma oficial de exportar seus posts salvos do Reddit é um pedido de dados: acesse **reddit.com/settings/data-request**, escolha o histórico completo da conta e o Reddit lhe envia um ZIP de arquivos CSV — incluindo `saved_posts.csv` — em até 30 dias (geralmente muito antes). O detalhe: o CSV contém links nus, sem títulos nem conteúdo, e a interface do Reddit só mostra seus ~1.000 salvos mais recentes. Aqui está o processo completo, os limites que ninguém menciona e como transformar a exportação em algo que você realmente consegue usar.

## Por que se dar ao trabalho de exportar?

A lista de salvos do Reddit é uma mão dupla no sentido literal: não tem saída. Não há botão de exportar, não há busca dentro dos salvos na maior parte da história dos apps e — a parte que surpreende todo mundo — **a interface e a API só exibem aproximadamente seus 1.000 itens salvos mais recentes.** Salvar o item 1.001 não apaga nada, mas seu salvo mais antigo silenciosamente some da lista visível. A maioria dos redditors antigos tem anos de salvos que não consegue mais rolar até encontrar.

O pedido de dados é a exceção: ele é gerado a partir dos registros armazenados do Reddit, sob leis de privacidade como GDPR e CCPA, não do feed ao vivo — então alcança salvos que o app já não mostra. Isso faz dele menos "backup bonitinho" e mais "única cópia que restou". O [fechamento do Pocket](/pt/blog/como-exportar-migrar-dados-pocket-2026) deu a mesma lição do jeito duro: salvos que vivem dentro de uma plataforma são tão duráveis quanto o interesse da plataforma em mantê-los.

## Etapa 1: Envie o pedido de dados

1. Abra **reddit.com/settings/data-request** em um navegador de desktop e faça login. (No old Reddit o caminho é Settings → Privacy → Request your data.)
2. Em intervalo de datas, escolha a opção de **histórico completo da conta** — não um intervalo personalizado. É isso que puxa os salvos antigos, e como você só tem um pedido a cada 30 dias, não o desperdice com uma fatia.
3. Selecione os dados que quer (tudo é o padrão seguro) e envie.

Qualquer pessoa pode pedir, não só residentes da UE — o Reddit estende o mecanismo a todas as contas. Você verá a confirmação de que o pedido entrou na fila.

## Etapa 2: Espere e baixe o ZIP

A linha oficial do Reddit é "até 30 dias". Na prática a maioria das exportações chega em horas ou poucos dias. Quando estiver pronta:

1. Uma mensagem cai na sua **inbox do Reddit** (e no e-mail verificado, se você tem um) com o link de download.
2. Baixe o ZIP logo e guarde uma cópia em lugar seguro — trate-o como o backup que ele é.

Lembre do limite: **um pedido a cada 30 dias.** Se perceber que escolheu um intervalo estreito, será um mês de espera para corrigir.

Se nada aparecer depois de algumas semanas, confira se sua conta tem e-mail verificado (Settings → Account), olhe na pasta de spam por remetentes reddit.com e reexamine a aba de mensagens da sua inbox do Reddit em vez das notificações. Passou dos 30 dias sem nada entregue? Envie o pedido de novo — a trava de 30 dias já terá zerado.

## Etapa 3: Entenda o que você de fato recebeu

Descompacte o arquivo e você encontrará uma pilha de CSVs: seus posts, comentários, votos, histórico de chat — e os dois que você veio buscar, `saved_posts.csv` e `saved_comments.csv`.

Abra o `saved_posts.csv` e modere as expectativas. Cada linha contém exatamente duas coisas:

- um **ID de post**
- um **permalink**

Só isso. **Sem títulos. Sem texto dos posts. Sem nomes de subreddits. Sem datas.** As linhas vêm ordenadas por ID de post, não por quando você salvou. A exportação do Reddit cumpre a exigência legal — aqui está o registro do que você salvou — sem ser remotamente navegável. Mil linhas de links `https://www.reddit.com/r/.../comments/...` não dizem qual delas era o debate genial para salvar a massa madre.

Enquanto estiver no ZIP, alguns vizinhos valem guardar também: `saved_comments.csv` (o mesmo formato nu, para comentários salvos), além dos seus próprios `posts.csv` e `comments.csv` — o único backup que existe fora do Reddit de coisas que *você* escreveu. Arquive o ZIP inteiro, não só os salvos.

Então a exportação sozinha não é a linha de chegada. Você precisa da etapa 4.

## Etapa 4: Transforme links nus em uma biblioteca utilizável

Dois caminhos viáveis, dependendo do seu nível técnico:

### Opção A: scripts open-source (para técnicos)

Ferramentas como **export-saved-reddit** e **reddit-saved-to-csv** no GitHub buscam seus salvos via API do Reddit e os enriquecem com títulos, subreddits e URLs; o export-saved-reddit inclusive gera um **arquivo HTML de favoritos** padrão que qualquer gerenciador importa. Duas ressalvas honestas:

- Ferramentas baseadas em API esbarram no mesmo **teto de paginação de ~1.000 itens** que o app — não enxergam seus salvos antigos. Para esses, a exportação do pedido de dados é a fonte da verdade.
- Exigem criar uma credencial de API do Reddit e rodar Python localmente. Ok para desenvolvedores, um muro para todo o resto.

Alguns scripts (ferramentas estilo reddit-stash) fazem o caminho inverso: pegam a lista de IDs da sua exportação legal e buscam os detalhes de cada link, o que contorna o teto dos 1.000. Mais configuração, resultado mais completo.

### Opção B: importar para um gerenciador de favoritos (todo o resto)

Se um script te entregou um arquivo HTML de favoritos, importe-o diretamente num gerenciador — o Marqly ingere HTML de favoritos padrão exatamente como faz com [exportações de favoritos do Chrome](/pt/blog/exportar-favoritos-chrome), busca cada página e deixa a IA classificar e indexar. Seus permalinks anônimos voltam à vida como entradas com título, tags e pesquisáveis.

Para ser honesto sobre os limites: o Marqly não parseia o `saved_posts.csv` bruto do Reddit — a ponte é um arquivo HTML de favoritos, ou salvar individualmente os links que importam. E nenhum importador ressuscita um salvo cujo post original foi deletado; link morto é link morto em qualquer ferramenta.

### Opção C: a passada manual (coleções pequenas)

Se sua lista de salvos tem algumas dezenas de itens, pule as ferramentas por completo. Abra os posts salvos no navegador, percorra a lista e salve os que ficam com um clique direto no seu gerenciador de favoritos pela extensão. Vinte minutos, sem scripts, sem arqueologia de CSV — e como você estará tocando em cada item de qualquer jeito, a poda acontece de graça. É também o plano certo enquanto você espera os dias da exportação oficial.

## Etapa 5: Triagem, não acúmulo

Antes ou depois da importação, faça uma passada rápida pela lista. Anos de salvos são anos de "vou precisar disso" que nunca aconteceu. Um filtro prático: se você não lembra por que salvou e o título não dispara nada, deixe ir. O que sobrevive à triagem é a sua biblioteca de referência de verdade — normalmente 20–30% da lista crua — e uma biblioteca menor e intencional vence um acervo completo mas inutilizável. (Mais sobre tornar uma biblioteca encontrável em [como organizar favoritos](/pt/blog/organizar-favoritos-navegador).)

## Corrija o hábito, não só o passivo

A exportação resolve o passado. O mesmo problema recomeça a se reconstruir no instante em que você clicar em Salvar no próximo thread, porque o botão de salvar do Reddit continuará sendo uma lista sem busca, com teto e hostil a exportações no ano que vem.

O padrão durável tem dois andares:

- **Continue usando o botão de salvar do Reddit** como uma inbox rápida enquanto você rola o feed.
- **Migore os que merecem ficar para fora** no momento em que os reconhecer. Com a extensão de um gerenciador de favoritos é um clique no thread: o Marqly salva o link, classifica automaticamente e torna encontrável depois descrevendo o que você lembra — "aquele thread em que um encanador explicou anodos de aquecedor" — sem título, subreddit ou username. Isso é busca semântica fazendo o que a lista de salvos do Reddit nunca pôde, e é a espinha dorsal de um [segundo cérebro que realmente recupera coisas](/pt/blog/como-construir-um-segundo-cerebro-2026).

O Reddit continua sendo seu feed de descoberta. Sua biblioteca mora em algum lugar com botão de exportar.

## Recap rápido

1. **reddit.com/settings/data-request** → histórico completo da conta → enviar.
2. **Baixe o ZIP** do link na sua inbox (até 30 dias; geralmente muito menos).
3. **Espere links nus** — o `saved_posts.csv` é só IDs e permalinks.
4. **Enriqueça e importe**: script open-source → HTML de favoritos → para um gerenciador como o [Marqly](https://app.marqly.com).
5. **Mude o hábito**: salvos do Reddit como inbox, um clique para a sua própria biblioteca nos guardados.

Peça a exportação hoje mesmo se não for processar esta semana — é a única cópia que existe dos seus salvos anteriores ao milésimo, e custa dois minutos.
