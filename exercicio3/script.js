// PARTE 1
//Escreva as operações lógicas abaixo em formato de código. 
//Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;

const booleano1 = 5 > 20 && 5 < 2
console.log(booleano1)

// b) 5 é igual a 5 ou é igual a “5”;

const booleano2 = 5 === 5 || 5 === "5"
console.log(booleano2)

// c) negação de (vinte é maior que cinquenta)

const booleano3 = 20 > 50
console.log(!booleano3)

// d) negação de (vinte é maior 
// que cinquenta OU cinquenta é maior que sessenta)

const booleano4 = 20 > 50 || 50 > 60
console.log(!booleano4)

// PARTE 2
/*
salário de 2.000,00 reais, mais comissão de 10% sobre o total de 
//vendas no mês e entrou na empresa em 2019.**

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário
*/
const salarioFixo = 2000
const auxilioCreche = 2 * 45.50


//Calcule:

//1) O salário fixo mais o auxílio creche

const salarioAuxilioCreche = salarioFixo + auxilioCreche
console.log(`Salário + auxílio creche = R$${salarioAuxilioCreche}`)

// 2) Quanto Fulano de Silva receberá de comissão em janeiro 
// (dica: para calcular 20% de algum valor fazemos o cálculo: 
// valor*0.2)

const comissaoDeJaneiro = 5784.50 * 0.1
console.log(`A comissão de Janeiro é R$${comissaoDeJaneiro}`)


// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
// (o valor a ser calculado deve levar em consideração o 
// salário + porcentagem de vendas)

const inssJaneiro = (comissaoDeJaneiro + salarioFixo) * 0.05
console.log(`O desconto do INSS é de R$ ${inssJaneiro.toFixed(2)}`)

// 4) Imprima no console o cálculo do salário de todos os meses 
// com acréscimos e descontos.

const comissaoJaneiro = 5784.50 * 0.1
const comissaoFevereiro = 3418.41 * 0.1
const comissaoMarco = 4124.10 * 0.1
const comissaoAbril = 1874 * 0.1
const comissaoMaio = 7000 * 0.1
const comissaoJunho = 9450 * 0.1

// Salário Janeiro
const salarioLiquidoJaneiro = (salarioAuxilioCreche + comissaoJaneiro) - ((salarioAuxilioCreche + comissaoDeJaneiro) * 0.05)
console.log(`O salário líquido de Janeiro é de R$${salarioLiquidoJaneiro.toFixed(2)}`)

// Salário Fevereiro
const salarioLiquidoFevereiro = (salarioAuxilioCreche + comissaoFevereiro) - ((salarioAuxilioCreche + comissaoFevereiro) * 0.05)
console.log(`O salário líquido de Fevereiro é de R$${salarioLiquidoFevereiro.toFixed(2)}`)

// Salário Março
const salarioLiquidoMarco = (salarioAuxilioCreche + comissaoMarco) - ((salarioAuxilioCreche + comissaoMarco) * 0.05)
console.log(`O salário líquido de Marco é de R$${salarioLiquidoMarco.toFixed(2)}`)

// Salário Abril
const salarioLiquidoAbril = (salarioAuxilioCreche + comissaoAbril) - ((salarioAuxilioCreche + comissaoAbril) * 0.05)
console.log(`O salário líquido de Abril é de R$${salarioLiquidoAbril.toFixed(2)}`)

// Salário Maio
const salarioLiquidoMaio = (salarioAuxilioCreche + comissaoMaio) - ((salarioAuxilioCreche + comissaoMaio) * 0.05)
console.log(`O salário líquido de Maio é de R$${salarioLiquidoMaio.toFixed(2)}`)

// Salário Junho
const salarioLiquidoJunho = (salarioAuxilioCreche + comissaoJunho) - ((salarioAuxilioCreche + comissaoJunho) * 0.05)
console.log(`O salário líquido de Junho é de R$${salarioLiquidoJunho.toFixed(2)}`)

//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  //(Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

  const mediaSalarial = (salarioLiquidoJaneiro + salarioLiquidoFevereiro + salarioLiquidoMarco + salarioLiquidoAbril + salarioLiquidoMaio + salarioLiquidoJunho) / 6
  console.log(`A média salarial de Janeiro a Junho é de R$${mediaSalarial.toFixed(2)}`)