/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */



function rollDice(diceFaces) {
    const result = Math.floor((Math.random() * diceFaces) + 1);
    return result;
}

console.log(rollDice(10));


// En esta función uso el Math.floor para redondear y no me salga decimal. Sumo 1 ya que math floor siempre redondea a la baja, sin sumarle 1 me va a devolver siempre entre 0 y diceFaces -1;