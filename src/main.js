document.querySelector('#app').innerHTML = `
  <div style="font-family: Arial; padding: 40px;">
    <h1>Meu Primeiro Projeto 🚀</h1>

    <p>
      Testando GitHub e VS Code.
    </p>

    <button id="btn">
      Clique aqui
    </button>
  </div>
`

document.querySelector('#btn').addEventListener('click', () => {
  alert('Funcionando perfeitamente 🚀')
})