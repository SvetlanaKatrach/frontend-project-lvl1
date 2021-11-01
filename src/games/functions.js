import readlineSync from 'readline-sync';

export const getUserName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

export const greetingUser = () => `Hello, ${getUserName}!`;

export const getRandomNum = (min = 0, max) => Math.floor(Math.random() * (max - min + 1) + min);
