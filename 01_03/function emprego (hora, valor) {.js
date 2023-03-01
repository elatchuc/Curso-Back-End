function emprego (hora, valor) {

    salario = hora * valor
   
    return salario

} 

hora = prompt("Olá! Quantas horas você trabalhou esse mês?")

valor = prompt("Quanto é o seu salario por hora?")
    
salario = emprego(hora,valor)
alert("O seu salário esse mês será: R$ " + (salario) + " reais.")

