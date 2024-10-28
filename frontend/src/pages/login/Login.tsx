import useStyles from './Login.styles'
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Card, CardContent, Stack } from '@mui/material'
import Grid from '@mui/material/Grid2'
import loginCover from '../../assets/images/login_cover.png'
import logoImage from '../../assets/images/logo.png'
import GoogleIcon from '@mui/icons-material/Google'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store/store'


const Login = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state: RootState) => state.auth);
  
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: Yup.object({
        username: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      }),
      onSubmit: async (values) => {
        try {
          dispatch(loginStart());
          
          const formData = new URLSearchParams();
          formData.append('username', values.username);
          formData.append('password', values.password);
  
          const response = await fetch('http://localhost:8000/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
          });
  
          if (!response.ok) {
            throw new Error('Invalid credentials');
          }
  
          const data = await response.json();
          localStorage.setItem('token', data.access_token); // Store token in local storage
          dispatch(loginSuccess(data.access_token)); // Dispatch success action
          navigate('/'); // Redirect to dashboard after successful login
        } catch (error) {
          dispatch(loginFailure(error instanceof Error ? error.message : 'Login failed')); // Dispatch failure action
        }
      },
    });

    return (
        <>
            <Grid container className={classes.container}>
                {!isMobile && (
                    <Grid size={{ md: 6 }} className={classes.leftSide}>
                        <Box className={classes.imageBox}>
                            <img src={loginCover} alt="Not found" className={classes.image} />
                        </Box>
                    </Grid>
                )}
                <Grid size={{ xs: 12, md: 6 }} className={classes.rightSide}>
                    <Grid>
                        <img src={logoImage} style={{ maxWidth: '300px', marginBottom: '2rem' }} alt="Not found" className={classes.image} />
                        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" mb={4}>
                                    Login
                                </Typography>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, md: 12 }} >
                                            <TextField
                                                error={Boolean(formik.touched.username && formik.errors.username)}
                                                helperText={formik.errors.username}
                                                placeholder="User Name"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('username')} />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 12 }} >
                                            <TextField
                                                error={Boolean(formik.touched.password && formik.errors.password)}
                                                helperText={formik.errors.password}
                                                placeholder="Password"
                                                variant="outlined"
                                                type='password'
                                                fullWidth
                                                {...formik.getFieldProps('password')} />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <Stack direction="row" spacing={1}>
                                                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    startIcon={<GoogleIcon />}
                                                    sx={{
                                                        backgroundColor: "#333333",
                                                        color: "#FFFFFF",
                                                        '&:hover': {
                                                            backgroundColor: "#444444",
                                                        },
                                                        textTransform: "none"
                                                    }}
                                                >
                                                    Sign in with Google
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </form>
                                {error && (
                                    <Typography color="error" align="center" mt={2}>
                                        {error}
                                    </Typography>
                                )}
                                <Typography gutterBottom variant="body2" mt={1} align="center">
                                    Don't have an account? <Button variant='text' component={Link} to={'/signup'} sx={{ minWidth: "auto", paddingLeft: 0, marginLeft: 0.5 }}>Sign up</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid >
        </>
    )
}

export default Login
