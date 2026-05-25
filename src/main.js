import { supabase } from './supabase'

function telaCadastro() {

  document.querySelector('#conteudo').innerHTML = `
  
    <h2>Cadastro</h2>

    <input id="nome" placeholder="Nome" />
    <br /><br />

    <input id="email" placeholder="Email" />
    <br /><br />

    <input
      id="senha"
      type="password"
      placeholder="Senha"
    />
    <br /><br />

    <button id="cadastroBtn">
      Cadastrar
    </button>

    <p id="mensagem"></p>
  `

  document
    .querySelector('#cadastroBtn')
    .addEventListener('click', async () => {

      const nome =
        document.querySelector('#nome').value

      const email =
        document.querySelector('#email').value

      const senha =
        document.querySelector('#senha').value

      const { error } = await supabase
        .from('users')
        .insert([
          {
            nome,
            email,
            senha
          }
        ])

      if(error){

        document.querySelector('#mensagem')
          .innerHTML = 'Erro ao cadastrar ❌'

      } else {

        document.querySelector('#mensagem')
          .innerHTML =
            'Usuário cadastrado ✅'
      }

    })

}

async function telaRelatorio() {

  const { data } = await supabase
    .from('users')
    .select('*')

  let linhas = ''

  data.forEach(usuario => {

    linhas += `
      <tr>
        <td>${usuario.nome}</td>
        <td>${usuario.email}</td>
      </tr>
    `
  })

  document.querySelector('#conteudo').innerHTML = `
  
    <h2>Relatório</h2>

    <table
      border="1"
      cellpadding="10"
      style="border-collapse: collapse;"
    >

      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        ${linhas}
      </tbody>

    </table>
  `
}

document.querySelector('#app').innerHTML = `
  
  <div style="
    font-family: Arial;
    padding: 40px;
  ">

    <h1>Sistema 🚀</h1>

    <button id="btnCadastro">
      Cadastro
    </button>

    <button id="btnRelatorio">
      Relatório
    </button>

    <hr />

    <div id="conteudo"></div>

  </div>
`

document
  .querySelector('#btnCadastro')
  .addEventListener('click', telaCadastro)

document
  .querySelector('#btnRelatorio')
  .addEventListener('click', telaRelatorio)

telaCadastro()