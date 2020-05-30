import React, {Component} from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';

class Header extends Component {
    render() {

        return(
            <h2>Hello User</h2>
        )
    }
}

export default withTheme(withStyles(styles)(Header))