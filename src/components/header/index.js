import {Button, Grid, Paper} from "@mui/material";
import Box from "@mui/material/Box";

function Header() {
    const style = {
        header: {
            display:"flex",
            alignItems:"center",
            justifyContent:"left",
            backgroundColor:"#379EC1"
        },
        logo: {
            height: "4vw",
            width: "auto",
        },
        button: {
            backgroundColor: "#659224",
            textDecoration: null,
            outline: null,
            color: "black",
            fontsize: "2vw",
            padding: "5px",
            '&:hover': {
                backgroundColor: "#53791e",
            },
        }
    }

    return (
        <Grid container sx={style.header}>
            <Box
                component="img"
                sx={style.logo}
                src={require("../../image/GoSecuri.png")}
            />
            <Button sx={style.button}>nav item 1</Button>
            <Button sx={style.button}>nav item 2</Button>
        </Grid>
    )
}

export default Header