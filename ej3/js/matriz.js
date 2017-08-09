
/*
	Desarrollado por: Josué Rauda #18
	Colegio Don Bosco
*/

function matriz(){
	var a;//variable de números de filas
	var b;//variable de números de columnas
	var m;//variable de arreglo
	m=[];
    var h;//contador
    var k;//variable de número random
	var i;//contador
	var j;//contador
	var z;//variable que se le insertará un html
	
	a=(parseInt(document.getElementById("filas").value));//filas
	b=(parseInt(document.getElementById("columnas").value));//columnas
	if(a<=5&&b<=5&&a>=1&&b>=1){
	//A continuación código html
	z="<!DOCTYPE HTML>"
	z+="<html>"
	z+="<head>"
	z+="<meta charset='utf-8'>"
    z+="<title>Matrices</title>"
    z+="<link rel='stylesheet' href='../css/estilo.css'>"
	z+="</head>"
	z+="<body>"
	z+="<h1>MATRIZ</h1>";	
	for(i=1;i<=a;i++){	//for según filas	
		for(j=1;j<=b;j++){//for según columnas
			k=(Math.floor((Math.random()*99)+1));//número random entre 1-100
			m[j]=k;		//se mostrará en label
			z+="<label> ";
			z+=m[j];//inserta elementos
		}
		z+=" </label>";
		z+="<br>";//
	}
	
	z+="<h1>MATRIZ TRANSPUESTA</h1>";
  
       for(h=1;h<=b;h++){  //for según columnas
	   for(i=a;i>=1;i--){  //for en reducción según filas
                z+="<label class='prueba'>";//se mostrará en label
			     z+=m[h];//mostrar transpuesta
			     z+=" </label>";	
		}
           z+="<br>"//fin de primera fila de elementos de la matriz
       }
	
	//Fin de muestra de resultado html
    	z+="</body>";
		z+="</html>";
		
		document.write(z);//mostrar resultado
	}else{
		alert("Filas y columnas tienen un máximo de 5 y mínimo de 1");
	}
}