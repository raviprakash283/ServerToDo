import mongoose from "mongoose";

export const connectDB = () => {
  
     const dbURL = 'mongodb://127.0.0.1:27017/ToDoMern';
   mongoose.connect(dbURL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     
   }).then(()=>{
        console.log(" mongodb connected")
   }).catch((err)=>{                    
        console.log(err);
   })    
};
