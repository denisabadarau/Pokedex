import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Select({ label, options, handleChange }) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={label}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        options.map((option) => {
                            <MenuItem value={option}>{option}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    );
}