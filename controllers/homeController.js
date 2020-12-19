let fs = require('fs');
const dataJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports= {
    index : function(req, res) {
        res.write('Bienvenido a nuestra pagina, a continuacion se muestran todas nuestras sucursales\n')
        dataJSON.forEach(element => {
            res.write(element.sucursal + "\n");
        
        });
        res.end()
          
    }
}

