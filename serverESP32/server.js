const http = require('http');
const WebSocketServer = require('websocket').server;
const express = require("express");
const fs = require('fs');

const app = express()
let valueDht22 = null

const server = http.createServer(app);

const wsServer = new WebSocketServer({
    httpServer: server,
});

app.use(express.json())

app.get("/", (req, res) => {
    console.log("Halaman utama berhasil diload");
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/led-off", (req, res) => {
    fs.readFile(__dirname + "/views/img/Led-off.png", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat membaca file gambar");
        } else {
            res.setHeader("Content-Type", "image/png");
            res.send(data);
        }
    });
});

app.get("/led-red-on", (req, res) => {
    fs.readFile(__dirname + "/views/img/Led-red-on.png", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat membaca file gambar");
        } else {
            res.setHeader("Content-Type", "image/png");
            res.send(data);
        }
    });
});

app.get("/led-blue-on", (req, res) => {
    fs.readFile(__dirname + "/views/img/Led-blue-on.png", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat membaca file gambar");
        } else {
            res.setHeader("Content-Type", "image/png");
            res.send(data);
        }
    });
});

app.get("/led-green-on", (req, res) => {
    fs.readFile(__dirname + "/views/img/Led-green-on.png", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat membaca file gambar");
        } else {
            res.setHeader("Content-Type", "image/png");
            res.send(data);
        }
    });
});

app.get("/led-yellow-on", (req, res) => {
    fs.readFile(__dirname + "/views/img/Led-yellow-on.png", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Terjadi kesalahan saat membaca file gambar");
        } else {
            res.setHeader("Content-Type", "image/png");
            res.send(data);
        }
    });
});

app.post("/data", (req, res) => {
    const data = req.body.data

    wsServer.connections.forEach((connection) => {
        connection.send(data, (err) => {
            if (err) {
                console.log("error :", err)
                res.status(500).json({ error: "write data error!" })
            }
            console.log("data terkirim ->", data)
            res.send(data)
        });
    });
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    console.log('Client terhubung');

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log(`Menerima pesan: ${message.utf8Data}`);
            const data = message.utf8Data;
        }
    });

    connection.on('close', function(reasonCode, description) {
        console.log('Client terputus');
    });
});

server.listen(3000, function() {
    console.log('Server berjalan pada port 3000');
});