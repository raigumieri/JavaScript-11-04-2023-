//While

let cont = 0
while(cont < 10){
    document.write("O valor é: " +cont);
    document.write("<br>")
    cont++
}

//Do while

let cont1 = 10
do{
    document.write("<br><br>")
    document.write("O valor while é: " +cont1)
    cont1++
}while(cont == 0)



function mudar(){
    let novo = document.getElementById("idNome")
    document.getElementById("titulo"). innerHTML = novo.value;
}