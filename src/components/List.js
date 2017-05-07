import React from 'react'
import TableMain from './TableMain'
import FlatButton from 'material-ui/FlatButton'

const List = (props) => {
  return (
    <div>
      <TableMain {...props}/>
      <FlatButton label="Add Student" onClick={props.addStudent} primary={true} fullWidth={true} />
    </div>
  )

}

export default List
