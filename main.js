/*Você deverá criar uma função capaz de receber uma matriz de objetos contendo o
 nome do atleta e as cinco notas atribuídas. A sua função deverá calcular a média 
 das notas sem considerar a maior e menor nota do atleta. Por fim, deverá apresentar
ao usuário o nome de cada atleta, seguido das notas e da média calculada*/
let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
function recebeMatriz(matriz){
    let media = 0;
    let dados;
   for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < (matriz[i].['notas'].length); j++){
        if(matriz[i].['notas'][j] != Math.min(matriz[i].['notas']) && Math.max(matriz[i].['notas'])){
        media += matriz[i].['notas'][j];
    } else {
        continue;
    }
    dados = console.log(Atleta: Notas obtidas Média Válida:)
}
}
