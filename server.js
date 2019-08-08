const express = require("express");
const app = express ();
app.use(express.json())


const tasks =[

    {
        id:0,
        title:"Orange Acadmey",
        Color: "Orange",
        isComplete : false
    },
    {
        id:1,
        title:"Orange Acadmey",
        Color: "Orange",
        isComplete : false
    },
    {
        id:2,
        title:"Orange Acadmey",
        Color: "Orange",
        isComplete : false
    }, 
    {
        id:3,
        title:"Orange Acadmey",
        Color: "Orange",
        isComplete : false
    }



]

app.get('/',(req,res)=>{
    res.json("worked")
})
app.get ('/tasks',(req,res)=>{
    res.json(tasks)

})
app.post('/tasks',(req,res)=>{
    let newTaske=req.body
    console.log(req.body)
    tasks.push(newTaske)
    res.json(tasks)

})

app.delete('/tasks/:myid',(req,res)=>{
    let id =parseInt(req.params.myid);
    tasks.map(task=>{
        if (task.id===id) {
            console.log(task)
            delete task
        }
        return task;
    })
    res.json(tasks);
})


const PORT = 4500;

app.listen(PORT,()=>console.log(`Srever is Worked in ${PORT}`))