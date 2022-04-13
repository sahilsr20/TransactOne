import { Typography } from "@mui/material";
import { useState ,useLayoutEffect} from "react";
import NavBar from "../components/Navbar";
import SubmitComponent from "../components/SubmitComponent";
import { CenterGrid, GridItem } from "../components/GridItem";

export default function Home(props){
 
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