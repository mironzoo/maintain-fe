import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    loginUser = () => {

    }
    render() {
        
        const theme = createMuiTheme({
            root: {
                '& .MuiTextField-root': {
                    color: 'lavender'
                },
            },
            typography: {
                fontSize: 14,
                allVariants: {
                    color: 'lavender'
                },
            },
            overrides: {
                MuiInputLabel: {
                    text: {
                        color: 'white'
                    }
                },
                MuiButton: {
                    text: {
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        height: 50,
                        color: 'white',
                        padding: '15px',
                        marginLeft: '30px'
                    }
                }
            }
        });

        return(
            <div>
                <ThemeProvider theme={theme}>
                    <Typography variant="h2">Maintain</Typography>
                </ThemeProvider>
                <ThemeProvider theme={theme} >
                    <div style={{marginTop: '22px'}}>
                        <TextField color='secondary' InputProps={{style: {color: 'white'}}} label="PID"/>
                        <Button onClick={() => {window.location.href='/home'}}>View PID</Button>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default LoginForm;