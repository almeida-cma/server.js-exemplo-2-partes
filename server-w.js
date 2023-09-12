// Configuração do middleware para tratar corpos de solicitações no formato URL encoded e JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define o diretório 'public' como um local para servir arquivos estáticos
app.use(express.static('public'));