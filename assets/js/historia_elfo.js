historia_elfo = {
    1:{
        texto:"Você é uma  elfa chamada Gailya  que foi chamada pelo  seu Rei Aragorn I para uma missão: atravessar a floresta das trevas para entregar a Relíquia do Poder ao senhor guardião Adotumal Astorio. As relíquias do Poder era um artefato muito antigo o seu poder era grandioso mas só um coração puro de um cavalheiro poderia invocar todo seu poder , um poder supremo para controlar povos e submeter a todos a sua submissão. Vamos lá aventureiro !.",
        acoes:{},
        historia:2

    },
    2:{
        texto:" Gaylia adentrou na tão temida Floresta das Trevas meio receosa e com seu coração palpitando, avistou uma trilha se viu à frente de duas opções:Ir  pela trilha da esquerda  com o risco de encontrar algum malfeitor ou entrar pela direita  na parte de mata fechada sem saber os perigos que vai ter pela frente.Escolha um caminho? ",
        acoes:{esquerda:3,direita:4},
        historia:-1
    },
    3:{
        texto:" Então você segue a trilha , anda a pela floresta  vigilante quando avista um belo lago então você fica pensativa sobre : Entrar no lago pelo lado direito pois era parte mais rasa  ou contornar o lado pela esquerda e acessar a trilha principal. O que você faria?",
        acoes:{esquerda:5,direita:6},
        historia:-1
    },
    4:{
        texto:"  Depois de ficar ficar horas a fio dentro trilha fechada vc chegou numa area mais aberta ms verificou que há  uma bifurcação  que divide a trilha em duas  trilhas. Escolha um caminho:?",
        acoes:{ esquerda:7,direita:8},
        historia:-1
    },

    5:{
        texto:"OH Gailya  você errou o caminho e se perdeu por 2 horas e agora vai ter voltar ao inicio para recomecar.",
        acoes:{},
        historia:2
    },
    6:{
        texto:"Você se arrependeu ter escolhido o lago pois a  aguá estava  muito gelada  , pelo menos consegiu chegar rapido antes do anoitecer .Para se esquentar fez uma pequena fogueira e seguiu ",
        acoes:{},
        historia:9
    },
    7:{
        texto: " Você andou por muito tempo e está cansada e chovia muito forte  , então decidi descansa , andando um pouco mais a direita  há uma  caverna  e  logo a sua esquerda uma cabana velha abandonada. O que você faz ? ",
        acoes:{esquerda:9,direita:10},
        historia:-1

    },
    8:{
        texto:"Oh que pena  ! Este caminho vai te levar a um caminhos de voltas e mais volta , agora você está perdida. Para achar o caminho final volta para o começo. ",
        acoes:{},
        historia:2
    },
    9:{
        texto:"começou uma chuva com raios e trovões  e você  estava cansada encontrou uma cabana e pode se esconder e dormir um pouco , acordou  depois de algum tempo e seguiu em frente. ",
        acoes:{},
        historia:11
    },
    10:{
        texto:" Você descansou é  está pronta para seguir adiante , agora um pouco perdida e que deicdir a sorte o caminho pois não se lembra como retorna a trilha principal. Escolha um caminho?",
        acoes:{},
        historia:5
    },

    11:{
        texto:" Este caminho finalmente te levou ao destino final , o Guardião Adotumal Astorio ficou bastante sastisfeito pela sua missão comprida /n Você pode enfim retornar ao seu vilarejo e ainda ganhar  algumas moedas de ouro do Rei Aragorn I .",
        acoes:{},
        historia:-1
    },
  
}