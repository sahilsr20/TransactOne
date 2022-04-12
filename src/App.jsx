import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom'

const AppGrid = (props)=>(
  <Grid
  container
  direction="column"
  justifyContent="space-around"
  alignItems="center">
    {props.children}
  </Grid>
);
function App() {
  return (
    <AppGrid>
		  <Outlet/>
    </AppGrid>
  )
}

export default App
