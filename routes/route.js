const express = require('express')
const axios = require('axios')
const User = require('../database/user')

const router = express.Router()


router.post("/", (req, res) => {
    // request to consume data from api
    axios.post( 
        'http://54.221.58.163/api/channels',
        {},
        {headers: { Authorization: `Bearer C8eDj8mKFHV5jUPMk25TItDFTgCTo8PrtljgVCJT` }}
      )
      .then( async ({data}) => {
        try{
          // saves data to database
          res.json(await User.bulkCreate(data.data))
          res.status(200).sendStatus()
        }
        catch(error){
          // error handling
          console.error(error)
          res.status(500)
          res.json({})
        }
         });
      })
      

module.exports = router