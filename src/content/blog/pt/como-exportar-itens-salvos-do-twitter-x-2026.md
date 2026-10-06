---
title: "Como exportar seus itens salvos do X (Twitter) em 2026 (todos os métodos que funcionam)"
seoTitle: "Como Exportar Salvos do X (Twitter) em 2026 | Marqly"
description: "O arquivo de dados oficial do X não traz itens salvos. Veja como exportar seus favoritos do Twitter em 2026 e manter os novos salvos buscáveis."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guias"
targetKeyword: "exportar itens salvos twitter x"
tags:
  - "exportar itens salvos twitter"
  - "favoritos do x"
  - "limite de salvos twitter"
  - "backup twitter"
  - "arquivo de dados twitter"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
ogImage: "https://www.marqly.com/og/export-twitter-x-bookmarks.png"
faqs:
  - q: "O arquivo de dados oficial do X (Twitter) inclui os itens salvos?"
    a: "Não. O arquivo oficial que você solicita em Configurações → Sua conta → Baixar um arquivo dos seus dados contém seus posts, curtidas, mensagens diretas e listas de seguidores — mas não os itens salvos. Essa é uma decisão de produto deliberada, não um bug. Para exportar os bookmarks, você precisa de uma ferramenta de exportação baseada no navegador ou da API paga do X."
  - q: "Quantos itens salvos eu consigo realmente ver no X?"
    a: "Na prática, cerca dos 800 a 1.000 mais recentes. O X não publica um limite oficial, mas a página de itens salvos para de carregar itens antigos por volta desse ponto, e a API paginada também seca em número parecido. Itens salvos mais antigos não aparecem em lugar nenhum da interface — e é exatamente por isso que exportar os que você ainda alcança importa."
  - q: "Pastas de bookmarks e busca nos salvos do X são grátis?"
    a: "Não. Criar pastas de itens salvos e buscar dentro deles exige assinatura do X Premium. Contas grátis têm uma única lista em ordem cronológica reversa, sem busca — sua única opção é rolar a tela. Nenhum dos dois recursos eleva o teto prático de exibição dos itens mais antigos."
  - q: "Qual é a melhor forma de manter os itens salvos do X pesquisáveis no longo prazo?"
    a: "Salve os que valem a pena fora do X no momento em que você os marca. Um gerenciador de favoritos como o Marqly guarda o link em um clique direto do navegador, marca com IA automaticamente e torna o item encontrável por significado depois — então «aquele thread sobre psicologia de preço» aparece mesmo quando você esqueceu quem postou. O X continua sendo sua caixa de entrada; sua biblioteca mora em um lugar que você controla."
---

Aqui vai a verdade incômoda desde já: **o arquivo de dados oficial do X não inclui seus itens salvos.** Você pode baixar seus posts, curtidas, DMs e listas de seguidores — mas os bookmarks que você acumulou por anos ficam deliberadamente de fora. Para exportá-los em 2026, você precisa de uma ferramenta de exportação baseada no navegador, da API paga do X, ou de triagem manual. Este guia cobre cada rota, seus limites e a única mudança que impede o problema de se repetir.

## Por que exportar itens salvos do X é mais difícil do que deveria

Três decisões da plataforma se empilham contra você:

- **O arquivo de dados pula os itens salvos.** Todo outro tipo grande de dado está no export oficial. Os bookmarks não estão, e nunca estiveram.
- **Existe um teto prático de uns 800–1.000 itens visíveis.** O X não documenta limite oficial, mas a página de salvos para de carregar itens antigos por aí, e a API paginada seca em número parecido. O que passou desse teto é efetivamente inalcançável — ferramenta nenhuma exporta o que a plataforma não entrega mais.
- **Pastas e busca são exclusivos do Premium.** Contas grátis têm uma lista longa, cronológica reversa, sem busca. O Premium adiciona pastas e uma barra de busca, mas nenhum dos dois traz de volta itens que passaram do teto.

A lição prática: exporte o que você ainda alcança e pare de tratar os itens salvos do X como armazenamento de longo prazo. Se o encerramento do Pocket ensinou algo a quem salva links, foi que [salvamentos morando dentro da plataforma de outra pessoa estão sempre em risco](/pt/blog/como-exportar-migrar-dados-pocket-2026).

## Passo 1: solicite o arquivo oficial mesmo assim (por tudo, menos os salvos)

Mesmo sem conter itens salvos, o arquivo vale a pena ter — é a única cópia de segurança oficial dos seus posts, curtidas e DMs.

1. Em x.com, abra **Configurações e privacidade → Sua conta → Baixar um arquivo dos seus dados**.
2. Confirme sua senha (e 2FA, se ativada).
3. Clique em **Solicitar arquivo**. O X avisa que a preparação pode levar 24 horas ou mais; você recebe notificação e e-mail quando estiver pronto.
4. Baixe o ZIP na mesma tela de configurações. O link não fica ativo para sempre, então pegue logo.

Dentro você vai encontrar seus posts, curtidas, mensagens diretas, listas de seguidores/seguidos e dados de publicidade em JSON — e nenhum `bookmarks.js`. Isso é esperado. Agora, as rotas que realmente tiram seus itens salvos de lá.

## Passo 2: exporte com uma extensão do navegador (a rota que a maioria usa)

Como não existe export oficial, formou-se um pequeno ecossistema de extensões exportadoras. Todas funcionam igual: você abre sua página de itens salvos logado, a extensão rola a tela na sua própria sessão do navegador e grava o que encontra em um arquivo — normalmente CSV, JSON, Markdown ou um HTML de favoritos.

O fluxo genérico:

1. **Instale uma extensão exportadora** na Chrome Web Store (busque «export X bookmarks» — existem várias opções grátis e pagas).
2. **Abra x.com/i/bookmarks** nesse navegador, logado na sua conta.
3. **Inicie a exportação** pela extensão. Ela rola a página automaticamente, coletando cada post salvo conforme carrega. Uma biblioteca grande leva alguns minutos.
4. **Baixe o arquivo** e guarde uma cópia em lugar seguro — esta é a sua cópia de seguro.

Avisos honestos antes de escolher uma:

- **Essas ferramentas raspam a página, então quebram quando o X muda o markup.** Confira a data da última atualização e as avaliações recentes da extensão antes de confiar nela.
- **Elas só conseguem exportar o que o X ainda exibe** — os ~800–1.000 itens mais recentes. Nada recupera bookmarks que já saíram da lista.
- **Leia as permissões.** Um exportador precisa de acesso ao x.com; não precisa de acesso a todos os sites que você visita. Seja exigente.
- **Exporte o texto, não a experiência.** Você recebe o texto, o autor e o link de cada post. Threads, imagens e vídeos normalmente são só links de volta ao X — se o post for apagado, o link morre junto.

Existem também serviços gerenciadores de bookmarks específicos do X (Dewey e Tweetsmash são os nomes estabelecidos) que sincronizam seus salvos continuamente e oferecem export em CSV ou Markdown. São sólidos se os bookmarks do X forem sua biblioteca principal, mas são pagos e herdam o mesmo teto de visibilidade de todo mundo.

### Qual formato de exportação você deve escolher?

Se a ferramenta oferecer escolha, pegue **dois formatos**: um **arquivo HTML de favoritos**, se disponível (é o único que os gerenciadores de favoritos importam diretamente — o mesmo padrão que os navegadores exportam), e **CSV ou JSON** como arquivo bruto, pois preservam mais campos (texto do post, autor, data, link). Markdown é agradável para colar em apps de notas, mas o pior ponto de partida para importar em qualquer lugar. Espaço em disco é grátis; exporte uma vez nos dois e nunca mais repete o scroll.

## Passo 3: a rota da API do X (só para desenvolvedores)

A API v2 do X tem um endpoint de bookmarks, mas ele fica atrás dos tiers pagos de desenvolvedor, e a paginação seca em cerca de 800 bookmarks por usuário. A menos que você já tenha acesso pago à API e goste de escrever loops de paginação, esta rota custa mais esforço e dinheiro do que uma extensão pelo mesmo resultado. Ela existe; quase certamente você não precisa dela.

## Passo 4: triagem manual (só bibliotecas pequenas)

Se você tem menos de uns 100 itens salvos, pule o tooling. Abra x.com/i/bookmarks, role, e salve os guardáveis direto no gerenciador que você vai usar daqui para frente — um clique cada com uma extensão do navegador. Entediante além de cem itens, mas funciona como faxina dupla: a maioria descobre que metade dos próprios bookmarks não importa mais.

## O X Premium não resolve isso?

Parcialmente, e só dentro das muralhas. O Premium adiciona **pastas** de bookmarks e uma **barra de busca** na página de salvos — genuinamente úteis para os itens que você ainda consegue ver. Mas não muda nada no problema de fundo: o teto de exibição permanece, pastas não restauram itens que já saíram da lista, e continua não existindo botão de exportação em nenhum tier de assinatura. O Premium reorganiza seus bookmarks recentes; não te dá a posse deles. Pagar por organização dentro de uma plataforma que não deixa os dados saírem é tratar o sintoma.

## Passo 5: coloque a exportação em algum lugar útil

Um CSV na pasta de Downloads é um backup, não uma biblioteca. Você não vai abri-lo, e não consegue pesquisá-lo do navegador. Duas opções:

- **Guarde o arquivo bruto como arquivo morto.** Ok como seguro — a mesma lógica de manter o arquivo de export do Pocket.
- **Importe para um gerenciador de favoritos de verdade.** Se seu exportador conseguir gerar um arquivo **HTML** de favoritos padrão, ferramentas como o Marqly importam direto — o mesmo importador que lida com [exportações de favoritos do Chrome](/pt/blog/exportar-favoritos-chrome). Seus posts salvos viram entradas pesquisáveis com tags geradas por IA em vez de linhas em uma planilha.

Uma nota de honestidade: o Marqly não tem importação nativa tipo «conecte sua conta do X». A ponte é o arquivo HTML de favoritos gerado pelo seu exportador, ou salvar links individualmente. O que nos leva ao conserto que realmente importa.

## O conserto durável: pare de deixar o X guardar a única cópia

Toda rota de exportação acima é um contorno para o mesmo design: bookmarks do X foram feitos para rolar a tela até algo da semana passada, não para manter uma biblioteca de referência. O teto, a exportação ausente, a busca atrás do Premium — nada disso vai mudar a seu favor.

O padrão que funciona no longo prazo é um sistema de dois níveis:

1. **Continue salvando no X livremente.** É a forma mais rápida de marcar algo no meio do scroll. Trate como caixa de entrada.
2. **Salve os guardáveis para fora imediatamente.** Quando um thread realmente vale guardar, salve o link no seu gerenciador de favoritos no mesmo instante — com a extensão do Marqly é um clique na página, sem decisão de arquivamento. A IA marca automaticamente, e a busca semântica acha depois por significado: digite «aquele thread sobre psicologia de preço» e ele aparece, mesmo você tendo esquecido há tempos quem postou. Essa recuperação por descrição é o cerne de por que [organizar por pastas não sobrevive ao volume real de salvamentos](/pt/blog/pare-de-organizar-favoritos-pastas-obsoletas-2026).

A caixa de entrada continua descartável; a biblioteca vira permanente, pesquisável e independente de plataforma. Se o X mudar os limites de novo — e a política de bookmarks dele só apertou com o tempo — você não perde nada que importava.

## Resumo rápido

1. **Solicite o arquivo oficial** por posts, curtidas e DMs — e aceite que os bookmarks não estão nele.
2. **Exporte os salvos com uma extensão do navegador** enquanto o X ainda os exibe; guarde o arquivo em lugar seguro.
3. **Pule a rota da API** a menos que você já seja um desenvolvedor pagante.
4. **Importe a exportação para um gerenciador de favoritos** (via HTML de favoritos) em vez de deixá-la como um CSV morto.
5. **Mude o hábito**: X para rolar, [Marqly](https://app.marqly.com) para guardar. Um clique por guardável, pesquisável para sempre.

Seus itens salvos sobreviveram ao seu interesse pela maioria deles. Garanta que os bons sobrevivam também à paciência da plataforma.
