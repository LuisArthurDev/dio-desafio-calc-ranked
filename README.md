# Desafio: Calculadora de Partidas Rankeadas

Este projeto foi desenvolvido como parte do bootcamp da [DIO](https://www.dio.me/) com o objetivo de praticar lógica de programação utilizando variáveis, operadores, funções e estruturas de decisão.

---

## Objetivo

Criar uma **função** que receba como parâmetros a quantidade de vitórias e derrotas de um jogador e calcule o **saldo de Rankeadas** (vitórias - derrotas). A partir do saldo, o jogador será classificado em um nível, de acordo com a quantidade de vitórias.

---

## Regras de Classificação

| Vitórias          | Nível      |
|------------------|------------|
| < 10             | Ferro      |
| 11 - 20          | Bronze     |
| 21 - 50          | Prata      |
| 51 - 80          | Ouro       |
| 81 - 90          | Diamante   |
| 91 - 100         | Lendário   |
| ≥ 101            | Imortal    |

---

## Lógica Aplicada

- Utilização de funções com parâmetros
- Operadores matemáticos e lógicos
- Estruturas condicionais (`if / for / else`)
- Retorno de valores e exibição com template string

---

## Exemplo de Saída

```bash
O Herói tem de saldo de 75 está no nível de Ouro
```
 Estrutura do Projeto
index.js: Código principal da calculadora
README.md: Este documento explicativo

Como Executar
1. Clone este repositório:

```
git clone https://github.com/LuisArthurDev/dio-desafio-calc-ranked.git
```

2. Acesse a pasta do projeto:
```
cd nome-do-repositorio
```

3. Execute o arquivo (exemplo com Node.js):
```
node index.js
```
Desenvolvido por Luis Arthur durante o aprendizado na DIO 🚀
