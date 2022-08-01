import React from 'react'

type SectionProps = {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  return (
    <section
      className="
      relative grid h-screen max-w-padding-container place-items-center"
    >
      {children}
    </section>
  )
}

export default Section
