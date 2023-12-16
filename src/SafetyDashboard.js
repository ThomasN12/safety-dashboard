import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable, useSortBy, useFilters } from 'react-table';
import Papa from 'papaparse';
import DefaultColumnFilter from './components/DefaultColumnFilter';

function SafetyDashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/dataset.csv', {
        responseType: 'blob'
      })
      .then(response => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            setData(results.data);
          }
        });
      })
      .catch(error => {
        console.error('Error fetching or parsing data: ', error);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Date & Time', accessor: 'datetime stamp' },
      { Header: 'Incident Title', accessor: 'incident title' },
      { Header: 'Description', accessor: 'incident description' },
      { Header: 'Severity', accessor: 'severity' },
      { Header: 'Project', accessor: 'project' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Employer', accessor: 'employer' }
    ],
    []
  );

  const defaultColumn = React.useMemo(() => ({
    Filter: DefaultColumnFilter,
  }), []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, defaultColumn}, useFilters, useSortBy);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Safety Incident Dashboard</h2>
      <table {...getTableProps()} className="table table-striped table-bordered">
        <thead className="thead-dark">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="text-center"
                >
                  {column.render('Header')}
                  <div className="filter">{column.canFilter ? column.render('Filter') : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '🔽'
                        : '🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="text-center">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SafetyDashboard;
