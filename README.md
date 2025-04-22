# 🏅 Notas dos Atletas

Projeto desenvolvido como parte do **Teste de Aprendizagem do Lab 365**, com o objetivo de criar uma aplicação em JavaScript capaz de calcular a média válida das notas dos atletas, conforme as regras de uma competição de ginástica artística.

---

## 💡 Sobre o Projeto

A aplicação recebe uma lista de atletas, com seus respectivos nomes e cinco notas atribuídas por jurados. 

A média é calculada **desconsiderando a maior e a menor nota**, usando apenas as três notas centrais.

---

## 🚀 Como funciona

### Regras:
- Cada atleta recebe 5 notas de 1 a 10.
- As notas são ordenadas.
- A menor e a maior nota são descartadas.
- A média é calculada com as 3 notas restantes.

---

## 💻 Exemplo de Entrada
```
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
```
### 💡 Exemplo de Saída
```
Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 9.25

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 9.00

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83
```
🧠 Tecnologias usadas
- JavaScript
- Node.js

🏁 Como Executar
Clone o repositório:
```
git clone https://github.com/seu-usuario/notas-atletas.git
```
Acesse o diretório:
```
cd notas-atletas
```
## Execute o arquivo JavaScript:
```
node notas-atletas.js
```
📌 Observação
Este projeto foi desenvolvido com foco no aprendizado de estruturas de repetição, arrays e manipulação de objetos em JavaScript.

📄 Licença
Este projeto é de uso educacional e foi desenvolvido como parte do Lab 365.

🤝 Contato
Feito com 💙 por Gabriel Correa.






