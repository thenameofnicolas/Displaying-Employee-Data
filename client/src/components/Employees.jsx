import { useParams, } from "react-router-dom";

export const  Employees = () => {
    const { employeeID } = useParams();
    console.log("Employee: ",  employeeID);
    return  (<h1>Employees: {employeeID} </h1>);
  };

  




















