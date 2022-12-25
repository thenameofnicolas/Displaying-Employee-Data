import { useParams, } from "react-router-dom";

export const  Employees = () => {
    const { employeeID } = useParams();
    console.log("EmployeeID: ",  employeeID);
    return  (<h1>EmployeesID: {employeeID} </h1>);
  };

  




















