import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilteredDataGrid() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'status', headerName: 'Status', width: 120 },
      ];
    
      const rows = [
        { id: 1, name: 'John', status: 'active' },
        { id: 2, name: 'Jane', status: 'inactive' },
        // ... รายการข้อมูลเพิ่มเติม
      ];

  const [filteredRows, setFilteredRows] = useState(rows);
  const [filterValue, setFilterValue] = useState('all');

  const handleFilterChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;

    if (value === 'all') {
      setFilteredRows(rows);
    } else {
      const filtered = rows.filter((row) => row.status === value);
      setFilteredRows(filtered);
    }

    setFilterValue(value);
  };

  

  return (
    <div>
      <FormControl>
        <InputLabel>Filter Status</InputLabel>
        <Select value={filterValue} onChange={handleFilterChange}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={filteredRows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
}

export default FilteredDataGrid;
