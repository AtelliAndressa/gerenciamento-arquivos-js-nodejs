const fs = require('fs');
const objToWrite = {"obj":"towrite"};

fs.stat('./fs_alpha_edtech/makeDir.js',function(err,stats){
    if(err){
        const dirFilesPromise = new Promise(function(resolve,reject){
            fs.mkdir('./fs_alpha_edtech/makeDir.js',{recursive: true},function(err){
                if(err) reject(err);
                resolve("OK");
            });
        });
        
        dirFilesPromise
        .then(res => {
            fs.writeFile('./fs_alpha_edtech/makeDir.js',JSON.stringify(objToWrite),function(err){
                if(err) throw err;
                console.log(res);
            });
        })
        .catch(err => {
            console.log(err);
        })
    }else{
        fs.writeFile('./fs_alpha_edtech/makeDir.js',JSON.stringify(objToWrite),function(err){
            if(err) throw err;
            console.log("Escreveu o obj");
        });
    }
});
