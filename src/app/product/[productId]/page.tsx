import ProductDetailScreen from "@/screens/product-detail/ProductDetailScreen";

export default async function page({ params: { productId } }: { params: { productId: Number; } }) {
    return <ProductDetailScreen productId={productId} />
};