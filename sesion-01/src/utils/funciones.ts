//crear la funcion sumar, que sume 2 numeros y retorne el resultado
function sumar(a: number=0, b: number=0): number {
    return a + b;
}

console.log(sumar(2,4))

// funcion saludar

function saludar(nombre: string="Usuario"):void {
    console.log(`Hola, ${nombre}`);
}

saludar("Carlos");

// funcion con parametros opcionales

interface Usuario{
    nombre: string;
    email: string;
    edad?: number;
}

function crearUsuario(nombre: string,email: string, edad?: number): Usuario {
    return {
        nombre,
        email,
        edad
    };
}

crearUsuario("Miguel" , "carlos@example.com", 34);

// TIPOS EN TYPESCRIPT: sirve para asociar un tipo de dato a una variable o funcion

let id: string | number;
id = 456;

type Tamano = "S" | "M" | "L";

let talla: Tamano;
talla = "M";

// ejercicio1:
// crear una interfaz producto que tenga id nombre precio disponible y categoria siendo opcional la categoria
// declarar una funcion llamada calculartotal que reciba un array de productos y retorne la suma de los productos que esten disponibles

interface Producto{
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria?: string;
}

function calcularTotal(productos: Producto[]): number {
    return productos.reduce((total, producto) => {
            return total + (producto.disponible ? producto.precio : 0);
    }, 0)
}

const misProductos: Producto[] = [
    {id: 1, nombre: "Impresora HP", precio: 356, disponible: true, categoria: "Electronica"},
    {id: 2, nombre: "Raton", precio: 21, disponible: true, categoria: "Electronica"},
    {id: 3, nombre: "Microprocesador intel 14600K", precio: 521, disponible: false, categoria: "Electronica"},
];

const total = calcularTotal(misProductos);
console.log(`El total de los productos disponibles es: ${total}`);

