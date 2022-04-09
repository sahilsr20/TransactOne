import { Typography } from "@mui/material";
import { CenterGrid } from "../components/GridItem";
import NavBar from "../components/Navbar";

export default function Home(props){
    return(
      <CenterGrid>
          <NavBar>
              
          </NavBar>
          <Typography variant="h1">
            TransactOne
          </Typography>
      </CenterGrid>   
    );
};