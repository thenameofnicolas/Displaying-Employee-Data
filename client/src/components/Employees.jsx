import { useParams, } from "react-router-dom";
import { useEmployeeData } from "./repository";

export const  Employees = () => {
    const { employeeID } = useParams();
    console.log("looking for EmployeeID ",  employeeID);
    return useEmployeeData(employeeID);
  };

  




















