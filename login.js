let nomeInput = document.getElementById("username")
let senhaInput = document.getElementById("password")
let vetorUsuarios = []
function show() {
  var senha = document.getElementById("password");
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
}


function LogarUsuario(){

  // Cria uma variável "flag" para controlar o login
  let logou = false

  // Cria uma variável para armazenar o username logado
  let userLogado

  // Recebe do localStorage os dados de usuários
  vetorUsuarios = JSON.parse(localStorage.getItem('usuario'))

  // Percorre o vetor de usuários
  for(i=0; i < vetorUsuarios.length; i++){

      // Verifica se nome e senha conferem
      if(nomeInput.value == vetorUsuarios[i].nome && senhaInput.value == vetorUsuarios[i].senha){

          // Altera "flag" para indicar que logou
          logou = true 

          // Armazena nome do usuário logado
          userLogado = vetorUsuarios[i].nome

      }

  }

  // Verifica "flag" para logar
  if(logou){

      // Salva no localStorage o nome do usuário logado
      localStorage.setItem('userLogado', JSON.stringify(userLogado))

      // Mostra mensagem de login efetuado
      alert("Login efetuado!")

      // Troca para a página do site
    window.location.href = "site.html"

  // Caso a "flag" não seja verdadeira
  }else{

      // Mostra mensagem de login não efetuado
      alert("Falha no login")

      // Limpa os campos após fazer o cadastro
      nomeInput.value = ''
      senhaInput.value = ''

  }

}


