/*
  Just a placeholder for a real persistent store. Uses local storage.
  I realize it would be simpler in this case to forget about handling async
  actions, but I wanted to make something a little more flexible.
*/


const dataStore = () => {
  const lsStudents = localStorage.getItem('students');
  const students = lsStudents ? JSON.parse(lsStudents) : [];

  return {
    update:(student) => {
      return new Promise((resolve, reject) => {
        const i = students.findIndex(s=>s.studentId === student.studentId);
        if (i !== -1) {
          students[i] = student;
        } else {
          students.push(student);
        }
        resolve(student);
      });
    },
    remove:(studentId) => {
      return new Promise((resolve, reject) => {
        const i = students.findIndex(s=>s.studentId === studentId);
        if (i !== -1) {students.splice(i, 1);}
        resolve(studentId);
      })
    },
    getAll:() => {
      return students;
    }
  }
}


export default dataStore
