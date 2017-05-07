import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import StudentListContainer from '../containers/StudentListContainer'

const GradingApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <StudentListContainer />
  </MuiThemeProvider>
);


export default GradingApp;
