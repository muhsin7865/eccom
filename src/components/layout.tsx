import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "./navbar";

export default function Layout({ children }: { children: any }) {
    const { data: session } = useSession();
    if (!session) {
        return (
            <div className="bg-blue-900 w-screen h-screen flex items-center">
                <div className="text-center w-full">
                    <button onClick={() => { signIn('google') }} className="bg-white text-black p-2 rounded-lg px-4 text-lg">Login with Google</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="bg-blue-900 min-h-screen flex">
                <Navbar />
                <div className="bg-white flex-grow  my-2 mr-2 rounded-lg p-4">
                    {children}
                </div>
            </div>
        )
    }

}
