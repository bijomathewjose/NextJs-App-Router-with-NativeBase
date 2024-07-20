'use client'
import { Text, View } from 'native-base'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <View minH={"100vh"} minW={"100vw"} bg={"blue.100"} justifyContent={"center"} alignItems={"center"}>
            <Text>some</Text>
            <Image width={200} height={200} src={"/next.svg"} alt="broken" />
        </View>
    )
}

export default page