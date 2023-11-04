'use client'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession();

  return (
   <>
    isUser Login: {session?.user?.name ?? 'Not Login'}
   </>
  )
}
