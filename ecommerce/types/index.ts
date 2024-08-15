import { carts, products } from "@/db/schema"
import { cartItemSchema, shippingAddressSchema } from "@/lib/validator"
import { InferSelectModel } from "drizzle-orm"
import { z } from 'zod'

//PRODUCT
export type Product = InferSelectModel<typeof products>

//CART
export type CartItem = z.infer<typeof cartItemSchema>
export type Cart = InferSelectModel<typeof carts>

//SHIPPING ADDRESS
export type ShippingAddress = z.infer<typeof shippingAddressSchema>