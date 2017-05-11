import React, { Component } from 'react'
import { TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';

export default class EditableCell extends Component {
  state = {
    value:this.props.value,
    editing:false
  }
  handleMouseEnter() {
    this.setState({hover:true})
  }
  handleMouseLeave() {
    this.setState({hover:false})
  }
  editStart() {
    this.setState({editing:true}, ()=>{this.refs[this.props.inputRef].focus()});
  }
  editEnd() {
    this.setState({editing:false})
    this.props.onEdit(this.props.field, this.state.value)
  }
  //Sanitize chars not suited for input type
  isAcceptableInput(value) {
    if (!this.props.numericOnly) {return true;}

  }
  handleChange(evt) {
    const value = evt.target.value;
    if (isAcceptableInput(value)) {
      this.setState({value});
    }
  }
  //Blur on enter
  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.editEnd()
    }
  }
  //Prevent any characters that don't match the type from being entered
  handleKeyDown(evt) {
    if (!this.props.numericOnly) {return;}


    const isInt = !isNaN(parseInt(evt.key));
    if (isInt) {return;}

    //Don't let it enter
    evt.preventDefault();
    return false;
  }


  render() {
    const hoverIcon = this.state.hover ? <i className="material-icons" style={{fontSize:'1em'}}>edit</i> : null;
    const viewCell = !this.state.editing ? <span>{this.state.value}{hoverIcon}</span> : null;
    const editCell = this.state.editing ? <TextField ref={this.props.inputRef} onBlur={this.editEnd.bind(this)} hintText={this.props.hintText} value={this.state.value} onChange={this.handleChange.bind(this)}/> : null;

    return (
      <TableRowColumn
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onDoubleClick={this.editStart.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      >
        {editCell}
        {viewCell}
      </TableRowColumn>
    )
  }
}
