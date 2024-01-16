import react from "react";
import Navigation from "../Navigation";

const Hoc = (BaseComp)=>{
    return function enhancedComp(props){
        return <>
        <Navigation />
        <BaseComp {...props} />
        </>
    }
}

export default Hoc;