import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Pill from '@/components/Pill'


const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Button title="Sample Button" styles="bg-blue-500 text-white" />

      <Pill title="Sample Pill" />
      
      <Card />
    </div>
  )
}

export default Landing