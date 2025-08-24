import Link from "next/link";
import Image from "next/image";


export default function NavBar() {
    return (
        <>
            <header className="sticky top-0 z-50 border-b bg-black/90 backdrop-blur shadow-md text-white">
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold  hover:text-red-600 transition-colors" >
                        <Image
                            src="/LOGO.png"
                            alt="Site Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        /> Canvas Lancer
                    </Link>
                    
                    <div className="flex items-center gap-8 text-base font-medium">
                        <Link href="/" className="hover:text-red-600  transition-colors">Home</Link>

                        <Link href="/about" className="hover:text-red-600  transition-colors">About Us</Link>

                        <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
          
                        <Link href="/portfolio" className="hover:text-red-600  transition-colors">Portfolio</Link>

                        <Link href="/testimonies" className="hover:text-red-600 transition-colors">Testimonies</Link>

                        <Link href="/faq" className="hover:text-red-600transition-colors">Faqs</Link>

                        <Link href="/contact">
                                <button className="ml-4 rounded-full bg-red-500 px-6 py-2 text-white font-semibold shadow hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400">
                                    Contact Us
                                </button>
                            
                        </Link>
                        
                    </div>
                </nav>
            </header>
        </>
        
    )
}