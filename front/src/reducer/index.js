

    import {GET_TASKS,NEW_TASKS, TASK_COMPLETED_OR_NOT } from "../actions/action-types"

const initialState = {
  AllTasks:[]
    

    

}


export default function Reducer(state = initialState, {type, payload}){
switch (type) {

    case GET_TASKS:{
        return{
            ...state,AllTasks:payload

        }
    }
    case NEW_TASKS:{
        return{
            ...state,AllTasks:payload

        }
    }

    default:
        return state;
}
}