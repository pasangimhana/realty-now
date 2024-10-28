import useStyles from './Signup.styles'
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, Card, CardContent, Stack, FormControlLabel, Checkbox } from '@mui/material'
import Grid from '@mui/material/Grid2'
import signUpCover from '../../assets/images/login_cover.png'
import GoogleIcon from '@mui/icons-material/Google'
import logoImage from '../../assets/images/logo.png'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice' // Adjust the import path as needed
const Signup = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Required'),
      }),
      onSubmit: async (values, { setSubmitting, setFieldError }) => {
        dispatch(loginStart()); // Dispatch the loginStart action
        try {
          console.log('Attempting registration...');
          await axios.post('http://localhost:8000/register', {
            email: values.email,
            password: values.password,
          });
  
          console.log('Registration successful, attempting login...');
          const response = await axios.post(
            'http://localhost:8000/token',
            new URLSearchParams({
              username: values.email,
              password: values.password,
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
  
          const token = response.data.access_token;
          console.log('Login successful, token received');
  
          // Update both localStorage and Redux state
          localStorage.setItem('token', token);
          dispatch(loginSuccess(token)); // Dispatch the loginSuccess action
  
          console.log('Redirecting to home page...');
          navigate('/');
        } catch (error: any) {
          console.error('Registration/Login error:', error);
          dispatch(loginFailure(error.response?.data?.detail || 'Registration failed. Please try again.')); // Dispatch the loginFailure action
          setFieldError('email', error.response?.data?.detail || 'Registration failed. Please try again.');
        } finally {
          setSubmitting(false);
        }
      },
    });

    return (
        <>
            <Grid container className={classes.container}>
                {!isMobile && (
                    <Grid size={{ md: 6 }} className={classes.leftSide}>
                        <Box className={classes.imageBox}>
                            <img src={signUpCover} alt="Not found" className={classes.image} />
                        </Box>
                    </Grid>
                )}
                <Grid size={{ xs: 12, md: 6 }} className={classes.rightSide}>
                    <Grid>
                        <img src={logoImage} style={{ maxWidth: '300px', marginBottom: '2rem' }} alt="Not found" className={classes.image} />
                        <Card style={{ maxWidth: 450, padding: "10px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" mb={4}>
                                    Sign up
                                </Typography>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, md: 12 }} >
                                            <TextField
                                                error={Boolean(formik.touched.email && formik.errors.email)}
                                                helperText={formik.errors.email}
                                                placeholder="Email"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('email')} />
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
                                        <Grid size={{ xs: 12, md: 12 }}>
                                            <TextField
                                                error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                                                helperText={formik.errors.confirmPassword}
                                                placeholder="Confirm Password"
                                                variant="outlined"
                                                type='password'
                                                fullWidth
                                                {...formik.getFieldProps('confirmPassword')}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 12 }} >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        color="primary"
                                                    />
                                                }
                                                label={
                                                    <Typography variant="body2">
                                                        I agree to all the
                                                        <Button variant="text" sx={{ minWidth: "auto", paddingLeft: 0, paddingRight: 0, marginLeft: 0.5, marginRight: 0.5 }}>
                                                            Terms
                                                        </Button>
                                                        and
                                                        <Button variant="text" sx={{ minWidth: "auto", paddingLeft: 0, paddingRight: 0, marginLeft: 0.5, marginRight: 0.5 }}>
                                                            Privacy policy
                                                        </Button>
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <Stack direction="row" spacing={1}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={!isChecked}
                                                    fullWidth
                                                >
                                                    Sign up
                                                </Button>
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
                                                    Sign up with Google
                                                </Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </form>
                                <Typography gutterBottom variant="body2" mt={1} align="center">
                                    Have an account? <Button variant='text' component={Link} to={'/login'} sx={{ minWidth: "auto", paddingLeft: 0, marginLeft: 0.5 }}>Log In</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Signup
