// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "15 Park",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
 }   

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
 }

 function deleteFromEmployeeByKey(employee, key) {
    const anotherEmployee = {...employee};
    delete anotherEmployee.name;
    delete anotherEmployee.streetAddress;
    return anotherEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
 }