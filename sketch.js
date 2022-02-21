//Autor: Hartur
//Data: 13/02/2022
//Versão: 0.0.002

/*Jogo para fins educativos e também consta como terceira nota do semestre da disciplica de Lógica de programação*/

/*--------------------------------------------------------------------------*/
//Declarando as variáveis
let tela = 1
let largura = 50
let altura = 50
let xMenu1 = 220
let xMenu2 = 295
let xMenu3 = 370
let xMenu4 = 445
let yMenu1 = 252
let yMenu2 = 252
let yMenu3 = 252
let xEllipse = 100
let yEllipse = 100
let fundo
let pieceCar
let dadoBranco
let dadoBranco1
let dadoBranco2
let dadoBranco3
let nomeJogo
let buttonPlay
let buttonInfo
let buttonCreditos
let buttonMusic
let buttonPlayOn
let buttonInfoOn
let buttonCreditosOn
let buttonMusicOn
let buttonMusicOff
let fundotabuleiro
let buttonReturn
let oleo
let madeira_pedra
let pedras
let Hartur
let Cuscuz
let i, j
let audio1
let x
let y
let verificador
const rectSize = 70
let dadoRandom = 0
let xCar = 465
let yCar = 300
let points = 0
let coordA = 465
let guardaPonto
let dadoBloqueado = false
let tempo = 0
let dateInicio = 0
let dateFinal = 0
let guardaMusica

//função que identifica os botões
function menu(menux, menuy, imagem, ximagem, yimagem, telaselect) {
    if (mouseX > menux && mouseX < menux + largura && mouseY > menuy && mouseY < menuy + altura) {
        image(imagem, ximagem, yimagem)
        if (mouseIsPressed) {
            tela = telaselect
        }
    }
}

//função para o botão que desliga a música
function music(menux, menuy, imagem, ximagem, yimagem, imagem2) {
    if (mouseX > menux && mouseX < menux + largura && mouseY > menuy && mouseY < menuy + altura) {
        image(imagem, ximagem, yimagem)
        if (mouseIsPressed) {
            image(imagem2, ximagem, yimagem)
        }
    }
}

//função para desenhar retângulos
function retangulo(corborda, corfundo, menux, menuy, base, h, angulo) {
    stroke(corborda) //Cor da borda
    fill(corfundo)// cor de fundo do retângulo
    rect(menux, menuy, base, h, angulo)//desenha o retângulo
}

//função para escrever
function escrever(corBordaLetra, corLetra, tamLetra, texto, x, y) {
    stroke(corBordaLetra)
    fill(corLetra)
    textSize(tamLetra)
    text(texto, x, y)
}
function escrever2(corLetra, tamLetra, texto, x, y) {
    fill(corLetra)
    textSize(tamLetra)
    text(texto, x, y)
}

//Setando as imagens
function preload() {
    fundo = loadImage('MenuOfc.png')
    fundotabuleiro = loadImage('fundo_tabuleiro.png')
    nomeJogo = loadImage('nomedojogo.png')
    pieceCar = loadImage('pieceCar.png')
    dadoBranco = loadImage('dadoBranco.png')
    dadoBranco1 = loadImage('dadoBranco1.png')
    dadoBranco2 = loadImage('dadoBranco2.png')
    dadoBranco3 = loadImage('dadoBranco3.png')
    buttonPlay = loadImage('buttonPlay.png')
    buttonInfo = loadImage('buttonInfo.png')
    buttonCreditos = loadImage('buttonCreditos.png')
    buttonMusic = loadImage('buttonMusic.png')
    buttonPlayOn = loadImage('buttonPlayOn.png')
    buttonInfoOn = loadImage('buttonInfoOn.png')
    buttonCreditosOn = loadImage('buttonCreditosOn.png')
    buttonMusicOn = loadImage('buttonMusicOn.png')
    buttonMusicOff = loadImage('buttonMusicOff.png')
    buttonReturn = loadImage('buttonReturn.png')
    buttonReturnOn = loadImage('buttonReturnOn.png')
    oleo = loadImage('oleo.png')
    madeira_pedra = loadImage('madeira_pedra.png')
    pedras = loadImage('pedras.png')
    Hartur = loadImage('hartur.jpg')
    Cuscuz = loadImage('cuscuz.jpg')
}
const positions = [
    [465, 300],
    [395, 300],
    [325, 300],
    [255, 300],
    [185, 300],

    [185, 230],
    [185, 160],

    [255, 160],
    [325, 160],
    [395, 160],
    [465, 160],

    [465, 90],
    [465, 20],

    [395, 20],
    [325, 20],
    [255, 20],
    [185, 20],
];

const questions = [
    {
        question: "7+5*8-2*4",
        correct: '39',
    },
    {
        question: "8+[(255-21*3)/6]",
        correct: "40",
    },
    {
        question: "6(2-3)³-√(2³+1²)",
        correct: "-9",
    },
    {
        question: "√(3³+3²) - 4(1-5)²",
        correct: "-58",
    },
    {
        question: "4 + 7 * 3 - 15 / 5 - 7",
        correct: "15",
    },
    {
        question: "[(18+3*2)/8-5*3]/6",
        correct: "-2",
    },
    {
        question: "4/5(3+0,4)-3,21",
        correct: "-0,49",
    },
    {
        question: "1/(4,3+25%) + 4",
        correct: "4,19",
    },
    {
        question: "100/(1+20%)²*20%",
        correct: "13,89",
    },
    {
        question: "10+4*5%-6/2³",
        correct: "9,5",
    },
    {
        question: "3x + 2 = 11",
        correct: "3",
    },
    {
        question: "3x + 2 = 2-3x",
        correct: "0",
    },
    {
        question: "x = 5(1+0,3(2))",
        correct: "8",
    },
    {
        question: " 80 = 12(1 – 0,15*x)",
        correct: "-37,7",
    },
    {
        question: "0,3x – (0,1x + 2) = 3,4",
        correct: "27",
    },
    {
        question: "120 = 50(x – 3*0,4)",
        correct: "3,6",
    },
    {
        question: "100 = x(5+ 0,1(10))",
        correct: "16,6",
    }
]
function quadrado(ponto, n1, n2, n3) {
    if (points == ponto && points < 16) {
        retangulo('#e69e19', '#ffbc40', 540, 10, 170, 230, 5)
        retangulo('#e69e19', 'orange', 560, 180, 30, 40, 0)
        escrever2(0, 10, n1, 562, 205)
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            retangulo('#e69e19', 'yellow', 560, 180, 30, 40, 0)
            escrever2(0, 10, n1, 562, 205)
        }
        retangulo('#e69e19', 'orange', 610, 180, 30, 40, 0)
        escrever2(0, 10, n2, 612, 205)
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            retangulo('#e69e19', 'yellow', 610, 180, 30, 40, 0)
            escrever2(0, 10, n2, 612, 205)
        }
        retangulo('#e69e19', 'orange', 660, 180, 30, 40, 0)
        escrever2(0, 10, n3, 662, 205)
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            retangulo('#e69e19', 'yellow', 660, 180, 30, 40, 0)
            escrever2(0, 10, n3, 662, 205)
        }
        gerarQuestion()
    }
}

function gerarQuestion() {
    const currentQuestion = questions[points];
    escrever2(0, 15, points + '- Resolva:\n\n' + currentQuestion.question+'\n\n\n\n\nA resposta certa é:', 550, 25)
}
function acertou(){
    retangulo('#e69e19', '#ffbc40', 540, 10, 170, 230, 5)
    escrever2(0, 15, 'Parabéns!\nVocê acertou!\nJogue novamente.', 550, 25)
    dadoBloqueado = false
}
function mouseClicked() {
    if (tela == 2 && points == 1) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 2) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 3) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 4) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
    }
    if (tela == 2 && points == 5) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 6) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 7) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 8) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 9) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
    }
    if (tela == 2 && points == 10) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 11) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 12) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 13) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 14) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
    }
    if (tela == 2 && points == 15) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 16) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && points == 17) {
        if (mouseX > 560 && mouseX < 560 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            guardaPonto = points
        }
        if (mouseX > 610 && mouseX < 610 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
        if (mouseX > 660 && mouseX < 660 + 30 && mouseY > 180 && mouseY < 180 + 40) {
            points -= 1
            const [x, y] = positions[points]
            xCar = x;
            yCar = y;
            console.log(points)
        }
    }
    if (tela == 2 && mouseX > 624 && mouseX < 624 + 72 && mouseY > 314 && mouseY < 314 + 72) {
        dateInicio = Date.now()
        if(dadoBloqueado && points != 0)return
        let dados = [dadoBranco1, dadoBranco2, dadoBranco3]
        dadoRandom = parseInt(random(0, 3))
        // Para ponto == 1
        points += dadoRandom + 1;
        //gerarQuestion()
        const [x, y] = positions[points]
        xCar = x;
        yCar = y;
        dadoBloqueado = true
    }
}

function getRectXValue(row, col) {
    return row === 1 ? col : 180
}

function getColor(verificador) {
    return verificador % 2 === 0 ? 'gray' : 140
}
function setup() {
    createCanvas(720, 400) //cria ambiente
}

function draw() {
    textStyle(NORMAL) //Texto normal
    switch (tela) {
        case 1:
            //audio
            //Musicas muito altas, estouram os fones, caso o p5 venha a adicionar funções para controlar o volume, os aúdios serão postos, agredeço a compreensão.
            //Tela do Menu
            background(fundo)
            image(nomeJogo, 130, 15)
            image(dadoBranco3, 50, 25)
            image(dadoBranco2, 600, 25)
            /*-----------------JOGAR-----------------*/
            image(buttonPlay, 215, 250) //Imprime a imagem do botão play
            menu(xMenu1, yMenu1, buttonPlayOn, 215, 250, 2)//Função pra identificar o botão Play
            /*-----------------INFORMAÇÕES-----------------*/
            image(buttonInfo, 290, 250)
            menu(xMenu2, yMenu2, buttonInfoOn, 290, 250, 3)
            /*-----------------CRÉDITOS-----------------*/
            image(buttonCreditos, 365, 250)
            menu(xMenu3, yMenu3, buttonCreditosOn, 365, 250, 4)
            /*-----------------DESABILITA MÚSICA-----------------*/
            image(buttonMusic, 440, 250)
            music(xMenu4, yMenu3, buttonMusicOn, 440, 250, buttonMusicOff)
            xCar = 465
            yCar = 300
            points = 0
            dadoBloqueado = false
            guardaPonto = 0
            tempo = 0
            break

        case 2:
            let dados = [dadoBranco1, dadoBranco2, dadoBranco3]
            y = 20
            verificador = 1
            //Tela do jogo
            background(fundotabuleiro)
            for (row = 0; row < 5; row++) {
                for (col = 0; col < 5; col++) {
                    x = (col * rectSize) + 180
                    fill(getColor(verificador))
                    if (row % 2 === 0) {
                        rect(x, y, rectSize, rectSize)
                    }
                    else if (col === 4) {
                        rect(getRectXValue(row, x), y, rectSize, rectSize)
                    }
                    verificador++
                }
                y += rectSize;
            }
            image(oleo, 255, 160)
            image(madeira_pedra, 185, 300)
            image(pedras, 465, 90)
            retangulo('#e69e19', '#ffbc40', 620, 310, 76, 76, 10)
            image(dados[dadoRandom], 624, 314)
            image(pieceCar, xCar, yCar)
            image(buttonReturn, 10, 340)
            menu(15, 345, buttonReturnOn, 10, 340, 1)
            quadrado(1, 39, 27, 41)
            if(guardaPonto == 1){
                acertou()
            }
            quadrado(2, 25, 40, 37)
            if(guardaPonto == 2){
                acertou()
            }
            quadrado(3, -9, -12, -5)
            if(guardaPonto == 3){
                acertou()
            }
            quadrado(4, -54, -51, -58)
            if(guardaPonto == 4){
                acertou()
            }
            quadrado(5, 12, 15, 8)
            if(guardaPonto == 5){
                acertou()
            }
            quadrado(6, -2, 2, 3)
            if(guardaPonto == 6){
                acertou()
            }
            quadrado(7, -0.21, -0.49, 0.32)
            if(guardaPonto == 7){
                acertou()
            }
            quadrado(8, 4.19, 4.21, 4.68)
            if(guardaPonto == 8){
                acertou()
            }
            quadrado(9, 13.15, 13.52, 13.89)
            if(guardaPonto == 9){
                acertou()
            }
            quadrado(10, 9.5, 9.3, 9.1)
            if(guardaPonto == 10){
                acertou()
            }
            quadrado(11, 2, 3, 5)
            if(guardaPonto == 11){
                acertou()
            }
            quadrado(12, 1, 0, 3)
            if(guardaPonto == 12){
                acertou()
            }
            quadrado(13, 7, 8, 4)
            if(guardaPonto == 13){
                acertou()
            }
            quadrado(14, -36.5, -37, 7, -37, 8)
            if(guardaPonto == 14){
                acertou()
            }
            quadrado(15, 27, 26, 23)
            if(guardaPonto == 15){
                acertou()
            }
            quadrado(16, 3.6, 3.5, 3.1)
            if(guardaPonto == 16){
                acertou()
            }
            quadrado(17, 16.7, 16.6, 16.8)
            if(guardaPonto == 17){
                acertou()
            }

            if (points >= 16) {
                background(255)
                escrever2(0, 50, 'Parabéns!\nVocê chegou ao final!', 200, 200)
                image(buttonReturn, 10, 340)
                menu(15, 345, buttonReturnOn, 10, 340, 1)
                dateFinal = Date.now()
            }
            break

        case 3:
            //Tela de informações
            tempo = (dateFinal - dateInicio)/1000
            background(fundotabuleiro)
            retangulo('#424242', '#D8D8D8', 25, 25, 665, 300, 10)
            image(buttonReturn, 10, 340)
            menu(15, 345, buttonReturnOn, 10, 340, 1)
            escrever('#424242', 0, 15, 'Este é um jogo de tabuleiro, no qual você terá que acertar as questões da casa em que cair.\nAo clicar no dado ele irá girar e cair em um número aleatório de 1 a 3, que será quantidade\nde casas que você irá avançar se acertar a questão.\nComplete o mais rápido possível e marque seu record!\n\nÚltimo record: '+tempo.toFixed(2)+' segundos', 50, 50)
            break

        case 4:
            //Tela de créditos
            background(fundotabuleiro)
            image(buttonReturn, 10, 340)
            menu(15, 345, buttonReturnOn, 10, 340, 1)
            retangulo('#424242', '#D8D8D8', 25, 25, 665, 300, 10)
            escrever('#424242', 255, 20, 'Lógica de Programação', 250, 20)
            escrever('#424242', 0, 20, 'CRÉDITOS:', 50, 50)
            escrever('#424242', 0, 15, 'Hartur', 135, 90)
            escrever('#424242', 0, 15, 'Aluno', 135, 280)
            escrever('#424242', 0, 15, 'Professor Cuscuz', 490, 90)
            escrever('#424242', 0, 15, 'Orientador', 515, 280)
            fill('#ffbc40')
            stroke('#e69e19')
            image(Hartur, 85, 100, 150, 150)
            image(Cuscuz, 475, 100, 150, 150)
            break
    }
}