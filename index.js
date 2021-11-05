var server = require('./config/server')
var app = server.app
var porta = server.porta

app.set('view engine', "ejs")

app.get('/',(req,res)=>{
        res.render("index.ejs")
})

app.listen(porta)