'use server'
import { db } from "@/lib/db"
import { queryProps } from "@/types";

export const getProduct = async(args?:queryProps) => {
     try{
    const product = await db.product.findMany(args)
    return product;
  } catch (error) {
    throw error;
  }
}
export const getProductById = async(id:string,args?:queryProps) => {
     try{
    const product = await db.product.findUnique({
      where:{
        id
      }
    })
    return product;
  } catch (error) {
    throw error;
  }
}