import { Paper, Typography } from "@mui/material";
import { GridItem ,CenterGrid} from "./GridItem";

const DataContainer = (props)=>(
    <CenterGrid>
    <GridItem>
        <Typography variant="h6">
             Sender {props.sender}
        </Typography>
    </GridItem>
    <GridItem>
        <Typography variant="h6">
             Reciever {props.reciever}
        </Typography>
    </GridItem>
</CenterGrid>
);

const DataItem = (props)=>(
    <Paper>
        <DataContainer {...props}/>
    </Paper>
);

export default DataItem;
