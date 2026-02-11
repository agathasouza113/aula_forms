function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >=16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "darkgreen";

    }else if (idade >=16 && nivel <=5){
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE"
        mensagem.style.color = "darkblue"
    }else{
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos"
        mensagem.style.color = "red";
    }

}
    