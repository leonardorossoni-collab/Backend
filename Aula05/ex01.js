app.get("/sobre", (req, res) => {
    res.json({
        nome: "Leonardo Rossoni",
        disciplina: "Desenvolvimento de sistemas com Node.js",
        ano: 2026
    });
});
