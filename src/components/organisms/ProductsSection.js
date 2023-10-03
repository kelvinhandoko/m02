import React from "react"
import ProductCard from "../molecules/ProductCard"
import allProducts from "../../data/product"
import "./ProductSection.css"

const ProductsSection = ({ title }) => {
    const filterProduct = allProducts.filter(product => product.kategori === title)
    return (
        <section className="products" id={title}>
            <h2 className="title-section">-- {title} --</h2>
            <div className="product-container">
                {filterProduct.map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            cover={product.gambar_product}
                            title={product.nama_product}
                            description={product.deskripsi}
                            category={product.kategori}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProductsSection
