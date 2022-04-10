import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  useNavigate,
  Link as RouterLink
} from "react-router-dom";
function LinkTab(props) {
  let navigate = useNavigate();

  return (
    <Tab
      component={RouterLink}
      onClick={(event) => {
        navigate(`${props.to}`)
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar(props) {
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Home" href="/drafts"  to="/home"/>
        <LinkTab label="Transactions" href="/trash" to="/transactions"/>
      </Tabs>
    </Box>
  );
}