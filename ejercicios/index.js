/**
 * Metodo REST dentro de javascript
 * @param {*} f1 = fruta 1 
 * @param {*} f2  = fruta 2
 * @param  {...any} f3  = el resto de frutas que se registran como un array
 */
function frutas(f1,f2, ...resto) {
    console.log(f1)
    console.log(f2)
    console.log(resto)
}

frutas("pera", "manzana", "mandarina", "banana", "naranja");
