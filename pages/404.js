import next from "next";
import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
const NotFound = () =>{
    const router = useRouter();
    useEffect(()=>{

        const redirect = ()=>{
            setTimeout(()=>{
                
                router.push('/')
            },3000)
        }

        redirect();
    },[])
    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/"><a  >Homepage</a></Link></p>
        </div>
    )
}

export default NotFound;