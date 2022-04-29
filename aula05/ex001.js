// Variáveis e Tipos Primitivos

/*

    Variáveis são espaços na memórias que podem receber diferentes tipos de valores.

    Os tipos de variáveis são 'var' e 'let'. O 'var' tem escopo global, ou seja, funciona em toda a aplicação. O 'let' funciona apenas em no escopo onde ele é declarado, ou seja, em apenas uma parte especifica do código. Por exemplo, se um 'let' for usado em uma função, ele apenas funcionará dentro dela.

    Os principais tipos primitivos são: boolean, string e number.
    String -> cadeias de caracteres, declaradas entre aspas(""; ''; ´´)
    Number -> números em geral
    boolean -> valores false ou true

    typeof serve para verificar o tipo primitivo da variável

*/ 

var a;
let b;
var c;

a = 25;
b = "Gabriel"
c = true

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)