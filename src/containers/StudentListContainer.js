import { connect } from 'react-redux'
import StudentList from '../components/StudentList'
import { addStudent, removeStudent, tryUpdateStudent } from '../actions/student.js'


const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: () => {
      dispatch(addStudent())
    },
    removeStudent: (studentId) => {
      dispatch(removeStudent(studentId))
    },
    updateStudent: (student) => {
      dispatch(tryUpdateStudent(student))
    }
  }
}

const StudentListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList)

export default StudentListContainer
