import React,{useEffect, useState} from "react"
import DoctorInvites from "../../doctors/invite/doctor-invite"
import axios from "axios"
import { tr } from "date-fns/esm/locale";



const Invitation = (props)=>{
   // const accept =() =>{}
    //const reject =() =>{}
    const [invites,setInvites] = useState([])
    const [load, setLoad] = useState(false)
    const [error,setError] =useState('')
    useEffect(() =>{
        axios.get("http://localhost:1337/invitations?clinic=" +  props.clinic)
             .then(res =>{
                 console.log(props.clinic)
                 console.log(res.data)
                    setInvites(res.data)
                    setLoad(true)
             })
             .catch(err =>{
                 setError(err.message)
                 setLoad(true)
             })
    },[])
    
       if(load){
           return(
             <table>
                
                 {error ?<tr><td>{error.message}</td></tr>  :invites.map(invite =><tr><td>{invite.doctor} </td> <td>{invite.clinic}</td></tr>) }
                 
             </table>
           )
       }else{
           return(
               <div>
                   Loading.....
               </div>
           )
       }
   
    
  
    
   
}

export default Invitation;