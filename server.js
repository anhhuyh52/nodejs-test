
const app = require('./src/app')


const server = app.listen(3000 , () => {
    console.log('WSV eCommerce')
})

process.on('SIGINT' , () => {
    server.close(() => console.log('Exit Server'))
    notify.send()
})