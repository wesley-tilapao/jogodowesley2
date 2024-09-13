function jogo() {
    //colocando o placar no head html
    let pontos = cobra.placar();
    placar.html(pontos);
    
  
    scale(res);
    background(7);
    //fr é escolhido na primeira tela
    frameRate(fr);

    cobra.update();
    cobra.oi();
    comida.oi();
  

    //quando o jogo acaba
    if (cobra.fimDoJogo()) {
      background(15);
      //tirando comida da tela
      comida.fim();
      let perdeu = ":(";
      let texto = "clique para recomeçar";
      textSize(2);
      text(perdeu, 2, 6);
      textSize(1);
      text(texto, 2, 10);
      //permitindo o clique para recomeçar
      gameOver = true;
      //parar o loop do draw
      noLoop();
    }
  
    //passando a localização da comida para cobra.comeu
    cobra.comeu(comida.oi());

  }