// This is a JavaScript file

$(document).on("click","#somar",function(){
    var valor1 = parseFloat($("#valor1").val());

  if (valor1  <= 1200){
    var cal = 1200 - valor1;
    var resultado = "Você ainda precisa ou, já está no seu limite de calorias, Restantes = " +  cal; 
  }

  else{
    var resultado = "Você já Ultrapassou as 1200kg Diárias Recomendadas";
  }
  
    $("#resultado").text(resultado);
});
