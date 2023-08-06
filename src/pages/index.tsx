import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../components/navbar";
import Layout from "../components/layout";
export default function Home() {
  const { data: session } = useSession()
  return (
    <Layout >
      {session ?
        <div className="text-blue-900 flex justify-between">
          Hello, {session.user?.name}
          <div className="flex items-center space-x-2 rounded-full bg-slate-100 p-2">
          {session.user?.image ?
            <img src={session.user?.image} alt="" height="100" width="100" className="w-8 h-8 rounded-full"/>
            : null}
            <p>{session.user?.name}</p>
          </div>
       
        </div>
        : null}
    </Layout>
  )

}
