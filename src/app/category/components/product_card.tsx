"use client";
import React, { Key, ReactNode } from "react";
import { FC } from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { Product } from "@/app/types/Product";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Product_Card: FC<{ item: Product }> = ({ item }) => {
  const imageURL = urlForImage(item.image).url();
  // console.log(imageURL);
  return (
    <>
      <div className="my-5">
        <Link href={`/product/${item.id}`}>
          <h1 className="text-md font-bold" key={item.id}>
            <Image
              className=" "
              src={urlForImage(item.image).url()}
              alt={item.title}
              width={300}
              height={500}
            />
          </h1>
        </Link>
        <p>Item Code: {item.id}</p>
        <p>{item.title}</p>

        <p>
          <strong>Price Rs.</strong>
          {item.price}
        </p>
        <div>
          <Button size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-bag"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Add to Cart
          </Button>
        </div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
};

export default Product_Card;
