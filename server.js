var express = require("express")
var app = express()
var mongoose = require("mongoose")
var Port = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())


var apiRoutes = require("./routes/api-routes")
var htmlRoutes = require("./routes/html-routes")

app.use(apiRoutes)
app.use(htmlRoutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true })

app.listen(Port, function(){
    console.log("app is listening on port" + Port)
})

