import React from 'react'
import useCart from '../../Hook/useCart'
import { MdDelete, MdEdit } from 'react-icons/md';

export default function ManageBooking() {

  const {addCart} = useCart()
  console.log(addCart);
  


  return (
   
     <div className="  p-4">
          <h1 className="text-2xl text-[var(--primaryColor)] font-bold mb-4">
            Total Items: {addCart?.length || 0}
          </h1>
    
          <div className="overflow-x-auto">
            <table className="table shadow-md rounded-box">
              <thead className="bg-[var(--primaryColor)] text-white">
                <tr className=''>

                  <th className='border-1 border-gray-400'>User ID</th>
                  <th className='border-1 border-gray-400'>Product Id</th>
                  <th className='border-1 border-gray-400'>Number</th>
                  <th className='border-1 border-gray-400'>Date / Time</th>
                  <th className='border-1 border-gray-400'>Address</th>
                  <th className='border-1 border-gray-400'>Payment Method</th>
                  <th className='border-1 border-gray-400'>Price</th>
                  <th className='border-1 border-gray-400'>Activity</th>
                  
                </tr>
              </thead>

                  <tr>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                  </tr>


            </table>
          </div>
        </div>

  )
}
