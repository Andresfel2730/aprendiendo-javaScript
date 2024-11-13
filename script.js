// variables en JS 
// var nombreDeLaVariable = 'curso de Javascript' // se puede sin valor o indefina se puede redeclarar y puede generar errores
// let nombreDeVariable = 'por andres' // se puede sin valor o indefina no se deja redeclarar
// const nombreVariable = 'practica en youtube' //si necesita valor no se deja redeclarar es la ideal para utilizar en generador de codigo


// nombreDeLaVariable = 'pedro' todo esto es con var pero lo ideal es utilizar CONST
// nombreDeLaVariable = 'luciana'
// nombreDeLaVariable = 'ricardo'
// nombreDeLaVariable = 'maria'
// nombreDeLaVariable = 'jose'


// document.getElementById('demostracion').innerHTML = 'Este texto esta en otro archivo JS'

// let x,y,z // declarar al mismo tiempo y despues separado utlizar un valor diferente para que no utliza el mismo valor de memoria
//  x = 5
//  y = 7
//  z = x + z

// let x, y, z;
// x = 5; y = 7; z = x + y;// el punto y coma se utliza para separar lineas de codigo

// function nombreDeFuncion(){
//     const nombreVariable = 'variable dentro de funcion'//las llaves encierran ambientes de trabajo para condicionar,objetos...
// }

//NUMEROS
// let variableNumero = 10 // valor numerico
// let variableDecimal = 10.10 //valor flotante

// //TEXTO
// let variableTexto = 'texto' //valor String (cadena de caracteres)
// let variableTexto2 = "texto" // valor String (cadena de caracteres)
// let variableTexto3 =`esta es una variable distinta ${variableNumero}`//texto concatenado con algunas variables (valor string con JS)

//OPERADORES
// const variable = 'valor de la variable' //operador de asignacion

// const suma = 1 + 3 // + es operador aritmectico de la suma
// const resta = 1 - 3 // - es operador aritmectico de la resta
// const multiplicacion = 1 * 3 // * es operador aritmectico de la multiplicacion
// const division = 1 / 3 // /es operador aritmectico de la division
// const resto = 5 % 2 // % es el operador aritmectico que nos dara el resto de una division
// const exponente = 3 ** 3 // ** es le operador de la exponenciacion

// let x = 5
// let y = 5

// x++;// aumentador
// y--;// disminuidor

// console.log(variable)
// console.log(suma)
// console.log(resta)
// console.log(multiplicacion)
// console.log(division)
// console.log(resto)
// console.log(exponente)
// console.log(x)
// console.log(y)

/*
reglas:
1) si puede iniciar con $, miniscula, mayuscula, guion_bajo
2) no se puede iniciar con numeros, pero si usarlos en el resto del nombre
3)no se puede utlizar caracteres especiales salvo $ y 
*/

// scope va de afuera hacia adentro

// const x = 5
// {
//     // const  x = 2
//     console.log(x)
// }
// console.log(x)

// let x = 5
// {
//     let y = 3
//     x -= y
//     // x = x + y

//     console.log(x)
// }

// TIPOS DE DATOS
//number
//  let a = 5 // valor entero
//  let b = 5.5 // valor flotante

//  //string
//   let c =  'cadena de texto' // valor String (texto)

//   //booleanos
//   let d = true //verdadero
//   let e = false //falso

//   //undefined
//   let f // no se asigno valor por locual es indefinido

//   //null
//   let g = null

//   //objet
//   let objeto = {    // valor objeto
//     clave: valor
//   }

//   // array
//   let array = [1,2,3,4,5,6,7]       //ARREGLOS O LISTAS DE NUMEROS
//   let array2 = ['HTML','CSS','JS']  //ARREGLOS O LISTAS DE PALABRAS

//   // DATE
//    const date = new Date("10-23-2024")
//    console.log(date)

// // concatenar
// let a = 5
// let b = '5'

// //let c = a + b
// let c = a + parseInt(b)
// console.log(c)

// let a1 = 5.9
// let b1 = '5.5'
// let c1 = a1 + parseFloat(b1)
// console.log(c1)

// let x = 5
// let y = 5

// let z = x === y //booleano va aser true o false
// console.log(z)

// //OPERADOR DE NEGACION
// let x1 = 5
// let y1 = 9

// let z1 = x1 != y1 //booleano va aser true o false
// console.log(z1)

// // MAYOR >
// let x2 = 5
// let y2 = 9

// let z2 = x2 >= y2 //booleano va aser true o false
// console.log(z2)

// //MENOR <
// let x3 = 5
// let y3 = 9
// let z3 = x3 <= y3 //booleano va aser true o false
// console.log(z3)

// let x4 = 5
// let y4 = 9
// let w4 = 5
// let a2 = x4 <  y4 && y4 > w4  //booleano va aser true o false (amper) conjuncion(&&)
// console.log(a2)

// let x5 = 5
// let y5 = 9
// let w5 = 5
// let a5 = x5 <  y5 || y5 > w5  //booleano va aser true o false (o) disyuncion(||)
// console.log(a5)

// let d = 5
// let e = 6

// console.log (d + e)

// //FUNCIONES
// const f = 5
// const g = 6

// function suma (x,y){
//     return x + y
// }
// // let respuesta = suma(5,6)
// // console.log(respuesta)

// const respuesta = suma(f,g)

//  console.log(`la respuesta de ${f} + ${g} es igual a:`, respuesta)
//  //***************************************** */
// const temperatura = 76

// function transformarAcelcius(fareheint){
//     return(fareheint-32) *(5/9)
// }
// const respuesta1 = transformarAcelcius (temperatura)
// console.log(`la temperatura en grados celcius es de:`, parseInt(respuesta1))
// //********************* */

// let num = '10'

// //FUNCION FLECHA O ARROW FUNCTION
// let sumarDecena = (numero) => numero + 12 


// const respuesta2 = sumarDecena(parseInt(num))

// console.log(respuesta2)


// OBJETOS
// let auto1 = {
//     marca: 'fiat',
//     modelo: 'uno',
//     peso: 1000,
//     color: 'rojo'
// }
// let auto2 = {
//     marca: 'renault',
//     modelo: '12',
//     peso: 1100,
//     color: 'marron'
// }
// // console.log('auto 1: ', auto1)
// // console.log('auto 2: ', auto2)
// // console.log('el color del auto es: ', auto2.color)
// auto1.marca = 'BMW'
// auto1.modelo = 'X5'
// // console.log(auto1)
// console.log(auto1["marca"])

// const vendedor = {
//     nombre: 'pedro',
//     apellido: 'gonzales',
//     empresa: 'auto S.A',
//     habilidadesBlandas: ['carisma', 'puntualidad'],
//     vender: function(){
//         return "pedro ha vendido un auto"
//     },
//     nombreCompleto: function(){
//         return this.nombre + " " + this.apellido// this se refiere al atributo pedro-gonzales
//     }

// }
// console.log(vendedor.habilidadesBlandas)

//EVENTOS
//ACCION O SUCESO QUE PASA EN UNA PAGINA WEB
// function mostrar(){
//     document.getElementById('seleccionable').innerHTML = Date()
// }

//STRINGS
// let string = 'let\'s do it'
// let string2 = 'esto es un salto \n de linea esto esta abajo'//salto de linea
// let string3 = 'esto es un \tabulado'//tabulado
// let string4 = 'murcielago'//contador de letras cuenta espacios y cualquier otro tipo de caracter(.length)

// let string5 = 'educacion'//slice divide la variable
// let resultado = string5.slice(4,7)
// console.log(resultado)

// const texto = 'la educacion es muy importante en COLOMBIA'
// const resultado1 = texto.replace('colombia', 'en el mundo')//reemplaza(replace)
// const resultado2 = texto.toLowerCase()//MINUSCULA
// const resultado3 = texto.toUpperCase()//mayusculas

// const texto1 = '             la educacion es muy importante en      '//organiza los espacios(trim)
// const texto2 = ' COLOMBIA'
// const texto3 = ' el mundo'

// const resultado4 = texto1.trim().concat(texto2)//tambien se puede concatenar(concat)

// const texto4 = 'este texto. te lo manda el backend. este texto es muy importante. dividi el texto'
// const texto5 = 'colombia'
// const texto6 = 'en el mundo'
// const resultado5 = texto4.split('. ')//pone el texto en un array

// console.log(resultado5)


// ARRAYS
// const array = new Array (6)
// array[0] = 'curso html'
// array[1] = 'curso css'
// array[2] = 'curso JS'
// array[3] = 99
// array[4] = [1,2,3,4,5]
// array[5] = {nombre: 'pedro'}
// document.getElementById('seleccionable').innerHTML = array

// const array = [9,7,8,5,4,6,2,3,1]
// console.log(array.sort())//ordena el array

// const array1 = ['zapato','ricardo','xilofon','barba']
// // console.log(array1[1])//para entrar a un elemento
// // console.log(array1[array1.length-1])//para ingresar al ultimo elemento

// const array2 = ['despertarse','comer','estudiar','dormir']
// let texto = ''
// for (let index = 0; index < array2.length; index++) {//este bucle recorre el array
//     texto += '<li>' + array2[index] + '</li>'

// }
// document.getElementById('seleccionable').innerHTML = texto

// const array = ['HTML','CSS','JS']
// array[array.length] = 'REACT'//agrega elemento
// array[8] = 'SQL'//QUEDAN ELEMENTOS VACIOS ANTES DEL INDICE 8
// console.log(array)

//METODOS DE ARRAY
// let array = ['manzana','pera','banana','naranja','manzana','naranja']

// const resultado = array.filter(x => x == 'manzana')//recorre el array
// console.log(resultado);

// const array1 = [
//     {nombre: 'pedro', apellido: 'gonzalez'},
//     {nombre: 'maria', apellido: 'perez'},
//     {nombre: 'lucia', apellido: 'gonzalez'},
//     {nombre: 'ricardo', apellido: 'gonzalez'},
//     {nombre: 'glottis', apellido: 'juarez'},
//     {nombre: 'fernada', apellido: 'gonzalez'},
// ]
// const resultado1 = array1.filter(x => x.apellido == 'gonzalez')//recorre el array devuelve lo que cumple la condicion
// for (let index = 0; index < resultado1.length; index++) {//bucle for
//     const element = resultado1[index];
//     console.log(element.nombre);
// }

// const array2 = ['manzana','manzana','manzana','manzana',]
// const resultado2 = array2.map(x => {    //mapea uno por uno y cambia de valor por el asignado
//     if(x == 'manzana') return 'naranja'
// })
// console.log(resultado2)

// const array3 = ['manzana','manzana','manzana','manzana']
// const resultado3 = array3.fill('naranja', 1)   //reemplaza el indice por el valor asignado
// console.log(resultado3)

// const array4 = ['manzana','manzana','manzana','manzana','pera','manzana','pera']
// const resultado4 = array4.find(x => x == 'pera' ) // busca uno por uno y cuando encuentra uno lo asigna y te devuelve el elemento
// console.log(resultado4)

// const array5 = ['manzana','manzana','manzana','manzana','pera','manzana','pera']
// const resultado5 = array5.findIndex(x => x == 'pera') //te busca el primero
// console.log(resultado5)

// const array6 = ['manzana','manzana','manzana','manzana','pera','manzana','pera']
// const resultado6 = array6.some(x => x == 'pera') //te devuelve true o false
// console.log(resultado6)

// const array7 = ['manzana','manzana','manzana','manzana','manzana']
// const resultado7 = array7.some(x => x == 'pera') //te devuelve true o false son todos
// console.log(resultado7)

// const array8 = ['manzana','manzana','manzana','manzana','manzana','pera']
// const resultado8 = array8.pop() //nos devuelve el que saco corto
// console.log(resultado8)
// console.log(array8)

// const array9 = ['manzana','naranja','limon','pera']
// const resultado9 = array9.shift() //nos devuelve el que saco (corto) y muestra el resultado
// console.log(resultado9)
// console.log(array9)

// const array10 = ['manzana','naranja','limon','pera']
// const resultado10 = array10.push('ciruela') //agrega
// console.log(resultado10)
// console.log(array10)

//         //indice   0          1         2      3
// const array11 = ['manzana','naranja','limon','pera']
// const resultado11 = array11.unshift('ciruela') //agrega al principio
// console.log(resultado11)
// console.log(array11)

// const array12 = ['manzana','naranja','limon','pera']
//               //cuantos quiero cortar y que agrego
// array12.splice(2,1,'ciruela')  //corta el array y lo modifica y el (SLICE) corta y no lo modifica
// console.log(array12)

// const frutas = ['manzana','naranja','limon','pera']
// const verduras = ['lechuga','cebolla','brocoli','tomate']
// console.log(frutas.concat(verduras))  //concatena los arrays

// const auto = [
//     {auto: 'FIAT', año: 2020},
//     {auto: 'BMW', año: 2021},
//     {auto: 'RENAULT', año: 2019},
//     {auto: 'MAZDA', año: 2023}
// ]
// console.log(auto.sort((x,y) => x.año-y.año)) //ordena el array de forma ordenada

// //DATE(FECHAS)
// const fecha = new Date()
// fecha.setFullYear(2029)
// fecha.setMonth(9)
// fecha.setDate(30)

// let meses = ['enero','febrero','marzo','abril','mayo','junio',
//     'julio','agosto','septiembre','octubre','noviembre','diciembre']
// let resultado = fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear()    
// console.log(resultado)

//CONSTANTES(MATH)
// Math.E //devuelve el numero de euler
// Math.PI //devuelve PI
// Math.SQRT2 //devuelve la raiz cuadrada de 2
// Math.SQRT1_2 //devuelve la raiz cuadrada de 1/2
// Math.LN2 //devuelve logaritmo natural de 2
// Math.LN10//devuelve logaritmo natural de 10
// Math.LOG2E //devuelve logaritmo de E en base 2
// Math.LOG10E //devuelve logaritmo de E en base 10

// const numero = 2.3
// const redondeo = Math.round(numero) //redondeo de numeros

// let numero1 = Math.random()*100 // numeros al azar y redondea
// let redondeo1 = Math.round(numero1)
// console.log(redondeo1)

//CONDICIONALES
// EJEMPLO: ¿puede entrar al boliche?
// let edadPersona = 17
// if(edadPersona >= 18 && edadPersona <= 60){
//     console.log('puede ingresar al boliche')
// }else if(edadPersona <= 18){
//     console.log('no puedes ingresar al boliche por que eres menor de edad')
// }else{
//     console.log('no puedes ingresar por que eres mayor de 60 y no se recomienda')
// }

// let estiloDeMusica = 'trap'

// switch (estiloDeMusica) {
//     case 'punk':
//         console.log('te recomiendo los ramones')
//         break;
//     case 'hardrock':
//         console.log('te recomiendo los guns n roses')
//         break;
//     case 'metal':
//         console.log('te recomiendo pantera')
//         break;
//     case 'rock an d roll':
//         console.log('te recomiendo the rollin stones')
//         break;
//     case 'pop':
//         console.log('te recomiendo michale jackson')
//         break;
//     default:
//         console.log('no conzco esta musica te recomiendo otra')
//         break;
// }

// let edad = 19
// let nacionalidad = 'colombiana'
// let tienePasaporte = false

// if( edad >= 18){
//     console.log('tiene edad para viajar, tramite 1 aprobado')
//     if(nacionalidad == 'colombiana'){
//         console.log('la documentacion esta en regla, tramite 2 aprobado')
//         if(tienePasaporte){
//             console.log('usted puede viajar,')
//         }else{
//             console.log('debes presentar el pasaporte,por que es obligatorio')
//         }
//     }else{
//         console.log('debes presentar la documentacion de tu pais de origen')
//     }
// }else{
//     console.log('debes ser mayor de edad para viajar al exterior')
// }

//BUCLES
//estructura de control que podemos repetir mientras cumpla la condicion los bucles for son para recorrer array

// let tecnologias = ['html', 'css', 'javascript', 'react', 'angular']

//let seleccionable = document.getElementById('seleccionable')
// let texto = ''
// for (let index = 0; index < tecnologias.length; index++) {
//     texto += tecnologias[index] 
//     if(index < tecnologias.length - 1){
//         texto += ', '
//     }
//     seleccionable.textContent = texto 
// }

// for(tecnologia of tecnologias){
//     console.log(tecnologia)
// }

// const alumno = {
//     nombre: 'andres',
//     edad: 40,
//     tecnologias: ['html','css']
// }
// for (const key in alumno) {
//     console.log(alumno[key])

// }

// BUCLE WHILE

// let edad = 0
// while (edad < 18){
//     console.log(`tienes ${edad} años y aun eres un niño`);
//     edad++;

// }
// console.log(`tienes ${edad} ya eres mayor de edad`)

//BUCLE DO WHILE
// let edad = 0

// do {
//     {
//         console.log(`tienes ${edad} años y aun eres un niño`);
//         edad++;
//     }
   
// }
// while (edad < 18)


// console.log(`tienes ${edad} ya eres mayor de edad`)
// while(edad < 30){
//     console.log(edad);
//     edad++;
//     if(edad==25)break;   
// }
// console.log(`saliste del bucle por que tenes ${edad} años`)

// SET Y MAPS: SET conjunto de elementos, maps: conjuntos de  pares clave - valor
//  let conjunto = new Set(['pedro','maria','ricardo','pedro','ricardo','ricardo'])

//  //agregar
//  conjunto.add('luciana')

//  console.log(conjunto);
 
//  let array = ['cama','armario','escritorio','cama','estante','mesita de luz']

//  function comprar(muebles){
//     console.log(muebles)
//  }
//  function comprarUnaSolaUnidad(muebles){
//     let unicaUnidad = new Set(muebles)
//     console.log(unicaUnidad)
//  }
//  comprarUnaSolaUnidad(array)
 
//  let mapa = new Map([
//     ['computadores', 10],
//     ['tablest', 5],
//     ['celulares', 3]

//  ])
//  mapa.set('teclados',20)
//  mapa.delete('computadores')

// //  let pregunta = mapa.size
// let pregunta = mapa.has('tablest')
//  console.log(pregunta)
 
// let array = [1,1,1,2,2,2,3,3,4,4,5,5,5] //limpiar el array de duplicados y vuelve y lo lene como un array y no un set
// let unico = new Set(array)
// let unicoArray = [...unico]
// console.log(unicoArray)

//CLASIFICAR TIPOS DE DATOS
// let a = typeof 'andres'
//number
// let b = typeof 3.14
// number caso especial
// let c = typeof NaN
//boolean
// let d = typeof boolean
//OBJETO: (Caso especial)
// let e = typeof ['andres','felipe','martinez']// esto es un array
// //OBJETO

//function
// let h = typeof function(){}
//UNDEFINED (error)
// let i = typeof andres
// //null
// let j = typeof null


// let datoQueVieneDeBackend = 3.14
//  if(typeof datoQueVieneDeBackend === 'string'){
//     console.log('lo que viene del backend es un string')
//     }else{
//         console.log('reclamale a tu compañero que te mande un string')
//     }

//INSTANCEOF: instancia de un objeto

// let a = [1,2,3,4,5]
// let b = new Date()
// let c = new Set()
// let d = new Map()
// let x = null
// console.log(b instanceof Array)

// if(a instanceof Array){
//     console.log('gracias backend por mandarme un array')
// }else{
//     console.log('mandame un array por favor')
// }

//CONVERSIONES DE DATOS
//string a number
// let a = Number('3.14')

// //number a string
// let b = String(1)
// let c = 1
// let d = c.toString()

// //date a number
// let e = new Date
// let f = Number(e)

// //date a string
// let g = String(e)

// //number a boolean
// let h = Boolean(0)
// let i = Boolean(1)

// // boolean a string
// let j = String(1)
// console.log(j)
// console.log(typeof j)

// // let ricardo = 0
// // if(ricardo && ricardo == 0){
// //     console.log('llego de un dato')
// // }else{
// //     console.log('es null o undefined')
// // }

//REGEX (expresiones regulares)
// let texto = "este curso de javascript y esta dado por Sergie code"
// let busqueda = texto.search(/sergie/i)
// //modificadores
// // i: ingnorar mayusculas y minusculas
// // g: buscar todo el texto pasado
// // m: busqueda multilinea
// // s: que permite usar

// let pattern = /Sergie/i
// let resultado = pattern.exec(texto)
// console.log(resultado)

// let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1.63}\.){1,125}[A-Z]{2,63}$/i
// console.log( pattern.test( 'andres@gmail.com' ))

//MANEJO DE ERRORES
// try{
//      // LLAMADO AL BACKEND (atravez de una API)
//      console.log('llamando al backend')
//      setTimeout(() => {
//          console.log('el backend nos responde')
//     //  console.log('cliente apto para la compra')
//      throw('este cliente no esta apto para una compra')
        
//      }, 1000);
// }catch (error){
//      //TOMAMOS EL ERROR y hacemos algo que nos parezca correcto
//      console.log('algo fallo', error)
// }finally{
//      //  se ejecuta siempre por mas que falle o no falle
//      console.log('se ejecuta siempre')
// }

//CALLBACKS
// function mostrarConsola(num){
//     console.log(num)
// }
// function calcular(num1,num2, callaback){
//     let suma = num1 + num2
//     callaback(suma)
// }
// calcular(1,3,mostrarConsola)
 
//PROMESAS: tipo especial de objeto que nos permite manejar datos asincronicos se puede consumir APIS
// let promesa1 = new Promise((response, reject) => {
//     setTimeout(() =>{
//         let resp = {
//             response: 200,
//             description: '1 esta info es importante'
//         }
//         response(resp)
//     }, 3000);
// })
// let promesa2 = new Promise((response, reject) => {
//     setTimeout(() =>{
//         let resp = {
//             response: 200,
//             description: '2 esta info es importante pero suele demorar mucho'
//         }
//         response(resp)
//     }, 5000);
// })
// let promesa3 = new Promise((response, reject) => {
//     setTimeout(() =>{
//         let resp = {
//             response: 200,
//             description: '3 esta info es importante y rapida'
//         }
//         response(resp)
//     }, 2500);
// })
// // va de la mano con las promesas
// async function ejecutarPromesa() {
//     let respuestaProm1 = await promesa1
//     console.log(respuestaProm1) 
//     let respuestaProm2 = await promesa2
//     console.log(respuestaProm2)
//     let respuestaProm3 = await promesa3
//     console.log(respuestaProm3)
    
// }
// ejecutarPromesa()

//API

let urlBase = 'https://jsonplaceholder.typicode.com'
// let query = '/posts/1'

//GET
// fetch(`${urlBase}/${query}`)
// .then(response => response.json())
// .then(json => console.log(json))

// let requestBody = {
//       title: 'andres comenta sobre tu foto',
//       body: 'muy bonita tu foto',
//       userId: 5,
// }
// //POST: enviar informacion
// fetch(`${urlBase}/posts`,{
//       method: 'POST',
//       headers: {
//             'content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(requestBody)

// })
//       .then(response => response.json())
//       .then(json => console.log(json))


// let posteo = 5
// let requestBody2 = {
//       id: 3,
//       title: 'andres comenta sobre tu foto',
//       body: 'muy bonita tu foto',
//       userId: 5,
// }
//PUT: editar informacion
// fetch(`${urlBase}/posts/${posteo}`,{
//       method: 'PUT',
//       headers: {
//             'content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(requestBody2)

// })
//       .then(response => response.json())
//       .then(json => console.log(json))

//PATCH: editar informacion(solo se edita un atributo)
// let post = 10
// let modificacion = {
//       title: 'este titulo ha sido modificado'
// }
// fetch(`${urlBase}/posts/${post}`,{
//       method: 'PATCH',
//       headers: {
//             'content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(modificacion)
      
// })
//       .then(response => response.json())
//       .then(json => console.log(json))

//DELETE: borrar un items
// let elementoAEliminar = 7
// fetch(`${urlBase}/posts/${post}`,{
//       method: 'DELETE'
// })

