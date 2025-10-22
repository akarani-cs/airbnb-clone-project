import React from 'react'
import Types from '../components/types'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <>

    <Types />
    <HeroSection />

    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="text-gray-600">Welcome to the Airbnb clone home page.</p>
    </main>

    </>
  )
}
