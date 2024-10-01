const mongoose=require("mongoose");
const todo_schema=new mongoose.Schema({
    title:{
       type:String,
       required:true,

    },
    completed:{
      type:Boolean,
    },
    updated:{
     
    },
    content:{

    },
    deadline:{

    },
})