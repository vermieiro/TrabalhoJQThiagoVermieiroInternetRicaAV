 function ResetForm() {
 
        $(":text").each(function () {
            $(this).val("");
        });    
}
function enviar(){
	'use strict';

	var nome = $('#nome').val();
	var profissao = $('#profissao').val();
	var telefone = $('#telefone').val();
	var salario = $('#salario').val();
	
	if(nome == " " || profissao == "" || telefone == "" || salario == ""){
			alert("Preencha todos os campos!");
	}else{
		tabela(nome, profissao, telefone, salario);
		ResetForm();
	}
}
function tabela(nome, profissao, telefone, salario){
	'use strict';

	$('#resultado').show();
	$('#resultado').find('tbody').append('<tr><td>' + nome + '</td><td>'+profissao + '</td> <td>' + telefone + '</td> <td>' + salario + '</td></tr>');
}
