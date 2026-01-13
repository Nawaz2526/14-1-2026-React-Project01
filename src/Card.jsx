import React from 'react'
import "./App.css"
import { CiBookmark } from "react-icons/ci";
const Card = () => {
  return (
    <div>
        <div className="perent">
          <div className="card">
            <div className='top'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBf9Np5QEUSwMLpiqsr-hpKdnp32D2nlO1w&s" alt="" />
            <button>Save<CiBookmark /></button>
            </div>
    
    
            <div className="center">
            <div className='center1'>
              <h3>Amazon <span>5 day ago</span></h3> 
             <h2>Senior UI\UX Designer</h2>
            </div>
           
            <div className="center3">
             <h4>Part time</h4>
             <h4>Senior level</h4>
            </div>
            </div>
    
            <div className="botum">
              <div className="botum1">
                <h3>
                  $120\hr
                </h3>
                <p>Mombai India</p>
              </div>
              <div className="botum2">
                <button>Apply Now</button>
              </div>
            </div>
          </div>
          </div></div>
  )
}

export default Card