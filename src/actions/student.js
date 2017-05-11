import dataStore from '../models/dataStore'
const ds = dataStore();

/*
  Just adds a non persisted empty row (with an id).
  It is only saved when some more data is added via the update function
*/
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

export const TRY_UPDATE_STUDENT = 'TRY_UPDATE_STUDENT';
export const tryUpdateStudent = (student) => {
  return (dispatch) => {
    ds.update(student)
      .then(student=>dispatch(updateStudent(student)))
  }
}

export const TRY_REMOVE_STUDENT = 'TRY_REMOVE_STUDENT';
export const tryRemoveStudent = (studentId) => {
  return (dispatch) => {
    ds.remove(studentId)
      .then(student=>dispatch(removeStudent(studentId)))
  }
}
