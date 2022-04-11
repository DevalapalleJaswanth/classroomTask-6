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
    studentActions,
    teacherActions,
  } = context;

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
