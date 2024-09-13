class Comida {

  constructor() {
  }

  //seleciona novo local aleatório para comida
  cade() {
    let x = floor(random(w));
    let y = floor(random(h));
    this.comida = createVector(x, y);
      }
  
  //desenha a comida e retorna a posição da comida
  oi() {
    noStroke();
    fill(255);
    rect(this.comida.x, this.comida.y, 1, 1);
    return this.comida; 
  }
  
  //para comida não seguir aparecendo na tela de fim de jogo (aparece fora do canvas rs)
  fim() {
    let x = 100;
    let y = 100;
    this.comida = createVector(x, y);
  }
  
}