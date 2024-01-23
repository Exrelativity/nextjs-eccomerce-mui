import ProductDetailScreen from "@/screens/product-detail/ProductDetailScreen";

export default function page({ params: { productId } }: { params: { productId: Number; } }) {
    return <ProductDetailScreen productId={productId} />
};