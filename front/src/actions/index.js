
  import {GET_TASKS,NEW_TASKS, TASK_COMPLETED_OR_NOT } from "../actions/action-types"



export function getTasks(){
  return async function(dispatch){
    const a = await fetch("http://localhost:3001/tasks")
    const b = await a.json()
  
      dispatch({
       type:GET_TASKS,payload:b
    })}
  
}

export function newTasks(){
  return async function(dispatch){
    const a = await fetch("http://localhost:3001/newtasks")
    const b = await a.json()
  
      dispatch({
       type:NEW_TASKS,payload:b
    })}
  
}
