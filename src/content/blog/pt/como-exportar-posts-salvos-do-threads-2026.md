---
title: "Como exportar seus posts salvos do Threads em 2026 (Central de Contas, passo a passo)"
seoTitle: "Como Exportar seus Posts Salvos do Threads (2026) | Marqly"
description: "O Threads não tem export de salvamentos. Use a solicitação de dados da Central de Contas da Meta, confira o que o arquivo realmente inclui e reconstrua os salvamentos como links pesquisáveis."
pubDate: 2026-10-07
category: "Guias"
targetKeyword: "exportar posts salvos threads"
tags:
  - "exportar posts salvos threads"
  - "baixar dados threads"
  - "export colecoes threads"
  - "backup threads"
  - "central de contas meta download"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
ogImage: "https://www.marqly.com/og/export-threads-posts.png"
faqs:
  - q: "O Threads tem botão de exportação para posts salvos?"
    a: "Não. A tela de salvos (e as coleções em que você os organiza) não tem export, não tem «me envie essa lista por e-mail», não tem CSV. O único jeito oficial de tirar os dados que o Threads guarda é a ferramenta Baixar suas informações da Meta, compartilhada entre Instagram, Facebook e Threads pela Central de Contas."
  - q: "Como baixo meus dados do Threads?"
    a: "No app Threads, abra Configurações e toque na Central de Contas (o Threads roda com seu login do Instagram), depois vá em Suas informações e permissões, Baixar suas informações, escolha Threads, selecione formato e intervalo de datas e envie. A Meta manda um link de download por e-mail quando o arquivo fica pronto e diz que a preparação pode levar até 30 dias, embora pedidos específicos costumem chegar muito antes."
  - q: "Meus posts salvos estão dentro do download do Threads?"
    a: "Trate isso como questão em aberto e verifique no seu próprio arquivo. O fluxo de solicitação da Meta cobre o conteúdo que o Threads armazena sobre você, mas a documentação de ajuda alcançável na época da pesquisa não detalha se os posts de outros usuários que você salvou — em oposição aos seus próprios posts e respostas — aparecem na saída. Rode uma solicitação e procure «saved» na pasta do Threads extraída antes de assumir cobertura."
  - q: "Os links dos posts salvos ainda vão funcionar?"
    a: "Posts públicos do Threads no threads.com normalmente abrem em navegador deslogado, então os links exportados continuam com sentido por mais tempo do que em plataformas com pedágio de login. Um post apagado pelo autor some da sua coleção e não resolve nada em qualquer export que você fez."
  - q: "Posso importar meus posts salvos do Threads no Marqly?"
    a: "Só pelos links. O Marqly importa HTML de bookmarks de navegador e CSV genérico, não os arquivos de dados do Threads, então uma etapa de conversão (ou o re-salvamento manual dos que ficam) fica no meio. A importação não preserva as datas de salvamento originais — os itens recebem a data do import — e a marcação automática de importados é recurso Pro."
---

O Threads deixa você salvar posts em coleções e não dá nenhum jeito de exportá-las. Não há botão na tela de salvos nem solicitação de arquivo. A saída oficial para o que o Threads guarda é a ferramenta compartilhada Baixar suas informações da Meta, acessada pela Central de Contas — a mesma máquina por trás do [export dos posts salvos do Instagram](/pt/blog/como-exportar-posts-salvos-do-instagram-2026). Aqui está a rota, uma declaração honesta do que o arquivo se confirma conter, e como colocar seus posts salvos em algo pesquisável.

## O estado das coisas (e o que não foi possível verificar)

O Threads é o app de texto do Instagram — as contas são contas do Instagram, e a documentação de ajuda do Threads vive no ecossistema da Central de Contas da Meta. Dois fatos importam para qualquer plano de resgate:

1. **Salvamentos existem, mas lacrados.** O Threads adicionou a capacidade de salvar posts em coleções, e essas coleções não têm rota de export, não têm opção de «me envie a lista», não têm API para apontar.
2. **A documentação da Meta específica do Threads estava inacessível enquanto este guia era escrito.** O domínio de ajuda do Threads não resolveu para o nosso pesquisador em 5 de outubro de 2026, então este guia afirma apenas o que o fluxo compartilhado da Central de Contas da Meta e as páginas de produto do Threads sustentam, e marca todo o resto para checagem prática.

## Suas rotas de exportação num relance

<table>
  <thead>
    <tr>
      <th>Rota</th>
      <th>O que você recebe</th>
      <th>Formato de arquivo</th>
      <th>Limites</th>
      <th>Armadilha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Central de Contas → Baixar suas informações → Threads</td>
      <td>O arquivo da Meta dos seus dados do Threads (seus posts, respostas, atividade)</td>
      <td>JSON ou HTML, conforme as escolhas da solicitação</td>
      <td>A Meta diz até 30 dias; o link expira após a entrega</td>
      <td>Se os posts salvos de outros usuários são itemizados não está confirmado na documentação alcançável</td>
    </tr>
    <tr>
      <td>Copiar o link manualmente, post salvo por post</td>
      <td>A URL threads.com de um post</td>
      <td>Texto</td>
      <td>Um por vez</td>
      <td>O único jeito garantido de capturar o conteúdo atual das coleções</td>
    </tr>
    <tr>
      <td>Solicitação pelo lado do Instagram (mesma Central de Contas)</td>
      <td>Seu arquivo do Instagram, incluindo posts salvos</td>
      <td>JSON ou HTML</td>
      <td>Mesma máquina da Meta</td>
      <td>Salvamentos do Threads não são os do Instagram — solicitar o Instagram cobre outra coleção</td>
    </tr>
    <tr>
      <td>Scrapers não oficiais do threads.com</td>
      <td>O que conseguirem antes de quebrar</td>
      <td>Variável</td>
      <td>Nenhum documentado</td>
      <td>Contra o espírito dos termos da plataforma e muitas vezes contra a letra; o risco de conta é seu</td>
    </tr>
  </tbody>
</table>

## Passo 1: abrir a solicitação na Central de Contas

O Threads conecta você pelo Instagram, e os controles de conta vivem na Central de Contas da Meta — a mesma ferramenta documentada para os downloads de dados do Instagram (verificado em 5 de outubro de 2026, fonte: o fluxo descrito em https://help.instagram.com e executado em accountscenter.instagram.com / accountscenter.facebook.com; a visão de produto do Threads está em https://about.instagram.com/threads e o app em si em https://www.threads.com — «Entre com sua conta do Instagram»).

1. No app Threads: **Configurações** → toque no banner da **Central de Contas** (os rótulos variam por versão).
2. Abra **Suas informações e permissões** → **Baixar suas informações**.
3. Inicie uma nova solicitação e escolha **Threads** como produto.
4. Escolha **Algumas informações** se o fluxo oferecer seleção granular, e procure uma opção de salvos/coleções; senão, solicite o conjunto completo de dados do Threads.
5. Escolha **JSON** se você planeja converter, **HTML** se só quer navegar.
6. Defina o intervalo de datas para todo o período, envie e fique de olho no e-mail.

O pior caso declarado pela Meta para a preparação do arquivo é até 30 dias, e — como no Instagram — o link de download entregue expira depois de poucos dias: pegue o ZIP quando ele chegar em vez de deixá-lo envelhecendo na caixa de entrada. Se nenhum e-mail aparecer depois de uma semana, confira o status da solicitação dentro da própria Central de Contas; solicitações concluídas ficam listadas lá mesmo quando o e-mail se perde.

## Passo 2: descobrir o que você realmente recebeu

Extraia o ZIP e abra a pasta **Threads**. O que a Meta declara: o conjunto de dados do Threads cobre *sua* atividade — posts e respostas que você escreveu, e os dados de conta por trás deles. O que não está documentado em nenhuma página de ajuda do Threads alcançável: uma afirmação itemizada de que posts de outros usuários que você salvou aparecem, com timestamps, num arquivo dedicado.

A instrução honesta é, portanto: **procure seus salvamentos no arquivo, e não confie nem no silêncio deste guia em qualquer direção.**

- Procure uma pasta ou arquivo nomeado no estilo de `saved` ou `collections` dentro do diretório do Threads; compare a contagem de itens com a sua coleção no app.
- Se os salvamentos estiverem lá, cada entrada muito provavelmente será **um link para o post mais um timestamp de salvamento** — o Threads armazena conteúdo de outras pessoas como referências, não cópias, exatamente como o arquivo `saved_posts` do Instagram funciona.
- Se os salvamentos estiverem ausentes do seu arquivo, o método copiar-link é sua rota de captura, e abrir uma **solicitação de exercício de direitos** pelo fluxo de suporte da Central de Contas é a escalada se você precisar da lista completa sob a lei de privacidade aplicável.

## O que o arquivo realmente contém (a parte confirmada)

Para as partes em que você pode contar — seu próprio conteúdo e atividade — espere JSON estruturado (ou HTML navegável) descrevendo posts e respostas do Threads com identificadores, texto, timestamps e referências de mídia. Se os salvamentos estiverem incluídos no seu arquivo, leia-os como uma **lista de links**: URLs públicas `threads.com/@user/post/...`. A boa notícia específica do Threads: posts públicos normalmente são exibidos para visitantes deslogados no threads.com, então os links exportados mantêm o sentido por mais tempo do que em plataformas com pedágio de login — até o autor apagar, ponto em que o link apodrece exatamente como o de todo mundo.

Esse relógio do apodrecimento é o argumento para agir agora. O Threads é jovem; seus usuários apagam e abandonam contas em taxas de plataforma jovem.

## Transformar a lista em biblioteca

**Se o arquivo tem seus salvamentos:** achate os links dos posts num CSV com coluna de URL (um script, ou um assistente ao qual você mostra o formato do arquivo, faz isso em minutos). A importação do Marqly aceita CSV genérico mais HTML de bookmarks de navegador padrão — `.html`, `.htm`, `.csv`, até 10 MB grátis / 30 MB Pro, 10.000 bookmarks por arquivo — e busca e indexa o que importa, então posts públicos do threads.com voltam com texto recuperável. Diga os limites com franqueza: o import **não carrega suas datas de salvamento originais** — tudo chega com a data do import — e **a marcação automática é recurso Pro**; o plano gratuito (100 salvamentos, biblioteca inteira pesquisável por palavras-chave) mantém as tags dos importados. Confira um arquivo convertido no [visualizador de arquivos de bookmarks](/tools/bookmark-file-viewer) antes de importar.

**Se o arquivo não tem (ou enquanto espera):** faça triagem à mão. Abra suas coleções da mais recente para a mais antiga e re-salve os que ficam pelo navegador com a [extensão Marqly](/pt/gerenciador-favoritos-chrome) — Chrome, Edge, Firefox, Safari, mais apps iOS e Android. Trabalhoso para quatrocentos salvos; mas duzentos curados com suas tags vencem um arquivo completo que você não consegue pesquisar, e é a mesma lição de organizar qualquer outro acúmulo ([como organizar bookmarks](/pt/blog/organizar-favoritos-navegador)).

**A correção do hábito:** continue salvando no Threads pelo feed, mas quando um post for genuinamente material de referência — a thread sobre avaliação de prompts, o professor compartilhando um fluxo de trabalho de listas — mande para um lugar com botão de exportação. O texto nativo do Threads é metadado fino para qualquer busca futura; adicione sua anotação no momento do salvamento para a coisa ser encontrável por significado depois ([encontrar um bookmark cujo título você esqueceu](/faq/how-do-i-find-a-bookmark-i-forgot-the-title-of)). Se a maior parte dos seus salvamentos é conversa, não conteúdo, o [guia dos salvos do Reddit](/pt/blog/como-exportar-posts-salvos-do-reddit-2026) é o irmão mais próximo.

## Quando NÃO usar o Marqly

- **O próprio arquivo é o entregável.** Se você está recolhendo para uma retenção legal, uma transferência de conta ou um registro de direitos de privacidade, o arquivo cru da Meta é o artefato — não substitua por uma biblioteca curada.
- **Você vive nas respostas.** As *conversas* salvas (threads que você relê no contexto) perdem o sentido de árvore de respostas como links isolados; manter a coleção no app talvez seja honestamente o certo.
- **Posts pesados em mídia.** Um post de imagem ou vídeo salvo como link é re-renderizado, mas o Marqly guarda páginas, não cópias da mídia de outras pessoas. Para o que você precisa manter mesmo que o post morra, primeiro tire um print ou salve o arquivo localmente.

## FAQ

**O Threads tem botão de exportação para posts salvos?**
Não. Salvos e coleções não têm rota de export no app; a única porta oficial é o Baixar suas informações da Meta pela Central de Contas.

**Como baixo meus dados do Threads?**
Configurações do Threads → Central de Contas → Suas informações e permissões → Baixar suas informações → Threads → escolha formato e intervalo de datas. A Meta cita até 30 dias para a preparação; o link enviado por e-mail expira em poucos dias da entrega. (Segue o fluxo compartilhado da Central de Contas da Meta; veja o alerta de honestidade mais acima quanto aos rótulos específicos do Threads.)

**Meus posts salvos estão dentro do download do Threads?**
Não confirmado pela documentação alcançável — a doc da Meta descreve em detalhe a sua própria atividade e deixa os salvamentos sem documentação. Rode a solicitação, procure na pasta do Threads um arquivo de salvos ou coleções, e compare as contagens com o seu app antes de confiar em qualquer resultado.

**Os links exportados vão continuar funcionando?**
Posts públicos do threads.com são exibidos deslogados, então os links ficam legíveis por mais tempo do que em plataformas com pedágio de login — até um autor apagar, momento em que o link é uma página morta em cada cópia que você tem.

**Posso importar meus posts salvos do Threads no Marqly?**
Converta os links primeiro para CSV ou HTML de bookmarks — o Marqly importa esses, busca as páginas públicas e não preserva as datas de salvamento originais. Marcação automática de importados é Pro; o plano gratuito mantém suas tags e a biblioteca multiplataforma intactas ([salvar para ler depois aqui](/pt/salvar-para-ler-depois)).

## Resumo rápido

1. **Sem export nos salvos** — o download da Central de Contas da Meta é a única rota oficial.
2. **Solicite seus dados do Threads agora** (até 30 dias no pior caso; baixe o ZIP sem demora — os links expiram).
3. **Verifique a inclusão dos salvamentos no seu próprio arquivo** — a documentação não resolve.
4. **Achate os links dos que ficam em CSV/HTML** e coloque-os onde a busca funciona — como o [Marqly](https://app.marqly.com) — ou re-salve à mão enquanto espera.
