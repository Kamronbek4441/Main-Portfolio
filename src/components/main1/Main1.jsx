import React from 'react'
import "./Main1.css"
import left from "../../assets/left.png";
import right from "../../assets/right.png";

const Main1 = () => {
  return (
      <div className="img">
        <div className="img1">
          <img className="lrl" src={left} alt="" />
          <div className="text">
            <div className="tt">
              <h2>
                ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ
                ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!
              </h2>
            </div>
            <button>Подробнее</button>
          </div>
          <img className="lrr" src={right} alt="" />
        </div>
      </div>
  );
}

export default Main1
