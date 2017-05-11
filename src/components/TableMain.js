import React from 'react'
import EditableCell from './EditableCell'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const EmptySet = () => (
  <TableRow><TableRowColumn colSpan="4">No students, click the button below to add one</TableRowColumn></TableRow>
)


const Row = ({student, updateStudent}) => {
  const onEdit = (field, value) => {
    const edited = Object.assign({}, student);
    edited[field] = value;
    updateStudent(edited);
  }
  return (
    <TableRow >
      <TableRowColumn>{student.studentId}</TableRowColumn>
      <EditableCell onEdit={onEdit} value={student.firstName} field={'firstName'} hintText={'First Name'} inputRef={'first' + student.studentId} />
      <EditableCell onEdit={onEdit} value={student.lastName} field={'lastName'} hintText={'Last Name'} inputRef={'last' + student.studentId}/>
      <EditableCell onEdit={onEdit} value={student.grade} field={'grade'} hintText={'Grade'} inputRef={'grade' + student.studentId} numericOnly={true} />
    </TableRow>
  )
}

const TableMain = ({students, removeStudent, updateStudent}) => {
  const rows = students.length
    ? students.map(s=><Row student={s} key={s.studentId} updateStudent={updateStudent} />)
    : <EmptySet />
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Grade</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  )
}

export default TableMain
