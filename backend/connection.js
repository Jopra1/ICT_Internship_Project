const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://abhishekph:yuvrajsingh666@cluster0.fleglqq.mongodb.net/LearnDB?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('DB is connected');
})
.catch((error)=>{
    console.log('Error in Connection');
})