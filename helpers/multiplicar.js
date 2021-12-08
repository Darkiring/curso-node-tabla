const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}${i <= hasta - 1 ? '\n' : ''}`;
            consola += `${base} x ${i} = ${base * i}${i <= hasta - 1 ? '\n' : ''}`.random;
        }
        if (listar) {
            console.log('======================'.rainbow.italic.inverse);
            console.log('     Tabla del:'.trap.italic, colors.italic.cyan(base));
            console.log('======================'.rainbow.italic.inverse);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.random;
    } catch (error) {
        throw error;
    };
};

module.exports = {
    crearArchivo
};
