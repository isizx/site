function logar(){
    var usuario = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if(usuario =='admin' && senha =='admin'){
        alert("logado com sucesso")
        location.href ='index.html'
    }else{
        alert("Senha ou usuário incorreto")
    }
}
