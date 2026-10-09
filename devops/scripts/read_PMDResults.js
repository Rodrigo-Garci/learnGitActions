const fs = require('fs');
const path = require('path')

async function exctractPMDInformation(){

    let filePath = path.join(__dirname, '/xcaret-pmd/apex-resultado.html');  //Ruta donde esta la validacion del PMD
    let pmdResult = path.join(__dirname + '/pmdResult.txt');                //Ruta donde se va a guardar el resultado
    try {
        let data = await fs.promises.readFile(filePath, 'utf8');            //Lectura del archivo
        let count = data.length;

        if(count > 0){                                          //Al guardarse como texto, al encontrar algo quiere decir que hay validacion
            await fs.promises.writeFile(pmdResult, 'true');
        } else {
            await fs.promises.writeFile(pmdResult, 'false');
        }

        console.log(`El archivo tiene ${count} caracteres.`);
    }
    catch (err) {
        console.error('Error al leer o escribir el archivo:', err);
    }

}

exctractPMDInformation();