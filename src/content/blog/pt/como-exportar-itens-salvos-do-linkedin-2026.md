---
title: "Como exportar seus itens salvos do LinkedIn em 2026 (Baixar seus dados, passo a passo)"
seoTitle: "Como Exportar seus Itens Salvos do LinkedIn (2026) | Marqly"
description: "O LinkedIn exporta os itens salvos só como datas e URLs. Veja o caminho do download, o que o arquivo guarda e como transformar salvamentos numa biblioteca pesquisável."
pubDate: 2026-10-07
category: "Guias"
targetKeyword: "exportar itens salvos do linkedin"
tags:
  - "exportar itens salvos do linkedin"
  - "baixar seus dados linkedin"
  - "export artigos salvos linkedin"
  - "export csv dados linkedin"
  - "backup newsletters linkedin"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
ogImage: "https://www.marqly.com/og/export-linkedin-saved-items.png"
faqs:
  - q: "Como eu exporto meus itens salvos no LinkedIn?"
    a: "Clique no ícone Eu, vá em Configurações e privacidade, abra Privacidade de dados na coluna da esquerda e use Baixar seus dados na seção «Como o LinkedIn usa seus dados». Selecione a categoria Itens salvos (Saved Items) e solicite o arquivo; o artigo de ajuda do LinkedIn diz que uma solicitação de categoria específica chega por e-mail em minutos e o link fica utilizável por 72 horas."
  - q: "O export do LinkedIn inclui o conteúdo do que eu salvei?"
    a: "Não. A descrição oficial do LinkedIn da categoria Saved Items é que ela contém a data de salvamento e a URL de um post, artigo ou outro conteúdo — nada além. O artigo também é explícito: o LinkedIn só fornece seus dados pessoais, não os de outros membros, então posts e artigos que você salvou chegam como links."
  - q: "Posso exportar as newsletters que sigo no LinkedIn?"
    a: "A lista publicada de categorias de dados exportáveis do LinkedIn não inclui uma categoria de newsletters. Company Follows dá as empresas que você segue com datas, Member Follows dá as pessoas, mas as edições das newsletters que você segue não são um export itemizado. O que não está coberto cai no formulário de solicitação de acesso a dados do LinkedIn."
  - q: "Por que parte do meu arquivo do LinkedIn chegou antes do resto?"
    a: "O LinkedIn escalona a entrega por categoria: uma lista de categorias fica disponível em 10 minutos após o pedido, outra em até 48 horas, e um download completo de todas as categorias leva até 24 horas só para receber o e-mail de solicitação. Saved Items está no lote mais lento."
  - q: "Posso importar meus itens salvos do LinkedIn no Marqly?"
    a: "Depois de uma conversão leve, sim. Os dados de itens salvos são uma tabela de data e URL; jogue as URLs num CSV simples com coluna de URL e a importação de CSV genérico do Marqly aceita (HTML de bookmarks de navegador também funciona). A importação não preserva suas datas de salvamento originais do LinkedIn — os itens recebem a data do import — e a marcação automática de importados é um recurso Pro."
---

O LinkedIn tem uma única exportação oficial para salvamentos: Configurações e privacidade → Privacidade de dados → Baixar seus dados, com uma categoria **Saved Items** dedicada. É exatamente o que o nome sugere — para cada artigo ou post em que você tocou no marcador, você recebe a **data de salvamento e a URL**, nunca o conteúdo. Aqui está o caminho verificado, o que o arquivo guarda e o que não guarda (newsletters: basicamente nada), e como transformar uma tabela de duas colunas numa biblioteca de pesquisa.

## O que «salvo» realmente significa no LinkedIn

O botão Salvar do LinkedIn virou discretamente uma das exportações mais úteis de solicitar, porque a categoria Saved Items inclui um timestamp. A pegadinha é o escopo:

- **Links, não cópias.** Um post salvo é dado de outro membro; o LinkedIn diz com todas as letras que só fornecerá seus dados pessoais, não os de outros membros (verificado em 5 de outubro de 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364). Posts apagados apodrecem no arquivo do mesmo jeito que apodrecem na sua tela de Salvos.
- **Vagas são à parte.** Vagas salvas, alertas de vaga salvos e candidaturas têm categorias próprias — Saves são artigos e posts, não o conceito inteiro de «salvo».
- **Newsletters são o buraco.** Newsletters seguidas não são categoria exportável, e edições que você salvou não são itemizadas. Falo mais abaixo.

Se seus salvamentos cresceram além da visualização do app — a mesma falha dos [bookmarks do X](/pt/blog/como-exportar-itens-salvos-do-twitter-x-2026) — eis como tirá-los de lá.

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
      <td>Privacidade de dados → Baixar seus dados → Saved Items</td>
      <td>Data de salvamento + URL por item</td>
      <td>Arquivos de dados por categoria no arquivo ZIP</td>
      <td>E-mail em minutos (pedido específico) a 48 horas; link válido por 72 horas</td>
      <td>Só no computador; sem conteúdo, apenas links</td>
    </tr>
    <tr>
      <td>Mesma ferramenta → Saved Jobs / Saved Job Alerts / Job Applications</td>
      <td>Data do salvamento, título, empresa, URL da vaga</td>
      <td>Arquivos de dados por categoria</td>
      <td>Categoria rápida (lote dos 10 minutos)</td>
      <td>URLs de vagas hospedadas no LinkedIn expiram quando a vaga fecha</td>
    </tr>
    <tr>
      <td>Mesma ferramenta → Company Follows / Member Follows</td>
      <td>Quem e o que você segue, com datas</td>
      <td>Arquivos de dados por categoria</td>
      <td>Só os follows, não o conteúdo deles</td>
      <td>Não é arquivo de newsletters; nenhuma edição é exportada</td>
    </tr>
    <tr>
      <td>Manual: abrir um artigo salvo, salvar com o navegador</td>
      <td>A página de verdade, título incluso</td>
      <td>O que o seu gerenciador guardar</td>
      <td>Um item por vez</td>
      <td>São sobretudo artigos externos, então a busca é limpa — a rota de maior fidelidade para os que ficam</td>
    </tr>
    <tr>
      <td>Membros da UE/EEE/Suíça: APIs de portabilidade</td>
      <td>Acesso programático aos seus dados do LinkedIn</td>
      <td>Saída de API</td>
      <td>Elegibilidade regional</td>
      <td>Rota de desenvolvedor; documentada no artigo de ajuda do LinkedIn sobre as Member Portability APIs</td>
    </tr>
  </tbody>
</table>

## Passo a passo: solicitar o export de Saved Items

O artigo de ajuda «Baixar seus dados» do LinkedIn traça o caminho atual (verificado em 5 de outubro de 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364):

1. No linkedin.com, clique no ícone **Eu** no topo da sua página inicial.
2. Selecione **Configurações e privacidade** (dá para chegar direto em https://www.linkedin.com/psettings/data-privacy/).
3. Clique em **Privacidade de dados** na coluna da esquerda.
4. Sob a seção **Como o LinkedIn usa seus dados**, clique em **Baixar seus dados**.
5. Escolha **Selecionar os dados que você procura**, marque **Saved Items** (Itens salvos) — adicione **Vagas salvas**, **Empresas que sigo** ou **Conexões** se quiser tudo na mesma rodada.
6. Clique em **Solicitar arquivo**, depois abra o e-mail e baixe em até **72 horas**.

Três regras que o artigo enuncia, que vale repetir porque surpreendem: o download precisa ser feito de um **computador pessoal** — o recurso não está disponível no celular; uma solicitação de categoria específica chega por e-mail **em minutos**, enquanto um download grande de todas as categorias leva até **24 horas**; e as categorias chegam em relógios diferentes, com Saved Items no lote das **48 horas**. Você só recebe categorias que se aplicam à sua conta — nada de arquivo de certificações se você nunca listou certificações, e nada de arquivo de itens salvos se seus salvamentos estão vazios.

## O que o arquivo realmente contém

Conforme as próprias descrições de categoria do LinkedIn:

- **Saved Items** — «a data de salvamento e a URL de um post, artigo ou outro conteúdo.»
- **Saved Jobs** — data do salvamento, título da vaga, nome da empresa e a URL da vaga no LinkedIn.
- **Saved Job Alerts** — o termo de busca e a data.
- **Articles** — URLs dos artigos que *você* publicou (não os que você salvou).
- **Company Follows / Member Follows** — nomes e datas de seguir/deixar de seguir.
- **Reações, Comentários, Compartilhamentos** — datas e URLs do seu engajamento, se você os marcar.

O export de salvamentos é, portanto, uma verdade de duas colunas: **quando você salvou, e para onde apontava**. Duas consequências práticas:

1. **URLs de posts do LinkedIn têm pedágio de login.** Um link `linkedin.com/posts/...` salvo não abre para quem não está logado, e coletores de terceiros recebem um fantasma — seu próprio arquivo guardará links que você não consegue reabrir daqui a dez anos. Os salvamentos de artigos externos (os que redirecionam para os veículos) são os duráveis.
2. **Links de vaga são perecíveis.** As URLs de vagas do LinkedIn expiram quando a posição fecha; exporte suas Saved Jobs para seus registros no dia em que ainda precisa delas, não na hora da checagem de referências.

E o buraco honesto: **newsletters**. Dá para seguir newsletters e salvar os posts delas, mas a lista publicada de categorias exportáveis do LinkedIn não tem linha de newsletters. Company Follows e Member Follows cobrem quem você segue; as edições em si não são um conjunto de dados exportável. Para além das categorias listadas, o LinkedIn manda você ao seu formulário de solicitação de acesso a dados (verificado em 5 de outubro de 2026, fonte: https://www.linkedin.com/help/linkedin/ask/TS-DCR) — lento, e sem promessa de estrutura. Membros da UE/EEE/Suíça têm ainda a rota programática documentada em https://www.linkedin.com/help/linkedin/answer/a6214075.

## Transformar a tabela em biblioteca

O export é uma lista de URLs com data — matéria-prima, não base de conhecimento.

**Melhor resultado rápido: triagem e re-salvar.** Trabalhe a metade mais recente da lista de itens salvos. O que de fato é artigo externo — o post do setor, o benchmark de contratação, o ensaio — abra e salve direito com o [gerenciador de bookmarks do seu navegador](/pt/gerenciador-favoritos-chrome) (Chrome, Edge, Firefox e Safari estão cobertos, mais iOS e Android). Você ganha o título, a página inteira e a sua tag, no lugar onde vai realmente procurar depois.

**Rota em lote: converter e importar.** Entregue o arquivo de itens salvos a um script ou a um assistente e mande escrever um CSV simples com coluna de URL (guarde a coluna de data para os seus registros — veja o porquê abaixo). O Marqly importa CSV genérico, HTML de bookmarks de navegador, HTML do Raindrop e o list.csv do Pocket (não o HTML dele), em `.html`, `.htm` ou `.csv`, até 10 MB grátis / 30 MB Pro, 10.000 bookmarks por arquivo; os links importados são buscados e indexados, o que significa que salvamentos de artigos externos voltam como entradas tituladas e legíveis — enquanto links `linkedin.com/posts` importam magros, pela razão do pedágio de login acima. Diga os limites com franqueza: **suas datas de salvamento do LinkedIn não sobrevivem ao import** — cada item recebe a data em que você o importa — e **a marcação automática de importados é recurso Pro**; o plano gratuito (100 salvamentos, biblioteca inteira pesquisável por palavras-chave) preserva as tags que você mesmo colocar no arquivo. Pré-visualize um arquivo convertido no [visualizador de arquivos de bookmarks](/tools/bookmark-file-viewer) antes de uma rodada completa.

**Por que reconstruir vence o arquivo:** o sentido de resgatar salvamentos profissionais é reencontrá-los a frio. «Aquele texto de supply chain do Q3» deveria aparecer a partir de uma descrição, não da sua memória de quando salvou — para isso serve a [busca de bookmarks com IA](/pt/blog/o-que-e-busca-semantica), e isso vale em dose dupla para pesquisadores sentados sobre listas de centenas de links (veja a [página de pesquisadores](/pt/para-pesquisadores)). Para a metade «fila de leitura» dos seus salvamentos, a rota de [alternativa ao Pocket](/pt/alternativas/pocket) cobre a mesma pergunta de conversão pelo outro lado.

## Quando NÃO usar o Marqly

- **Cópias de conformidade.** Se o export é para um pedido de registro ou portabilidade GDPR (a Política de Privacidade do LinkedIn cobre os direitos: https://www.linkedin.com/legal/privacy-policy), guarde o arquivo cru do LinkedIn intacto — uma biblioteca curada não é o mesmo artefato.
- **Dados de rede.** Conexões, mensagens e convites são dados de pessoas, com ferramentas e ética próprias; um gerenciador de bookmarks é a casa errada para eles.
- **Pipeline de busca de emprego.** Se você gerencia vagas salvas ativamente, a experiência Jobs do LinkedIn vence qualquer re-salvamento; use o export para encerrar buscas antigas, não para conduzir as atuais.

## FAQ

**Como eu exporto meus itens salvos no LinkedIn?**
Ícone Eu → Configurações e privacidade → Privacidade de dados → Baixar seus dados → marque Saved Items → Solicitar arquivo. Pedidos de categoria específica chegam por e-mail em minutos; o link de download vale 72 horas. Só no computador (verificado em 5 de outubro de 2026, fonte: https://www.linkedin.com/help/linkedin/answer/a1339364).

**O export inclui o conteúdo do que salvei?**
Não — a data de salvamento e a URL de um post, artigo ou outro conteúdo. O LinkedIn não exporta dados de outros membros, então posts salvos chegam como links.

**Posso exportar as newsletters que sigo?**
Não existe categoria de newsletters na lista publicada. Follows (empresas, membros) são exportáveis; edições de newsletters, não. Fora da lista, é território do formulário de solicitação de acesso a dados, com saída lenta e indefinida.

**Por que meu arquivo chegou em pedaços?**
As categorias saem em dois relógios — um lote de 10 minutos e um de 48 horas — e um download da conta inteira só envia o e-mail dentro de 24 horas do protocolo. Saved Items está no lote lento.

**Posso importar o arquivo de itens salvos no Marqly?**
Converta antes para um CSV com coluna de URL — o Marqly aceita CSV genérico, HTML de bookmarks, list.csv do Pocket e HTML do Raindrop. Datas de salvamento não são preservadas (os itens recebem a data do import), e a marcação automática de importados é Pro. Para o [passo a passo de importação](/pt/blog/exportar-favoritos-chrome), a mecânica é a mesma.

## Resumo rápido

1. **Configurações e privacidade → Privacidade de dados → Baixar seus dados**, marque **Saved Items**, solicite de um computador pessoal.
2. Espere uma **tabela de data + URL**, e-mail rápido para pedido específico, **72 horas** para baixar.
3. **Sem conteúdo, sem export de newsletters**; links de posts do LinkedIn apodrecem atrás do login, então faça a triagem cedo.
4. Converta os que ficam para CSV, importe numa biblioteca pesquisável e multiplataforma — como o [Marqly](https://app.marqly.com) — e saiba que o import carimba a data de hoje, não suas datas de salvamento.
