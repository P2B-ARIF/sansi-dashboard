import React from 'react'
import { Table, Thead, Tbody, Tr, Button } from "@chakra-ui/react";
import { Th, Td, TableContainer } from "@chakra-ui/react";

const OnWay = () => {
  return (
    <div className='m-10'>
    <TableContainer className='border rounded-md'>
        <Table size='sm'>
            <Thead>
                <Tr>
                    <Th>NO</Th>
                    <Th>Date</Th>
                    <Th>City</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                    <Th>Total</Th>
                    <Th>Action</Th>
                    <Th>Payment</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>
                        <Button size={"xs"}>View Details</Button>
                    </Td>
                    <Td>inches</Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
</div>
  )
}

export default OnWay