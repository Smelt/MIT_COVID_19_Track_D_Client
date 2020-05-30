import React from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.sleepMonitor = this.sleepMonitor.bind(this)
        this.dailyReport = this.dailyReport.bind(this)
        this.emergencyContact = this.emergencyContact.bind(this)
        this.state = {
            pulse: 0
        }
    }

    componentDidMount() {
        this.setState({pulse: 127.3})
    }

    sleepMonitor() {
        console.log("Sleep")
        // this.props.history.push('/Monitor')
    }

    dailyReport() {
        console.log("Report")
        // this.props.history.push('/Report')
    }

    emergencyContact() {
        console.log("Contact")
        // this.props.history.push('/Report')
    }
    
    render() {
        const { classes, theme } = this.props;
        const {pulse} = this.state;

        return (
            <div className={classes.dash}>
                <Grid className={classes.dashboardContainer} container spacing={3}>
                    <Grid onClick={this.sleepMonitor} className={classes.monitorSleep} item xs={12}>
                        <h2>Sleep Monitor</h2>
                        <h2 className={classes.pulseNumber}>{pulse}</h2>
                    </Grid>
                    <Grid onClick={this.dailyReport} className={classes.dailyReport} item xs={12}>
                        <h2>Daily Report</h2>
                    </Grid>
                    <Grid onClick={this.emergencyContact} className={classes.contact} item xs={12}>
                        <h2>Emergecy Contact</h2>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withTheme(withStyles(styles)(Dashboard))