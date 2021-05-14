const http = require('http');

const PORT = process.env.PORT || 8000;

const server = http.createServer();

// const express = require('express');

// const app = express();

server.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})