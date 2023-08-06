import Link from "next/link"
import Layout from "../../components/layout"
import { useEffect, useState } from "react"
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa"

const Products = () => {
    const [products, setProducts] = useState<any>([])

    useEffect(() => {
        axios.get('api/products').then(response => (
            setProducts(response.data)
        ))
    }, [])

    return (
        <Layout>
            <Link className="bg-green-500 px-2 font-semibold rounded-lg py-1" href={"/products/new"}>
                Add New Product
            </Link>
            <table className="basic mt-2">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) => (
                        <tr>
                            <td>{product.title}</td>
                            <td className="flex space-x-2">
                                <Link href={"/products/edit/" + product._id} className="bg-blue-500 text-white items-center p-1 px-2 rounded-lg text-sm inline-flex space-x-2">
                                    <FaEdit className="w-4 h-4" />
                                    <span>Edit</span>
                                </Link>
                                <Link href={"/products/" + product._id} className="bg-red-500 text-white items-center p-1 px-2 rounded-lg text-sm inline-flex space-x-2">
                                    <FaTrash className="w-4 h-4" />
                                    <span>Delete</span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}
export default Products