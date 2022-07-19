import React from "react";
import Personal from "./Medium";

const Friends = () => {
    const theirBusiness = [

        {name: "Natalie",
        age: "19",
        dateOfBirth: "08/21/2002",
        number: "121-212-1212",
        },

        {name: "Isaac",
        age: "21",
        dateOfBirth: "03/03/2001",
        number: "121-212-1212",
        },

        {name: "Lailah",
        age: "19",
        dateOfBirth: "11/21/2002",
        number: "121-212-1212",
        },

        {name: "Luna",
        age: "2",
        dateOfBirth: "05/18/2020",
        number: "121-212-1212",
        }

    ]; 

    return (
        <div className="List">
            {theirBusiness.map((info) => (
                <Personal 
                    name={info.name} 
                    age={info.age} 
                    dateOfBirth={info.dateOfBirth} 
                    number={info.number} 
                />
            ))}
        </div>
    );

};

export default Friends;