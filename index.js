const employee = {
    name: '',
    address: ''
    
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObject = Object.assign({}, employee, {[key]: value})

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = Object.assign(employee, { [key]: value })
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee)
    delete newObject[key];
    return newObject;
}



