# Plano de Testes de Software

Os requisitos para a realização dos testes de software são:

## Tipos de Testes

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-05 - Cadastro de credenciais |
|:---|:---|
| Requisitos Associados | RF-05 - O site deve permitir que o usuário faça cadastro com suas credenciais |
| Objetivo do Teste | Verificar se o usuário consegue cadastrar no site |
| Passos | -Acessar o site <br/>-Clicar no botão "Se cadastrar" <br/> -Inserir todos os dados requisitados para cadastro <br/> -Clicar no botão "Salvar" |
| Critérios de êxito | O usuário tem uma conta criada no site Leer |
| Responsável pela elaborar do caso de Teste | Mariana Sayuri |

|Caso de Teste    | CT-01 - Login usando credenciais |
|:---|:---|
| Requisitos Associados | RF-01 - O site deve permitir que o usuário faça login com as credenciais |
| Objetivo do Teste | Verificar se o usuário consegue fazer o login |
| Passos | -Acessar o site <br/>-Clicar no campo e-mail adress e inserir o e-mail cadastrado <br/>-Clicar no campo password e inserir a senha cadastrada <br/>-Clicar no botão "Entrar no meu LEER"|
| Critérios de êxito | O ususário é direcionado a página inicial |
| Responsável pela elaborar do caso de Teste | Vitoria Pilon |

|Caso de Teste    | CT-03 - Criar, editar e salvar um novo tema |
|:---|:---|
| Requisitos Associados | RF-03 - Incluir, editar, excluir tema |
| Objetivo do Teste | Verificar se o usuário consegue adicionar um novo tema |
| Passos | -Acessar o site <br/> - Na pagina inicial ao lado esquerdo na coluna Temas clicar no botão "Adicionar um tema +" <br/> -Clicar no campo nome do tema <br/> -Digitar o nome escolhido <br/> -Clicar no botão salvar para salva-lo |
| Critérios de êxito | Um novo tema é criado na coluna Tema e o tema é armazenado no localstorage  |
| Responsável pela elaborar do caso de Teste | Larissa Buenno |

|Caso de Teste    | CT-02 - Adicionar, salvar, editar e excluir o conteúdo "O que aprendi hoje..." no tema escolhido|
|:---|:---|
| Requisitos Associados | RF-02 O usuário deve ser capaz de adicionar, salvar, editar e excluir o conteúdo que aprendeu no tema escolhido |
| Objetivo do Teste | Verificar se o usuário consegue adicionar, salvar, editar e excluir o conteúdo aprendido do dia no tema escolhido |
| Passos | -Acessar o site <br/> - Na pagina inicial ao lado esquerdo na coluna Temas clicar no tema escolhido <br/> -Na coluna "O que aprendi hoje" no botão "O que aprendi hoje" <br/> - Inserir o conteúdo na caixa de texto <br/>- Clicar no botão ok para salvar <br/> - Clicar no icone editar, inserir o conteúdo e clicar em ok para salvar <br/> - Para excluir clicar no icone X e clicar em ok para mensagem "Tem certeza que deseja excluir este aprendizado?" |
| Critérios de êxito | O conteúdo é salvo na coluna "O que aprendi hoje" e no localstorage  |
| Responsável pela elaborar do caso de Teste | Larissa Buenno |

|Caso de Teste    | CT-02 - Adicionar, salvar, editar e excluir  o conteúdo "O que preciso revisar..." no tema escolhido|
|:---|:---|
| Requisitos Associados | RF-02 O usuário deve ser capaz de adicionar, salvar, editar e excluir o conteúdo que precisa revisar no tema escolhido |
| Objetivo do Teste | Verificar se o usuário consegue adicionar, salvar, editar e excluir o conteúdo que precisa revisar do tema escolhido |
| Passos | -Acessar o site <br/> - Na pagina inicial ao lado esquerdo na coluna Temas clicar no tema escolhido <br/> -Na coluna "O que preciso revisar" clicar  no botão "O que preciso revisar"<br/> - Inserir o conteúdo na caixa de texto  <br/>- Clicar no botão ok para salvar  <br/> - Clicar no icone editar, inserir o conteúdo e clicar em ok para salvar <br/> - Para excluir clicar no icone X e clicar em ok para mensagem "Tem certeza que deseja excluir esta revisão?"  |
| Critérios de êxito | O conteúdo é salvo na coluna "O que preciso revisar" e no localstorage  |
| Responsável pela elaborar do caso de Teste | Vitoria Pilon |

|Caso de Teste    | CT-02 - Adicionar, salvar, editar e excluir  "Datas importantes..." no tema escolhido|
|:---|:---|
| Requisitos Associados | RF-02 O usuário deve ser capaz de adicionar, salvar, editar e excluir as datas importantes no tema escolhido |
| Objetivo do Teste | Verificar se o usuário consegue adicionar, salvar, editar e excluir as datas importantes no tema escolhido |
| Passos | -Acessar o site <br/> - Na pagina inicial ao lado esquerdo na coluna Temas clicar no tema escolhido <br/> -Na coluna "Datas importantes" clicar  na botão calendario <br/> -Inserir a data desejada <br/> -Clicar no botão "Datas Importantes" <br/> - Inserir a descrição da data importante no caixa de texto <br/>- Clicar no botão ok para salvar  <br/> - Clicar no icone editar, inserir o conteúdo e clicar em ok para salvar <br/> - Para excluir clicar no icone X e clicar em ok para mensagem "Tem certeza que deseja excluir este evento?"  |
| Critérios de êxito | A data importante e a descrição são salvas na coluna "Datas importantes" e no localstorage   |
| Responsável pela elaborar do caso de Teste | Vitoria Pilon |

|Caso de Teste    | CT-04 - Funcionamento do botão "Focus Time"|
|:---|:---|
| Requisitos Associados | RF-04 O site deve permitir que o usuário seja capaz de cronometrar seu tempo de estudo, parar e zerar o cronômetro|
| Objetivo do Teste | Verificar se o usuário consegue iniciar, parar e zerar o cronômetro  |
| Passos | -Acessar o site <br/> - Na pagina inicial ao lado direito superior <br/> -Clicar no botão "Focus Time" para iniciar o cronômetro <br/> -Clicar no botão mesmo botão para parar <br/> -Clicar no botão "Zerar" para zerar <br/> |
| Critérios de êxito | O usuário é capaz de medir o seu tempo de estudo e zerar o cronometro quando acabar |
| Responsável pela elaborar do caso de Teste | Vitoria Pilon |






> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
