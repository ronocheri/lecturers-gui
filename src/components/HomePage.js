import React from "react";
import ContactUS from "./ContactUS";

function HomePage()
{
    return (
        <div >
          <h1 className={"centered"}>Welcome!</h1>
          <p className={"centered"}>This is the offical website for lecturers in Israel!</p>
          <img className={"centerImg"} src={process.env.PUBLIC_URL+"assets/groupPic.jpg"} height={500} />
          <ContactUS/>
        </div>
        
      );
      
}
export default HomePage;