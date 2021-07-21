/* Ler os arquivos dos diretórios correspondentes */
const fs = require('fs');

/* Assincrono */
fs.readFile('diretorioAsync/arquivo1.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

/* Sincrono */
let fileTxt = fs.readFileSync('diretorioSync/arquivo2.txt', 'utf8')
    console.log(fileTxt);