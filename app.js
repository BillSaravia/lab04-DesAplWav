
const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

app.use(express.static(__dirname+'/'));

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

/*io.on('connection', (Socket) => {
    //Prodecimiento
    console.log('Un usuario se ha conectado')
})

app.get('/', (req, resp) => {
    resp.send('<h1>Aplicacion de chat</h1>')
})*/

/* io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})  */


/* io.on('connection', (socket) => {
    // Procedimiento 3:
   socket.on('chat', (msg) => {
        console.log('Mensaje: ' + msg)
    })
})  */

/* io.on('connection', (socket) => {
    // Procedimiento 2:
   socket.on('disconnect', () => {
        console.log('El usuario se a desconectado')
    })
})   */
app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/chat_view.html`)
})

/* app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})
 */
server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})