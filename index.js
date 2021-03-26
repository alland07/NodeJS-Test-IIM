const express = require('express')
const app = express() // notre serveur 
const anime = require('./anime.json')

app.use(express.json())

//.get défini la route 
//req reprend toutes les datas du fichier json, res contient les méthodes de réponse aux requêtes
app.get('/anime',(req,res)=>{
    res.status(200).json(anime)
})

app.get('/anime/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const anim = anime.find(anim=>anim.id === id)
    res.status(200).json(anim)
})

app.post('/anime', (req, res) =>{
    anime.push(req.body)
    res.status(200).json(anime)
})

app.put("/anime/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    let anim = anime.find(anim=>anim.id === id)
    anim.nom= req.body.nom,
    anim.type = req.body.type,
    res.status(200).json(anim)
})

app.delete('/anime/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    // console.log(id)
    let anim = anime.find(anim => anim.id === id)
    // console.log(anim)
    
    if(anime.indexOf(anim) === id){
        anime.splice(anime.indexOf(anim), 1)
        res.status(200).json(anime)
    }else{
        res.status(400).json(anime)
    }
})

//Le port à écouter et lancement du serveur
app.listen(8080, ()=>{
    console.log("Le serveur est en marche")
})