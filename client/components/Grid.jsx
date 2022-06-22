import React, { useState, useRef, useEffect, useMemo, useCallback, ChangeEvent } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'; // Optional theme CSS

const Grid = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   {field: 'Algo', filter: true},
   {field: 'Status', filter: true},
   {field: 'Category', filter: true},
   {field: 'Difficulty', filter: true},
   {field: 'Companies', filter: true}
 ]);

 // DefaultColDef sets props common to all Columns
const defaultColDef = useMemo( ()=> ({
  sortable: true
}));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( (event) => { 
  console.log('cellClicked', event);
 }, []);

 // Example load data from sever
 useEffect(() => {
   fetch('https://www.ag-grid.com/example-assets/row-data.json')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);

 // Example using Grid's API
 const buttonListener = useCallback( (e) => {
  if (gridRef.current) { 
      gridRef.current.api.deselectAll();
  }
 }, []);

 return (
   <div>

     {/* Example using Grid's API */}
     {/*<button onClick={buttonListener}>Push Me</button> */}

     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-balham-dark" style={{width: 1050, height: 500}}>

        <AgGridReact
           ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows

           onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
     </div>
   </div>
 );
};

export default Grid;