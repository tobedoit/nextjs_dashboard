import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data.js'

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>주문고객</h2>
        <h2>관리자 페이지, 유재민님</h2>
      </div>
      <div className='p-4'>
        <div className='bg-white w-full m-auto p-4 border rounded-lg overflow-y-auto '>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>이름</span>
            <span className='sm:text-left text-right'>이메일</span>
            <span className='hidden md:grid'>최근 주문</span>
            <span className='hidden sm:grid'>결제방식</span>
          </div>
          <ul>
            {data.map((order) => (
              <li key={order.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4 '>{order.name.last}</p>
                  {/* <p className='pl-4 '>{order.name.first + ' ' + order.name.last}</p> */}
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
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

export default customers