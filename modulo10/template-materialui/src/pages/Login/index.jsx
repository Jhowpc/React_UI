import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Checkbox, FormGroup, FormControlLabel, Grid, Typography, Link, Avatar } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import {MoveToInbox, Mail, Padding} from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';



const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const btnStyle={margin: '8px 0'}
  return (
    <Grid align= 'center'>
      <Paper elevation={3} style={paperStyle}>
        <Grid align='center'>
          <Avatar><LockOpenIcon/></Avatar>
          <h2>Login</h2>
        </Grid>
        <FormControl>
            <TextField id="login_e-mail" aria-describedby="login_email_helper_text" label="E-mail" value={login} onChange={e => { setLogin(e.target.value) }} fullWidth required/>
            <TextField  id="outlined-password-input" aria-describedby="senha_helper_text" label="Senha" type="password" value={password} onChange={e => { setPassword(e.target.value) }} fullWidth required/>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar-me" />
              <Button variant="contained" style={btnStyle} fullWidth><LoginIcon/></Button>
            </FormGroup>
            <Typography>
            <Link href="https://www.youtube.com/watch?v=AUub_yVjjac">Esqueceu a senha?</Link>
            </Typography>
            <Typography> Não possui conta?
            <Link href="#"> Registre-se</Link>
            </Typography>
        </FormControl>
      </Paper>
    </Grid>
  );
}
export default Login