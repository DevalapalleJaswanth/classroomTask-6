import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import { Form } from './Components';
import './style.css';
import { myContext } from './Context';

export default function App() {
  const [studentLabels, setStudentLabels] = useState([
    'id',
    'first name',
    'last name',
    'gender',
    'marks',
    'assined to',
  ]);
  const [teacherLabels, setTeacherLabels] = useState([
    'id',
    'first name',
    'last name',
    'gender',
    'department',
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
      lastName: 'Crow',
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

  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: 'Rey',
      lastName: 'Renolds',
      gender: 'male',
      marks: '1000',
      assignedTo:
        teachers[0] &&
        teachers[0].firstName &&
        teachers[0].lastName &&
        teachers[0].firstName == 'Ronald' &&
        teachers[0].lastName == 'Darcy'
          ? 'Ronald Darcy'
          : 'none',
    },
    {
      id: 2,
      firstName: 'Mary',
      lastName: 'Renolds',
      gender: 'female',
      marks: '100',
      assignedTo:
        teachers[1] &&
        teachers[1].firstName &&
        teachers[1].lastName &&
        teachers[1].firstName == 'Mary' &&
        teachers[1].lastName == 'Crow'
          ? 'Mary Crow'
          : 'none',
    },
    {
      id: 3,
      firstName: 'Mary',
      lastName: 'Jane',
      gender: 'female',
      marks: '900',
      assignedTo:
        teachers[2] &&
        teachers[2].firstName &&
        teachers[2].lastName &&
        teachers[2].firstName == 'Mary' &&
        teachers[2].lastName == 'Janner'
          ? 'Mary Janner'
          : 'none',
    },
    {
      id: 4,
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      marks: '1000',
      assignedTo:
        teachers[3] &&
        teachers[3].firstName &&
        teachers[3].lastName &&
        teachers[3].firstName == 'Peter' &&
        teachers[3].lastName == 'Henson'
          ? 'Peter Henson'
          : 'none',
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
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}
