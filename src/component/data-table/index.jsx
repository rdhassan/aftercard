import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import './index.scss';

const columns = [
  {
    name: 'Tracking ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Source',
    selector: row => row.source,
    sortable: true,
  },
  {
    name: 'Claim Type',
    selector: row => row.claimtype,
    sortable: true,
  },
  {
    name: 'Request',
    selector: row => row.request,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
  {
    selector: row => row.details,
    sortable: true,
  },
];

const data = [
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
  {
    id: Math.random(),
    date: '04/05/2022',
    source: 'Shopify',
    claimtype: 'Lost',
    request: 'Refund',
    price: '$180',
    status: <span className="d-inline-flex bg-primary py-1 my-2 px-2 rounded">In Process</span>,
    details: <Link className="detail" to='/details'>Details</Link>
  },
]
const customStyles = {
  rows: {
      style: {
          minHeight: '36px',
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px',
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '8px',
          paddingRight: '8px',
      },
  },
};
const CustomDataTable = () => {
  return (
    <div className="AftercardCustomTable">
      <DataTable columns={columns} data={data} pagination responsive fixedHeader fixedHeaderScrollHeight="400px"/>
    </div>
  )
}

export default CustomDataTable;