import React from "react";
import Skill from "./Skill";
import  { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function SkillSection(){
    
    return(
        <Consumer>
            {(value) => {
                const {skills} = value;
                 const finalSkillRow = [];
    
                 for(let i=0;i<skills.length/4;i++){
                     let skillRow = skills.slice(i*4,(1+i)*4);
                     finalSkillRow.push(
                         <div key={uuid()} className="d-flex justify-content-around py-3"> 
                        { skillRow.map((skill) => (
                         <Skill key={uuid()} skill={skill}/>
                         ))}
                     </div>
                     );
                 }

                return(
                    <div className="bg-light py-3">
                        <div className="container text-center py-3 ">
                            <h2 className="font-weight-light ">
                                <span className="text-info">Technology</span> Stack
                            </h2>
                            <div className="lead pb-3">
                                I design,develop and deliver with these tools
                            </div>
                            {finalSkillRow}
                        </div>
                    </div>
                );    
            }}
        </Consumer>
    )

   // console.log(uuid());
    



    
}

export default SkillSection;