import Box from "@mui/material/Box";
import {FormGroup, Grid} from "@mui/material";
import {useState} from "react";
import EquipmentStatus from "./EquipmentStatus";

const style = {
    carte: {
        width: "300px",
        height: "auto",
    }
}

function HomePage() {
    const [equipment, setEquipment] = useState([
        {name: "Kit oreillette", acquired:false},
        {name: "Lampe Torche", acquired: false},
        {name:"Bombes lacrymogènes", acquired: false}
    ])

    const handleEquipmentAcquiredChange = (name, acquired) => {
        let temp = equipment.map(
            (item) =>
                !(item.name === name)? item : {name: name, acquired: acquired}
        )
        setEquipment(temp)
    }

    return (
        <div id="infoAgent">
            <Grid
                container
                direction={"row"}
                spacing={5}
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid item>
                    <p>Berthier Corinne</p>
                    <p>Status : Surveillance entrepôt</p>
                </Grid>
                <Grid item>
                    <Box
                        component="img"
                        sx={style.carte}
                        src={require("../../image/csm_Carte_d_identite_cb2cac088c.jpg")}
                        alt={"mama"}
                    />
                </Grid>
            </Grid>
            <p>Equipment :</p>
            <FormGroup>
                {equipment && equipment.map(
                    (item) =>
                        EquipmentStatus(item.name, item.acquired, handleEquipmentAcquiredChange)
                )}
            </FormGroup>
        </div>
    )
}

export default HomePage