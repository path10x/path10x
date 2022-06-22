import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  ChangeEvent,
} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'; // Optional theme CSS

import Modal from './Modal';

const Grid = () => {
  const gridRef = useRef(null); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

  // modal state
  const [modalShow, setModalShow] = useState(false);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'algorithm_name', headerName: 'Algo', filter: true },
    {
      field: 'completed',
      headerName: 'Completed',
      filter: true,
      cellRenderer: ({ value: completed }) => {
        return completed ? 'Completed' : '';
      },
    },
    { field: 'category', headerName: 'Category', filter: true },
    {
      field: 'difficulty',
      headerName: 'Difficulty',
      filter: true,
      cellRenderer: ({ value: difficulty }) => {
        // capitalize letter... thanks SQL
        return difficulty[0].toUpperCase().concat(difficulty.slice(1));
      },
    },
    { field: 'companies', headerName: 'Companies', filter: true },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  const onGridReady = (params) => {
    const { api, columnApi } = gridRef.current;
    if (api === null || columnApi === null) {
      return;
    }
    params.api.sizeColumnsToFit();
  };

  const onGridSizeChanged = (params) => {
    const { api, columnApi } = gridRef.current;
    if (api === null || columnApi === null) {
      return;
    }
    params.api.sizeColumnsToFit();
  };

  // Example load data from sever
  useEffect(() => {
    fetch('/api/userAlgorithms/1')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    if (gridRef.current) {
      gridRef.current.api.deselectAll();
    }
  }, []);

  return (
    <div id="grid">
      {/* Example using Grid's API */}
      {/*<button onClick={buttonListener}>Push Me</button> */}

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      {/*<myModal show={modalShow} onHide={() => setModalShow(false)} />*/}
      <div
        className="ag-theme-balham-dark"
        style={{ width: 1050, height: 700 }}
      >
        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          onGridReady={onGridReady}
          onGridSizeChanged={onGridSizeChanged}
        />
      </div>
    </div>
  );
};

export default Grid;
