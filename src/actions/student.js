
export const ADD_STUDENT = 'ADD_STUDENT';
export const addStudent = () => {
  return {
    type: ADD_STUDENT
  }
}

export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const removeStudent = (studentId) => {
  return {
    type: REMOVE_STUDENT,
    studentId
  }
}

export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  }
}
