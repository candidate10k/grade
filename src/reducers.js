import { ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from './actions/student'

//Generate an 8 digit random string for an id.
const makeId = () => {
  const ra = Math.random().toString(36).substring(3, 11);
  return ra.length === 8 ? ra : makeId();
}

const getInitialStudents = () => {
  const lsStudents = localStorage.getItem('students');
  console.log(lsStudents);
  return lsStudents ? JSON.parse(lsStudents) : [];
}

const students = (state = getInitialStudents(), action) => {
  let newState = state.slice();
  switch (action.type) {
    case ADD_STUDENT :
      newState.push({studentId:makeId()})
      break;
    case UPDATE_STUDENT :
      const i = newState.findIndex(s=>s.studentId === action.student.studentId);
      if (i !== -1) {newState[i] = action.student;}
      break;
  }
  localStorage.setItem('students', JSON.stringify(newState))
  return newState;
}

const gradingApp = (state= {}, action) => {
  return {
    students:students(state.students, action)
  }
}

export default gradingApp
