'use client'

export * from "./nativebase"
import { Nativebase } from "@/provider"

export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Nativebase>
            {children}
        </Nativebase>
    )
}