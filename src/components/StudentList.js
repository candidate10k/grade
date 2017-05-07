import React from 'react'
import AppBar from 'material-ui/AppBar'
import List from './List'

const StudentList = (props) => {
  return (
    <div>
      <AppBar title="My AppBar" />
      <List {...props} />
    </div>
  )

}

export default StudentList
