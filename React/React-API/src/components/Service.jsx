import { useEffect } from "react";

const Service = () => {

    useEffect(()=>{
        console.log("service is created");
        return() =>{
            console.log("service is deleted");
            
        }
    })

  return <div>Service</div>;
};

export default Service;
