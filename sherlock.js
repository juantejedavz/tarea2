//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
// Obtener número de casos introducidos
cases= _INPUT.charAt(0);
console.log("Casos: "+cases);
		
		x=[];
		y=[];
			// Inicializar arreglos en 0
				for(n=0;n<cases;n++){
					x[n]=0;y[n]=0;
				}
			
		/* Busqueda de valores en _INPUT para ser almacenados en variables
		por lectura de caracteres
		*/	
		i=0;
		j=0;	
	while(j<cases){
		if(_INPUT.charAt(i)=='\n'){
			i++;
			while(_INPUT.charAt(i)!=" "){
			 x[j]=x[j]+_INPUT.charAt(i);
			 i++;
			}
			i++;
			while(_INPUT.charAt(i)!="\n" && i<=_INPUT.length-1){
			 y[j]=y[j]+_INPUT.charAt(i);
			 i++;
			}
			j++;
			i--;
		}
		i++;
	}

// Calculo de casos
calcular(x,y,cases);

// Funcion de busqueda de caso de Sherlock
function calcular(x,y,cases){

	// Ciclo for para n casos
	for(i=0;i<cases;i++){
		k=0;
		num=x[i];
		raices=[];

		//Ciclo de busqueda en forma ascendente de valores
		while(num<=y[i]){
			
				/* Chequeo de numero Square Integer  
				console.log("Checking root of "+num);
				*/
			if(Math.sqrt(num)%2==0||Math.sqrt(num)%2==1){
				raices[k]=num;
				k++;
				//console.log("S.I. found: "+num);
			}
		 num++;
		}
			console.log(raices.length);

			//Impresion de arreglo de Square Integers encontrados
			/* if(raices.length!=0){
				//console.log("Square Integers for case "+(i+1)+": "+raices);
			}
			else{
			//console.log("Square Integers for case "+(i+1)+": none");
			} */
	}
}
