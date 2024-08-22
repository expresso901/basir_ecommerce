import { carts, orderItems, orders, products } from '@/db/schema'
import {
  cartItemSchema,
  paymentResultSchema,
  shippingAddressSchema,
} from '@/lib/validator'
import { InferSelectModel } from 'drizzle-orm'
import { z } from 'zod'

//PRODUCT
export type Product = InferSelectModel<typeof products>

//CART
export type CartItem = z.infer<typeof cartItemSchema>
export type Cart = InferSelectModel<typeof carts>

//SHIPPING ADDRESS
export type ShippingAddress = z.infer<typeof shippingAddressSchema>
export type PaymentResult = z.infer<typeof paymentResultSchema>

// ORDERS null is added to name and email of user
export type Order = InferSelectModel<typeof orders> & {
  orderItems: OrderItem[]
  user: { name: string | null; email: string | null }
}
export type OrderItem = InferSelectModel<typeof orderItems>
