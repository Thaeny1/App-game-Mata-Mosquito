
    var altura = 0;
    var largura = 0;
    var vidas = 1;
    var tempo = 15;
    var criaMosquitoTempo = 1500;


    //alert(window.location.href)
    var nivel = window.location.search //pega tudo depois ?
    //alert(nivel.replace('?' , '')) // troca ? por vazio
    nivel = nivel.replace('?' , '')
    
    if(nivel === 'normal'){
        //1500
        criaMosquitoTempo = 1500;
    }else if(nivel === 'dificil'){
        //1000
        criaMosquitoTempo = 1000;
    }else if(nivel === 'chucknorris'){
        //750
        criaMosquitoTempo = 750;
    }
    

    function ajustaTamanhoPalcoJogo(){

        altura = window.innerHeight;
        largura = window.innerWidth;

        console.log(altura, largura)
    }
    ajustaTamanhoPalcoJogo()

    var cronometro = setInterval(function(){
        tempo -= 1;

        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href = 'vitoria.html'
        }else{
            document.getElementById('cronometro').innerHTML = tempo; //innerHTML VALOR CONTIDO ENTRE AS TAGS ---> o tempo é o valor que é incluido na tag
        }
    },1000)

    function posicaoRandomica(){

        //remover o mosquito anterior (caso exista) 
        if(document.getElementById('mosquito')) {  
            document.getElementById('mosquito').remove();

            //console.log('elemento selecionado foi: v' + vidas)
            if(vidas > 3){
                window.location.href = 'fim_de_jogo.html'
            }else{
                document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
            }
            
        }
        

        var posicaoX = Math.floor(Math.random() * largura) - 90; //arredondamento(floor)
        var posicaoY = Math.floor(Math.random() * altura) - 90;  //Para não ter estouro - o mosquito não sair da tela de visualização

        posicaoX = posicaoX < 0 ? 0 : posicaoX; // se x for menor que 0 se for (?) recebe zero senão (:) recebe ela mesma
        posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX,posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    //mosquito.className = 'mosquito1'  --->estilo css mosquito
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        //alert('Elemento clicado a tempo')
        this.remove(); //this faz referencia ao proprio elemento html que executa a função 
    }

    //DOM
    document.body.appendChild(mosquito); //através do proprio objeto doccument acessar o body da nossa pagina e incluir a imagem na nossa página  utilzando o método childAppend(Filho)
    //deu erro, pois deu erro de precedencia

    //tamanhoAleatorio()

    //console.log(tamanhoAleatorio())

    //console.log(ladoAleatorio())
    }

    function tamanhoAleatorio(){
        var classe = Math.floor(Math.random() * 3)  // o resultado será 0 ou algo muito próxima de 3 
        //console.log(classe)

        switch(classe){
            case 0:
                return 'mosquito1';
            case 1:
                return 'mosquito2';
            case 2:
                return 'mosquito3';
        }
    }

    function ladoAleatorio(){
        var classe = Math.floor(Math.random() * 2);
        switch(classe){
            case 0:
                return 'ladoA';
            case 1:
                return 'ladoB';
            
        }
    }

   