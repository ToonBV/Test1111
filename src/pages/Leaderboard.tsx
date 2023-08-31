import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Fragment, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import rows from "./Leaderboard/Rows";
import Select, { SelectChangeEvent } from '@mui/material/Select';


  
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 85 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'campus', headerName: 'Campus', width: 150 },
    { field: 'count_walk', headerName: 'Count Walk', width: 150},
];

function Leaderboard() {

    const [filteredRows, setFilteredRows] = useState(rows);
    const [filterValue, setFilterValue] = useState('all'); 

    const handleChange = (event: SelectChangeEvent) => {
      const value = event.target.value;
    
        if (value === 'all') {
          setFilteredRows(rows);
        } else {
          const filtered = rows.filter((GridRowsProp) => GridRowsProp.campus === value);
          setFilteredRows(filtered);
        }
    
        setFilterValue(value);
        console.log();
    };
    return (<Fragment>
        <Box
        sx={{
            display: 'flex',
            backgroundColor: 'secondary.main',
            color: 'black',
            margin: '0 auto',
            borderRadius: 3,
            justifyContent: 'center', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวนอน
            alignItems: 'top', // จัดให้เกิดการค่อยตัวอักษรให้อยู่ตรงกลางแนวตั้ง
            marginTop: '100px',// กำหนดช่องว่างด้านบน
            marginLeft: '50px', // กำหนดช่องว่างด้านซ้าย
            marginRight: '50px', // กำหนดช่องว่างด้านขวา
            marginBottom: '20px', // กำหนดช่องว่างด้านล่าง
            }}
        >

            <div style={{ width: '500px' }}>
                <Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">วิทยาเขต</InputLabel>
                        <Select value={filterValue} onChange={handleChange} >
                        <MenuItem value="all">วิทยาเขตทั้งหมด</MenuItem>
                        <MenuItem value="วิทยาเขตปัตตานี">วิทยาเขตปัตตานี</MenuItem>
                        <MenuItem value="วิทยาเขตหาดใหญ่">วิทยาเขตหาดใหญ่</MenuItem>
                        <MenuItem value="วิทยาเขตภูเก็ต">วิทยาเขตภูเก็ต</MenuItem>
                        <MenuItem value="วิทยาเขตสุราษฎร์ธานี">วิทยาเขตสุราษฎร์ธานี</MenuItem>
                        <MenuItem value="วิทยาเขตตรัง">วิทยาเขตตรัง</MenuItem>
                        </Select>
                    </FormControl>
                <br />
                </Typography>
            </div>
        </Box>
        <DataGrid rows={filteredRows} columns={columns} />
        
    </Fragment>);
}

export default Leaderboard;