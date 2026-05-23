const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pareekgoutam4_db_user:fUQieNqkWO1PLJno@cluster0.luxe7gd.mongodb.net/?appName=Cluster0",{
    family : 4
}).then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log("server error" ,e )
})