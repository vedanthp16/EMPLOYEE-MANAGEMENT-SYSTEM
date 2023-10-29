import React from "react";

const Card4dept = (props) => {

  return (
    <div className="card4dept-component">
      <div className="card4dept-inner">
        <div className="dropdownContainer">
        </div>
        {/* <div className="profileImage">
          <img
          src="/image"
            alt="firstname"
          /> 
        </div>*/}
        <div className="dept-detail">
          <img src={props.logo}/>
          <h3>{props.deptname}</h3>
          <p>{props.email}</p>
          <p>{props.location}</p>
        </div>
      </div>
      <div className="job-dept">
        <p>View</p>
      </div>
    </div>
  );
};

export default Card4dept;
