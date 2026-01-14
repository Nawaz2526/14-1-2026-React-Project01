import React from 'react'
import { CiBookmark } from "react-icons/ci";
import "./App.css"

const Card = ({ elem }) => {
  return (
   
      <div className="card">

        <div className="top">
          <img src={elem.companyLogo} alt="" />
          <button>Save <CiBookmark /></button>
        </div>

        <div className="center">
          <div className="center1">
            <h3>
              {elem.companyName} <span>{elem.time}</span>
            </h3>
            <h2>{elem.jobName}</h2>
          </div>

          <div className="center3">
            {elem.jobType.map((type, index) => (
              <h4 key={index}>{type}</h4>
            ))}
          </div>
        </div>

        <div className="botum">
          <div className="botum1">
            <h3>{elem.pay}</h3>
            <p>{elem.location}</p>
          </div>

          <div className="botum2">
            <button>Apply Now</button>
          </div>
        </div>

      </div>
    
  )
}

export default Card;




// import React from 'react'
// import "./App.css"
// import { CiBookmark } from "react-icons/ci";

// const Card = ({ elem }) => {
//   return (
//     <div>
//       <div className="perent">
//         <div className="card">

//           <div className='top'>
//             <img src={elem.companyLogo} alt="" />
//             <button>Save<CiBookmark /></button>
//           </div>

//           <div className="center">
//             <div className='center1'>
//               <h3>
//                 {elem.companyName} <span>{elem.time}</span>
//               </h3>
//               <h2>{elem.jobName}</h2>
//             </div>

//             <div className="center3">
//               {elem.jobType.map((type, index) => (
//                 <h4 key={index}>{type}</h4>
//               ))}
//             </div>
//           </div>

//           <div className="botum">
//             <div className="botum1">
//               <h3>{elem.pay}</h3>
//               <p>{elem.location}</p>
//             </div>

//             <div className="botum2">
//               <button>Apply Now</button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card;
