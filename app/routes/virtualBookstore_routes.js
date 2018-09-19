module.exports = function(app, db) {
    app.post('/livros', (req, res) => {
      const books = [
        {
          id: 1,
          name: "Arquitetura de Backend e MicroServices",
          author: ["Marco Aurelio"],
          company: "",
          comments: ["Excelente livro","Livro muito top !!"]
        },
        {
          id: 2,
          name: "APIs for DUMMIES",
          author: ["Brian Pagano","Sharif Nijim"],
          company: "",
          comments: ["Excelente livro","Livro muito top !!"]
        }
      ];
      res.send(books);
    });
  };