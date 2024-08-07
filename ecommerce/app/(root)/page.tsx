import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export default async function Home() {
  const latestProducts = await getLatestProducts()
  return (
    <div className="space-y-8">
          <ProductList title="Latest Product" data={latestProducts}/>
    </div>
  );
}
