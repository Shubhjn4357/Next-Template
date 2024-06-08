import React from 'react'
interface publicLayoutProps{
    children:React.ReactNode
}
const publicLayout = ({children}:publicLayoutProps) => {
  return (
    {children}
  )
}

export default publicLayout