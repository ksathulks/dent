import React,{useEffect, useState} from "react"
import DoctorInvites from "../../doctors/invite/doctor-invite"
import axios from "axios"


import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
  } from "mdbreact";


const Invitation = (props)=>{
   
     
     const {_id,
            email,
            doctors}=props.clinic.clinic[0]
   
     
    const reject =(invite) =>{
        const id = invite._id
        axios.delete("http://localhost:1337/invitations/"+ id )
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    }
   const accept =(invite) =>{
const id = invite._id


axios.get("http://localhost:1337/doctors?email=" + invite.doctor)
.then( async res =>{
    if( res.status ==200){
   const     drDetail = res.data
   console.log(drDetail)
   const doctorList =doctors
   
   await  doctorList.push(drDetail)
   console.log(doctorList)
    }
}).then(
    axios.put("http://localhost:1337/clinics/"+_id, {doctors: ['doctorList']} )
   
).then(
        res =>{
            if(res.status == 200){
             reject()
            }
        }
    )
      
    .catch(error =>{
        console.log(error)
    })

       
           
  
   }
    
    const [invites,setInvites] = useState([])
    const [load, setLoad] = useState(false)
    const [error,setError] =useState('')
    useEffect(() =>{
        axios.get("http://localhost:1337/invitations?clinic=" +  email)
             .then(res =>{
                 console.log(email)
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
                {error ?<tr><td>{error.message}</td></tr> :invites.map(invite =>
                <tr>
                <td>{invite.doctor} </td>
                <td><button onClick = {()=>{ accept(invite)}}>Accept</button></td>
                <td><button onClick = {()=>{reject(invite)}}>Reject</button></td>
                </tr>
                ) 
                }
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