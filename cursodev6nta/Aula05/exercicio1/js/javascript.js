/**
 * 
 */
var a, b, c;
            
function pegNum() {
  a = document.getElementById("n1").value;
  b = document.getElementById("n2").value;
}
function somar(){
   pegNum();
   c = parseFloat( a ) + parseFloat( b );
   Result();
}
function subtrair() {
   pegNum();
   c = parseFloat( a ) - parseFloat( b );
   Result();
}
function multiplicar() {
   pegNum();
   c = parseFloat( a ) * parseFloat( b );
   Result();
}
function dividir() {
pegNum();
c = parseFloat( a ) / parseFloat( b );
Result();
}
function Result() {
	   var elementoResultado = document.getElementById("resultado");               
	  if ( c < 0 ) {
	     elementoResultado.style = "color: red;";
	} 
	  else if ( c > 0 ) {
	     elementoResultado.style = "color: green;";
	} 
	  else {
	     elementoResultado.style = "color: black;";
	}
	     elementoResultado.innerHTML = "Resultado: " + c;
	}

