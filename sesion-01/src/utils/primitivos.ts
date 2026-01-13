let nombre: string = "Juan";
let edad: number = 30;
let esEstudiante: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

let lenguajes: string[] = ["JavaScript", "TypeScript", "Python"];
let numeros: number[] = [1, 2, 3, 4, 5];

// array de objetos

let usuarios: { nombre: string; edad: number }[] = [
  { nombre: "Peru", edad: 25 },
  { nombre: "Luis", edad: 28 },
];

// solo un objeto

let persona: {nombre: string, edad: number, activo: boolean} = {
    nombre: "Ana",
    edad: 22,
    activo: true
}

//las interfaces o contratos
// una interfaz es un contrato que define la estructura de un objeto
// las interfacces se declaran con la primera letra en mayuscula
interface Usuario{
    id: number;
    nombre: string;
    email: string;
    edad?: number;
    activo: boolean;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Pelayo",
    email: "pelayo@example.com",
    activo: false
}

const usuario2: Usuario = {
    id: 2,
    nombre: "Laura",
    email: "laura@example.com",
    edad: 21,
    activo: true
}