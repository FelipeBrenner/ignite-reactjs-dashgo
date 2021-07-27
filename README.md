<img alt="ignite-reactjs" title="ignite-reactjs" src=".github/cover-reactjs.png">

## 🚀 Tecnologias e Bibliotecas

Projeto desenvolvido com as seguintes tecnologias:

- ReactJS
- TypeScript
- NextJS
- Chakra UI (biblioteca de componentes React que aumenta a produtividade ao desenvolver interfaces, fornecendo um conjunto de componentes simples, modular e acessíveis)
- React Hook Form (biblioteca que oferece suporte para validação nativa de formulários)
- Yup (biblioteca para fazer validação de objetos ou schemas em conjunto com o React Hook Form)
- React Query (biblioteca para manipular os dados com fetch, cache e update, sem alterar estado e acessar o back end)
- Mirage JS (biblioteca de simulação de API que permite construir, testar e compartilhar um aplicativo JavaScript funcional completo antes de ser desenvolvido o back-end)

## 💻 Projeto

O dashgo é um painel administrativo contendo dashboard, listagem e cadastro de usuário usando Chakra UI no Next.js. Foi desenvolvido durante as aulas do Chapter IV da trilha de ReactJS do Bootcamp Ignite da Rocketseat.

<img alt="preview" title="preview" src=".github/preview.gif">

## 📖 Anotações

- Tipagem
  - ReactNode: quando o children pode ser qualquer coisa, texto, número, componente, etc.
  - ReactElement: quando o children deve ser um componente.
  - ElementType: quanto a propriedade é um componente no formato sem <>.

## ⚙ Clone e execução

```bash
# Abra um terminal e clone este repositório com o comando

$ git clone https://github.com/FelipeBrenner/ignite-reactjs-dashgo.git

# Acesse a pasta da aplicação

$ cd ignite-reactjs-dashgo

# Instale as dependências

$ yarn

# Inicie a aplicação

$ yarn dev
```

- Não foi desenvolvido neste projeto um fluxo de autenticação, um back end para a realização do login, portanto as rotas de acesso às páginas desenvolvidas são:

  - Login: "/"
  - Usuários: "/users"
  - Dashboard: "/dashboard"

- Só é possível a visualização dos usuários por ambiente de desenvolvimento, e não no [deploy](https://dashgo-felipebrenner.vercel.app/), devido ao uso do Mirage JS e faker.js.

---

Por Felipe Brenner
