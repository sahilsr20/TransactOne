import { Typography } from "@mui/material";
import { useState ,useLayoutEffect} from "react";
import DataItem from "../components/DataComponent";
import NavBar from "../components/Navbar";
import Transactions from "../data/Transactions";


export default function Home(props){


  const [currentTransactions,transactionsState] = useState([]);

  useLayoutEffect(() => {
    let transactions = new Transactions();
    const observable = transactions.Observable;
    observable.subscribe(transactionsState);
    return () => {
     
    }
  }, [])
  
  return(
  <>
    <NavBar value={0}/>
      <Typography variant="h2">
        Home
      </Typography>
      {currentTransactions.map((val)=>{
        <DataItem reciever="Me" sender ="Him"/>
      })}
    </>
  );
};