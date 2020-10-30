const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

module.exports = class PublicationController{

    static async Create(req,res){
        const resPerson = new Person(req.body);
        resPerson.save();
        return res.status(200).send(resPerson);
    }

    static async Search(req, res){
        if(!req.query.name){
            return res.status(401).send({ error: 'Insira um nome' });
          }
          const name = await Person.find({name: { $regex: req.query.name }});
          console.log(name)
          const age = name[0] ? name[0] : {age: 0};
          return res.status(200).json(age)
    }
}
