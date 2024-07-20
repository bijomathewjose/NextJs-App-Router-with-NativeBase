'use client'

export * from "./nativebase"
import { Nativebase } from "@/provider"
import { useEffect, useState } from "react"

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const [loadingResources, setLoadingResources] = useState(true)
    useEffect(() => {
        setLoadingResources(false)
    }, [])

    return (
        loadingResources ? <div>loading...</div> : <Nativebase>
            {children}
        </Nativebase>
    )
}