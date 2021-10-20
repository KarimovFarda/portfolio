import React from 'react'
import './certificates.css';
import {certificateData} from '../../data/certificateData'
// import as from '../../assets/svg/certificate/CourseraKBGNRRUMAGKG1.png'
import Marquee from 'react-fast-marquee'

function Certification(){

    return (
      <>
              
        <div className="certificate-container ">
        <h1> Certificates </h1>
        <div className="grid-container">
        <div className="grid">
           <Marquee 
                        gradient={false} 
                        speed={110} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="right"
                    >
                          {certificateData && certificateData.map(item => {
                return (
                    <div className="grid__item">
                    <div className="card"><img className="card__img" src={item.image} alt="Snowy Mountains"/>
                      <div className="card__content">
                        <h1 className="card__header">{item.name}</h1>
                        <p className="card__text">{item.institution}</p>
                        <p className="card__text">Issue Date : {item.issueDate}</p>
                      </div>
                    </div>
                  </div>
                )
            })}
                    </Marquee>
          
      </div>
      </div>
      </div>
      </>
    );
}

export default Certification;
