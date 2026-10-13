# Guia de Unidades de Saúde do Município

Um site informativo para facilitar a busca por unidades de saúde da cidade, com filtro por nome, tipo de unidade e status de atendimento em tempo real.

## Visão geral

O projeto foi desenvolvido para ajudar a população a localizar rapidamente clínicas, UBS, UPA e outras unidades de atendimento, exibindo informações como:

- nome da unidade
- endereço
- telefone
- horário de funcionamento
- tipo de atendimento
- status atual da unidade (aberto, fechado ou fecha em breve)

A interface foi pensada para ser simples, acessível e fácil de utilizar em dispositivos desktop e mobile.


## Equipe

- Gustavo Paquiel
- João Pedro Arruda
- Lucas Pereira
- Ryan Bernardes Jardim

## Atribuições e responsabilidades do grupo

- Gustavo Paquiel: ficou responsável pela definição de requisitos e pela análise das necessidades do usuário, buscando garantir que a proposta do site atendesse à finalidade de facilitar a busca por unidades de saúde. Também contribuiu com a pesquisa de conteúdo, ajudando a selecionar informações relevantes sobre as unidades e a estrutura da funcionalidade de busca.

- João Pedro Arruda: atuou na organização da estrutura base do site, contribuindo para a criação da base visual e funcional da interface. Também participou do desenvolvimento do Kanban, organizando as etapas do projeto e ajudando a definir a sequência de trabalho e as prioridades do grupo.

- Lucas Pereira: colaborou com a construção da estrutura inicial do site, além de auxiliar na implementação da seção de cards, que reúne as informações das unidades de saúde. Também esteve envolvido na área de busca, contribuindo para melhorar a experiência de pesquisa e a usabilidade do sistema.

- Ryan Bernardes Jardim: foi responsável pela criação da seção “Sobre”, contextualizando o objetivo do projeto para os usuários. Além disso, contribuiu com a pesquisa, com a definição de requisitos e com a criação da identidade visual, incluindo a logo e os elementos visuais que tornaram a interface mais coesa e profissional.


## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Ícones e imagens locais

## Funcionalidades

- Busca por nome da unidade ou bairro
- Filtro por tipo de unidade
- Ordenação por nome
- Visualização do status da unidade em tempo real
- Modal com mais detalhes da unidade selecionada
- Destaque das unidades que precisam de atendimento imediato
- Layout responsivo

## Estrutura do projeto

```text
.
├── Css/
│   └── style.css
├── Js/
│   ├── dados.js
│   └── script.js
├── img/
│   ├── logo.png
│   └── ubs/
├── index.html
├── LICENSE
└── README.md
```

## Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/FatecZL-ADS-2026-2-NOITE/Prova-time-Vertice.git
```

2. Acesse a pasta do projeto:

```bash
cd Prova-time-Vertice
```

3. Abra o arquivo `index.html` no navegador.

Você também pode usar um servidor local simples, como:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
