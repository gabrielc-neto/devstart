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
 function recebeMatriz(matriz) {
  let dados = '';

  for (let i = 0; i < matriz.length; i++) {
    let notas = matriz[i]['notas'];
    let menor = Math.min(...notas);
    let maior = Math.max(...notas);
    let notasValidas = notas.filter(nota => nota !== menor && nota !== maior);
    let media = 0;
    if (notasValidas.length > 0) {
      let soma = 0;
      for (let j = 0; j < notasValidas.length; j++) {
        soma += notasValidas[j];
      }
      media = soma / notasValidas.length;
    }
    dados += `Atleta: ${matriz[i]['nome']}\nNotas obtidas: ${notas.join(",")}\nMédia Válida: ${media.toFixed(2)}\n\n`;
  }
  console.log(dados);
  return dados;
}
recebeMatriz(atletas);
