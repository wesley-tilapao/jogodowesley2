class Cobra {

  constructor() {
    this.corpo = [];
    //cobra começando no centro do canvas (w e h são witdh e height em escala)
    this.corpo[0] = createVector(w / 2, h / 2);
    this.dirX = 0;
    this.dirY = 0;
    this.pontos = 0;
  }

  //recebe argumentos de acordo com a tecla pressionada
  mover(x, y) {
    this.dirX = x;
    this.dirY = y;
  }


  //atualiza a localização da cobra a cada frame
  update() {
    let cabeca = this.corpo[this.corpo.length - 1].copy();
    this.corpo.shift();
    cabeca.x += this.dirX;
    cabeca.y += this.dirY;
    this.corpo.push(cabeca);

    //modo circular :)
    if (paz) {
      if (cabeca.x < 0) {
        cabeca.x = w - 1;
      }
      if (cabeca.x > w - 1) {
        cabeca.x = 0;
      }

      if (cabeca.y < 0) {
        cabeca.y = h - 1;
      }

      if (cabeca.y > h - 1) {
        cabeca.y = 0;
      }

    }
  }

  //checando as condições que dariam game over
  fimDoJogo() {
    let x = this.corpo[this.corpo.length - 1].x;
    let y = this.corpo[this.corpo.length - 1].y;

    //checando se cabeça da cobra bate no corpo
    if (!paz) {
      for (let i = 0; i < this.corpo.length - 1; i++) {
        let corpo = this.corpo[i];
        if (corpo.x == x && corpo.y == y) {
          return true;
        }
      }
    }
    //checando se cabeça da cobra sai da tela
    if (x < 0 || x > w - 1 || y < 0 || y > h - 1) {
      if (!paz) {
        return true;
      }
    }
  }

  //desenhando na tela todos os quadrados de acordo com as posições do array do corpo, retorna a posição da cabeça 
  oi() {
    for (let i = 0; i < this.corpo.length; i++) {
      noStroke();
      if (paz) {
        fill(random(360), 100, 100);
        rect(this.corpo[i].x, this.corpo[i].y, 1, 1);
      } else {
        let hue;
        if (i < 45) {
          hue = i * 8;
        } else {
          hue = (i % 45) * 8;
        }
        fill(hue, 100, 100);

        rect(this.corpo[i].x, this.corpo[i].y, 1, 1);

      }
    }
    return this.corpo[this.corpo.length - 1];
  }


  //recebe o local da comida
  comeu(localComida) {
    //checa se cabeça está no mesmo lugar que comida
    let x = this.corpo[this.corpo.length - 1].x;
    let y = this.corpo[this.corpo.length - 1].y;
    if ((x == localComida.x) && (y == localComida.y)) {
      //define nova posição pra comida e cresce a cobra
      comida.cade();
      this.cresceu();
    }

    //checa se comida apareceu no corpo da cobra, se sim, define nova localização
    for (let i = 0; i < this.corpo.length; i++) {
      let localCobra = this.corpo[i];
      if (localCobra.x == localComida.x && localCobra.y == localComida.y) {
        comida.cade();
      }
    }
  }

  //copia posição da cabeça (onde estava tb comida) e acrescenta ao final do array do corpo da cobra
  cresceu() {
    let cabeca = this.corpo[this.corpo.length - 1].copy();
    this.pontos++;
    this.corpo.push(cabeca);
  }

  //função para recomeçar, zerar array após game over, recolocar comida na tela, zerar pontos e retomar loop do draw
  inicio() {
    this.corpo = [];
    this.corpo[0] = createVector(w / 2, h / 2);
    comida.cade();
    cobra.mover(0, 0);
    this.pontos = 0;
    valendo = false;
    inicio = true;
    paz = false;
    teste = false;
    loop();
  }

  //retorna o placar atualizado
  placar() {
    return this.pontos;
  }
}