---
title: "Favoritos do Chrome não sincronizam? 8 soluções que funcionam de verdade (2026)"
seoTitle: "Favoritos do Chrome Não Sincronizam? 8 Soluções (2026)"
description: "Favoritos do Chrome pararam de sincronizar? Percorra 8 correções na ordem: sync pausada, contas trocadas, sync-internals e redefinição da sincronização."
pubDate: 2026-08-02
updatedDate: 2026-10-06
category: "Guias"
targetKeyword: "favoritos do chrome nao sincronizam"
tags:
  - "favoritos chrome"
  - "sincronizacao chrome"
  - "chrome sync"
  - "chrome sync internals"
  - "backup favoritos"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Comece grátis com o Marqly"
lang: "pt"
ogImage: "https://www.marqly.com/og/chrome-bookmarks-not-syncing-fix.png"
faqs:
  - q: "Por que o Chrome parou de sincronizar meus favoritos de repente?"
    a: "A causa mais comum é a sincronização pausada: depois de uma troca de senha da Google ou de um evento de segurança, o Chrome pausa a sincronização em silêncio até você entrar de novo, e é fácil perder o aviso pequeno de «Sincronização pausada» por semanas. Outras causas frequentes: estar logado em contas Google diferentes em aparelhos diferentes, e a chave de Favoritos estar desligada em «Gerenciar o que você sincroniza»."
  - q: "Como forço o Chrome a sincronizar favoritos agora?"
    a: "Abra chrome://settings/syncSetup, confirme que a sincronização está ligada e não pausada, e depois desligue e religue a sincronização — isso força um ciclo novo. Se nada se mexer, saia do Chrome por completo e entre de novo. Dá para acompanhar a sincronização em tempo real em chrome://sync-internals, onde o Transport state deve ler «Active»."
  - q: "O que é chrome://sync-internals e como eu leio essa página?"
    a: "É a página de diagnóstico de sincronização embutida no Chrome — digite chrome://sync-internals na barra de endereços. Confira três coisas: o Transport state deve dizer «Active», o Username deve ser a conta que você espera, e erros aparecem perto do topo. Na seção Types, a linha BOOKMARKS mostra se os dados de favoritos estão realmente fluindo."
  - q: "Redefinir a sincronização apaga meus favoritos?"
    a: "Não — redefinir a sincronização limpa a cópia guardada nos servidores do Google, não os favoritos nos seus aparelhos. Seus favoritos locais ficam onde estão e re-enviam quando a sincronização recomeça. Ainda assim, exporte os favoritos para um arquivo HTML antes (Gerenciador de favoritos → Exportar favoritos); um reset é exatamente o momento errado para descobrir um caso de borda."
---

Nove em cada dez vezes, os favoritos do Chrome param de sincronizar porque **a sincronização está pausada** (geralmente depois de uma troca de senha), você está logado em **contas Google diferentes** em aparelhos diferentes, ou a **chave de Favoritos está desligada** em «Gerenciar o que você sincroniza». Percorra as correções abaixo na ordem — elas estão classificadas pela frequência com que são as culpadas — e normalmente você volta a sincronizar em cinco minutos. E como isso continua acontecendo com muita gente, a última seção explica por que a sincronização presa ao navegador é frágil por design e como parece a configuração mais robusta.

Antes de qualquer coisa: **faça backup primeiro.** Abra o Gerenciador de favoritos (`Ctrl/Cmd+Shift+O`) → menu ⋮ → **Exportar favoritos**, e salve o arquivo HTML. Toda correção abaixo é segura, mas você está prestes a mexer no estado da sincronização, e um backup de trinta segundos torna o exercício inteiro sem risco.

## Correção 1: verifique se a sincronização está pausada

Depois de uma troca de senha da Google, um alerta de segurança ou uma sessão expirada, o Chrome pausa a sincronização e mostra só um aviso pequeno que passa despercebido por semanas.

1. Olhe o avatar do seu perfil no canto superior direito do Chrome — um selo de pausa ou erro aparece sobre ele.
2. Abra **chrome://settings/syncSetup**. Se você vir **«Sincronização pausada»** ou **«Sincronização desativada»**, clique e entre de novo.
3. Repita em todo aparelho — a sincronização pode estar pausada no notebook e saudável no desktop, o que parece exatamente «favoritos não sincronizam».

Esta correção sozinha resolve a maioria dos casos.

## Correção 2: confirme que todo aparelho usa a mesma conta Google

Óbvio, mas pega mais gente do que qualquer bug exótico: perfil de trabalho numa máquina, pessoal em outra, e os favoritos estão fielmente sincronizando — para duas contas diferentes.

1. Em cada aparelho, abra **chrome://settings** e confira o e-mail mostrado no topo.
2. No Android/iOS, abra o app do Chrome → avatar do perfil → confirme a conta.
3. Se diferirem, desconecte a que está errada e conecte de novo com a conta certa.

Confira também se você está no **perfil do Chrome** certo no desktop — cada perfil sincroniza de forma independente, e clicar num link vindo de outro app pode abrir o perfil errado sem você notar.

Mais uma pegadinha de conta: **contas gerenciadas.** Se você está logado com uma conta Google Workspace (trabalho) ou de escola, o administrador pode desativar a sincronização do Chrome por completo via política — nenhuma configuração do seu lado vai ligá-la. Confira **chrome://policy** por entradas relacionadas a sync; se a sincronização estiver bloqueada pelo admin, suas opções são um perfil pessoal para favoritos pessoais, ou um gerenciador de favoritos que não dependa da sincronização do Chrome.

## Correção 3: cheque «Gerenciar o que você sincroniza»

Sincronização ligada não significa que favoritos estão incluídos.

1. Vá em **chrome://settings/syncSetup** → **Gerenciar o que você sincroniza**.
2. Se **Personalizar sincronização** estiver selecionado, garanta que a chave **Favoritos** está ligada.
3. Confira isso em todo aparelho — um aparelho com Favoritos desligado nem envia nem recebe direito.

## Correção 4: desligue e religue a sincronização, depois saia e entre de novo

O reset clássico, e ele funciona de verdade porque força o Chrome a renovar o token de autenticação e começar um ciclo novo de sincronização:

1. **chrome://settings/syncSetup** → **Desativar** a sincronização (mantenha os dados locais quando perguntar).
2. Reinicie o Chrome e reative a sincronização.
3. Ainda travado? Saia do Chrome por completo (Configurações → sua conta → Sair), reinicie, entre de novo e reative a sincronização.

Seus favoritos locais não são apagados ao sair — o Chrome os mantém no aparelho por padrão. (É por isso que você fez o backup mesmo assim.)

## Correção 5: atualize o Chrome em todos os aparelhos

Mudanças de protocolo de sincronização são lançadas o tempo todo, e um Chrome muito desatualizado em um aparelho pode travar a sincronização dele enquanto todo o resto parece normal. **chrome://settings/help** no desktop dispara a checagem de atualização; no celular, atualize pela loja de apps. Reinicie depois de atualizar — a atualização só se aplica quando você faz isso.

## Correção 6: diagnostique com chrome://sync-internals

Quando as correções óbvias falham, pare de chutar e olhe o que a sincronização está realmente fazendo. Digite **chrome://sync-internals** na barra de endereços. Parece intimidador; você só precisa de três leituras:

1. **Transport state** (topo do Summary): deve dizer **«Active»**. «Paused», «Initializing» ou um erro de autenticação indicam qual correção anterior revisar.
2. **Username**: confirma para qual conta este perfil está de fato sincronizando.
3. **Type Info → linha BOOKMARKS**: mostra se o tipo de dados de favoritos está ativo e sem erros, além da contagem de itens sincronizados. Zero aqui com sua barra de favoritos cheia significa que os favoritos não estão saindo do aparelho.

Você não precisa consertar nada de dentro dessa página — ela existe para dizer onde está a falha. Erro de autenticação aponta para as correções 1/4; tipo BOOKMARKS desativado aponta para a 3; tudo «Active» com contagens certas em um aparelho mas não no outro aponta para o outro aparelho.

## Correção 7: redefina a sincronização no painel do Google (último recurso)

Se o sync-internals mostra um estado saudável mas os aparelhos continuam discordando, a cópia no servidor pode estar em estado ruim. A opção nuclear — mas segura:

1. Confirme que seu backup HTML do passo zero existe.
2. Visite o painel de sincronização do Chrome em **chrome.google.com/sync** estando logado.
3. Role para baixo e escolha **Redefinir sincronização**. Isso apaga a cópia sincronizada **apenas nos servidores do Google** — os favoritos nos seus aparelhos ficam onde estão.
4. Religue a sincronização, começando pelo aparelho com o melhor conjunto de favoritos. Ele re-envia, e os outros aparelhos puxam a cópia nova.

## Correção 8: recupere favoritos que sumiram pelo arquivo de backup local

Se os favoritos não apenas falharam em sincronizar mas desapareceram em um aparelho, o Chrome guarda um backup local de uma geração:

1. Feche o Chrome completamente.
2. Na pasta do perfil (macOS: `~/Library/Application Support/Google/Chrome/Default`; Windows: `%LOCALAPPDATA%\Google\Chrome\User Data\Default`), encontre os arquivos **`Bookmarks`** e **`Bookmarks.bak`**.
3. Renomeie `Bookmarks` para `Bookmarks.old` e copie `Bookmarks.bak` como `Bookmarks`.
4. Abra o Chrome de novo — ele carrega o estado do backup.

aja rápido e mantenha o Chrome fechado enquanto faz isso: o `Bookmarks.bak` é sobrescrito na próxima sessão, levando a boa cópia junto.

## A parte honesta: isso vai acontecer de novo

Tudo acima é tratamento, não cura. A sincronização do Chrome falha do jeito que falha por causa do que ela é: um processo de fundo invisível, amarrado ao sistema de contas de um único fornecedor, que se pausa em silêncio e tranca seus dados dentro de um navegador. Você só descobre que está quebrada quando estende a mão para um favorito que não está lá. E a mesma história se repete no Safari, no Edge e no Firefox — a sincronização de cada navegador é um silo com os mesmos modos de falha.

Se seus favoritos importam o bastante para você ter acabado de passar vinte minutos no sync-internals, argumentavelmente eles não deveriam morar na sincronização do navegador. A configuração mais robusta é um gerenciador de favoritos baseado em conta: sua biblioteca mora numa conta própria, e qualquer navegador é só uma janela para ela.

- **Sem pausa silenciosa** — ou você está logado e vendo sua biblioteca, ou está visivelmente não logado.
- **Multi-navegador por natureza.** O Marqly, por exemplo, tem extensões para Chrome, Edge, Firefox e Safari, além de app web e app para iOS — a biblioteca é idêntica em todos, então trocar de navegador (ou usar três ao mesmo tempo) deixa de ser um problema de sincronização.
- **Começar é um arquivo.** Exporte seus favoritos para HTML — o backup que você já fez no passo zero — e [importe-o em poucos minutos](/pt/blog/exportar-favoritos-chrome). O Marqly marca tudo automaticamente na importação, o que resolve a [faxina de organização que você nunca ia fazer na mão](/pt/blog/organizar-favoritos-navegador).
- **A encontrabilidade melhora, não só a confiabilidade.** Busca semântica significa que «aquele artigo sobre negociar aumento» encontra a página mesmo quando o título diz outra coisa — [um modelo fundamentalmente diferente da hierarquia de pastas](/pt/blog/pare-de-organizar-favoritos-pastas-obsoletas-2026).

Favoritos do navegador continuam bons para a dúzia da barra — os sites que você abre todo dia. Mas as centenas de salvamentos «um dia eu preciso disso» merecem um armazenamento que não dependa de um processo de fundo se mantendo quietamente saudável. [Comece grátis](https://app.marqly.com) — importe aquele backup HTML e seus favoritos deixam de ser reféns do estado da sincronização.

## Resumo rápido

1. Backup: exporte os favoritos para HTML.
2. Despause a sincronização (chrome://settings/syncSetup).
3. Mesma conta e mesmo perfil em todo lugar.
4. Chave Favoritos ligada em «Gerenciar o que você sincroniza».
5. Desligue/religue a sincronização; saia e entre.
6. Atualize o Chrome em todos os aparelhos.
7. Leia o chrome://sync-internals: Transport state, Username, tipo BOOKMARKS.
8. Redefina a sincronização em chrome.google.com/sync; recupere via `Bookmarks.bak` se itens sumiram localmente.
