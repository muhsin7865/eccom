import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdHeadset, IoIosSettings } from "react-icons/io"
import { BsCardChecklist } from "react-icons/bs"
import { useRouter } from "next/router";

export default function Navbar() {
    const inActiveLink = 'flex items-center space-x-2 p-1 '
    const activeLink = inActiveLink + 'bg-white text-blue-900 rounded-l-lg'
    const menuItems = [
        {
            name: "Dashboard",
            slug: "/",
            icon: <FaHome />
        },
        {
            name: "Products",
            slug: "/products",
            icon: <IoMdHeadset />
        },
        {
            name: "Orders",
            slug: "/orders",
            icon: <BsCardChecklist />
        },
        {
            name: "Settings",
            slug: "/settings",
            icon: <IoIosSettings />
        }
    ]

    const {pathname} = useRouter()

    return (
        <aside className="text-white p-4 pr-0" >
            <Link href="/" className="flex items-center mb-4 mr-4 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" " viewBox="0 0 16 16">
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                </svg>
                <span>Eccomerce Admin</span>
            </Link>
            <nav className="flex flex-col gap-y-2">
                {menuItems.map((menuItem: any, indx: number) => (
                    <Link href={`${menuItem.slug}`} className={pathname !== menuItem.slug? inActiveLink : activeLink}>
                        {menuItem.icon}
                        <span>{menuItem.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}