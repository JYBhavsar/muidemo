import React,{useState} from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function FlashMessage (props){
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{vertical: 'top',horizontal: 'right'}} >
            <Alert onClose={handleClose} severity={props.alert.type} >
            {props.alert.msg}
            </Alert>
        </Snackbar>
    );
}

export default FlashMessage;