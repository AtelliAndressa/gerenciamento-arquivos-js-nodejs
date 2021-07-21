const fs = require('fs');

function listarArquivosPastasDiretorio(diretorio, arquivos){
    if(!arquivos)
        arquivos = [];
    let listaArquivos = fs.readdirSync(diretorio);
    for(let k in listaArquivos){
        let stat = fs.statSync(diretorio + '/' + listaArquivos[k]);
        arquivos.push(diretorio + '/' + listaArquivos[k]);
        //se for um diretorio:
        if(stat.isDirectory())
          listarArquivosPastasDiretorio(diretorio + '/' + listaArquivos[k], arquivos);
    //console.log(listaArquivos);
    }
    return arquivos;
}

let lista = listarArquivosPastasDiretorio('./fs_Alpha_Edtech');
console.log(lista);