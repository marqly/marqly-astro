---
title: "Como salvar uma página da web em PDF (sem a bagunça de sempre)"
seoTitle: "Como Salvar Página Web em PDF: 3 Maneiras Fáceis | Marqly"
description: "Ctrl+P funciona até as imagens saírem em branco e o texto ser cortado. Três formas de salvar uma página da web em PDF fiel ao que você vê na tela."
pubDate: 2026-07-04
updatedDate: 2026-10-06
category: "Guias"
targetKeyword: "salvar pagina web como pdf"
tags:
  - "salvar pagina web como pdf chrome"
  - "pagina web para pdf sem cortes"
  - "converter pagina web em pdf"
  - "imprimir pagina em pdf"
ctaUrl: "https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc"
ctaLabel: "Instalar extensão grátis"
lang: "pt"
faqs:
  - q: "Como salvo uma página da web em PDF gratuitamente?"
    a: "Aperte Ctrl+P no Windows ou Cmd+P no Mac, defina o destino como Salvar como PDF e clique em Salvar. Todo navegador principal tem isso embutido e não custa nada. Funciona bem em páginas de artigo simples. Em páginas com layout pesado, espere formatação quebrada, imagens em branco e conteúdo cortado, porque o navegador imprime uma versão estilizada para papel, não o que você vê na tela."
  - q: "Por que páginas da web saem cortadas quando salvo em PDF?"
    a: "Porque a caixa de diálogo de impressão re-renderiza a página para papel, não para sua tela. Sites trazem uma folha de estilo de impressão separada, elementos de largura fixa não se ajustam à página, e tudo que for mais largo que a área imprimível é recortado na borda. Ferramentas que capturam o layout da tela em vez do layout de impressão — como a extensão do Marqly no Chrome e no Edge — evitam o problema."
  - q: "Por que as imagens saem em branco ou faltando no PDF salvo?"
    a: "Lazy loading. A maioria dos sites modernos só carrega as imagens conforme você rola até elas, e a caixa de impressão não rola — então tudo que estava abaixo da dobra nunca foi carregado quando a captura rodou. A correção rápida é rolar até o fim da página antes de imprimir. O Salvar como PDF do Marqly pré-rola a página automaticamente, de modo que as imagens lazy-loaded já estão no lugar quando ele captura."
  - q: "Posso salvar uma página atrás de login como PDF?"
    a: "Sim, se a captura acontecer no seu próprio navegador. A caixa de impressão e as extensões veem a página exatamente como sua sessão logada renderiza. Sites conversores não podem — eles buscam a URL dos próprios servidores, que não estão logados, e recebem a versão deslogada ou uma parede de login. Para qualquer coisa privada, mantenha a captura local."
  - q: "Como salvo uma página da web em PDF no Chrome sem sair quebrado?"
    a: "Instale a extensão do Marqly, abra o diálogo de salvamento na página e escolha Salvar como PDF no menu de três pontos. Ela captura o layout de tela que o Chrome está de fato renderizando, pré-rola para as imagens carregarem e baixa o PDF para a sua máquina — nada é enviado para fora. A página é favoritada ao mesmo tempo, então o link vivo e a cópia congelada ficam juntos."
heroImage: ../../../assets/blog/save-webpage-as-pdf.png
heroAlt: "Como salvar uma página da web em PDF sem a bagunça de sempre — ilustração"
ogImage: "https://www.marqly.com/og/save-webpage-as-pdf.png"
---

Para salvar uma página da web em PDF, aperte **Ctrl+P** (**Cmd+P** no Mac) e escolha **Salvar como PDF** como destino. Isso resolve no aperto. Para uma captura que parece a página real — imagens carregadas, nada cortado — use uma extensão de navegador que fotografa o layout de tela em vez do layout de impressão.

Essa segunda frase está fazendo muito trabalho. Todo mundo conhece o truque da impressão; você está lendo isto porque o resultado com frequência sai errado. Este guia cobre as três formas reais de converter página da web em PDF — o diálogo embutido, sites conversores e uma extensão — e é honesto sobre onde cada uma quebra.

## Como salvar uma página da web em PDF pelo diálogo de impressão?

O jeito embutido funciona em Chrome, Edge, Firefox e Safari, em todo sistema operacional, de graça:

1. Abra a página e deixe carregar por completo.
2. Aperte **Ctrl+P** no Windows e Linux, ou **Cmd+P** no Mac. (No Chrome, é o mesmo que Menu → Imprimir.)
3. Defina o **Destino** como **Salvar como PDF**.
4. Em **Mais configurações**, ligue **Gráficos de fundo** se a prévia estiver lavada, e reduza a escala se o texto estiver sendo cortado nas bordas.
5. Clique em **Salvar** e escolha o local.

Para uma página de artigo simples — uma coluna, quase texto — isso é genuinamente bom, e deveria ser seu padrão. Nada para instalar, nada enviado a lugar nenhum, e funciona atrás de login porque captura a sua própria sessão do navegador.

O problema começa em páginas do mundo real. Quatro modos de falha aparecem o tempo todo:

- **O layout quebra.** A página renderiza no seu estilo "de impressão", não no que você estava olhando — colunas colapsam e o espaçamento fica estranho.
- **As imagens saem em branco.** Tudo que estava abaixo da dobra e ainda não tinha carregado imprime como caixa vazia.
- **O lixo é capturado.** Banners de cookies, popups de newsletter e bolhas de chat caem no meio da captura.
- **Conteúdo é cortado.** Tabelas largas, blocos de código e seções de largura fixa são recortados na borda da página.

Se a prévia de impressão parece certa, salve. Se não, mexer em margem nenhuma vai consertar de forma confiável — o problema está em como a página está sendo renderizada, não nas suas configurações.

## Por que páginas da web saem cortadas ou quebradas em PDF?

Porque imprimir não captura a página que você está olhando — o navegador **reconstrói a página para papel** e captura isso. Três coisas dão errado na reconstrução:

**Folhas de estilo de impressão.** Muitos sites trazem um segundo conjunto de regras de layout que só se aplica quando você imprime. Elas foram escritas uma vez, anos atrás, geralmente para uma versão mais simples do site. No instante em que você aperta Ctrl+P, a página que você vê é trocada por essa versão de impressão — e se ela estiver defasada ou meio inacabada, o PDF herda cada defeito.

**Lazy loading.** Sites modernos não carregam todas as imagens de uma vez; carregam conforme você rola até elas. O diálogo de impressão não rola. Então qualquer imagem que você nunca rolou até ver simplesmente não existe ainda quando a captura roda, e imprime como caixa em branco ou placeholder cinza.

**Layouts dependentes de viewport.** Páginas se dimensionam à sua janela do navegador, que pode ter 1.400 pixels de largura. Papel é um canvas fixo, mais estreito. Elementos flexíveis se reorganizam para caber; elementos de largura fixa — tabelas, embeds, blocos de código — não. O que não consegue encolher é fatiado na borda imprimível. Esse é o problema de "página cortada no PDF" em uma frase.

Popups e banners de cookies são um quarto problema, mais burro: overlays são apenas elementos da página como qualquer outro, então, se você não os fechar antes, eles também saem impressos.

A correção para tudo isso é a mesma: capturar o **layout de tela** — a página como seu navegador a está de fato renderizando — em vez de pedir ao navegador que a reconstrua para papel.

## Devo usar um conversor online de página em PDF?

Sites conversores deixam você colar uma URL e baixar um PDF, sem nada instalar. É um uso justo para uma captura pontual de página **pública** — digamos, numa máquina corporativa travada onde você não pode adicionar extensões.

Eles vêm com três desvantagens reais:

- **Não veem páginas atrás de login.** O servidor do conversor busca a URL do zero, sem acesso à sua sessão — então dashboards privados, confirmações de pedido e conteúdo de membros voltam como parede de login.
- **Você está enviando a URL a um terceiro.** Para qualquer coisa sensível, é um não definitivo.
- **Os planos gratuitos são cheios de anúncios**, e a qualidade da saída varia selvagemente de site para site.

Use-os para capturas públicas, não sensíveis, únicas. Para todo o resto, mantenha a captura dentro do seu navegador.

## Como salvar uma página da web em PDF que parece a página real?

Use a extensão do Marqly. O Salvar como PDF dela captura a página **como ela realmente aparece na sua tela** — layout de tela, não de impressão — o que contorna cada modo de falha acima:

1. [Instale a extensão do Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc) (grátis).
2. Na página desejada, clique no ícone do Marqly para abrir o diálogo de salvamento.
3. Abra o menu **⋯** no diálogo e escolha **Salvar como PDF**.
4. Escolha opções de formato e layout se quiser, ou aceite os padrões.
5. O PDF baixa na sua máquina — e a página é favoritada na sua biblioteca Marqly ao mesmo tempo.

Por baixo, ele **pré-rola a página primeiro**, para que imagens lazy-loaded estejam totalmente carregadas antes da captura rodar — sem caixas em branco. E como fotografa a renderização de tela em vez de uma folha de estilo de impressão, layouts largos vêm como você os viu, sem recorte.

Duas ressalvas honestas. A captura de maior fidelidade funciona no **Chrome e no Edge**; em outros navegadores a extensão cai no fluxo padrão de impressão, então você obtém o mesmo resultado do Ctrl+P. E tudo roda **localmente no seu navegador** — a página nunca é enviada para lugar nenhum — o que também significa que funciona bem atrás de login.

O que é fácil de subvalorar: o PDF e o favorito viajam juntos. Um PDF solto na pasta de Downloads é onde documentos vão morrer. Aqui, a cópia congelada e o link vivo moram na mesma entrada da biblioteca, então seis meses depois você encontra qualquer um dos dois.

## Qual método você deve usar?

| | Diálogo de impressão | Site conversor | Extensão Marqly |
| --- | --- | --- | --- |
| Parece a página real | ⚠️ Layout de impressão, quebra com frequência | ⚠️ Depende da sorte | ✅ Layout de tela (Chrome, Edge) |
| Imagens lazy-loaded incluídas | ❌ Em branco abaixo da dobra | ⚠️ Depende do site | ✅ Pré-rola antes |
| Funciona atrás de login | ✅ Sim | ❌ Não | ✅ Sim |
| Fica com a sua biblioteca | ❌ Arquivo solto | ❌ Arquivo solto | ✅ Favoritado automaticamente |

Versão curta: diálogo de impressão para páginas de artigo simples, sites conversores para capturas públicas pontuais em máquinas que você não controla, e a extensão quando o PDF precisa parecer a página que você viu.

## Quando salvar um PDF em vez de apenas favoritar?

Salve um PDF quando precisar **congelar um momento no tempo**. Um favorito aponta para uma página viva; a página pode mudar, entrar atrás de paywall ou desaparecer — link rot reclama uma parte surpreendente da web a cada ano. Um PDF é sua prova do que a página dizia no dia em que você a salvou.

Isso faz dos PDFs a escolha certa para:

- **Recibos, faturas e confirmações de pedido**
- **Dados de reservas e agendamentos**
- **Termos, políticas e páginas de preço** que você talvez precise citar depois
- **Qualquer coisa que você espera ver editada ou removida**

Para todo o resto — artigos, referências, pesquisa — um favorito é melhor, porque continua pesquisável e atual. Melhor ainda: favorite a página e [destaque as partes que realmente importam](/pt/blog/como-destacar-texto-em-qualquer-site-2026), assim você fica com a sacada sem acumular arquivo. Se sua pilha de salvos é feita sobretudo de leituras longas, um app de ler depois de verdade — como os das [melhores apps de salvar para ler depois em 2026](/pt/blog/melhores-apps-salvar-para-ler-depois-2026) — ganha de longe de uma pasta de PDFs.

O fluxo que se sustenta no longo prazo: favoritar por padrão, PDF para o insubstituível, e manter os dois em um único lugar pesquisável — esse é o núcleo sem graça, confiável, de [organizar seus favoritos](/pt/blog/organizar-favoritos-navegador) para que continuem encontráveis depois, e o primeiro passo honesto para [construir um segundo cérebro](/pt/blog/como-construir-um-segundo-cerebro-2026) em vez de uma gaveta de bugigangas.

## Salve a página, mantenha o link

O Ctrl+P estará sempre lá, e para um artigo puro é tudo o que você precisa. Mas no dia em que você precisar de uma página capturada *exatamente* — imagens carregadas, nada cortado, nenhum banner de cookies fotobombando o meio — o diálogo de impressão é a ferramenta errada.

[Instale a extensão grátis do Marqly](https://chromewebstore.google.com/detail/marqly-all-in-one-bookmar/kcadneobjofkppmekgadodnaojoehemc), abra o menu ⋯ quando salvar uma página e clique em Salvar como PDF. A cópia congelada chega à sua máquina, o link vivo chega à sua biblioteca, e nada sai do seu navegador.

---

*Relacionado: [Como organizar favoritos para você achar de verdade](/pt/blog/organizar-favoritos-navegador) · [As melhores apps de salvar para ler depois em 2026](/pt/blog/melhores-apps-salvar-para-ler-depois-2026)*
