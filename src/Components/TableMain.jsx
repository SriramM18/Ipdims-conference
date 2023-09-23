import React from 'react'
import { Table } from 'flowbite-react'
import { registrationFeeDetails } from '../data/data'
const TableMain = () => {
  console.log(registrationFeeDetails)
  const headRowData=registrationFeeDetails.headRow;
  console.log(headRowData)
  const tableContentData=registrationFeeDetails.content;
  return (
    <div className='shadow drop-shadow-sm pt-4'>
    <h2 className=' text-4xl text-footerblue font-semibold text-center mb-4'>Registration Fee</h2>

  <Table striped={true} className='bg-white'>
  <Table.Head className='text-xl'>
  
  {/* registrationFeeDetails.headRow.map(()=>) */}
    <Table.HeadCell className='text-lg'>
    {headRowData.Category}
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
    {headRowData.Online}
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
    {headRowData.Physical}
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
    {headRowData.LateRegistration}
    </Table.HeadCell>
  </Table.Head>

  <Table.Body className="divide-y">
    {tableContentData.map((currentRow)=>
      <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="  whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {currentRow.Category}
      </Table.Cell>
      <Table.Cell>
      {currentRow.Online}
      </Table.Cell>
      <Table.Cell>
      {currentRow.Physical}
      </Table.Cell>
      <Table.Cell>
      {currentRow.LateRegistration}
      </Table.Cell>
    </Table.Row>
    )}
  </Table.Body>
</Table>
    </div>
  )
}

export default TableMain