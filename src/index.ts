import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

//renvoie le header en json sur /ping depuis Get
app.get('/ping', (req, res) => {
    res.json({ header: req.headers });
})

//exeption 404
app.get("*", (req, res) => {
    res.sendStatus(404);
});

//permet de lire sur le port indiqué dans le fichier .env
app.listen(process.env.PING_LISTEN_PORT, () => {
    return console.log(`
      Express is listening at http://localhost:${process.env.PING_LISTEN_PORT}`
    );
});
