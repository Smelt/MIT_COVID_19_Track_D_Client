import React, {Component} from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';

class Footer extends Component {
    render() {

        return(
            <p>This is a Footer</p>
        )
    }
}

export default withTheme(withStyles(styles)(Footer))