import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../Models/EmployeeList";

@Pipe({
    name:'FilterByX'
})
export class FilterByX implements PipeTransform{
    transform(employees:Employee[], type:string, val:string):Employee[] {
        var transformed_array;
        if(type!="role"){
            transformed_array = employees.filter(employee => employee.employeeName.startsWith(val));
        }
        else{
            transformed_array = employees.filter(employee => employee.employeeRole.startsWith(val));
        }
        //console.log(transformed_array);
        return transformed_array;
    }
}

// @Pipe({
//     name:'FilterByName'
// })
// export class FilterByName implements PipeTransform{
//     transform(employees:Employee[], val:string):Employee[] {
//         //var c = users.filter(user => user.username.startsWith(name));
//         console.log(employees);
//         return employees;
//     }
// }