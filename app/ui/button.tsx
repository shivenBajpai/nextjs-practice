import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function Button({ text, href, className } : { text: String, href: Url, className: String }) {
    return <Link href={href} className={" border-2 m-2 px-6 py-2 rounded-md font-semibold " + className}>
        {text}
    </Link>
}
