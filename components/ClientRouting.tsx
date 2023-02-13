"use client"
import Link from "next/link"

//this enables us to have client component functionality within server componenets

function ClientRouting ({
    children, route
  }: {
    children: React.ReactNode, route: string
  }) {
    return(
        <Link href={route}>{children}</Link>
    )
}

export default ClientRouting