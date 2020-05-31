import React, {Component} from 'react';
import { styles } from './styles';
import { withRouter } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import { withStyles, withTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HearingIcon from '@material-ui/icons/Hearing';
import HomeIcon from '@material-ui/icons/Home';



class Footer extends Component {
    
    state = {
        value: 0
    }



    componentDidMount(props){
        console.log(props);
    }

    onChange = (e, newValue) => {
        this.setState({
            value: newValue
        })
        let route = '';
        switch(newValue) {
            case 0:
                route = "/";
                break;
            case 1: 
                route="/Reports";
                break;
            case 2: 
                route="/Monitor";
                break;
            case 3:
                route="/Metrics";
                break;
            default: 
                route="/";
                break;
            
        }
        this.props.history.push(route);
    }

    render(props) {
        const { value } = this.state;
        console.log('footer props', props);
        return(
            <BottomNavigation
      value={value}
      onChange={this.onChange}
      showLabels
      className="footer"
    >
         <BottomNavigationAction to="/" label="Home" icon={<HomeIcon />} />
     
      <BottomNavigationAction label="Reports" icon={<AssessmentIcon />} />
      <BottomNavigationAction to="/Monitor" label="Monitor" icon={<HearingIcon />} />
      <BottomNavigationAction to="/Metrics" icon={<SettingsIcon />} />
    </BottomNavigation>
        )
    }
}

export default withRouter(withTheme(withStyles(styles)(Footer)))