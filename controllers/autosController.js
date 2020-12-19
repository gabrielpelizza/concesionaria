let fs = require('fs');
const dataJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));


module.exports = {
    autos : function(req,res) {
        let data = [];
        let sup = [];

        dataJSON.forEach(element => {
            sup = element.autos
            sup.forEach(element => {
                data.push(element)
            })
        });

        for (let index = 0; index < data.length; index++) {
            res.write("marca: " + data[index].marca + "\n");
            res.write("modelo: " + data[index].modelo + "\n");
            res.write("anio: " + data[index].anio + "\n");
            res.write("color: " + data[index].color + "\n");  
            res.write("\n")         
        }
        res.end()
    },
    autoMarca : function(req,res) {
        
        let data = [];
        let sup = [];

        dataJSON.forEach(element => {
            sup = element.autos
            sup.forEach(element => {
                data.push(element)
            })
        });


        let sucursal = data.filter(dato => {return dato.marca == req.params.id});
        
        


        if(sucursal.length !== 0){
            for (let index = 0; index < sucursal.length; index++) {
                res.write("marca: " + sucursal[index].marca + "\n");
                res.write("modelo: " + sucursal[index].modelo + "\n");
                res.write("anio: " + sucursal[index].anio + "\n");  
                res.write("\n")         
            }

        }else {
            res.write('sucursal no encontrada');
        }
        
        res.end();
    }
}