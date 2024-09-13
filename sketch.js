let cobra;
let comida;
let w;
let h;
let res = 20;

let fr;
let placar;

//variáveis para efeito de mouse over dos menus
let a1;
let a2;
let a3;
let a4;
let b1;
let b2;

//booleanas para controlar tela do menu e tela fim de jogo
let inicio = true;
let valendo = false;
let gameOver = false;
let paz = false;

function setup() {
  canvas = createCanvas(400, 400);
  //alinhando canvas a partir da div criada no html / css
  canvas.parent('div');

  colorMode(HSB);
  noStroke();

  //usando elemento html h1 para placar
  placar = select('#h1');
  placar.style("color", "white");

  //novas variáveis para width e height de acordo com escala
  w = width / res;
  h = height / res;
  cobra = new Cobra();
  comida = new Comida();

  //já estabelecendo uma posição inicial pra comida, já que função não poderia estar no draw se não apareceria em um lugar diferente a cada frame 
  comida.cade();
}


function draw() {
  //se é o começo de jogo, tela menu, se não, começa o jogo
  if (inicio) {
    menu();
  } else if (valendo) {
    jogo();
    //tirando cursor durante o jogo pra não atrapalhar 
    noCursor();
  } else {
    modoDeJogo();
  }
}



//checando se alguma tecla for pressionada, qual tecla foi e movendo a cobrinha (passando como parâmetro para a função cobra.mover dentro da classe cobra)
function keyPressed() {

  switch (keyCode) {
    case UP_ARROW:
      cobra.mover(0, -1);
      break;

    case DOWN_ARROW:
      cobra.mover(0, 1);
      break;

    case LEFT_ARROW:
      cobra.mover(-1, 0);
      break;

    case RIGHT_ARROW:
      cobra.mover(1, 0);
      break;

  }
}

//mousePressed dava xabu pq logo depois tinha que apertar de novo na seleção e já ia tudo numa só
function mouseReleased() {
  //só faz isso se estiver no gameOver
  if (gameOver) {
    cobra.inicio();
    cursor();
    gameOver = false;
    
  }
}
