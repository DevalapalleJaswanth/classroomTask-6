import React, { useState, useEffect, useContext } from 'react';
import { myContext } from '../Context';
import { useNavigate, useLocation } from 'react-router';
export default function Form() {
  const navigate = useNavigate();
  const { setStudents, setTeachers } = useContext(myContext);
  const location = useLocation();
  const { obj, data, type, actionOn } =
    location.state !== null && location.state;
  let keys = location.state !== null && data && Object.keys(data[0]);
  const [presentData, setPresentData] = useState(data && [...data]);
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  console.log(location, obj, keys, state);
  useEffect(() => {
    let tempstate = {};
    let temperror = {};
    keys &&
      obj &&
      keys.map((ele, i) => {
        tempstate = { ...tempstate, [ele]: obj[`${ele}`] ? obj[`${ele}`] : '' };
        temperror = { ...temperror, [ele]: '' };
      });
    setState({ ...tempstate });
    setErrors({ ...temperror });
  }, [obj]);

  function handleSubmit(e) {
    e.preventDefault();
    var errKeys = Object.keys(state).filter((key, i) => {
      if (state[key] === '' && i !== 0) {
        return key;
      }
    });
    if (errKeys.length >= 1) {
      alert('Please fill all fields');
    } else {
      console.log(state, errors);
      if (type === 'Create') {
        if (actionOn === 'teachers') {
          state.id = presentData.length + 1;
          let temp = [...presentData];
          temp.push(state);
          setPresentData([...temp]);
          setTeachers([...temp]);
        }
        if (actionOn === 'students') {
          state.id = presentData.length + 1;
          let temp = [...presentData];
          temp.push(state);
          setPresentData([...temp]);
          setStudents([...temp]);
        }
      }
      if (type === 'Update') {
        if (actionOn === 'teachers') {
          let temp = data.map((ele) => {
            if (ele.id === obj.id) {
              return state;
            }
            return ele;
          });
          setTeachers([...temp]);
        }
        if (actionOn === 'students') {
          let temp = data.map((ele) => {
            if (ele.id === obj.id) {
              return state;
            }
            return ele;
          });
          setStudents([...temp]);
        }
      }
    }
  }

  function handleChange(e) {
    if (e.target.value === '') {
      setErrors({ ...errors, [e.target.name]: `${e.target.name} is Required` });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
      <h3> Form </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> First Name: </label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={(e) => handleChange(e)}
          />{' '}
          <br />
          <span style={{ color: 'red' }}> {errors.firstName} </span>
        </div>
        <br />
        <div>
          <label> Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <span style={{ color: 'red' }}> {errors.lastName} </span>
        </div>
        <br />
        <div>
          <label> Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e)}
            checked={state.gender === 'male' ? true : false}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e)}
            checked={state.gender === 'female' ? true : false}
          />{' '}
          Female
          <br />
          <span style={{ color: 'red' }}> {errors.gender} </span>
        </div>
        <br />
        <div>
          <label>{keys && keys[keys.length - 1]}: </label>
          <input
            type="text"
            name={`${keys && keys[keys.length - 1]}`}
            value={state[`${keys && keys[keys.length - 1]}`]}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <span style={{ color: 'red' }}> {errors.email} </span>
        </div>
        <br />
        <button type="submit"> {type && type} </button> &nbsp;
      </form>
    </>
  );
}
