import { Paper, Typography ,Card,CardContent,CardActions,Button} from "@mui/material";
import { GridItem ,CenterGrid} from "./GridItem";


const BasicCard =(props)=>  (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sender
          </Typography>
          <Typography variant="h5" component="div">
            {props.sender}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Reciever
          </Typography>
          <Typography variant="h5" component="div">
            {props.receiver}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);
export const DataContainer = (props)=>(
    <CenterGrid>
    <GridItem>
        <Typography variant="h6">
             Sender {props.sender}
        </Typography>
    </GridItem>
    <GridItem>
        <Typography variant="h6">
             Reciever {props.receiver}
        </Typography>
    </GridItem>
</CenterGrid>
);

export const DataItem = (props)=>(
    <Paper>
        <DataContainer {...props}/>
    </Paper>
);

export default BasicCard;
