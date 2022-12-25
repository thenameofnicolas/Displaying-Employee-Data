import { useParams, } from "react-router-dom";
import { useEmployeeData } from "./repository";

export const  Employees = () => {
    const { employeeID } = useParams();
    console.log("EmployeeID: ",  employeeID);
    const res = useEmployeeData(employeeID);
    return  (<h1>EmployeesID: {employeeID} </h1>);

  };

  




















