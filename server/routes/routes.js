const appRouter = (app, fs) => {
  // base API url
  app.get("/", (req, res) => {
    res.send("Welcome to the Todo List api-server!");
  });

  // Data file
  const dataPath = "./data/todoList.json";

  // READ
  app.get("/todoList", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  // UPDATE
  app.put("/todoList/update", (req, res) => {
      fs.writeFile(dataPath, JSON.stringify({...req.body}), (err) => {
          if(err) {
              throw err;
          }  
      });
      res.send(JSON.stringify({...req.body}));
  });
};

module.exports = appRouter;