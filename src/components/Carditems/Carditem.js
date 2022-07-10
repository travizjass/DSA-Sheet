import React from 'react'
import './Carditem.css'
import Table from '../Table/Table';
import { Link } from "react-router-dom";


// import {Link} from "react-router-dom";
function Carditem(props) {
  // console.log(props.mode);
  return (
    <div className={`card-${props.mode} my-2 mx-1`}  id='cards' style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className={`card-${props.mode}-title`}>{props.title}</h5>
      <p className={`card-${props.mode}-text`}>Total Question - {props.TotalQuestion} </p>
      <p className={`card-${props.mode}-text`}>Easy Question - {props.EasyQuestion} </p>
      <p className={`card-${props.mode}-text`}>Medium Question - {props.MediumQuestion} </p>
      <p className={`card-${props.mode}-text`}>Hard Question - {props.hardQuestion} </p>
      <div className='d-flex justify-content-end'>
      <Link to={`${props.title}`}  onClick={props.loginControl} className="btn-light btn-primary ">GO</Link>
      </div>
    </div>
  </div>
  
  )
}

export default Carditem
