import { useEffect } from "react"

export function ScrollSpy(){
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            const id = entry.target.getAttribute("id")
            const link = document.querySelector(`a[href="#${id}"]`)
            if (entry.isIntersecting) {
                document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"))
                link?.classList.add("active")
            }
            })
        },
        { threshold: 0.1 }
        )

        const sections = document.querySelectorAll("section, main, footer")
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return null
}


