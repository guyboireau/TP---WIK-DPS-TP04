"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//renvoie le header en json sur /ping depuis Get
app.get('/ping', (req, res) => {
    res.json({ header: req.headers });
});
//exeption 404
app.get("*", (req, res) => {
    res.sendStatus(404);
});
//permet de lire sur le port indiqué dans le fichier .env
app.listen(process.env.PING_LISTEN_PORT, () => {
    return console.log(`
      Express is listening at http://localhost:${process.env.PING_LISTEN_PORT}`);
});
