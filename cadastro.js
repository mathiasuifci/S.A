const form = document.querySelector('#criar-conta-form');
const usernameInput = document.querySelector('#nomeUsuario');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');
const confirmPasswordInput = document.querySelector('#confirma-senha');

// SALVAR NO LOCALSTORAGE
let salvaDados= []
let nomeSalvo = document.getElementById('nomeUsuario');
let emailSalvo= document.getElementById('email');
let senhaSalva= document.getElementById('senha');
let nomeItem = document.getElementById("item")
let tipoItem = document.getElementById("tipo")
    

function confirmaCadastro(){
   
   
    salvaDados = JSON.parse(localStorage.getItem('usuario'))
    //JSON
    let usuario = 
        {nome: '' , email: '' ,senha: ''}
    
    usuario.nome = nomeSalvo.value 
    usuario.email = emailSalvo.value 
    usuario.senha = senhaSalva.value
  
    
    if(salvaDados === null && formValido(true)){
       
    salvaDados = []
    
    salvaDados.push(usuario)
    localStorage.setItem('usuario', JSON.stringify(salvaDados))
   
    alert("Cadastro concluído!")
    window.location.href = "login.html"

    // Limpa os campos após fazer o cadastro
    nomeSalvo.value = ''
    senhaSalva.value = ''
    emailSalvo.value = ''
    confirmPasswordInput.value = ''
    


    
    }else if( nomeSalvo.value != '' && emailSalvo.value != '' && senhaSalva.value != '' && confirmPasswordInput != '' &&   formValido(true)){
  
        salvaDados.push(usuario)
        
        localStorage.setItem('usuario', JSON.stringify(salvaDados))
      
      
        alert("Cadastro concluído!")
      
     
       
       
        window.location.href = "login.html"
        // Limpa os campos após fazer o cadastro
        nomeSalvo.value = ''
        senhaSalva.value = ''
        emailSalvo.value = ''
        confirmPasswordInput.value = ''
    
    }else {
alert("Falha no cadastro.")
validarForm()
    }
 

}
 
  
form.addEventListener('submit', (event)=>{
    
 
    confirmaCadastro();
    console.log(formValido());
    if(formValido() && confirmaCadastro ==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function formValido(){
    const inputContainers = form.querySelectorAll('.input-grupo');
    let resultado = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('erro')){
            resultado = false;
        }
    });
    return resultado;
}

function validarForm() {
    //NOME DE USUÁRIO
    if(usernameInput.value.trim()==''){
        informaErro(usernameInput, 'Nome não pode estar vazio');
    }else if(usernameInput.value.trim().length <6 || usernameInput.value.trim().length > 15){
        informaErro(usernameInput, 'Nome com no mínimo 6 e no máximo 15 caracteres.');
    }else {
        informaSucesso(usernameInput);
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        informaErro(emailInput, 'O e-mail não pode estar vazio');
    }else if(formValido(emailInput.value)){
        informaSucesso(emailInput);
    }else{
        informaErro(emailInput, 'Insira um e-mail válido');
    }

    //SENHA
    if(passwordInput.value.trim()==''){
        informaErro(passwordInput, 'Senha não pode estar vazia');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        informaErro(passwordInput, 'Senha com no mínimo 6 e no máximo 20 caracteres');
    }else {
        setSuccess(passwordInput);
    }
    //CONFIRMAR SENHA
    if(confirmPasswordInput.value.trim()==''){
        informaErro(confirmPasswordInput, 'Senha não pode estar vazia');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        informaErro(confirmPasswordInput, 'Senhas diferentes');
    }else {
        informaSucesso(confirmPasswordInput);
    }
}
//MOSTRAR SENHA
function show() {
    var senha = document.getElementById("senha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }
  function show2() {
    var senha = document.getElementById("confirma-senha");
    if (senha.type === "password") {
      senha.type = "text";
    } else {
      senha.type = "password";
    }
  }
  


function informaErro(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('sucesso')){
        parent.classList.remove('sucesso');
    }
    parent.classList.add('erro');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function informaSucesso(element){
    const parent = element.parentElement;
    if(parent.classList.contains('erro')){
        parent.classList.remove('erro');
    }
    parent.classList.add('sucesso');
}

function emailValido(email){
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}

