'use client'
import { HStack, Text } from "native-base";

export default function Home() {
  return (
    <main>
      <HStack margin={50}>
        <Text>
          Test Content
          <div style={{ background: 'red' }}>
            home
          </div>
        </Text>
      </HStack>
      <Text style={{ fontFamily: "Arial" }}>
        Get started by editing&nbsp;
      </Text>
    </main >
  );
}
