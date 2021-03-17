let cadena_1 = "ba";
let cadena_2 = "ab";
let posiciones = [];
let copia_cadena_1 = Array.from(cadena_1);



if (cadena_1 === cadena_2) {
    for (let i = 0; i < cadena_1.length; i++) {
        posiciones.push([i])
    }
} else if (cadena_1 !== cadena_2) {
    for (let i = 0; i < cadena_1.length; i++) {
        if (copia_cadena_1[i] !== cadena_2[i]) {
            posiciones.push([i])
        }
    }
}
for (let i = posiciones.length - 1, j = 0; i >= 0; i--, j++) {
    copia_cadena_1[posiciones[i]] = cadena_1[posiciones[j]];
}

if (copia_cadena_1.join("") === cadena_2) {
    console.log(true);
} else {
    console.log(false);
}