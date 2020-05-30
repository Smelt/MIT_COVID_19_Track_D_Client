import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Button, Card, Modal, Typography } from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    state = {
        loginDisabled: true,
        loginModalOpen: false,
        password: '',
        username: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setCredentials()
        }, 1000)
    }

    setCredentials() {
        const username = 'Test User';
        let sumRandom = 0;
        for (let i = 0; i <= username.length; i++) {
            sumRandom += Math.floor(Math.random() * 50) + 50;
            setTimeout(() => {
                this.setState({
                    username: username.substring(0, i)
                })
            }, sumRandom)
        }
        sumRandom += 400;
        const password = 'VeryLongPassWord'
        for (let i = 0; i <= password.length; i++) {
            sumRandom += Math.floor(Math.random() * 50) + 50;
            setTimeout(() => {
                this.setState({
                    password: password.substring(0, i)
                })
            }, sumRandom)
        }
        sumRandom += 200;
        setTimeout(() => {
            this.setState({

            })
        })
    }

    onLoginClick = (e) => {
        e.preventDefault()
        console.log('on login click')
        this.setState({
            loginModalOpen: true
        });
    }

    handleModalClose = () => {
        console.log('handlemodeal close')
        this.setState({
            loginModalOpen: false
        })
    }


    render() {


        const { classes, theme } = this.props;
        const { loginDisabled, loginModalOpen, password, username } = this.state;
        return (
            <div className={classes.root}>
                <Modal
                    open={loginModalOpen}
                    onClose={this.handleModalClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.modalContent}>
                        <Typography variant="h4">Modal Content</Typography>
                        <Typography>This web app is intended for informational and demonstration purposes only.</Typography>
                        <div className={classes.modalButtons}>
                            <Link to="/Dashboard"><Button color="primary" variant="contained">I agree</Button></Link><Button variant="contained">Close </Button>
                        </div>
                    </div>
                    
                </Modal>
                <header className={classes.header}>
                    <Typography variant="h1"> Respire</Typography>
           
                </header>
                <form className={classes.form}>
                    <input className={classes.input} type='text' placeholder='Name' value={username}
                    />
                    <input className={classes.input} type='password' placeholder='Password' value={password} />
                    <button
                        disabled={this.loginDisabled}
                        onClick={this.onLoginClick}
                        className={classes.loginBtn}>
                        Login
                    </button>
                    <button disabled={true} className={classes.signupBtn}>
                        <h4>Sign Up</h4>
                        <i className='material-icons'>keyboard_arrow_right</i>
                    </button>
                </form>
            </div>

        )
    }
}


export default withTheme(withStyles(styles)(Splash))