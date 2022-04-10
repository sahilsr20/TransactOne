import { Button, Typography } from "@mui/material"
import { CenterGrid, CenterRowGrid, GridItem, MiddlePageGrid } from "../components/GridItem"
import { Link as RouterLink } from "react-router-dom";
const NavButtons = (props)=>(
    <>
        <GridItem>
            <Button LinkComponent={RouterLink} to="/home" variant="outlined" size="large"> 
            Home
            </Button>
        </GridItem>
        <GridItem>
            <Button LinkComponent={RouterLink} to="/transactions" variant="contained" size="large">
                Transactions
            </Button>
        </GridItem>
    </>
);

const IndexPage = ()=>(
    <MiddlePageGrid>
        <Typography variant="h1">
            Welcome to Transact One
        </Typography>
        <CenterRowGrid>
            <NavButtons/>
        </CenterRowGrid> 
    </MiddlePageGrid>
           
)

export default IndexPage
