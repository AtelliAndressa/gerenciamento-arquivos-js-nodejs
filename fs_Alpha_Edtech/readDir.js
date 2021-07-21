/* Ler os subdiretórios dos diretórios correspondentes */
const fs = require('fs');

/* Assincrono */
fs.readdir('./diretorioAsync', (err, files) =>{
    files.forEach(file => {
        console.log(file);
    })
});

/* Sincrono */
fs.readdirSync('./diretorioSync').forEach(file => {
    console.log(file);
});