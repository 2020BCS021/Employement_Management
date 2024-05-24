import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const history = useHistory();

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const addEmployee = () => {
        history.push('/add-employee/_add');
    };

    const editEmployee = (id) => {
        history.push(`/add-employee/${id}`);
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    };

    const viewEmployee = (id) => {
        history.push(`/view-employee/${id}`);
    };

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row mb-3">
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
{/*             <br /> */}
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
