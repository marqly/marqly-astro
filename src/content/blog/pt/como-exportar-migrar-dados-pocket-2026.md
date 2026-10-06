---
title: "Como exportar e migrar seus dados do Pocket em 2026 (Passo a passo)"
seoTitle: "Como Exportar e Migrar Dados do Pocket (Guia 2026) — Marqly"
description: "O Pocket foi desativado e seus itens salvos estão em risco. Veja exatamente como exportar seus dados do Pocket e migrar para um app novo em minutos."
pubDate: 2026-05-08
updatedDate: 2026-10-06
category: "Guias"
targetKeyword: "exportar dados pocket migrar"
tags:
  - "migrar do pocket"
  - "exportar pocket"
  - "alternativas pocket"
  - "importar favoritos pocket"
ctaUrl: "https://app.marqly.com/lp/replace-pocket"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
heroImage: ../../../assets/blog/how-to-export-migrate-pocket-data.png
heroAlt: "Guia passo a passo para exportar e migrar dados do Pocket"
ogImage: "https://www.marqly.com/og/how-to-export-migrate-pocket-data.png"
faqs:
  - q: "Ainda dá para exportar dados diretamente do Pocket hoje?"
    a: "Não. O Pocket foi oficialmente desativado em 8 de julho de 2025, e a Mozilla fechou a janela de exportação em 12 de novembro de 2025, com os dados restantes agendados para exclusão. Este guia ajuda quem baixou o arquivo com o list.csv a migrar seus salvamentos para o Marqly, ou a recuperar itens sincronizados aos favoritos do navegador."
  - q: "Vou perder minhas tags ao migrar do Pocket?"
    a: "Não. A exportação do Pocket inclui as tags, e bons importadores as preservam. O Marqly as mapeia automaticamente, então seus itens aparecem com títulos e tags intactos. O tempo de importação depende do tamanho do arquivo e do processamento; guarde o arquivo original e confira a contagem de itens importados."
  - q: "Preciso de cartão de crédito para migrar minha biblioteca do Pocket?"
    a: "Não com ferramentas que ofereçam plano gratuito sem cartão. O Marqly tem conta grátis para até 100 itens salvos com busca por palavra-chave. Busca semântica, resumos e tags automáticas na importação exigem o Pro; confira o tamanho da sua biblioteca e o plano antes de importar."
  - q: "E se eu perdi o prazo de exportação do Pocket?"
    a: "Se você perdeu o prazo de 12 de novembro de 2025, os servidores da Mozilla não geram mais uma exportação. Porém, se o Pocket estava sincronizado com o Firefox, ou se você exportou os favoritos do navegador em algum momento, dá para importar esse arquivo HTML de favoritos diretamente no Marqly."
---

A Mozilla desligou oficialmente o Pocket em 8 de julho de 2025 e fechou a janela de exportação em 12 de novembro de 2025. Se você baixou seu arquivo antes de os servidores saírem do ar, seus salvamentos estão seguros — falta só um lar moderno para eles. Este guia conduz a migração do seu acervo do Pocket para o Marqly, com busca por palavra-chave no plano grátis e busca semântica no Pro.

## Passo 1: encontre o seu arquivo de exportação do Pocket

Como o endpoint de exportação da Mozilla está fechado, você usará o backup que baixou no passado:

1. Procure nas pastas **Downloads** ou **Documentos** por `ril_export.html`, `pocket-export.html` ou um arquivo `pocket-export.zip`.
2. Se você tem um ZIP, descompacte — dentro estão seus salvamentos do Pocket em HTML ou CSV.
3. Se você nunca baixou o acervo antes de 12 de novembro de 2025, verifique se seus itens estavam sincronizados com os favoritos do navegador (por exemplo, no Firefox). Dá para exportar os favoritos do navegador como HTML e importar esse arquivo no lugar.

> **Nota de privacidade:** seu arquivo é processado com segurança. Você também pode inspecionar ou converter offline na nossa ferramenta gratuita do navegador: o [Conversor de Exportação do Pocket](/tools/pocket-export-converter).

O HTML de visualização histórico do Pocket é uma lista simples, não o HTML padrão de favoritos de navegador. Use o `list.csv` para o Marqly, ou converta a visualização antes de usar um importador de favoritos de navegador. Se tiver curiosidade sobre [o que exatamente tem no arquivo de exportação do Pocket](/pt/blog/o-que-ha-no-arquivo-de-exportacao-do-pocket-2026) — e o que ele deixa para trás — vale uma leitura rápida antes de importar.

## Passo 2: escolha para onde migrar

Seu export é portátil, então a pergunta real é *onde* ele deve morar. Os três destinos mais comuns entre refugiados do Pocket em 2026:

- **Marqly** — se você quer que sua biblioteca se torne pesquisável por significado (busca com IA no Pro), com tags e resumos automáticos no Pro. Importa seu arquivo do Pocket com as tags intactas. (Veja exatamente como ele se compara em [Pocket vs Marqly](/pt/comparar/marqly-vs-pocket).)
- **Raindrop.io** — se você quer um gerenciador de favoritos gratuito de uso geral.
- **Instapaper** — se você simplesmente quer [um app de ler depois](/pt/blog/melhores-apps-salvar-para-ler-depois-2026) com leitura minimalista, sem firula.

(Para a análise completa, veja [As 8 melhores alternativas ao Pocket em 2026](/pt/blog/alternativas-ao-pocket-2026).)

## Passo 3: importe sua biblioteca

Uma nota sobre formatos, porque é onde as pessoas tropeçam: o `ril_export.html` do Pocket é uma lista `<ul>` simples, não o formato padrão de favoritos de navegador, então a maioria dos importadores — **o Marqly incluído** — não consegue lê-lo. O arquivo confiável é o `list.csv` dentro do pacote exportado — [medimos um export HTML genuíno de 261 itens do Pocket contra o nosso importador e ele resultou em zero salvamentos](/research/bookmark-import-fidelity). Se você pegou o CSV (ou o ZIP), está pronto; se tudo o que você tem é o HTML, converta ou inspecione primeiro com o nosso gratuito [Conversor de Exportação do Pocket](/tools/pocket-export-converter) e o [Visualizador de Arquivos de Favoritos](/tools/bookmark-file-viewer). Para um walkthrough detalhado com solução de problemas, siga nosso [Guia de Migração Pocket → Marqly](/migrate/pocket) ou visite o [Centro de Migração](/migrate).

No **Marqly**, por exemplo:

1. Crie uma conta gratuita.
2. Durante o onboarding (ou em Configurações → Importar), escolha **Importar favoritos**.
3. Abra o ZIP da exportação do Pocket e arraste o arquivo `list.csv` para o importador (não o `.html` de visualização — o Marqly lê o CSV).
4. Seus itens aparecem — títulos e tags preservados — com busca por palavra-chave no plano grátis e busca semântica no Pro. (Tags automáticas na importação são recurso Pro; no plano grátis seus links ainda entram com as tags que o arquivo carregar.)

O tempo de importação depende do tamanho do arquivo e do processamento; mantenha o arquivo original guardado e confira a contagem de salvamentos importados.

## Passo 4: reconecte o hábito de salvar

A exportação traz o seu *histórico*. Agora reconstrua o *hábito*:

- **Instale a extensão de navegador** para que salvar seja um clique, como o botão do Pocket era.
- **Adicione o app móvel** para salvar da folha de compartilhamento do celular.
- **Configure as integrações** que usar (algumas ferramentas suportam Raycast, Atalhos do iOS etc.).

Em um dia, salvar parece exatamente como era com o Pocket — só que agora tudo é pesquisável.

## A melhoria que a maioria perde

Migrar é a chance de consertar aquilo que o Pocket nunca resolveu: **a maioria de nós salva muito mais do que jamais vai reencontrar.** Pastas e busca por palavra-chave não escalam além de algumas centenas de itens.

Quando mover sua biblioteca, considere dejá-la num lugar com **busca semântica** — onde você digita o que *lembra* («a matéria sobre trabalho remoto e confiança») e recebe o artigo de volta mesmo com o título esquecido. Esse é o núcleo do que o [Marqly](https://app.marqly.com/lp/replace-pocket) faz: importa seu histórico do Pocket e depois realmente encontra qualquer parte dele. Veja a [comparação Pocket vs Marqly](/pt/comparar/marqly-vs-pocket) completa para os detalhes lado a lado. Comece grátis com até 100 salvamentos; a busca semântica exige o Pro.

---

*Dica: qualquer que seja a ferramenta escolhida, mantenha o arquivo original de exportação do Pocket, incluindo o `list.csv`, como backup. Ele é sua cópia portátil e independente de fornecedor — o ensino inteiro da lição Pocket.*

Fonte: [aviso de encerramento do Pocket da Mozilla](https://support.mozilla.org/en-US/kb/future-of-pocket), consultado em 6 de outubro de 2026. O acesso à exportação terminou em 12 de novembro de 2025; a Mozilla afirma que a exclusão começou em seguida.
