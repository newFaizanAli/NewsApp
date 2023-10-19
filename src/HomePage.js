import React, {useContext} from "react"
import { Navbar } from "./NavBar"
import { globalState } from "./MainPage"
import { BodyPage } from "./BodyPage"
import { LoadData } from "./LoadingData"



function HomePage(){
    let {mode, Loading, categ} = useContext(globalState)
    
    
    let loadSpinner = (
        <>
          <div className="d-flex justify-content-center">
                <LoadData />
          </div>
        </>
      )
    

    let layout = (
        <>  
           
            <Navbar />
            <h3 className="ps-3">Top {categ} News</h3>
             
             {Loading ? loadSpinner : <BodyPage mode={mode}/>}
          
            
        </>
    )
    return layout
   
}   

export { HomePage }