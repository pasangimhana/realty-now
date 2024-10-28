import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  formBox: {
    width: '100%',
    maxWidth: '400px',
  },
}))

export default useStyles
