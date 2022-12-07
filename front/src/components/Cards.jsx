import { useEffect } from "react"
import {useSelector,useDispatch} from "react-redux"
import React from "react"
import styles from "./ModulesCss/Cards.module.css"
import { Link } from "react-router-dom"
import { deletePokemon, getPokemons } from "../actions"
import {VscClose} from "react-icons/vsc"
import {VscDebugRestart} from "react-icons/vsc"
import { taskCompleted } from "../middlewares/middlewares"

export default function Cards({data}){
const state = useSelector(state=>state)
const dispatch = useDispatch()



const reload = (data) =>{
     taskCompleted(data)
     setTimeout(() => {
          window.location.reload()
     }, 300);
   
}


     return(
      <div>
         
         
            
           <div className={styles.card}>
         
            <h3 className={styles.name} > #{data.number}. {data.title}</h3>
            <h4 className={styles.types}>{data.id}</h4>
           
            {data.state?<button onClick={()=>reload({state:!data.state, id:data.id})}>
               Realizado</button>:<button onClick={()=>reload({state:!data.state, id:data.id})}>No Realizado</button>}

            </div>
            
       
         
      </div>
       )
       }