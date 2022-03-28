import React, { useContext } from 'react';
import { myContext } from './Context';
export default function Home() {
  const context = useContext(myContext);
  const { students, teachers, setStudents, setTeachers } = context;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flext-start',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      Dashboard
      <div>
        Students
        <table border="2px">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Marks</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((ele, i) => (
                <tr key={i}>
                  <td>{ele.id}</td>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.marks}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        Teachers
        <table border="2px">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers &&
              teachers.map((ele, i) => (
                <tr key={i}>
                  <td>{ele.id}</td>
                  <td>{ele.firstName}</td>
                  <td>{ele.lastName}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.department}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
