import Layout from "@/components/layout"
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react"
const NewProducts = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const router = useRouter()

    const addProduct = (e:any) => {
        e.preventDefault();
        const data = { title, description, price }
        axios.post('/api/products', data)
        router.push('/products')
    }
    return (
        <Layout>
            <h1 className="">New Product</h1>
            <form onSubmit={(e)=>addProduct(e)}>
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <label>Price (in INR)</label>
                <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button className="btn-primary" type="submit">Save</button>
            </form>
        </Layout>
    )
}

export default NewProducts