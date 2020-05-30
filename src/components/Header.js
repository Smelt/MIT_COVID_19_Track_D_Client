import React, {Component} from 'react';
import { mdiLungs } from '@mdi/js';
import Icon from '@mdi/react';

class Header extends Component {
    render() {

        return(
            <h2 className="header"> 
            <Icon path={mdiLungs}
                    title="Header"
                    size={2}
    
                className="header__lung-icon"
                /> | Respire</h2>
        )
    }
}

export default Header;