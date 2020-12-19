const { FORMERR } = require('dns');
let fs = require('fs');
const { index } = require('./homeController');
const dataJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = {
    marcas : function(req,res) {
        let arro = [];
        let i = 0;
        let otroArray = [];
        let hash = [];

        

        dataJSON.forEach(element => {
            arro = element.autos;
            arro.forEach(element => {
                otroArray.push(element.marca)
            })
            
          

        });
        
        
        const dataArr = new Set(otroArray);

        let result = [...dataArr];
        
        result.forEach(element => {
            res.write(element + '\n')
        })

        res.end();


        
    },
    marca : function(req, res) {
        
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



