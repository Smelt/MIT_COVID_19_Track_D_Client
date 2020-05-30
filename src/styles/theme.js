import { createMuiTheme } from '@material-ui/core'
import { blue, indigo } from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    }
})
