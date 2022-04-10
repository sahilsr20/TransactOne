import { Typography } from "@mui/material";
import NavBar from "../components/Navbar";
export default function Home(props){
    return(
    <>
      <NavBar value={0}/>
      <Typography variant="h2">
        Home
      </Typography>
    </>
    );
};