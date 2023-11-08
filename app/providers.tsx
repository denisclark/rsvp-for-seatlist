'use client'

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { NextUIProvider } from '@nextui-org/react'

interface Props {
  children: ReactNode
}

const Providers = (props: Props) => {
  return (
    <SessionProvider>
      <NextUIProvider>{props.children}</NextUIProvider>
    </SessionProvider>
  )
}

export default Providers
