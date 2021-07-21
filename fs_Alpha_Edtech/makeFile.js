/*   Criando um arquivo de extensão .txt   */
const fs = require('fs');
const data = "Arquivo com extensão .txt criado com sucesso"

/*Modo Assincrono*/
fs.writeFile('diretorioAsync/arquivo1.txt', data, (err) => {
    if(err) throw err;
    console.log("Arquivo criado com sucesso");
});

/*Modo Sincrono*/
fs.writeFileSync('diretorioSync/arquivo2.txt', data);
