Trabalho de Conclusão – Automação com GitHub Actions
Objetivo

Este projeto tem como objetivo demonstrar a utilização de pipelines de Integração Contínua (CI) utilizando GitHub Actions.

Foram implementadas duas pipelines:

Pipeline Manual: executada sob demanda pelo usuário.
Pipeline Agendada: executada automaticamente em horários definidos.

As pipelines realizam a instalação das dependências do projeto e a execução dos testes automatizados.

Tecnologias Utilizadas
JavaScript
Node.js
Mocha
GitHub Actions
GitHub
Estrutura do Projeto
.github/
└── workflows/
    ├── 01-manual-exec.yml
    └── 02-agendado-exec.yml

src/
└── ServicoDePagamento.js

test/
└── ServicoDePagamento.test.js

package.json
README.md
Pipeline Manual

A pipeline manual pode ser executada diretamente pela aba Actions do GitHub através da opção "Run Workflow".

Etapas executadas:

Checkout do código.
Instalação do Node.js.
Instalação das dependências.
Execução dos testes automatizados.
Pipeline Agendada

A pipeline agendada é executada automaticamente conforme a configuração definida no arquivo de workflow.

Etapas executadas:

Checkout do código.
Instalação do Node.js.
Instalação das dependências.
Execução dos testes automatizados.
Execução dos Testes

Para executar os testes localmente:

npm install
npm test

Resultado esperado:

3 passing
Evidências

As evidências de execução das pipelines podem ser visualizadas na aba Actions do GitHub.

Autor

Bianca Alves Martins