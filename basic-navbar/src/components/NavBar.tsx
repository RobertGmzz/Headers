import { useEffect, useState } from "react"
import ToggleTheme from "../hooks/ToggleTheme"
import { Menu, X } from "lucide-react"
import { LightButtom } from "./LightButtom"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 640
            setIsMobile(mobile)

            if(!mobile){
                setIsOpen(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] dark:bg-[#1B1B1F] shadow-xl">
            <div className="flex flex-row justify-between items-center gap-x-4 h-16 mx-5 lg:mx-25" aria-label="Header content">
                <div className="flex flex-row items-center gap-x-2 md:gap-x-4">
                    <img className="size-10 md:size-12 rounded-full" src="icono.png" alt="foto de dueño de pagina"/>
                    <LightButtom></LightButtom>
                </div>
                <nav className="flex">
                    <button onClick = {() => isMobile && setIsOpen(prev => !prev)} className="sm:hidden cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-500" aria-label="Toggle button">
                        {isOpen ? <X></X> : <Menu></Menu>}
                    </button>
                    <div className={`${isOpen ? "flex shadow-xl" : "hidden"} z-10 fixed top-0 left-0 w-full mt-16 flex-col items-center gap-y-5 bg-[#ffffff] dark:bg-[#1B1B1F] sm:flex sm:flex-row sm:gap-x-6 sm:static sm:mt-0 sm:bg-transparent dark:sm:bg-transparent`}>
                        <div className="flex flex-col items-center gap-y-7 my-4 sm:my-0 sm:flex-row sm:gap-x-5 text-sm text-gray-600 dark:text-gray-400">
                            <a className="font-semibold hover:text-gray-800 dark:hover:text-gray-500" href="#">Experience</a>
                            <a className="font-semibold hover:text-gray-800 dark:hover:text-gray-500" href="#">Projects</a>
                            <a className="font-semibold hover:text-gray-800 dark:hover:text-gray-500" href="#">About</a>
                            <a className="font-semibold hover:text-gray-800 dark:hover:text-gray-500" href="#">Contact</a>
                            <ToggleTheme></ToggleTheme>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}