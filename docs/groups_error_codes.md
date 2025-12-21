<!-- Source: https://developers.facebook.com/documentation/business-messaging/whatsapp/groups/error-codes -->
<!-- Scraped: 2025-12-20T17:42:58.632Z -->

# Códigos de erro e solução de problemas da API de Grupos

Updated: 31 de out de 2025

## Códigos de erro

Código

Descrição

Código de status HTTP

`131020`

Grupo inválido

Não é possível enviar mensagens para grupos que tenham apenas um membro.

`400`

Solicitação incorreta

`131041`

Grupo desconhecido

O grupo não foi encontrado porque não existe ou porque você não é um membro.

`400`

Solicitação incorreta

`131059`

Cursor inválido

O cursor expirou ou ficou corrompido. Comece a paginação novamente do início.

`400`

Solicitação incorreta

`131201`

Solicitação com sucesso parcial

Nem todas as operações para participantes foram bem-sucedidas na solicitação.

`206`

Conteúdo com sucesso parcial

`131202`

Participante duplicado

Há duplicatas na entrada da matriz de participantes.

`400`

Solicitação incorreta

`131204`

Número excessivo de participantes

O número de participantes excede o limite do grupo.

`400`

Solicitação incorreta

`131207`

Grupo suspenso

O grupo viola as políticas da plataforma.

`403`

Proibido

`131208`

O limite de volume do grupo foi atingido

Este número de telefone realizou muitas operações de grupo em um curto período.

`429`

Número excessivo de solicitações

`131209`

A taxa de proporção da foto do perfil do grupo é inválida

A largura e a altura da imagem devem ser iguais.

`400`

Solicitação incorreta

`131210`

A imagem é muito pequena para ser processada

A largura e a altura da imagem devem ser maiores que 192 pixels.

`400`

Solicitação incorreta

`131211`

Limite de criação de grupos atingido

O limite máximo de grupos que podem ser criados para esse número foi atingido.

`400`

Solicitação incorreta

`131212`

O participante não faz parte do grupo.

O participante não faz parte do grupo.

`400`

Solicitação incorreta

`131213`

A solicitação para participar do grupo não existe.

A solicitação para participar do grupo não existe.

`400`

Solicitação incorreta

`131214`

A criação de grupos está temporariamente desabilitada

A criação de grupos está temporariamente desabilitada devido ao envio excessivo de mensagens de marketing pela WABA na janela de atendimento ao cliente nos últimos sete dias.

`400`

Solicitação incorreta

`131215`

Este número de telefone não está qualificado para acessar as APIs de Grupos

As APIs de Grupos estão disponíveis apenas para números de telefone qualificados. Verifique a qualificação para as APIs de Grupos na nossa documentação em /documentation/business-messaging/whatsapp/groups/get-started

`400`

Solicitação incorreta

Você achou esta página útil?

![Ícone de polegar para cima](https://static.xx.fbcdn.net/rsrc.php/yR/r/OEXJ0_DJeZv.svg)

![Ícone de polegar para baixo](https://static.xx.fbcdn.net/rsrc.php/yb/r/qKPgNVNeatU.svg)