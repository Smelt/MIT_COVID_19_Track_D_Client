import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, Typography } from '@material-ui/core'
import Splash from '../containers/Splash';
import Dashboard from '../containers/Dashboard';
import Monitor from '../containers/Monitor';
import theme from '../styles/theme';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';


class AppRouter extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <Header/>
    
          <ThemeProvider theme={theme}>
              <Switch>
                <Route exact={true} path="/Monitor" component={Monitor}/>
                <Route exact={true} path="/Dashboard" component={Dashboard}/>
                <Route exact={true} path="/" component={Splash} />
              </Switch>
          </ThemeProvider>
        </React.Fragment>
       </BrowserRouter>
    );
  }
}
export default AppRouter;

