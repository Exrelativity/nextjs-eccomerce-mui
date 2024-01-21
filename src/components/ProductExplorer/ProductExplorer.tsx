// "use client";
// import React, { CSSProperties, useEffect, useRef, useState } from 'react'
// import ProductCard, { ProductCardData } from '../ProductCard/ProductCard';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/redux/store';
// import { memoize } from 'proxy-memoize';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// type Props = {
//     className?: String;
//     style?: CSSProperties;
//     product?: ProductCardData[]
// }

// function ProductExplorer({ className, style, product }: Props) {
//     const [xplorer_product, setXplorer_product] = useState<ProductCardData[] | undefined>(product);

//     const product_data_memoized: ProductCardData[] = useSelector<RootState, ProductCardData[]>(memoize((state) => state.product.products));
//     useEffect(() => {
//         setXplorer_product((xplorer_product) => product_data_memoized)
//     }, [xplorer_product, product_data_memoized]);

//     const productExplorerRef = useRef<HTMLDivElement>(null);
//     const productExplorerRef1 = useRef<HTMLDivElement>(null);
//     const productExplorerRef2 = useRef<HTMLDivElement>(null);
//     const [scrollDistance, setScrollDistance] = useState<number>(100); // Initial scroll distance
//     const [scrollDistance1, setScrollDistance1] = useState<number>(100); // Initial scroll distance
//     const [scrollDistance2, setScrollDistance2] = useState<number>(100); // Initial scroll distance

//     function scrollProductExplorerRight() {
//         if (productExplorerRef.current) {
//             const maxScrollLeft = productExplorerRef.current.scrollWidth - productExplorerRef.current.clientWidth;
//             const remainingScroll = maxScrollLeft - productExplorerRef.current.scrollLeft;
//             const distanceToScroll = Math.min(scrollDistance, remainingScroll);

//             if (distanceToScroll > 0) {
//                 productExplorerRef.current.scrollBy({ left: distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance(prevDistance => prevDistance + 10); // Increment scroll distance by 10
//             }
//         }
//     }

//     function scrollProductExplorerLeft() {
//         if (productExplorerRef.current) {
//             const distanceToScroll = Math.min(scrollDistance, productExplorerRef.current.scrollLeft);

//             if (distanceToScroll > 0) {
//                 productExplorerRef.current.scrollBy({ left: -distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance(prevDistance => prevDistance - 10); // Decrement scroll distance by 10
//             }
//         }
//     }

//     function scrollProductExplorerRight1() {
//         if (productExplorerRef1.current) {
//             const maxScrollLeft = productExplorerRef1.current.scrollWidth - productExplorerRef1.current.clientWidth;
//             const remainingScroll = maxScrollLeft - productExplorerRef1.current.scrollLeft;
//             const distanceToScroll = Math.min(scrollDistance1, remainingScroll);

//             if (distanceToScroll > 0) {
//                 productExplorerRef1.current.scrollBy({ left: distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance1(prevDistance => prevDistance + 10); // Increment scroll distance by 10
//             }
//         }
//     }

//     function scrollProductExplorerLeft1() {
//         if (productExplorerRef1.current) {
//             const distanceToScroll = Math.min(scrollDistance1, productExplorerRef1.current.scrollLeft);

//             if (distanceToScroll > 0) {
//                 productExplorerRef1.current.scrollBy({ left: -distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance1(prevDistance => prevDistance - 10); // Decrement scroll distance by 10
//             }
//         }
//     }

//     function scrollProductExplorerRight2() {
//         if (productExplorerRef2.current) {
//             const maxScrollLeft = productExplorerRef2.current.scrollWidth - productExplorerRef2.current.clientWidth;
//             const remainingScroll = maxScrollLeft - productExplorerRef2.current.scrollLeft;
//             const distanceToScroll = Math.min(scrollDistance2, remainingScroll);

//             if (distanceToScroll > 0) {
//                 productExplorerRef2.current.scrollBy({ left: distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance2(prevDistance => prevDistance + 10); // Increment scroll distance by 10
//             }
//         }
//     }

//     function scrollProductExplorerLeft2() {
//         if (productExplorerRef2.current) {
//             const distanceToScroll = Math.min(scrollDistance2, productExplorerRef2.current.scrollLeft);

//             if (distanceToScroll > 0) {
//                 productExplorerRef2.current.scrollBy({ left: -distanceToScroll, behavior: 'smooth' });
//                 setScrollDistance2(prevDistance => prevDistance - 10); // Decrement scroll distance by 10
//             }
//         }
//     }

//     const router = useRouter();

//     function handleproductnavigation() {
//         return router.push("/products");
//     }

//     return (
//         <div className={`flex overflow-auto content-center z-0 w-full pl-7  gap-10 py-16 flex-col flex-shrink-0 justify-center max-md:flex-col max-md:h-auto max-md:px-2 items-start max-[1025px]:px-2 ${className}`} style={style}>
//             <div className='flex flex-row items-center justify-start gap-10 text-2xl font-bold text-red-900 max-md:gap-6'>
//                 <div className='h-[50px] w-5 rounded-[4px] bg-red-900 font-bold'></div>Our Product&apos;s</div>
//             <div className='flex w-full flex-row content-start items-center justify-between gap-12 pr-10 text-black max-md:flex-col max-md:items-start max-md:gap-5 max-md:pr-0'>
//                 <div className='flex w-fit flex-grow flex-row content-start items-center justify-start gap-12 text-black max-md:flex-col max-md:items-start max-md:gap-4'>
//                     <div className='font-inter flex h-fit w-fit flex-row items-baseline pb-0 pt-1 text-5xl'>Explore Our Products</div>
//                 </div>
//                 <div className='flex w-fit flex-grow flex-row items-end justify-end gap-4 text-black max-md:w-full max-md:flex-row max-md:items-center max-md:justify-center max-md:gap-4' >
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerLeft()} src={"/assets/new-icons/arrow-black-right.svg"} alt={"icons"} width={28} height={28} /></div>
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerRight()} src={"/assets/new-icons/arrow-black-left.svg"} alt={"icons"} width={28} height={28} /></div>
//                 </div>
//             </div>
//             <div className='flex h-fit w-full flex-row'>
//                 <div ref={productExplorerRef} className="carousel carousel-center w-full gap-8 overflow-auto rounded-none">
//                     {Array.isArray(xplorer_product) && xplorer_product.map((items, index) => (
//                         <React.Fragment key={index}>
//                             {index % 2 === 0 && <div key={index} id={`#${index}`} className="carousel-item box-content h-[400px] w-[310px]">
//                                 <ProductCard data={{
//                                     name: items.name,
//                                     amount: items.amount,
//                                     discount_percent: items.discount_percent,
//                                     id: items.id,
//                                     rating: items.rating,
//                                     rating_aggregate: items.rating_aggregate,
//                                     image: items.image,
//                                     flash_sale: items.flash_sale
//                                 }} />
//                             </div>}
//                         </React.Fragment>))}
//                 </div>
//             </div>
//             <div className='flex w-full flex-row content-start items-center justify-between gap-12 pr-10 text-black max-md:flex-col max-md:items-start max-md:gap-5 max-md:pr-0'>
//                 <div className='flex w-fit flex-grow flex-row content-start items-center justify-start gap-12 text-black max-md:flex-col max-md:items-start max-md:gap-4'>
//                     {/* <div className='font-inter flex h-fit w-fit flex-row items-baseline pb-0 pt-1 text-5xl'> Products</div> */}
//                 </div>
//                 <div className='flex w-fit flex-grow flex-row items-end justify-end gap-4 text-black max-md:w-full max-md:flex-row max-md:items-center max-md:justify-center max-md:gap-4' >
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerLeft1()} src={"/assets/new-icons/arrow-black-right.svg"} alt={"icons"} width={28} height={28} /></div>
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerRight1()} src={"/assets/new-icons/arrow-black-left.svg"} alt={"icons"} width={28} height={28} /></div>
//                 </div>
//             </div>
//             <div className='flex h-fit w-full flex-row'>
//                 <div ref={productExplorerRef1} className="carousel carousel-center w-full gap-8 overflow-auto rounded-none">
//                     {Array.isArray(xplorer_product) && xplorer_product.map((items, index) => (
//                         <React.Fragment key={index}>
//                             {index % 3 === 0 && <div key={index} id={`#${index}`} className="carousel-item box-content h-[400px] w-[310px]">
//                                 <ProductCard data={{
//                                     name: items.name,
//                                     amount: items.amount,
//                                     discount_percent: items.discount_percent,
//                                     id: items.id,
//                                     rating: items.rating,
//                                     rating_aggregate: items.rating_aggregate,
//                                     image: items.image,
//                                     flash_sale: items.flash_sale
//                                 }} />
//                             </div>}
//                         </React.Fragment>))}
//                 </div>
//             </div>
//             <div className='flex w-full flex-row content-start items-center justify-between gap-12 pr-10 text-black max-md:flex-col max-md:items-start max-md:gap-5 max-md:pr-0'>
//                 <div className='flex w-fit flex-grow flex-row content-start items-center justify-start gap-12 text-black max-md:flex-col max-md:items-start max-md:gap-4'>
//                     {/* <div className='font-inter flex h-fit w-fit flex-row items-baseline pb-0 pt-1 text-5xl'>Best Selling Products</div> */}
//                 </div>
//                 <div className='flex w-fit flex-grow flex-row items-end justify-end gap-4 text-black max-md:w-full max-md:flex-row max-md:items-center max-md:justify-center max-md:gap-4' >
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerLeft2()} src={"/assets/new-icons/arrow-black-right.svg"} alt={"icons"} width={28} height={28} /></div>
//                     <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-200 hover:cursor-pointer hover:bg-gray-400'> <Image onClick={() => scrollProductExplorerRight2()} src={"/assets/new-icons/arrow-black-left.svg"} alt={"icons"} width={28} height={28} /></div>
//                 </div>
//             </div>
//             <div className='flex h-fit w-full flex-row'>
//                 <div ref={productExplorerRef2} className="carousel carousel-center w-full gap-8 overflow-auto rounded-none">
//                     {Array.isArray(xplorer_product) && xplorer_product.map((items, index) => (
//                         <React.Fragment key={index}>
//                             {index % 5 === 0 && <div key={index} id={`#${index}`} className="carousel-item box-content h-[400px] w-[310px]">
//                                 <ProductCard data={{
//                                     name: items.name,
//                                     amount: items.amount,
//                                     discount_percent: items.discount_percent,
//                                     id: items.id,
//                                     rating: items.rating,
//                                     rating_aggregate: items.rating_aggregate,
//                                     image: items.image,
//                                     flash_sale: items.flash_sale
//                                 }} />
//                             </div>}
//                         </React.Fragment>))}
//                 </div>
//             </div>
//             <div className='flex h-fit w-full flex-row items-center justify-center p-2'>
//                 <div className='flex h-[50px] w-fit flex-row items-center justify-center rounded-[4px] bg-red-900 p-5 font-bold text-white hover:scale-105 hover:cursor-pointer' onClick={() => handleproductnavigation()} ><div>View All Products</div></div>
//             </div>
//         </div >
//     )
// }

// export default ProductExplorer