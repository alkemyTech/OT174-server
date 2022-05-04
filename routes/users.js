var express = require('express');
var router = express.Router();

const updateUser=require("../controllers/updateUserController")

const {createJWTToken} = require('../util/authUtil');
const bcrypt = require('bcrypt');
const {authenticate} = require('../middlewares/authMiddleware');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.patch("/:id",updateUser)

router.post('/login', async (req,res)=> {
  try{
    const user = {email: "user@mail.com", password: "userPassword"};

    const token = createJWTToken({user});

    return res.status(200).json({token});
  }catch(err){
    return res.status(500).json({err});
  }


  /*CUANDO ESTE MAS AVANZADO EL PROYECTO, SE PUEDE UTILIZAR EL CODIGO DE ABAJO, Y QUE USER VENGA DE ALGO COMO ESTO
  const user = model.find(where: {email: req.body.email})*/

  /*try{ 
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(user && validPassword){

      const token = createJWTToken({user});

      return res.status(200).json({token});
      
    }else if (!user){
      return res.status(404).send("User not found");
    }else if (!validPassword){
      return res.status(500).send("Invalid credentials");
    }

  }catch(err){
    return res.status(500).send(err);
  }*/

  
});

router.get('/protected',authenticate, async (req,res) =>{
  res.send('protected')
})







module.exports = router;
