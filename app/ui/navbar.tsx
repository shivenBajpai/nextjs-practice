import { Page } from "@/app/lib/definitions"
import Image from "next/image"
import Button from "./button"
import Link from "next/link"
import { Key } from "react"
import { HiSparkles } from "react-icons/hi2";

export default function NavBar() {

    const links: Array<Page> = [
        {
            name:"Product", 
            path: "/product", 
            icon_url: null
        },
        {
            name:"Pricing", 
            path: "/pricing", 
            icon_url: null
        },
        {
            name:"Blog", 
            path: "/blog", 
            icon_url: null
        },
        {
            name:"Community", 
            path: "/community", 
            icon_url: HiSparkles
        },
    ]

    return <div className="flex flex-row w-full bg-white">
            <Image className="grow-0 max-h-10 max-w-22 m-2 pr-4 border-r border-black" src="/logo.webp" alt="PlayBook" height={40} width={90} />

            <div className="flex flex-row items-center grow">
                {links.map(link => {
                    return <Link key={link.path as Key} className=" m-1 p-2 hover:bg-slate-100 rounded-full inline" href={link.path}>{link.name} {link.icon_url && link.icon_url({color:"#fcea03", className:"inline", size:"1.25em"})}</Link>
                })}
            </div>

            <div className="grow-0 flex flex-row justify-end items-center">
                <Button text="Log In" href="/login" className="bg-white border-red-500"/>
                <Button text="Early Access" href="/early-access" className="bg-red-500 text-white"/>
            </div>
    </div>
}