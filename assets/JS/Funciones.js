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

//ejercicio 8//

function func_eje8() {
        
    num = document.getElementById("eje8_Numero").value
    cont = 0
    texto = "1, "

    if (num == "" || (parseInt(num) > -1 && parseInt(num) < 1)){
      texto = ""
    }

    num = parseInt(num)
    if (num < 0){
      num = num * -1
    }

    for (i = 1; i <= num; i++){
      cont = 0
        for (x = 1; x <= i / 2; x++){
            if (i%x == 0){
             cont++
            }
        }
        if (cont == 1){
           texto = texto + i + ", "
        }
    }

    document.getElementById("num_primos").value = texto.slice(0,-2)
}

//ejercicio 9//

function func_eje9() {
    nom = document.getElementById("eje9_nom").value
    apell = document.getElementById("eje9_apell").value
    edad = document.getElementById("eje9_edad").value
    ciudad = document.getElementById("eje9_ciu").value

    if(nom == "" || apell == "" || edad == "" || ciudad == ""){
      document.getElementById("parraf").innerHTML = "No esta completo"
    }
    else{
      document.getElementById("parraf").innerHTML = "Mi nombre es " + nom + " " + apell + ", tengo " + edad + " años. Nací en la ciudad de " + ciudad + "."
    }

}

//ejercicio 10//

function func_eje10() {
    val1 = document.getElementById("eje10_num1").value
    val2 = document.getElementById("eje10_num2").value
    document.getElementById("eje10_resultado").value = ""
    cont = 0
    texto = ""

    if(val1 != "" && val2 != ""){
      val1 = parseInt(val1)
      val2 = parseInt(val2)

        if(val1 == val2){
          document.getElementById("eje10_resultado").value = "son los mismos numeros."
        }
      else{
        if(val1 < val2){
            for(i=val1+1; i<=val2-1; i++){
              texto = texto + i + ", "
              cont++
            }
            if(cont == 0){
              document.getElementById("eje10_resultado").value = "no se puede realizar la operacion"
            }
            else{
              document.getElementById("eje10_resultado").value = texto.slice(0,-2)
            }
        }
        else{
           for(i=val1-1; i>=val2+1; i--){
              texto = texto + i + ", "
              cont++
            }
            if(cont== 0){
              document.getElementById("eje10_resultado").value = "no se puede realizar la operacion"
            }
            else{
              document.getElementById("eje10_resultado").value = texto.slice(0,-2)
            }
        }
      }
    }
}


