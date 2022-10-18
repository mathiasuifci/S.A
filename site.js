
// Cria uma função para mostrar o username que está logado
function MostraUserLogado(){

    // Mostra na div topo o nome do usuário logado vindo do localStorage
    document.getElementById("mostraUsuario").innerHTML = `OLÁ, ${JSON.parse(localStorage.getItem('userLogado')).toUpperCase()}!`  

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
       cacto2[x].style.display = ~cacto2[x].className.indexOf(cacto) ? "block" : "none";}

    var violeta = this.options[this.selectedIndex].getAttribute("name");
    var violeta2 = document.querySelectorAll("#violetas div");
    for(var x=0; x<violeta2.length; x++){
       violeta2[x].style.display = ~violeta2[x].className.indexOf(violeta) ? "block" : "none";}

    var lambari = this.options[this.selectedIndex].getAttribute("name");
    var lambari2 = document.querySelectorAll("#lambari div");
    for(var x=0; x<lambari2.length; x++){
          lambari2[x].style.display = ~lambari2[x].className.indexOf(lambari) ? "block" : "none";}


    var orquidea = this.options[this.selectedIndex].getAttribute("name");
    var orquidea2 = document.querySelectorAll("#orquidea div");
    for(var x=0; x<orquidea2.length; x++){
        orquidea2[x].style.display = ~orquidea2[x].className.indexOf(orquidea) ? "block" : "none";}


    
    var jade = this.options[this.selectedIndex].getAttribute("name");
    var jade2 = document.querySelectorAll("#jade div");
    for(var x=0; x<jade2.length; x++){
        jade2[x].style.display = ~jade2[x].className.indexOf(jade) ? "block" : "none";}

    var comigo = this.options[this.selectedIndex].getAttribute("name");
    var comigo2 = document.querySelectorAll("#comigo div");
    for(var x=0; x<comigo2.length; x++){
        comigo2[x].style.display = ~comigo2[x].className.indexOf(comigo) ? "block" : "none";}
    
    var bromelia = this.options[this.selectedIndex].getAttribute("name");
    var bromelia2 = document.querySelectorAll("#bromelia div");
    for(var x=0; x<bromelia2.length; x++){
        bromelia2[x].style.display = ~bromelia2[x].className.indexOf(bromelia) ? "block" : "none";}
            
    
    var espada = this.options[this.selectedIndex].getAttribute("name");
    var espada2 = document.querySelectorAll("#espada div");
    for(var x=0; x<espada2.length; x++){
        espada2[x].style.display = ~espada2[x].className.indexOf(espada) ? "block" : "none";}

    
    var anturio = this.options[this.selectedIndex].getAttribute("name");
    var anturio2 = document.querySelectorAll("#anturio div");
    for(var x=0; x<anturio2.length; x++){
        anturio2[x].style.display = ~anturio2[x].className.indexOf(anturio) ? "block" : "none";}


    var lirio = this.options[this.selectedIndex].getAttribute("name");
    var lirio2 = document.querySelectorAll("#lirio div");
    for(var x=0; x<lirio2.length; x++){
        lirio2[x].style.display = ~lirio2[x].className.indexOf(lirio) ? "block" : "none";}

    
    
    var costela = this.options[this.selectedIndex].getAttribute("name");
    var costela2 = document.querySelectorAll("#costela div");
    for(var x=0; x<costela2.length; x++){
        costela2[x].style.display = ~costela2[x].className.indexOf(costela) ? "block" : "none";}
    
    var yuca = this.options[this.selectedIndex].getAttribute("name");
    var yuca2 = document.querySelectorAll("#yuca div");
    for(var x=0; x<yuca2.length; x++){
        yuca2[x].style.display = ~yuca2[x].className.indexOf(yuca) ? "block" : "none";}
            
        
    var lanca = this.options[this.selectedIndex].getAttribute("name");
    var lanca2 = document.querySelectorAll("#lanca div");
    for(var x=0; x<lanca2.length; x++){
        lanca2[x].style.display = ~lanca2[x].className.indexOf(lanca) ? "block" : "none";}
            
    var samambaia = this.options[this.selectedIndex].getAttribute("name");
    var samambaia2 = document.querySelectorAll("#samambaia div");
    for(var x=0; x<samambaia2.length; x++){
        samambaia2[x].style.display = ~samambaia2[x].className.indexOf(samambaia) ? "block" : "none";}

    var rabo = this.options[this.selectedIndex].getAttribute("name");
    var rabo2 = document.querySelectorAll("#rabo div");
    for(var x=0; x<rabo2.length; x++){
            rabo2[x].style.display = ~rabo2[x].className.indexOf(rabo) ? "block" : "none";}
                
            
         
            
            
    
                        
                    
                    
                
        
       
    // conteudo1
       var conteudo1 = this.options[this.selectedIndex].getAttribute("name");
       var conteudo11 = document.querySelectorAll("#conteudo1 div");
       for(var x=0; x<conteudo11.length; x++){
          conteudo11[x].style.display = ~conteudo11[x].className.indexOf(conteudo1) ? "block" : "none";}
    // conteudo2 
    var conteudo2 = this.options[this.selectedIndex].getAttribute("name");
    var conteudo22 = document.querySelectorAll("#conteudo2 div");
    for(var x=0; x<conteudo22.length; x++){
       conteudo22[x].style.display = ~conteudo22[x].className.indexOf(conteudo2) ? "block" : "none";}
    // conteudo3
       var conteudo3 = this.options[this.selectedIndex].getAttribute("name");
       var conteudo33 = document.querySelectorAll("#conteudo3 div");
       for(var x=0; x<conteudo22.length; x++){
          conteudo33[x].style.display = ~conteudo33[x].className.indexOf(conteudo3) ? "block" : "none";}
       
    
       
    }



