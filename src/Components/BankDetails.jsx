import React from 'react'
import { Table } from 'flowbite-react'
const BankDetails = () => {
  return (
    <div className='mt-16   shadow drop-shadow-sm pt-4'>
    <h2 className='text-4xl text-footerblue font-semibold text-center mb-4'>Bank Details For Payment</h2>

    <Table striped={true} className=' lg:px-4'>
  <Table.Head className='text-xl lg:px-4'>
    <Table.HeadCell className='text-xl'>
    Category
    </Table.HeadCell>
    <Table.HeadCell className='text-xl'>
    Details<br/>
    {/* (Till 10/11/22) */}
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Name of the Account
      </Table.Cell>
      <Table.Cell>
      Conference NIT Rourkela
      </Table.Cell> 
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Account Number       </Table.Cell>
      <Table.Cell>
      36734418111      </Table.Cell>
      
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      IFCS code     </Table.Cell>
      <Table.Cell>
      SBIN0002109      </Table.Cell>
      
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Bank Name     </Table.Cell>
      <Table.Cell>
      State Bank of India
      </Table.Cell>
      
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Branch        </Table.Cell>
      <Table.Cell>
      SBI, NIT Campus, Rourkela     </Table.Cell>
      
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Address       </Table.Cell>
      <Table.Cell>
      SBI, NIT Campus, Rourkela-769008, Odisha    </Table.Cell>
      
    </Table.Row>
    <Table.Row className="font-semibold text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Account Type        </Table.Cell>
      <Table.Cell>
      Saving Account    </Table.Cell>
      
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 font-semibold text-lg ">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Swift Code        </Table.Cell>
      <Table.Cell>
      SBININBB137 (Commercial)    </Table.Cell>
      
    </Table.Row>
  </Table.Body>
</Table>
    </div>
  )
}

export default BankDetails