import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data.js'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>주문</h2>
        <h2>관리자 페이지, 유재민님</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer justify-between'>
            <span>주문</span>
            <span className='sm:text-left text-right'>상태</span>
            <span className='hidden md:grid'>최근 주문</span>
            <span className='hidden sm:grid'>결제방식</span>
          </div>
          <ul>
            {data.map((order) => (
              <li key={order.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>₩ {order.total.toLocaleString()}</p>
                    <p className='text-gray-800 text-sm'>{order.name.last}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span className={
                    order.status == 'Processing' ? 'bg-green-200 p-2 rounded-lg' : order.status == 'Completed' ? 'bg-blue-200 p-2 rounded-lg' : 'bg-yellow-200 p-2 rounded-lg'
                  }>{order.status}</span>
                </p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default orders