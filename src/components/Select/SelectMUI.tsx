import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function SelectMUI() {
    const [city, setCity] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select
                    value={city}
                    label="City"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Moskow</MenuItem>
                    <MenuItem value={20}>Kursk</MenuItem>
                    <MenuItem value={30}>Astana</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}