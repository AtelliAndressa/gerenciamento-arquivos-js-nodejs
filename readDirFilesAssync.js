const fs = require('fs').promises; //importando a promises

async function listarArquivosPastasDiretorio(diretorio, arquivos){
    if(!arquivos)     //se já não estiver dentro do arquivos
        arquivos = [];
    let listaArquivos = await fs.readdir(diretorio); //lendo diretorio
    for(let k in listaArquivos){
        let stat = await fs.stat(diretorio + '/' + listaArquivos[k]);    //retorna um objeto
        if(stat.isDirectory())  //se for um diretório faz a recursividade chamando os arquivos
            await listarArquivosPastasDiretorio(diretorio + '/' + listaArquivos[k], arquivos);
        arquivos.push(diretorio + '/' + listaArquivos[k]);
    }
    return arquivos;    
}

async function rodar(){
    let arquivos = await listarArquivosPastasDiretorio('./fs_Alpha_Edtech');
    console.log(arquivos);
}
rodar();


