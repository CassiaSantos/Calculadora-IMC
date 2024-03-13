const form = document.getElementById('form-calcalator-imc');

form.addEventListener('submit', function(event) {
    event.preventDefault();//impede carregamento da páginas após dados serem submetidos.

    // váriavies de peso e altura inseridas no formulário html:
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    //cálculo do IMC:
    const imc = (weight/(height*height)).toFixed(2);

    const valueIMC = document.getElementById('value-imc');//onde o IMC será exibido na página HTML
    let textAlertIMC = "";

    //classe hidden será removida
    document.getElementById('result-imc').classList.remove('hidden');

    //Alertas de acordo com o resultado do cálculo do IMC
    if (imc < 18.5) {
        textAlertIMC = "Cuidado! Você está abaixo do peso!";
        valueIMC.classList.remove('alert-good', 'alert-dangerous', 'alert-terrible');
        valueIMC.classList.add('alert-attention');
    
    } else if ((imc >= 18.5) && (imc <= 25)) {
        textAlertIMC = "Parabéns! Você está no peso ideal!";
        valueIMC.classList.remove('alert-attention', 'alert-dangerous', 'alert-terrible');
        valueIMC.classList.add('alert-good');
    
    } else if ((imc > 25) && (imc <= 30)) {
        textAlertIMC = "Cuidado! Você está com sobrepeso!";
        valueIMC.classList.remove('alert-attention', 'alert-good', 'alert-terrible');
        valueIMC.classList.add('alert-dangerous');
    
    } else if ((imc > 30) && (imc <= 35)) {
        textAlertIMC = "Cuidado! Você está com obesidade moderada!";
        valueIMC.classList.remove('alert-attention', 'alert-good', 'alert-terrible');
        valueIMC.classList.add('alert-dangerous')
    
    } else if ((imc > 35) && (imc <= 40)) {
        textAlertIMC = "Cuidado! Você está com obesidade severa!";
        valueIMC.classList.remove('alert-attention', 'alert-good', 'alert-dangerous');
        valueIMC.classList.add('alert-terrible');
    
    } else{
        textAlertIMC = "Cuidado! Você está com obesidade mórbida!";
        valueIMC.classList.remove('alert-attention', 'alert-good', 'alert-dangerous');
        valueIMC.classList.add('alert-terrible');
    }
   
    //Exibição do cálculo do IMC:
    valueIMC.textContent = imc.replace('.', ',');
    
    //Exibição da mensagem de alerta do IMC:
    document.getElementById('text-alert-imc').textContent = textAlertIMC;

});