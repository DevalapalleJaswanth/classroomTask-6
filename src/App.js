import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Teachers from './Teachers';
import './style.css';
import { myContext } from './Context';
export default function App() {
  const [studentLabels, setStudentLabels] = useState([
    'id',
    'first name',
    'last name',
    'gender',
    'marks',
  ]);
  const [teacherLabels, setTeacherLabels] = useState([
    'id',
    'first name',
    'last name',
    'gender',
    'department',
  ]);
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: 'Rey',
      lastName: 'Renolds',
      gender: 'male',
      marks: '1000',
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Renolds',
      gender: 'female',
      marks: '100',
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Jane',
      gender: 'female',
      marks: '900',
    },
    {
      id: 4,
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      marks: '1000',
    },
  ]);
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      firstName: 'Ronald',
      lastName: 'Darcy',
      gender: 'male',
      department: 'Pshycology',
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'crow',
      gender: 'female',
      department: 'Pshycology',
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Janner',
      gender: 'female',
      department: 'Physics',
    },
    {
      id: 4,
      firstName: 'Peter',
      lastName: 'Henson',
      gender: 'male',
      department: 'Chemistry',
    },
  ]);
  const [studentActions, setStudentActions] = useState([
    {
      title: 'Edit',
      action: (obj) => {
        navigate('/Form', {
          state: {
            obj: obj,
            type: 'edit',
            action: (item) => {
              let temp = data.map((ele) => {
                if (ele.id === item.id) {
                  return data;
                }
                return ele;
              });
              setStudents([...temp]);
            },
          },
        });
      },
    },
    {
      title: 'Delete',
      action: (obj, data) => {
        let temp = data.filter((ele) => {
          if (ele.id !== obj.id) {
            return ele;
          }
        });
        setStudents([...temp]);
      },
    },
  ]);
  const [teacherActions, setTeacherActions] = useState([
    {
      title: 'Edit',
      action: (obj, data) => {
        navigate('/Form', {
          state: {
            obj: obj,
            type: 'edit',
            action: (item) => {
              let temp = data.map((ele) => {
                if (ele.id === item.id) {
                  return item;
                }
                return ele;
              });
              setTeachers([...temp]);
            },
          },
        });
      },
    },
    {
      title: 'Delete',
      action: (obj, data) => {
        let temp = data.filter((ele, i) => {
          if (ele.id !== obj.id) {
            return ele;
          }
        });
        console.log(temp);
        setTeachers([...temp]);
      },
    },
  ]);
  return (
    <div>
      <myContext.Provider
        value={{
          studentLabels,
          teacherLabels,
          students,
          setStudents,
          teachers,
          setTeachers,
          studentActions,
          teacherActions,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Teachers" element={<Teachers />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}
