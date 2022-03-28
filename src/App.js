import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Teachers from './Teachers';
import './style.css';
import { myContext } from './Context';
export default function App() {
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
  return (
    <div>
      <myContext.Provider
        value={{ students, setStudents, teachers, setTeachers }}
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
