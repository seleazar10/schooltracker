// display the parents page that should contain the parent info
import React from "react";
import ParentJumbo from "../../components/ParentJumbo/ParentJumbo"
import Tabs from "../../components/ParTabs/Tabs"
import ParTracker from "../../components/ParTracker/ParTracker"
import ParAncmt from "../../components/ParAncmt/ParAncmt"
import ParWeather from "../../components/ParWeather/ParWeather"
import Footer from "../../components/Footer/Footer"
import ParGrade from "../../components/ParGrade/ParGrade"



class Parent extends React.Component{

    render(){
        return(

            
           <div>

               <ParentJumbo />

               <Tabs />

               <ParTracker />

               <ParAncmt />

               <ParWeather />

               <ParGrade />

               <Footer />

           </div>
                
        )
    }
}

export default Parent;