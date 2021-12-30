import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    insertProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {

        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);

        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Get(":id")
    getProduct(@Param("id") prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(":id")
    updateProduct(@Param("id") prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {

        this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

}