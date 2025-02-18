import React from ' react'
import MyContext from '../../context/data/myConext'
function myState(props){
const state = {
    name:'shweta chaudhary',
    rollno:15
}
return(
    <MyContext.Provider value={state}>
        {props.children}
    </MyContext.Provider>
)
}
export default myState;