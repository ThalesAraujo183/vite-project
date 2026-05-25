import { supabase } from './supabase'

document.querySelector('#app').innerHTML = `
  <div style="
    font-family: Arial;
    padding: 40px;
    max-width: 400px;
    margin: auto;
  ">

    <h1>Cadastro 🚀</h1>

    <input
      id="nome"
      placeholder="Nome"
      style="
        width: 100%;
        padding: 10px;
        margin-top: 10px;
      "
    />

    <input
      id="email"
      placeholder="Email"
      style="
        width: 100%;
        padding: 10px;
        margin-top: 10px;
      "
    />

    <input
      id="senha"
      type="password"
      placeholder="Senha"
      style="
        width: 100%;
        padding: 10px;
        margin-top: 10px;
      "
    />

    <button
      id="cadastroBtn"
      style="
        width: 100%;
        padding: 12px;
        margin-top: 20px;
      "
    >
      Cadastrar
    </button>

    <p id="mensagem"></p>

  </div>
`

document
  .querySelector('#cadastroBtn')
  .addEventListener('click', async () => {

    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

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

      document.querySelector('#mensagem').innerHTML =
        'Erro ao cadastrar ❌'

      console.log(error)

    } else {

      document.querySelector('#mensagem').innerHTML =
        'Usuário cadastrado com sucesso ✅'
    }

})