import React from "react"
import Header from "../organisms/Header"
import ProductsSection from "../organisms/ProductsSection"
import "./Home.css"

const Home = () => {
    const sections = [{ title: "komputer" }, { title: "laptop" }, { title: "handphone" }]
    return (
        <>
            <Header />
            <main>
                {sections.map(({ title }) => (
                    <ProductsSection title={title} />
                ))}
            </main>
        </>
    )
}

export default Home
