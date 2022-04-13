import { Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import { useState,useLayoutEffect } from "react";
import { observable,transactionsStore } from "../data/Transactions";
function Transactions() {
    const [currentTransactions,transactionsState] = useState([]);

    useLayoutEffect(() => {
      let sub = observable.subscribe(val=>{
        console.log(currentTransactions);
        transactionsState(val);
      })
      return () => {
       sub.unsubscribe();
      }
    }, [currentTransactions])
    
    return(
    <>
        <NavBar value={1}/>
            <Typography variant="h2">
            Transactions
            </Typography>
    </>
 );
}
 export default Transactions