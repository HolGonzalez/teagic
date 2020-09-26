const qBank = [
  {
    question:
      "Cuales son las partes que componene la division",
    answers: ["Dividendo, Divisor, Cociente, Residuo", "Dividendo, Divisor, Residuo", "Dividendo, Divisor, Dividido"],
    correct: "Dividendo, Divisor, Cociente, Residuo",
    questionId: "1"
  },
  {
    question:
      "Los numeros binarios se componen de 1 y 0",
    answers: ["Falso", "Verdadero"],
    correct: "Verdadero",
    questionId: "2"
  },
  {
    question:
      "En la conversion de decimal a binario se utiliza",
    answers: ["La potencia", "La multiplicación", "La division"],
    correct: "La division",
    questionId: "3"
  },
  {
    question:
      "El valor del numero 10 en base binaria es",
    answers: ["1001", "1010", "1011"],
    correct: "1010",
    questionId: "4"
  },
  {
    question:
      "El valor del numero 1011 en base decimal es",
    answers: ["10", "21", "11"],
    correct: "11",
    questionId: "5"
  },
  {
    question:
      "La división es un cálculo matemático que implica repartir en partes desiguales el total de un todo numérico.",
    answers: ["Falso", "Verdadero"],
    correct: "Falso",
    questionId: "6"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
