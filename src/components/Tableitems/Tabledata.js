import React, { useContext, useEffect,useRef,useState } from 'react'
import './tabledata.css'
import dataContext from '../../context/datacontext';
import { Link } from "react-router-dom";
// import { responsiveFontSizes } from '@mui/material';

export default function Tabledata (props) {
  // console.log(dataContext)
  const [isChecked, setIsChecked] = useState(false);
const [state,setState]=useState("false")
const [color,setColor]=useState("#0E1C25")

const ref=useRef(null);

  const context=useContext(dataContext);
  const {ques,quesArray,updateData,deleteData,showAlert}=context;
  
  // console.log(ques.questions);
  // console.log(notes);
  
  // console.log(ques);
  // console.log(quesArray);
  let check = quesArray.includes(props.QID);
  // var exists = ques.some(o => o.questions === props.QID);
  // console.log(check);
  
  
  
  useEffect(()=>{
    setIsChecked(check);
  },[check])
 
          const onClickCheckbox= (e)=>{
            e.preventDefault();
            if(quesArray.includes(props.QID))
            
            updateData(ques._id,ques.email,props.QID)
          }
            
            const toggle= async(e)=>{
             
              if(isChecked){
                if(props.mode == "dark")
                setColor("blue")

                else{
                  setColor("red")
                }

                deleteData(ques._id,ques.email,props.QID)
                showAlert("success","question deselect succesfully")
                setIsChecked(false);
              }
              else if(!isChecked)  {
                
                setColor("green")
                
                updateData(ques._id,ques.email,props.QID)
                showAlert("success","question Completed succesfully")
                setIsChecked(true);
      }
      
    }
  
    
    
    return (
      <>
    <tr  style={{backgroundColor: isChecked?"#05ef63":"black"}} >
      <th scope="row"><input className="donebox" name={props.QID} onChange={toggle}    type="checkbox"  checked={isChecked}></input></th>
      <th  className="questionname" style={{ color: isChecked?"black":"#D5D2DD"}}>{props.QID}</th>
      <th><a target="_blank" href={props.Url}  className="questionname" style={{ color: isChecked?"black":"#D5D2DD"}}>{props.question}</a></th>
    </tr>
    </>
  )
}
