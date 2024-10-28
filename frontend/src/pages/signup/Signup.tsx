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

const Signup = () => {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: '',
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

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
                                                error={Boolean(formik.touched.username && formik.errors.username)}
                                                helperText={formik.errors.username}
                                                placeholder="User Name"
                                                variant="outlined"
                                                fullWidth
                                                {...formik.getFieldProps('username')} />
                                        </Grid>
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
                                                    Sign in
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
                                                    Sing-in with Google
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
            </Grid >
        </>
    )
}

export default Signup