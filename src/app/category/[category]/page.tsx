import { client } from "@/lib/SanityClient";

import Product_Card from "@/app/category/components/product_card";
import { Product } from "@/app/types/Product";

const getProductData = async (category: string) => {
  const res = await client.fetch(
    `*[_type == 'product'   && category->category == $category]{
      id,
      title,
      description,
      details,
      color,
      'size': size[]->size,
      price,
      image,
      'category' : category->category,
      'status' : status->status,
    }`,
    {
      category: category,
    }
  );
  return res;
};

export default async function Home({
  params,
}: {
  params: { category: string };
}) {
  const data: Product[] = await getProductData(params.category);
  // console.log(data);
  return (
    <>
      <div>Category: {params.category}</div>
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 justify-center">
        {data.map((item: Product) => (
          <div key={item.id}>
            <Product_Card item={item} />
          </div>
        ))}{" "}
      </div>
    </>
  );
}

// import React from "react";
// import Image from "next/image";
// import products from "@/app/products";
// import Link from "next/link";

// export default function Home({ params }: { params: { category: string } }) {
//   return (
//     <div>
//       <div>page: {params.category}</div>
//       <div className="flex flex-wrap">
//         {products.map((product) => (
//           <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.src}
//                   height={2000}
//                   width={2000}
//                   alt={product.alt}
//                 />
//                 <h1 className="text-3xl mt-2">{product.alt}</h1>
//                 <p className="text-gray-700">{product.price}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
