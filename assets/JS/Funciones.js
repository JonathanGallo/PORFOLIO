//ejercicio 1//

function func_ej1(){

    let eje1_n1 = parseFloat(document.getElementById("eje1_n1").value);
    let eje1_n2 = parseFloat(document.getElementById("eje1_n2").value);
    let eje1_n3 = parseFloat(document.getElementById("eje1_n3").value);

    if (eje1_n1 > eje1_n2 && eje1_n1 > eje1_n3){
        document.getElementById("ej1_resul1").value = eje1_n1
    }
    else{
        if (eje1_n2 > eje1_n1 && eje1_n2 > eje1_n3){
            document.getElementById("ej1_resul1").value = eje1_n2
        }
        else{
            if (eje1_n3 > eje1_n1 && eje1_n3 > eje1_n2){
                document.getElementById("ej1_resul1").value = eje1_n3
            }
        } 
    }

}

function func_ej12(){

   let eje1_n1 = parseFloat(document.getElementById("eje1_n1").value);
   let eje1_n2 = parseFloat(document.getElementById("eje1_n2").value);
   let eje1_n3 = parseFloat(document.getElementById("eje1_n3").value);

    if (eje1_n1 < eje1_n2 && eje1_n1 < eje1_n3){
        document.getElementById("ej1_resul2").value = eje1_n1
    }
    else{
        if (eje1_n2 < eje1_n1 && eje1_n2 < eje1_n3){
            document.getElementById("ej1_resul2").value = eje1_n2
        }
        else{
             if (eje1_n3 < eje1_n1 && eje1_n3 < eje1_n2){
                document.getElementById("ej1_resul2").value = eje1_n3
            }
        } 
    }
}

//ejercicio 2//

function func_ej2(){
        
    let eje2_n1 = parseFloat(document.getElementById("eje2_n1").value);
    let eje2_n2 = parseFloat(document.getElementById("eje2_n2").value);
    
    const suma = eje2_n1 + eje2_n2;
    document.getElementById("ej2_resul").value = suma;
}

//ejercicio 3//

function func_ej3(){
  texto = document.getElementById("eje3_p").value
  numero = document.getElementById("eje_n1").value
  repet = ""

    for(i=0; i<numero; i++){
        repet = repet + texto + ","
    }
  
    document.getElementById("ej3_resul").value = repet.slice(0,-1)

}

//ejercicio 4//

//ejercicio 5//

function func_eje5() {
          
    texto = document.getElementById("eje5_p").value
    cont = 0

    for (i = 0, t = texto.length; i < t; i++) {
          if (texto[i] !== ''){
            cont++
        }
    }

    document.getElementById("canti_letras").value = cont
}

//ejercicio 6//

function func_eje6() {
          
    numero = document.getElementById("eje6_num").value
    
    if(numero == ""){
       document.getElementById("resul_num").value = "No hay numero"
    }
    else{
        if(parseFloat(numero)%2 == 0){
           document.getElementById("resul_num").value = "Par"
        }
        else{
           document.getElementById("resul_num").value = "Impar"
        }
    }

}

//ejercicio 7//

