import { Grid, Box } from "@mui/material";
import xmlogo from "../assert/xmlogo.png";

import useMediaQuery from '@mui/material/useMediaQuery';
const Header = () => {


const matches = useMediaQuery('(min-width:300px)');
return (
<span>{`(min-width:300px) matches: ${matches}`}
  <Box style={{backgroundColor:'black'}}>
<img src={xmlogo} style={ {width: '139.21px',
height: '48.25px',
top: '23px',
left: '90px', }}>
</img>
</Box>
 </span>
)
}
export default Header;