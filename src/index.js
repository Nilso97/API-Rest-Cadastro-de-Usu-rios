const express = require('express');

const server = express();

server.use(express.json());

const users = [ /* Fake DataBase */ ];

const serverPort = server.listen(4001, () => {
    const port = serverPort.address().port;
    console.log(`Server is running at http://localhost:${port}`);
});

server.get('/users/:name', (req, res) => {
    const {
        name
    } = req.params;

    const search = users.find((search) => search.first_name === name);

    if (!search) res.status(404).json('Usuário não existe!');

    return res.json(search);
});

server.get('/users', (req, res) => {
    return res.json(users);
});

server.post('/users', (req, res) => {
    const {
        first_name,
        last_name,
        age,
        email
    } = req.body;

    const user = {
        first_name,
        last_name,
        age,
        email
    };

    users.push(user);

    return res.json(users);

});

server.patch('/users/:name', (req, res) => {
    const {
        first_name,
        last_name,
        age,
        email
    } = req.body;
    const user = {
        first_name,
        last_name,
        age,
        email
    };
    const {
        name
    } = req.params;

    const update = users.find((update) => update.first_name === name);

    if (!update) res.status(404).json('Usuário não existe!');

    update.first_name = first_name ? first_name : update.first_name;
    update.last_name = last_name ? last_name : update.last_name;
    update.age = age ? age : update.age;
    update.email = email ? email : update.email;

    return res.json(user);
});

server.delete('/users/:name', (req, res) => {
    const {
        name
    } = req.params;

    const deleteUser = users.find((deleteUser) => deleteUser.first_name === name);

    users.splice(name, 1);

    if (!deleteUser) res.status(404).json('Usuário não existe!');

    return res.json('Deletado com sucesso!');
});