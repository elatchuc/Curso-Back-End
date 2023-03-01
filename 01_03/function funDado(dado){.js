function funDado(dado){

if (dado > 0){

    num2 = dado * -1;
    return num2;
}
else if(dado < 0){

    num3 = dado * -1;
    return num3;
}
else if(dado === "true"){
    return false;

}
else if(dado === "false"){
    return true;
}
else{
    alert("Booleano ou numero esperados, mas o parametro é do tipo string.");
    return dado;
}

}
var dado= prompt("Insira seu dado:")
dado = funDado(dado)
alert(dado)

