import { Grid } from "@mui/material";
const GridItem =(props)=>(
    <Grid
    item
    {...props}>
        {props.children}
    </Grid>
);
const MiddlePageGrid=(props)=>(
    <Grid
    container
    direction="column"
    {...props}
    >
        {props.children}
    </Grid>
)
const CenterRowGrid = (props)=>(
    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    style ={{minWidth:"100%"}}
    >
    {props.children}
    </Grid>
);
const CenterColGrid=(props) =>(
       <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        >
           {props.children}
       </Grid>
    )

export {GridItem,CenterColGrid as CenterGrid,CenterRowGrid,MiddlePageGrid}
