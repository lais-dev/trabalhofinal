function decimalParaBinario(decimal) {
    return parseInt(decimal).toString(2);
    }
    function binarioParaDecimal(binario) {
    var decimal = 0;
    var posicao = 0;
    while (binario > 0) {
    var digito = binario % 10;
    decimal += digito * Math.pow(2, posicao);
    binario = Math.floor(binario / 10);
    posicao++;
   
   
    }
    return decimal;
    }
    function decimalParaHexadecimal(decimal) {
    return parseInt(decimal).toString(16).toUpperCase();
    }
    function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
    }

    



    function convertDecimal() {
        var decimalInput = document.getElementById("decimalInput").value;

        // Converter o número decimal para binário e hexadecimal
        var binaryOutput = parseInt(decimalInput, 10).toString(2);
        var hexadecimalOutput = parseInt(decimalInput, 10).toString(16).toUpperCase();

        // Exibir os resultados na seção "segunda"
        document.getElementById("binaryOutput1").innerHTML = "Binário: " + binaryOutput;
        document.getElementById("hexadecimalOutput1").innerHTML = "Hexadecimal: " + hexadecimalOutput;
    }

    function convertBases() {
        var inputNumber = document.getElementById("inputNumber").value;
        var baseSelect = document.getElementById("baseSelect");
        var selectedBase = parseInt(baseSelect.value);

        // Converter o número na base selecionada para binário, decimal e hexadecimal
        var binaryOutput = parseInt(inputNumber, selectedBase).toString(2);
        var decimalOutput = parseInt(inputNumber, selectedBase).toString(10);
        var hexadecimalOutput = parseInt(inputNumber, selectedBase).toString(16).toUpperCase();

        // Exibir os resultados na seção "terceira"
        document.getElementById("binaryOutput2").innerHTML = "Binário: " + binaryOutput;
        document.getElementById("decimalOutput").innerHTML = "Decimal: " + decimalOutput;
        document.getElementById("hexadecimalOutput2").innerHTML = "Hexadecimal: " + hexadecimalOutput;
    }