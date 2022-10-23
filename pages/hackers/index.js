import Head from "next/head";
import Link from "next/link";
import sytles from "../../styles/Ninjas.module.css"

export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return { 
        props: {
            ninjas : data
        }
    }
}

const Ninjas = ({ninjas}) => {
    return(
        <>
        <Head>
        <title>HackerList | All Hackers</title>
        <meta name="keywords" content='ninjas'/>
        <meta name="page" content='all ninjas'/>
      </Head>
        <div>
            <h1>All Hackers</h1>
            {ninjas.map(ninja=>
                (
                    <div className={sytles.single} key={ninja.id}>
                        <Link href={`/hackers/${ninja.id}`}><a>
                            <h3>{ninja.name}</h3>
                        </a>
                        </Link>
                    </div>
                )  
            )}
        </div>
        </>
    )
}

export default Ninjas;