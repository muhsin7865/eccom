import Layout from "@/components/layout"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
const editProduct = () => {
    // const [productData, setProductData] = useState<any>(null)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const { query } = useRouter()
    const router = useRouter()

    useEffect(() => {
        query.edit ?
            axios.get('/api/products?id=' + query.edit).then(response => {
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
            : null
    }, [])

    const editProduct = (e: any) => {
        e.preventDefault();
        const data = { title, description, price }
        axios.post('/api/products', data)
        router.push('/products')
    }

    return (
        <Layout>
            {title ?
                <form onSubmit={(e) => editProduct(e)}>
                    <input type="text" placeholder="Product Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>Description</label>
                    <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    <label>Price (in INR)</label>
                    <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button className="btn-primary" type="submit">Edit Product</button>
                </form>
                : null}
        </Layout>

    )
}

export default editProduct