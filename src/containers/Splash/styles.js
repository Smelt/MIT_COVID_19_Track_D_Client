import { rgbToHex } from "@material-ui/core";

export const styles = theme => ({
    form: {
        width: '90vw'
    },
    forgotPassword: {
        alignItems: 'flex-start',
        color: 'rgb(65, 150, 181)',
        textDecoration: 'none',
        fontFamily: "TT Norms",
        transition: 'color 0.25s ease'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    input: {
        boxSizing: 'border-box',
        padding: '0 10px',
        height: '54px',
        width: '100%',
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '22px',
        backgroundColor: 'rgb(234, 238, 238)',
        border: '2px solid transparent',
        borderRadius: '7px',
        marginBottom: '15px',
        transition: 'border 0.25s ease',
        fontFamily: "TT Norms",
        color: '#777777'
    },
    loginBtn: {
        display: 'inline-block',
        border: 'none',
      height: '54px',
      width: '100%',
      margin: '20px 0',
      borderRadius: '7px',
      backgroundColor: 'rgb(65, 150, 181)',
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: "TT Norms",
      transition: 'background-color 0.25s ease'
    },
    modalContent: {
        height: '30vh',
        width: '80vw',
        padding: '2vh 5vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.5s ease',
        backgroundColor: 'rgb(250,250,250)'
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '20px 0',
        boxSizing: 'border-box'
    },
    signupBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '48px',
        width: '100%',
        backgroundColor: 'rgb(234, 238, 238)',
        border: '2px solid rgb(234, 238, 238)',
        borderRadius: '7px',
        padding: '0 15px',
        marginBottom: '125px',
        color: '#777777',
        cursor: 'pointer',
        fontFamily: "TT Norms",
        transition: 'border 0.25s ease'
    }
})