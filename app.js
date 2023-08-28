
function ckecarCnpj(cnpj){
    $.ajax({
        url:'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),  
        'type': "GET",
        'dataType': 'jsonp',
        'success': function(dado){
            if(dado.nome == undefined){
                alert(dado.status + " CNPJ Invalido")
            }
            else{
                document.getElementById('razaoEmpresa').value = dado.nome;
                document.getElementById('fantasiaEmpresa').value = dado.fantasia;
                document.getElementById('ruaEmpresa').value = dado.logradouro;
                document.getElementById('cepEmpresa').value = dado.cep;
                document.getElementById('numeroEmpresa').value = dado.numero;
                document.getElementById('compleEmpresa').value = dado.complemento;
                document.getElementById('atividade_principal').value = dado.atividade_principal[0].text;
                document.getElementById('atividade_principal2').value = dado.atividades_secundarias[0].text;
                document.getElementById('atividade_principal3').value = dado.atividades_secundarias[1].text;
                document.getElementById('nome1').value = dado.qsa[0].nome;
                document.getElementById('cargo1').value = dado.qsa[0].qual;
                document.getElementById('nome2').value = dado.qsa[1].nome;
                document.getElementById('cargo2').value = dado.qsa[1].qual;
                document.getElementById('nome3').value = dado.qsa[3].nome;
                document.getElementById('cargo3').value = dado.qsa[3].qual;
                document.getElementById('bairroEmpresa').value = dado.bairro;
                document.getElementById('cidadeEmpresa').value = dado.municipio;
                document.getElementById('estadoEmpresa').value = dado.uf;
                document.getElementById('abertura').value = dado.abertura;
                document.getElementById('ultima_atualizacao').value = dado.ultima_atualizacao;
                document.getElementById('status').value = dado.status;
                document.getElementById('email').value = dado.email;
                document.getElementById('natureza_juridica').value = dado.natureza_juridica;
                document.getElementById('data_situacao').value = dado.data_situacao;
                document.getElementById('tipo_empresa').value = dado.tipo;
                document.getElementById('capital_social').value = dado.capital_social;
                document.getElementById('situacao').value = dado.situacao;
                document.getElementById('porte').value = dado.porte;
                document.getElementById('data_situacao_especial').value = dado.data_situacao_especial;              
                document.getElementById('natureza_juridica').value = dado.natureza_juridica;                
            }
            // console.log(dado);
        }
    })

}