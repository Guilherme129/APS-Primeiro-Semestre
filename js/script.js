//Declaração da variável do elemento pelo ID 'novoMenuPrincipal'
var header = document.getElementById('novoMenuPrincipal')
//Declaração da variável do elemento pelo ID 'rodape'
var rodape = document.getElementById('rodape')
//Declaração da variável do elemento pelo ID 'menuSecundario'
var menuSecundario = document.getElementById('menuSecundario')

// Adiciona um ouvinte de evento para o botão de modo noturno
document.getElementById('btModoEscuro').addEventListener('click', function () {
  // Alterna a classe 'dark-mode' no elemento body quando o botão é clicado
  document.body.classList.toggle('dark-mode')

  //É visto se a variável header contém a classe 'dark', caso tenha ela retira, caso não adiciona a classe
  if (header.classList.contains('dark')) {
    header.classList.remove('dark')
  } else {
    header.classList.add('dark')
  }

  //É visto se a variável rodape contém a classe 'dark', caso tenha ela retira, caso não adiciona classe
  if (rodape.classList.contains('rodapeDark')) {
    rodape.classList.remove('rodapeDark')
  } else {
    rodape.classList.add('rodapeDark')
  }

  //É visto se a variável menuSecundario contém a classe 'dark', caso tenha ela retira, caso não adiciona classe
  if (menuSecundario.classList.contains('menuSecundario-dark')) {
    menuSecundario.classList.remove('menuSecundario-dark')
  } else {
    menuSecundario.classList.add('menuSecundario-dark')
  }
})

function funcaoNovoMenuPrincipal() {
  var x = document.getElementById('novoMenuPrincipal') // armazenado na variável x
  // verifica se a classe do elemento x é exatamente igual
  if (x.className === 'menuPrincipal') {
    x.className += ' responsivo' // Adiciona a classe "responsivo" à lista de classes do elemento x
  } else {
    x.className = 'menuPrincipal' // Remove a classe diretamente à lista de classes do elemento x, substituindo qualquer classe existente
  }
}

//Função que faz mostrar a mensagem depois de clicar no botão enviar
function mostrarMensagem() {
  alert('Enviado com sucesso!')
}
