import React from 'react'

function Gradient({color, delay, state}) {

    let styles = {
        backgroundImage: color,
        animationDelay: delay,
    }

  return (

    <div>
        {
        state? 
        <div className="gradient" style={styles}></div> 
        : 
        null
    }
    </div>
    
  )
}

export default Gradient