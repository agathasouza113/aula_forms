function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >=16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "darkgreen";

    } else if (idade >=16 && nivel <=5){
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE"
        mensagem.style.color = "darkblue"
    }else{
        mensagem.innerText = "Inscrição negada. Idade mínima: 16 anos"
        mensagem.style.color = "red";
    }
}
// Desafio 1
function validar_desafio1(){
    const senha1 = document.getElementById('senha1').value;
    const senha2 = document.getElementById('senha2').value;
    const mensagem1 = document.getElementById("mensagem1");

    if(senha1.length >= 8){
        if(senha1==senha2){
            mensagem1.innerText = "Senha confirmada";
            mensagem1.style.color = "darkgreen";
        }else{
            mensagem1.innerText = "Senhas diferentes";
            mensagem1.style.color = "red";
        }
    }else{
        mensagem1.innerText = "Senha inválida";
        mensagem1.style.color = "red";
    }
}
    