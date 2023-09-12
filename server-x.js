// Criando ou conectando-se a uma base de dados SQLite
const db = new sqlite3.Database('./database.db');

// Serializa o acesso ao banco de dados e verifica/cria a tabela 'cadastro' se ela não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS cadastro (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, celular TEXT)");
});