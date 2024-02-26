import React from 'react'
import './tool.css'
import img3 from '../../utils/3.png'

const Tool = () => {
    const textArray = [
      "CHEMICALS & PROCESS",
      "POWER",
      "WATER & WASTE WATER",
      "OILS & GAS",
      "PHARMA",
      "SUGARS & DISTILLERIES",
      "PAPER & PULP",
      "MARINE & DEFENSE",
      "METAL & MINING",
      "FOOD & BEVERAGE",
      "PETROCHEMICAL & REFINERIES",
      "SOLAR",
      "BUILDING",
      "HVAC",
      "FIRE FIGHTING",
      "AGRICULTURE & RESIDENTIAL",
    ];
  return (
    <div className="tool-container">
      <p>
        INSTALLED OVER 10 LAKHS RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A
        CUMMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="tool-img">
        <img src={img3} alt="tools pic" />
      </div>

      <p className="below-para">
        Valves - Pumps - Pipes - IoT Drivers & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="red-hr" />
      <p className="below-para bold-para">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>

      <p className="below-para">
        {textArray.map((text, index) => (
          <React.Fragment key={index}>
            <span>{text}</span>
            {index !== textArray.length - 1 && (
              <span className="red-pipe">|</span>
            )}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default Tool
