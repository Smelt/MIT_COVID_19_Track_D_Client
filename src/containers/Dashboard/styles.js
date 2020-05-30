import { red } from "@material-ui/core/colors";
import { FormHelperText } from "@material-ui/core";

export const styles = theme => ({
    dash: {
        backgroundColor: 'rgb(234, 238, 238)',
    },

    monitorSleep: {
        display: 'flex',
        backgroundColor: 'orange',
        border: '2px solid transparent',
        borderRadius: '10px',
        margin: '30px auto',
    },
    pulseNumber: {
        alignItems: 'left',
    },
    dailyReport:{
        backgroundColor: 'yellow',
        borderRadius: '10px',
        margin: '30px auto',
    },
    contact: {
        backgroundColor: 'red',
        borderRadius: '10px',
        margin: '30px auto',
    },
    dashboardContainer: {
        width: '90vw',
        margin: '5%',
    }
})