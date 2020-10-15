/* IMPORTAÇÃO DO PACOTE EXPRESS PARA A INDEX */
// DECLARAR UM CONSTANTE
const express = require('express')
 
/*INSTANCIA DE PACOTE*/
const app = express()
//app.use(express.static("public"));
 
app.get("/", function(request, response){
 
 console.log('DEU CERTO!!!!')
 
});
 
/*-------------------------------------------------------------------------------------------*/
/*ÁREA DE TESTE*/
 
// console.log('TESTE DE SAÍDA DA APLICAÇÃO NODEJS')
// console.log('TESTE DE SAÍDA DA APLICAÇÃO NODEJS - 2')
// console.log('TESTE DE SAÍDA DA APLICAÇÃO NODEJS - 3')
// console.log('TESTE DE SAÍDA DA APLICAÇÃO NODEJS - 4')
// console.log('TESTE DE SAÍDA DA APLICAÇÃO NODEJS - 5')
 
/*-------------------------------------------------------------------------------------------*/
 
/* CRIAÇÃO DO SERVIDO WEB DA APLICAÇÃO */
app.listen('3000', ()=>{
 
 console.log('SERVIDOR RODANDO')
 
})