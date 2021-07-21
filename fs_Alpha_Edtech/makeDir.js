/*   Criando um diretório   */
const fs = require('fs');
const pathToCreateAsync = './diretorioAsync';
const pathToCreateSync = './diretorioSync';

/*Modo Assincrono*/
fs.mkdir(pathToCreateAsync, function(err){
    if(err) throw err;
    console.log(pathToCreateAsync + "diretório criado com sucesso");
});

/*Modo Sincrono*/
fs.mkdirSync(pathToCreateSync);
if(fs.existsSync(pathToCreateSync)){
    console.log(pathToCreateSync + "diretório criado com sucesso");
};

/*Modo Sincrono
if(fs.mkdirSync(pathToCreateSync)){
    console.log(pathToCreateSync + "diretório criado com sucesso");
};*/