import { Store } from '@/utils/Store'
import Link from 'next/link';
import { useContext } from 'react';
import Image from 'next/image';

export default function CartScreen() {

    const { state, dispatch } = useContext(Store);
    const { cart : { cartItems }, } = state;

  return (
    <div>
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="px-5 text-right">Quantity</th>
                  <th className="px-5 text-right">Price</th>
                  <th className="px-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                    <tr key={item.slug} className='border-b'>
                        <td>
                            <Link href={`/product/${item.slug}`} className='flex items-center'>
                                <image>
                                    src = {item.image}
                                    alt = {item.name}
                                    width = {50}
                                    height = {50}
                                </image>
                                &nbsp;
                                {item.name}
                            </Link>
                        </td>
                        
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
