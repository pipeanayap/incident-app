"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.json({ message: "Respondiendo al GET" });
});
app.listen(3000, () => {
    console.log("Aplicacion corriendo en el puerto 3000");
});
app.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json({ message: "Body Leido" });
});
