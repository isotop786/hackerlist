import Head from "next/head";


export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(ninja =>{
        return{
            params: {id : ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
   
}

export const getStaticProps = async (context)=>{
    const id = context.params.id 
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json();

    return { 
        props: {
            ninja: data
        }
    }

    
}

const Ninja = ({ninja})=>{
   return(
    <>
    <Head>
        <title>{ninja.name}</title>
        <meta keyword="User" content={ninja.name+' '+ninja.email}/>
    </Head>
        <div>
            <h1>Details Page of {ninja.name}</h1>
            <p><strong>Username</strong>: {ninja.username}</p>
            <p><strong>Email:</strong> {ninja.email}</p>
            <p><strong>Company:</strong> {ninja.company.name}</p>
            <p><strong>Phone:</strong> {ninja.phone}</p>
            <p><strong>Website:</strong> {ninja.website}</p>
            <p><strong>Address:</strong> {ninja.address.street},{ninja.address.suite}, {ninja.address.city}</p>
        </div>
        </>
    )
}

export default Ninja;