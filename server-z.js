// Endpoint para cadastrar novos registros no banco
app.post('/cadastro', (req, res) => {
    const { nome, email, celular } = req.body;

    const stmt = db.prepare("INSERT INTO cadastro (nome, email, celular) VALUES (?, ?, ?)");
    stmt.run(nome, email, celular, (err) => {
        if (err) {
            res.status(400).send({ error: err.message });
            return;
        }
        res.send({ message: 'Cadastro realizado com sucesso!' });
    });
    stmt.finalize();
});

// Endpoint para obter todos os registros do banco
app.get('/cadastro', (req, res) => {
    db.all("SELECT * FROM cadastro", (err, rows) => {
        if (err) {
            res.status(400).send({ error: err.message });
            return;
        }
        res.send(rows);
    });
});

// Endpoint para atualizar um registro específico baseado no ID
app.put('/cadastro/:id', (req, res) => {
    const { nome, email, celular } = req.body;

    const stmt = db.prepare("UPDATE cadastro SET nome = ?, email = ?, celular = ? WHERE id = ?");
    stmt.run(nome, email, celular, req.params.id, (err) => {
        if (err) {
            res.status(400).send({ error: err.message });
            return;
        }
        res.send({ message: 'Cadastro atualizado com sucesso!' });
    });
    stmt.finalize();
});

// Endpoint para deletar um registro específico baseado no ID
app.delete('/cadastro/:id', (req, res) => {
    const stmt = db.prepare("DELETE FROM cadastro WHERE id = ?");
    stmt.run(req.params.id, (err) => {
        if (err) {
            res.status(400).send({ error: err.message });
            return;
        }
        res.send({ message: 'Cadastro removido com sucesso!' });
    });
    stmt.finalize();
});

// Inicializa o servidor na porta definida (neste caso, 3000)
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
