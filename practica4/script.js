const bitacora = [
    {
        id: 1,
        titulo: 'Registro',
        detalles: {
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos: {
                anterior: [],
                actual: {
                    id: 1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            },
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla'
    },
    {
        id: 2,
        titulo: 'Modificacion',
        detalles: {
            hora: '11:00 AM',
            fecha: '12 de agosto de 2023',
            campos: {
                anterior: [
                    {
                        id: 1,
                        nombres: 'Juan',
                        apellidos: 'Hernandez',
                    }
                ],
                actual: {
                    id: 1,
                    nombres: 'Juan Carlos',
                    apellidos: 'Hernandez',
                }
            },
        },
        descripcion: 'Se ingresaron nuevos datos a tabla personas'
    },
]

//1
for (const {titulo, detalles: {hora, fecha}, descripcion} of bitacora){
console.log(titulo)
console.log(fecha)
console.log(hora)
console.log(descripcion)
}

//2
function desempacar([{
    titulo, 
    descripcion, 
    detalles: {
        hora, fecha
    }
}])
{
    return `
    ${titulo}
    ${descripcion}
    ${fecha}
    ${hora}`
}

console.log(desempacar(bitacora))

//3
function mostrarSegundoValor([,{
    detalles: {
        campos: {
            anterior: [{nombres, apellidos}],
            actual: {nombres: nombresActual, apellidos: apellidosActual}
        }
    }   
}
]){
    return `
    ${nombres}
    ${apellidos}
    ${nombresActual}
    ${apellidosActual}`
}

console.log(mostrarSegundoValor(bitacora))