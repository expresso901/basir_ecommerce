'use client';
import Link from 'next/link';

import { Store } from "@/utils/Store";
import { useContext } from "react";

export default function Nav() {

    const { state, dispatch} = useContext(Store);
    const { cart } = state;
    

    return (
      <>
        <Link href="/cart" className="p-2">
          Cart {cart.cartItems.length > 0 && (
            <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                {cart.cartItems.reduce((a,cartItem) => a + cartItem.quantity, 0)}
            </span>
          )}
        </Link>
        <Link href="/login" className="p-2">
          Login
        </Link>
      </>
    )
}
