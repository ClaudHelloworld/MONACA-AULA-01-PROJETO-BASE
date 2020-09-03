// This is a JavaScript file

$(document).on("click",'#somar',function(){
  
     var sexo = $("option:selected",("#sexo")).val();
     var idade = parseFloat($("#idade").val());
     var altura = parseFloat($("#altura").val());
     var peso = parseFloat($("#peso").val());
     var gp = parseFloat($("option:selected", ("#gp")).val());

if(sexo=="M"){
  var resultado = gp * (66+( (13.7 * peso) + (5* altura) - (6.8 * idade) ) );
}
else{
  var resultado = gp * (655+ ( (9.6* peso) + (1.8* altura) - (4.7 * idade) ) );
}
 
 

    $("#resultado").text(resultado.toFixed(2));
    console.log(sexo);
});

