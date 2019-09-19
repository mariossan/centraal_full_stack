/*Escribe una función en javascript:

- [ ] que determine si el primer parametro es un arreglo
- [ ] que devuelva el último item de un arreglo
- [ ] que añada un nuevo item al principio de un arreglo
- [ ] que añada un nuevo item al final de un arreglo
- [ ] que junte todos los strings de un arreglo dentro de un string
- [ ] que devuelva la suma y el producto de todos los numeros dentro de un arreglo*/


/*
    01  - Funcion que devuelva un arreglo
*/
function returnArray()
{
    return ['nombre1', 'nombre2', 'nombre3', '...', 'nombreN']
}

//console.log(returnArray()[0])

/*
    02  - que devuelva un objeto
*/
function returnObject() {
    let animal = [
        {
            especie: "Perro",
            nombre: "Percy",
            edad: 5,
            unidad_tiempo: "años",
            color: "Blanco",
            vacunas: [
                {nombre: "Rabia",
                dosis: 7.5,
                unidad_medida: "mililitros"},
                {nombre: "Gripe",
                dosis: 5,
                unidad_medida: "mililitros"}
            ]
        },
        {
            especie: "Gato",
            nombre: "Misha",
            edad: 12,
            unidad_tiempo: "meses",
            color: "Café",
            vacunas: [
                {nombre: "Rabia",
                dosis: 2,
                unidad_medida: "mililitros"},
                {nombre: "Gripe",
                dosis: 3.5,
                unidad_medida: "mililitros"}
            ]
        }
    ]
    return animal
}
//console.log(returnObject())


/*
    03  - Función que retorne un arreglo con los números del 1 al 20
*/

function returnArrayNumbers(totalNumbers)
{
    let arreglo = new Array()

    for (let i = 1; i <= totalNumbers; i++) {
        arreglo.push(i)
    }

    return arreglo
}
//console.log(returnArrayNumbers(40))


/** 04
 * function que devuelva un objeto 
 * con la información básica de una persona 
 * (nombre, edad, género) previamente 
 * ingresados a la función como parametros
 * 
 */

 function returnObjectWithInformation(name, age, gender)
 {
     return {name, age, gender}
 }
 //console.log(returnObjectWithInformation('Mariossan', '32', 'Male'))




 /** 05
  * function que devuelva un arreglo con las letras de un string ingresado a la función como parametro
  */
function returnArrayFromString(txt)
{
    let letters = []
    for (let i = 0; i < txt.length; i++) {
        letters.push( txt[i] )
    }

    return letters
}
//console.log( returnArrayFromString('mariossan') )


/** 06
 * Function que tome dos parametros y posteriormente devuelva un arreglo con esos parametros
 */

 function twoParametters(param1, param2)
 {
     return [param1, param2]
 }

//console.log(twoParametters('Mario', 'ssan'))


/** 07
 * Function que determine de que tipo de dato es un parametro ingresado
 */
function dettectParameterType(param)
{
    if ( typeof param === 'undefined' ) {
        return 'NO definido'
    } else if ( typeof param === 'boolean' ) {
        return 'Es un booleano '
    } else if ( typeof param === 'number') {
        return 'Es Numero'
    } else if ( typeof param === 'string' ) {
        return 'Es una cadena de texto'
    } else if ( param instanceof Array ) {
        return 'Es un arreglo'
    } else if ( typeof param === 'function' ) {
        param()
        return '\tEs una funcion'
    } else if ( param instanceof Object ) {
        return 'Es un objeto'
    } else {
        return 'No se que mierda esta pasando aqui'
    }
}

console.log( dettectParameterType() ) // no definido
console.log( dettectParameterType(true) ) // bool
console.log( dettectParameterType(10) ) // numero
console.log( dettectParameterType("mariossan") ) // cadena de texto
console.log( dettectParameterType([1,2,3]) ) // array
console.log( dettectParameterType({'mario':'asdsa', 'ssan':'asdas'}) ) // objeto
console.log( dettectParameterType( function(){ console.log('llamada a mi callback') } ) ) // function
