import React, { Component } from 'react'
import { TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';

export default class EditableCell extends Component {
  state = {
    value:this.props.value,
    editing:false
  };
  handleMouseEnter() {
    this.setState({hover:true})
  }
  handleMouseLeave() {
    this.setState({hover:false})
  }
  editStart() {
    this.setState({editing:true})
  }
  editEnd() {
    this.setState({editing:false})
    this.props.onEdit(this.props.field, this.state.value)
  }
  handleChange(evt) {
    const val = evt.target.value;
    this.setState({value:val});
  }
  getCell() {
    if (this.state.editing) {
      return <TextField hintText={'First Name'} value={this.state.value} onChange={this.handleChange.bind(this)} />
    } else if (this.state.hover){
      return <span>{this.state.value}<i className="material-icons" style={{fontSize:'1em'}}>edit</i></span>
    } else {
      return this.state.value;
    }
  }


  render() {
    let cell = this.getCell();

    return (
      <TableRowColumn
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onBlur={this.editEnd.bind(this)}
        onDoubleClick={this.editStart.bind(this)}
      >
        {cell}
      </TableRowColumn>
    )
  }
}
