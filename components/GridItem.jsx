import { Grid } from "@mui/material";
export const GridItem =(props)=>(
    <Grid
    item>
        {props.children}
    </Grid>
);
export function CenterGrid(props) {
    return(
       <Grid
       container
       direction="column"
       justifyContent="space-evenly"
       alignItems="center"
       style={{minHeight:"100%"}}>
           {props.children}
       </Grid>
    )
}
