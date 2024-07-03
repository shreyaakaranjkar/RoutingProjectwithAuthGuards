import { Iproducts } from "../models/products";



export const mobileProducts : Array<Iproducts> = [
        { 
          pId: '1',
         pname: "iPhone 13",
         feature: "A15 Bionic chip",
         pstatus : 'Delivered',
         canraturn : '1'
         },
        { 
          pId: '2',
         pname: "Samsung Galaxy S21",
         feature: "Snapdragon 888 processor",
         pstatus : 'InProcess',
         canraturn : '0' 
        },
        {
          pId: '3',
         pname: "Google Pixel 6", 
         feature: "Tensor SoC",
         pstatus : 'Delivered',
         canraturn : '1' 
        },
        {
          pId: '4',
         pname: "Samsung M21", 
         feature: "Tensor SoC",
         pstatus : 'Dispatched',
         canraturn : '1' 
        },
        ];