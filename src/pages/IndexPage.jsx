import { Button, Typography } from "@mui/material"
import {  CenterRowGrid, GridItem} from "../components/GridItem"
import { Link as RouterLink } from "react-router-dom";
const NavButtons = (props)=>(
    <>
        <GridItem xs={6}>
            <Button LinkComponent={RouterLink} to="/home" variant="outlined" size="large"> 
                Home
            </Button>
        </GridItem>
        <GridItem  xs={6}>
            <Button LinkComponent={RouterLink} to="/transactions" variant="contained" size="large">
                Transactions
            </Button>
        </GridItem>
    </>
);

const IndexPage = ()=>(
    <>
        <GridItem xs={12}>
            <Typography variant="h1">
                TransactOne
            </Typography>
        </GridItem>
        <GridItem xs={12}>
            <CenterRowGrid>
                <NavButtons/>
            </CenterRowGrid> 
        </GridItem>
    </>         
)

export default IndexPage
