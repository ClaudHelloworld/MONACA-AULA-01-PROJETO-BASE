// This is a JavaScript file

$(document).on("click","#somar",function(){
    var valor1 = $("#valor1").val();

    var cal = $("#C").val() - 1200;

  if (valor1  <= 1200){
    var resultado = document.write( "Você ainda precisa ou, já está no seu limite de calorias, Restantes = ${C}" ); 
  }

  else{
    var resultado = document.write("Você já Ultrapassou as 1200kg Diárias Recomendadas")
  }
  
    $("#resultado").val(resultado);
});
