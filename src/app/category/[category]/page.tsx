import React from "react";
import Image from "next/image";
import products from "@/app/products";

export default function Home({ params }: { params: { category: string } }) {
  return (
    <div>
      <div>page: {params.category}</div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={product.src}
                height={2000}
                width={2000}
                alt={product.alt}
              />
              <h1 className="text-3xl mt-2">{product.alt}</h1>
              <p className="text-gray-700">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
