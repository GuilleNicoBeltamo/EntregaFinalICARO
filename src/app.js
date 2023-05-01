require("dotenv").config();
const path = require("path");
const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

const { testDb } = require("./models");
testDb();

// Configuraciones de la app
// 1- Req-Body en formato JSON
app.use(bodyParser.urlencoded({extended: true}));
// 2- Configuración del motor de vistas
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
// 3- Configuración de sesiones y cookies
const Minutos15 = 1000*60*15;
app.use(session({
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: Minutos15 },
    resave: false,
}))
app.use(cookieParser());

const userRoutes = require("./routes/users");
app.use("/",userRoutes);

const Home = require("./routes/home")
app.use("/",Home);

const detailService = require("./routes/detailService")
app.use("/",detailService);

const inicioSesion = require("./routes/inicioSesion")
app.use("/",inicioSesion);

const Registro = require("./routes/registro");
app.use("/", Registro);

const Salida = require("./routes/signOut");
app.use("/", Salida);

const Carrito = require("./routes/Carrito")
app.use("/", Carrito);

const Admin = require("./routes/Admin")
app.use("/", Admin);

const localAPI = require("./routes/localAPI")
app.use("/", localAPI);

const Confirmacion = require("./routes/Confirmacion")
app.use("/", Confirmacion);

const Resto = require("./routes/Resto")
app.use("/", Resto);

app.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en puerto: ", process.env.PORT);
});