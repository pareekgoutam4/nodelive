

function Verifuser(req,res,next){

    const authtoken = req.headers["authorization"]
    const token = authtoken.split(" ")[1]
    console.log(token)
    if(token === "nirmal"){
      next()
    }else{
        res.status(404).json({
            message : "user not verified"

        }
        )
    }

}

module.exports = Verifuser