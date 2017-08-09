
/*
	Desarrollado por: Josué Rauda #18
	Colegio Don Bosco
*/

function convertir(){
    var m; //variable de input tipo text ingresado
    var a; //variable de arreglo
    var s; //variable que se le insertara un código html
    var i; //contador i
   	a=[];//conversión a arreglo la variable a
   	//A continuación se toma el valor ingresado por el usuario
    m = (parseFloat(document.getElementById("valor").value));
    //A continuación código html
    s="<!DOCTYPE HTML>"
	s+="<html>"
	s+="<head>"
	s+="<meta charset='utf-8'>"
    s+="<title>Convertir a dolares</title>"
    s+="<link rel='stylesheet' href='../css/estilo.css'>"
	s+="</head>"
	s+="<body>"
	s+="<h1>RESULTADO</h1>";
	//Análisis del resultado
    if(m>=500){//cantidad de $500
    	a[1]= Math.floor((m/500));//división entera entre 500
    	a[2]=(m%500);//cantidad faltante
    	m=a[2].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[1];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/500.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=100 && m<500){//cantidad de $100
        a[3]= Math.floor((m/100));//división entera entre 100
    	a[4]=(m%100);//cantidad faltante
    	m=a[4].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[3];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/100.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=50 && m<100){//cantidad de $50
        a[5]= Math.floor((m/50));//división entera entre 50
    	a[6]=(m%50);//cantidad faltante
    	m=a[6].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[5];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/50.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=20 && m<50){//cantidad de $20
    	a[7]= Math.floor((m/20));//división entera entre 20
    	a[8]=(m%20);//cantidad faltante
    	m=a[8].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[7];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/20.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=10 && m<20){//cantidad de $10
    	a[9]= Math.floor((m/10));//división entera entre 10
    	a[10]=(m%10);//cantidad faltante
    	m=a[10].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[9];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/10.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=5 && m<10){//cantidad de $5
    	a[11]= Math.floor((m/5));//división entera entre 5
    	a[12]=(m%5);//cantidad faltante
    	m=a[12].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[11];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/5.jpg'>";//agregar etiqueta img
    }
    }
    if(m>=1 && m<5){//cantidad de $1
    	a[13]= Math.floor((m/1));//división entera entre 1
    	a[14]=(m%1);//cantidad faltante
    	m=a[14].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[13];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/1.jpg'>";//agregar etiqueta img
    }
    }
    if(m<1 && m>=0.25){//cantidad de 25 centavos
    	a[15]= Math.floor((m/0.25));//división entera entre 0.25
    	a[16]=(m%0.25);//cantidad faltante
    	m=a[16].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[15];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/25cent.jpg'>";//agregar etiqueta img
    }
    }
    if(m<1 && m>=0.1){//cantidad de 10 centavos
    	a[17]= Math.floor((m/0.1));//división entera entre 0.1
    	a[18]=(m%0.1);//cantidad faltante
    	m=a[18].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[17];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/10cent.png'>";//agregar etiqueta img
    }
    }
    if(m<1 && m>=0.05){//cantidad de 5 centavos
		a[19]= Math.floor((m/0.05));//división entera entre 0.05
    	a[20]=(m%0.05);//cantidad faltante
    	m=a[20].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[19];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/5cent.jpg'>";//agregar etiqueta img
    }
    }
    if(m<1 && m>0){//cantidad de 1 centavo
    	a[21]= Math.floor((m/0.01));//división entera entre 0.01
    	a[22]=(m%0.01);//cantidad faltante
    	m=a[22].toFixed(2);//(resultado limitado en dos decimales)
    	for(i=1;i<=a[21];i++){//insertar etiquetas según división entera
    	s+="<img src='../img/1cent.jpg'>";//agregar etiqueta img
    }
    }
    	//Fin de muestra de resultado html
    	s+="</body>";
		s+="</html>";
		
		document.write(s);//mostrar resultado
}