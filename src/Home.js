import React, { useContext, useState } from 'react';
import { myContext } from './Context';
import { Table } from './Components';
export default function Home() {
  const context = useContext(myContext);
  const {
    studentLabels,
    teacherLabels,
    students,
    teachers,
    setStudents,
    setTeachers,
  } = context;
  const [StudentActions, setStudentActions] = useState([
    {
      title: 'Edit',
      action: (obj) => {
        navigate('/Form', {
          state: {
            obj: obj,
            type: 'edit',
            action: (data) => {
              let temp = students.map((ele) => {
                if (ele.id === data.id) {
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
      action: (obj) => {
        let temp = students.filter((ele) => {
          if (ele.id !== obj.id) {
            return ele;
          }
        });
        setStudents([...temp]);
      },
    },
  ]);
  const [TeacherActions, setTeacherActions] = useState([
    {
      title: 'Edit',
      action: (obj) => {
        navigate('/Form', {
          state: {
            obj: obj,
            type: 'edit',
            action: (data) => {
              let temp = teachers.map((ele) => {
                if (ele.id === data.id) {
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
      action: (obj) => {
        let temp = teachers.filter((ele) => {
          if (ele.id !== obj.id) {
            return ele;
          }
        });
        setStudents([...temp]);
      },
    },
  ]);

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
      <Table
        data={students}
        labels={studentLabels}
        actions={StudentActions}
        title={'Students'}
      />
      <Table
        data={teachers}
        labels={teacherLabels}
        actions={TeacherActions}
        title={'Teachers'}
      />
    </div>
  );
}
