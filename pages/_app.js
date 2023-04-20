import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import cookieCutter from 'cookie-cutter';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(()=>{
    // cookieCutter.set("user", JSON.stringify({userid: "123456", name: "Sourav Kumar"}));
    const user = cookieCutter.get("user");
    if(user){
      if(JSON.parse(user).name!= "")
      router.push("/additionaldetails")
    } else {
      router.push("/login")
    }

  }, [])
  return <Component {...pageProps} />
}
