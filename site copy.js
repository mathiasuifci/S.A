
// Cria uma função para mostrar o username que está logado
function MostraUserLogado(){

    // Mostra na div topo o nome do usuário logado vindo do localStorage
    document.getElementById("topo").innerHTML = "OLÁ,  " + JSON.parse(localStorage.getItem('userLogado'))

}

// Cria uma função para cadastrar item de usuário
function CadastraItem(){

    // Recebe do localStorage os dados de usuários    
    vetorUsuarios = JSON.parse(localStorage.getItem('cadastroUsuarios'))
    
    // Recebe do localStorage o usuário que está logado
    userLogado = JSON.parse(localStorage.getItem('userLogado'))

    // Percorre o vetor de usuários
    for(i=0; i < vetorUsuarios.length; i++){    

        // Verifica se o usuário é o que está logado
        if(userLogado == vetorUsuarios[i].nome){

            // Verifica se o vetor de itens do usuário logado é nulo
            if (vetorUsuarios[i].items == null) {
               
                // Recria o vetor de itens
                vetorUsuarios[i].items = []
                    
                // Chama a função que realiza o cadastro do item
                RealizaCadastroItem()

            //Caso não seja nulo
            }else{

                // Chama a função que realiza o cadastro do item
                RealizaCadastroItem()
        
            }

        }

    }

}

// Cria uma função para cadastrar o item
function RealizaCadastroItem(){

    // Cria um objeto para armazenar os dados do item
    let objetoItem = {
        
        // Cria propriedades do objeto item
        nome: nomeItem.value,
        valor: valorItem.value,
        
    }

    // Adiciona o objeto criado ao vetor de item
    vetorUsuarios[i].items.push(objetoItem)

    // Salva no localStorage os dados já com os itens
    localStorage.setItem('cadastroUsuarios', JSON.stringify(vetorUsuarios))

    // Mostra mensagem de cadastro realizado
    alert("Item Cadastrado! :)")

    // Limpa os campos após fazer o cadastro
    nomeItem.value = ''
    valorItem.value = ''

}

// Cria uma função para listar os itens
function ListarItens(){

    // Recebe do localStorage os dados de usuários  
    vetorUsuarios = JSON.parse(localStorage.getItem('cadastroUsuarios'))

    // Recebe do localStorage o usuário que está logado
    userLogado = JSON.parse(localStorage.getItem('userLogado'))
    
    // Cria uma variável string para armazenar dados em uma lista
    let listaItens = ''

    // Percorre o vetor de usuários
    for (i=0; i < vetorUsuarios.length; i++){

        // Verifica o usuário logado
        if(userLogado == vetorUsuarios[i].nome){

            // Percorre o vetor de itens
            for(j=0; j < vetorUsuarios[i].items.length; j++){

                // Recebe os valores dos itens e adiciona na variável lista 
                listaItens += Object.values(vetorUsuarios[i].items[j]).join(' , ') + '<br>'

            }
        
        }
    
    }

    // Mostra o conteúdo da lista na div lista
    document.getElementById("lista").innerHTML = listaItens

}

document.querySelector("#lista-plantas").onchange = function(){
    // fotos
    var cacto = this.options[this.selectedIndex].getAttribute("name");
    var cacto2 = document.querySelectorAll("#cactos div");
    for(var x=0; x<cacto2.length; x++){
       cacto2[x].style.display = ~cacto2[x].className.indexOf(cacto) ? "block" : "none";

         // conteudo1
         var n = this.options[this.selectedIndex].getAttribute("name");
         var d = document.querySelectorAll("#conteudo1 div");
         for(var x=0; x<d.length; x++){
            d[x].style.display = ~d[x].className.indexOf(n) ? "block" : "none";
      // conteudo2 
          var conteudo2 = this.options[this.selectedIndex].getAttribute("name");
          var conteudo22 = document.querySelectorAll("#conteudo2 div");
          for(var x=0; x<conteudo22.length; x++){
         conteudo22[x].style.display = ~conteudo22[x].className.indexOf(conteudo2) ? "block" : "none";
      
      //  conteudo3 
      var conteudo3 = this.options[this.selectedIndex].getAttribute("name");
      var conteudo33 = document.querySelectorAll("#conteudo3 div");
      for(var x=0; x<conteudo33.length; x++){
     conteudo33[x].style.display = ~conteudo33[x].className.indexOf(conteudo3) ? "block" : "none";
      
  var violeta = this.options[this.selectedIndex].getAttribute("name");
    var violeta2 = document.querySelectorAll("#violetas div");
    for(var x=0; x<violeta2.length; x++){
       violeta2[x].style.display = ~violeta2[x].className.indexOf(violeta) ? "block" : "none";
  
        
    }}

}
}}}