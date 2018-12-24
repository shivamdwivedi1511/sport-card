import React from 'react';

const CardViewer=(props)=>{
    console.log(props.email);
    console.log(props.phone);
    console.log(props.favorite_sport);

    return(
        <div>
             <div className="col s12 m8 offset-m2 l6 offset-l3  z-depth-5">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s3">
              <img src={props.photoURL} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s9 ">
              <span className="black-text  " >
                {props.name}
                <h6 className=' orange-text darken-4'>Email : {props.email}</h6>
                <h6 className='grey-text'>Contact : {props.phone}</h6>
                <h6 className='green-text'>Favorite Sport : {props.favorite_sport}</h6>
                <hr></hr>
                <h6 id='cardnumber'>Card No. : {props.card_number}</h6>
              </span>
             
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default CardViewer;