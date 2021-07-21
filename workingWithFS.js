const fs = require('fs');

/*
    Bloco de código que lê um arquivo no formato txt e armazena o seu conteúdo em um outro arquivo txt
*/
fs.readFile('../files/readMe.txt','utf8',function(err,data){
    if(err) throw err;
    
    fs.writeFile('../files/writeMe2.txt', data, function(err){
        if(err) throw err;
        console.log("escreveu");
    });

});


const objToWrite = {"obj":"toWrite"};

/*
    Bloco de código que lê um arquivo no formato json e transforma em um objeto utilizavel
*/
fs.readFile('../files/readMe.json',function(err,data){
    if(err) throw err;
    const obj = JSON.parse(data);
    console.log(obj);
})

/*
    Bloco de código que verifica se existe este caminho dentro da aplicação, cria em caso de falha e armazena um arquivo json
*/
fs.stat('../file/jsons/ok',function(err,stats){
    if(err){
        const dirFilesPromise = new Promise(function(resolve,reject){
            fs.mkdir('../file/jsons/ok',{recursive: true},function(err){
                if(err) reject(err);
                resolve("OK");
            });
        });
        
        dirFilesPromise
        .then(res => {
            fs.writeFile('../file/jsons/ok/writeMe.json',JSON.stringify(objToWrite),function(err){
                if(err) throw err;
                console.log(res);
            });
        })
        .catch(err => {
            console.log(err);
        })
    }else{
        fs.writeFile('../file/jsons/ok/writeMe.json',JSON.stringify(objToWrite),function(err){
            if(err) throw err;
            console.log("Escreveu o obj");
        });
    }
});

/*
    Bloco de código que lê um diretório e apresenta todos os seus itens
*/
fs.readdir("../files",function(err,data){
    if(err) throw err;

    data.forEach(function(files){
        console.log(`../files/${files}` );
    })
})

