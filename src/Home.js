import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { myContext } from './Context';
import { Table } from './Components';
export default function Home() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const {
    studentLabels,
    teacherLabels,
    students,
    teachers,
    setStudents,
    setTeachers,
  } = context;
  const [studentActions, setStudentActions] = useState([
    {
      title: 'Create',
      action: (obj, data) => {
        navigate('/Form', {
          state: {
            type: 'Create',
            obj: obj,
            data: data,
            actionOn: 'students',
          },
        });
      },
    },
    {
      title: 'Edit',
      action: (obj, data) => {
        navigate('/Form', {
          state: {
            type: 'Update',
            obj: obj,
            data: data,
            actionOn: 'students',
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
      title: 'Create',
      action: (obj, data) => {
        navigate('/Form', {
          state: {
            type: 'Create',
            obj: obj,
            data: data,
            actionOn: 'teachers',
          },
        });
      },
    },
    {
      title: 'Edit',
      action: (obj, data) => {
        navigate('/Form', {
          state: {
            type: 'Update',
            obj: obj,
            data: data,
            actionOn: 'teachers',
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
        actions={studentActions}
        title={'Students'}
      />
      <Table
        data={teachers}
        labels={teacherLabels}
        actions={teacherActions}
        title={'Teachers'}
      />
    </div>
  );
}
