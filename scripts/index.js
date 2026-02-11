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
 function validar_desafio2(){
    const sim = document.getElementById("sim");
    const idade = document.getElementById("idade_desafio2").value;

    if(sim.checked || idade > 60){
        mensagem2.innerText = "Válido";
        mensagem2.style.color = "darkgreen";
    }else{
        mensagem2.innerText = "Inválido";
        mensagem2.style.color = "red";
    }

 }

 function validar_desafio3(){
    const nome = document.getElementById("nome3").value;
    const idade = document.getElementById("idade3").value;

    if(nome.length >0 && idade >0){
        mensagem3.innerText = "Está certo";
        mensagem3.style.color = "darkgreen";
    }else{
        mensagem3.innerText = "Está errado";
        mensagem3.style.color = "red"
    }
 }
    