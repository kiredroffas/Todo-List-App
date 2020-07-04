const todoRoutes = (app, fs) => {
    // variables
    const dataPath = "./data/todoList.json";

    // refactored helper methods
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = "utf8"
    ) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = "utf8"
    ) => {
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get("/todoList", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    // app.post("/users", (req, res) => {
    //     readFile((data) => {
    //         const newUserId = Object.keys(data).length + 1;

    //         // add the new user
    //         data[newUserId] = JSON.parse(req.body.data);

    //         writeFile(JSON.stringify(data, null, 2), () => {
    //             res.status(200).send("new user added");
    //         });
    //     }, true);
    // });

    // UPDATE
    // app.put("/todoList", (req, res) => {
    //     readFile((data) => {
    //         // add the new todos
    //         // const userId = req.params["id"];
    //         // data[userId] = JSON.parse(req.body.data);
    //         console.log(data);
    //         console.log(req);
    //         writeFile(JSON.stringify(data, null, 2), () => {
    //             res.status(200).send(`users id:${userId} updated`);
    //         });
    //     }, true
    //     );
    // });
};

module.exports = todoRoutes;