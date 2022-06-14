const calcular = document.getElementById ('calcular');



function calculoimc (){
    const nome = document.getElementById ('nome').value;
    const peso = document.getElementById ('peso').value;
    const altura = document.getElementById ('altura').value;
    const resultado = document.getElementById ('resultado');

        if (nome !== '' && altura !== '' && peso !== '') {
            const valorIMC = (peso/ (altura * altura)).toFixed(2);
            console.log (valorIMC)
            
            alert (`${nome} seu peso e ${valorIMC}`);
        }
        function calculo() {
            return peso / ( altura * altura )
           }
            
           var result = calculo()
            
           if (result < 20) {
            console.log('Abaixo do peso');
           } else if (result >= 20 && result < 30) {
            console.log('Na media do peso')
           } else {
            console.log('Acima do pe');
           }



}-


    calcular.addEventListener ('click', calculoimc);