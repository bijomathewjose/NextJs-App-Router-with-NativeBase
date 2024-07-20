'use client'
import { theme } from '@/nativebase'
import { NativeBaseProvider } from 'native-base'
import React from 'react'

export const Nativebase = ({ children }: { children: React.ReactNode }) => {
    return (
        <NativeBaseProvider theme={theme}>
            {children}
        </NativeBaseProvider>
    )
}

