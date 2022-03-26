
var historiaCorrente = 1;
var historia_texto = "";
var personagem = window.location.search.split('personagem=')[1];
var acoes = 0;
var texto = "";
var histo = "";
var nomeAcoes = "";
var historias = {
    1: historia_elfo,
    2: historia_humano,
    3: historia_anao
}


function loop(){

    acoes = historias[personagem][historiaCorrente].acoes;
    texto = historias[personagem][historiaCorrente].texto;
    histo = historias[personagem][historiaCorrente].historia;
    nomeAcoes = "";

    historia_texto = historia_texto + "\n\n" + texto;
    document.getElementById('jogotexto').value = historia_texto;
    

    setTimeout(function(){
        if(Object.keys(acoes).length >= 1){
            for (var nome in acoes) {
                nomeAcoes = nomeAcoes + "," + nome;
            }

            historiaCorrente = acoes[prompt("Informe a ação ["+nomeAcoes+"]")];
        }else{
            historiaCorrente = histo;
        }

        if(historiaCorrente>=0){
            loop();
        }else{
            window.location.href = "/gameover.html";
        }
    }, 3000);
}

loop();
