const express = require('express')
const axios = require('axios')
const sequelize = require('../database/DBconfig')
const User = require('../database/user')
const { response } = require('express')
const asyncHandler = require('express-async-handler')
const e = require('express')

const router = express.Router()


router.post("/", (req, res) => {
    
    axios.post( 
        'http://54.221.58.163/api/channels',
        {},
        {headers: { Authorization: `Bearer C8eDj8mKFHV5jUPMk25TItDFTgCTo8PrtljgVCJT` }}
      )
      .then( async ({data}) => {
        try{
          res.json(await User.bulkCreate(data.data))
          res.status(200).sendStatus()
        }
        catch(error){
          console.error(error)
          res.status(500)
          res.json({})
        }
         });
      })
      

module.exports = router