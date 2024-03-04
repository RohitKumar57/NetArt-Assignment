import React from 'react'
import './comp.css'
import img1 from '../../utils/1.png'
import img2 from '../../utils/2.png'

const Comp = () => {
  return (
    <>
      <div className="body-container">
        <div className="left">
          <img className="prize-img" src={img1} alt="Logo for My Company" />
        </div>
        <div className="right">
          <h4 className='body-heading'>
            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR THE
            4TH TIME
          </h4>
          <ul>
            <li>
              C.R.I's energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I is the highest contributor in the country for the projects
              of EESL(Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with the IoT enabled control panel.
            </li>
          </ul>
          <img src={img2} alt="Logo for My Company" />
          <p>
            Government of India awarded the{" "}
            <strong>"National Energy Conservation Award 2018".</strong> Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </>
  );
}

export default Comp
