import  React from "react"
import { useEffect } from "react"
import {getTasks, newTasks, tasksCompletedOrNot} from "../actions"
import { connect } from "react-redux"
import Cards from "./Cards"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styles from "./ModulesCss/MainPage.module.css"
import {FaRegTrashAlt} from "react-icons/fa"
import img from "../imagen-flecha.png"
import {VscDebugRestart} from "react-icons/vsc"
import {IoIosOptions} from "react-icons/io"
import Swal from 'sweetalert2'
import {VscClose} from "react-icons/vsc"





export default function MainPage(props){

  const dispatch = useDispatch()
  const state = useSelector(state => state)
   
    useEffect(()=>{
    dispatch(getTasks())
    },[])



   
   const handleRestorePokemons = ()=>{ 
    let timerInterval
    Swal.fire({
        title: 'Restoring Pokemons deleted...',
        html: '',
        timer: 2000,
        timerProgressBar: false,
        didOpen: () => {
          props.restorePokemons()
          props.state.onePokemon = {}
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          window.location.reload()
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
   

   }
   


    return  (

            <div id="container" className={styles.container}>
              <div className={styles.content}>
                <button onClick={()=> dispatch(newTasks())}>Load new tasks!</button>
                <div className ={styles.cards}>
                   {state.AllTasks.map(element=>(  
                    <div id="card" ><Cards data={element} key={element.id} /></div>
                    )
                    )}
                  
                    </div>                    
                  </div>
                  </div>
    )
}








