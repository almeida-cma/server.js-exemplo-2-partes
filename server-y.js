// Importando as bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

// Criando a aplicação Express
const app = express();

// Definindo a porta na qual o servidor vai rodar
const PORT = 3000;
