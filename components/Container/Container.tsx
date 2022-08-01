import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen w-full bg-dark-grey bg-upper-wave bg-cover px-8">
      <main className="mx-auto flex max-w-full-container flex-col items-center justify-between">
        {children}
      </main>
    </div>
  )
}

export default Container
