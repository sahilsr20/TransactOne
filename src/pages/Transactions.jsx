import { Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import { useState,useLayoutEffect } from "react";
import { observable,getAllTransactions} from "../data/Transactions";
import { DataContainer } from "../components/DataComponent";
function Transactions() {

    const [currentTransactions,transactionsState] = useState([]);
    useLayoutEffect(() => {
      getAllTransactions();
      let sub = observable.subscribe(transactionsState);
      return () => {
       sub.unsubscribe();
      }
    }, [])

    console.log(currentTransactions);
    return(
    <>
        <NavBar value={1}/>
          <Typography variant="h2">
            Transactions
          </Typography>
          {
            currentTransactions.map((val,index)=>(
              <DataContainer key={index} sender={val.sender} receiver={val.receiver}/>
            ))
          }
    </>
 );
}
 export default Transactions