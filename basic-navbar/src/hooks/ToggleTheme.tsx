import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        if(typeof window !== "undefined"){
            return(
                localStorage.theme === "dark" || (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
            )
        }
        return false
    })

    useEffect(()=>{
        const root = document.documentElement
        if(isDark){
            root.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            root.classList.remove("dark")
            localStorage.theme = "light"
        }
    })

    return (
        <div>
            <button onClick={()=>setIsDark(!isDark)} className="cursor-pointer p-2 rounded-full text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-500">
                {isDark ? <Moon /> : <Sun />}
            </button>
        </div>
    )
}

export default ToggleTheme