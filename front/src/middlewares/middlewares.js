
  
  export const taskCompleted = (task)=>{
    fetch("http://localhost:3001/tasks",{
         method: "PUT",
         headers:{"Accept": "application/json",
        "Content-Type":"application/json"},
                       
      body:JSON.stringify(task)
         }
     )
  }
  
  
  
  
