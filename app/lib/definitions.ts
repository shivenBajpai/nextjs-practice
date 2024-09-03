import { Url } from "next/dist/shared/lib/router/router"
import { FunctionComponent } from "react"

export type Page = {
    name: string,
    path: Url,
    icon_url: FunctionComponent | null
}