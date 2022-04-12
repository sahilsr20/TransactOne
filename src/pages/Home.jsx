import { Typography } from "@mui/material";
import { useState ,useLayoutEffect} from "react";
import NavBar from "../components/Navbar";
import Transactions from "../data/Transactions";
import SubmitComponent from "../components/SubmitComponent";
import { CenterGrid, GridItem } from "../components/GridItem";

export default function Home(props){
  const [currentTransactions,transactionsState] = useState([]);

  useLayoutEffect(() => {
    let transactions = new Transactions();
    const observable = transactions.Observable;
    observable.subscribe(transactionsState);
    console.log(currentTransactions);
    return () => {
     
    }
  }, [])
  
  return(
  <>
    <NavBar value={0}/>
    <CenterGrid>
      <GridItem>
        <Typography variant="h2">
          Home
       </Typography>
      </GridItem>
      <GridItem>
      <SubmitComponent/>
      </GridItem>
    </CenterGrid>
      
    </>
  );
};