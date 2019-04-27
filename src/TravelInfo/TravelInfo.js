import React from 'react';
const TravelInfo = (props) => {


  return (
      
    <div className='travel-info-inner'>
     
     <div>
      <h1>
        Traveling in {props.name}
      </h1>
 
      <h5>
        The capital of {props.name} is {props.capital}, within which there is much to explore.
        You'll need to stock up on the local currency which is {props.currency}, and learn a few words of the local language
         - {props.language}.
      </h5>
      </div>
      <div>
      <img src={props.flag}/>
  </div>

    </div>
  )
}

export default TravelInfo