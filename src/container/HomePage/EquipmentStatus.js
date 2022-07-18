import {Checkbox, FormControlLabel} from "@mui/material";

function EquipmentStatus(name, HisAcquired=false, onChange) {

    return (
        <FormControlLabel
            sx={{justifyContent:"center"}}
            labelPlacement="start"
            control={
                <Checkbox
                    checked={HisAcquired}
                    name={name}
                    onClick={() => onChange(name, !HisAcquired)}
                    sx={{
                        marginTop: -1,
                    }}/>
            }
            label={name}
        />
    )
}

export default EquipmentStatus