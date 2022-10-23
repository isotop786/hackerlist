import Link from 'next/link'
import Image from 'next/image';
const Navbar = ()=>{
    return(
        <nav>
        <div className="logo">
            <Link href="/"><a>
                <Image width="180px" height="130px" src="/hacker_logo.png"/>
                </a></Link>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/hackers/"><a>Hacker Listing</a></Link>
    </nav>
    )
}

export default Navbar;