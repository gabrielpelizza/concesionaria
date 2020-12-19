let fs = require('fs');
const dataJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports= {
    sucursales : function(req, res) {
        res.write('A continuacion encontra info sobre nuestras sucursales\n')
        dataJSON.forEach(element => {
            res.write(element.sucursal + "\n");
            res.write(element.direccion + "\n");
            res.write(element.telefono + "\n");
            res.write('\n')
        });
        res.end()
        
        
    },
    sucursal : function(req,res){
        let sucursal = dataJSON.filter(negocio => {return negocio.sucursal == req.params.id});

        if(sucursal.length !== 0){
            res.write(sucursal[0].sucursal + "\n");
            res.write(sucursal[0].direccion + "\n");
            res.write(sucursal[0].telefono + "\n");

        }else {
            res.write('sucursal no encontrada');
        }
        res.end();
    }
}

