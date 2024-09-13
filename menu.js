function menu() {

  let x = width / 2;
  let y = height / 2;
  
  stroke(1);
  //retângulos do menu
  fill(263, 100, a1);
  rect(0, 0, x, y);

  fill(263, 100, a2);
  rect(200, 0, x, y);

  fill(263, 100, a3);
  rect(0, 200, x, y);

  fill(263, 99, a4);
  rect(200, 200, x, y);

  //textos
  fill(150);
  textSize(20);
  textFont("Courier New");
  text("TRAN K I L A", 15, 50);
  text("    NOKIA", 215, 50);
  text("R A P I D INEA", 15, 310);
  text("E T\n S\n    R\n     I\n  Q  UI\n N    AD\n            A", 215, 230);

  //reconhecendo onde está o mouse e se clickou
  if (mouseX > 0 && mouseX < x && mouseY > 0 && mouseY < y) {
    a1 = 35;
    if (mouseIsPressed) {
      fr = 4;
      inicio = false;
    }
  } else {
    a1 = 25;
  }
  if (mouseX > x && mouseX < 2 * x && mouseY < y && mouseY > 0) {
    a2 = 35
    if (mouseIsPressed) {
      fr = 7;
      inicio = false;
    }
  } else {
    a2 = 25;
  }

  if (mouseX < x && mouseX > 0 && mouseY > y && mouseY < 2 * y) {
    a3 = 35;
    if (mouseIsPressed) {
      fr = 14;
      inicio = false;
    }
  } else {
    a3 = 25;
  }
  if (mouseX > x && mouseX < 2 * x && mouseY > y && mouseY < 2 * y) {
    a4 = 35;
    if (mouseIsPressed) {
      fr = 22;
      inicio = false;
    }
  } else {
    a4 = 25;
  }
  
}

function modoDeJogo() {
  let x = width;
  let y = height / 2;

  fill(135, 98, b1);
  rect(0, 0, x, y);

  fill(135, 98, b2);
  rect(0, y, x, y);

  fill(100);
  textSize(40);
  textFont("Courier New");
  text("INFINITO", 70, 100);
  text("FINITO", 70, 300);

  if (mouseY > 0 && mouseY < y && mouseX > 0 && mouseX < x) {
    b1 = 25;
    fill(70);
    textSize(20);
    text("ou quase", 70, 130);
    if (mouseIsPressed) {
      teste = true;
    }
  } else {
    b1 = 15;
  }
  if (mouseY > y && mouseY < 2 * y && mouseX > 0 && mouseX < x) {
    b2 = 25;
    fill(70);
    textSize(20);
    text("o clássico", 70, 330);
    if (mouseIsPressed) {
      teste = true;
    }
  } else {
    b2 = 15;
  }



}
let teste;

function mousePressed() {
  let x = width;
  let y = height / 2;
  if (teste) {
    let y = height / 2;
    if (mouseY > 0 && mouseY < y && mouseX > 0 && mouseX < x) {
      paz = true;
      valendo = true;
    } else if (mouseY > y && mouseY < 2 * y && mouseX > 0 && mouseX < x) {
      valendo = true;
    }
  }
}