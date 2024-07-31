const mongoose=require("mongoose")





async function DBConnect(dbURI){
    try {
        const connetctDB=await mongoose.connect("mongodb+srv://yeswanthkumar9398:ganesh23062003@cluster0.g6lahmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Connected to DB')
    } catch (error) {
        console.log(error.message)
    }    

}


module.exports=DBConnect;
