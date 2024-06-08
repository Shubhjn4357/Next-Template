import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/product";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const product = await getProduct();
  return (
    <div className="">
      {product.length ? (
        JSON.stringify(product)
      ) : (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
                </p>
                <Link href="products/add">
              <Button className="mt-4">Add Product</Button>
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Products;
