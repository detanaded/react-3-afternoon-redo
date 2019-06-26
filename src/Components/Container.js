import React from "react";

const Container = props => {
  console.log(props.list);
  const currentInfo = props.list[props.current];
  return (
    <div className="whitecontainer">
      <div className="indexvalue">{props.current + 1}/24</div>
    <br></br>
    <br></br>
    <div className="alltext">
      <div className="fullName">
        {currentInfo.name.first} {currentInfo.name.last}
        
        
      </div>
      <br></br>
      <div>
       <b> From: </b> {currentInfo.city}, {currentInfo.country}
      <div className="maintext">
      </div>
      <br></br>
      <div><b>Job Title:</b> {currentInfo.title}</div>
      <br></br>
      <div><b>Employer: </b>{currentInfo.employer}</div>
      </div>
      <br></br>
      <br></br>
      <div>
        <b>Favorite Movies:</b>
        <ol>
       <li> {currentInfo.favoriteMovies[0]}</li>
        <li>{currentInfo.favoriteMovies[1]}</li>
        <li>{currentInfo.favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
    </div>
  );
};

export default Container;