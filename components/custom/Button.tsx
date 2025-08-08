'use client'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

const CustomButton = () => {
  return (
    <Button onClick={() => {redirect('/contact')}}
        size="lg"
        variant="outline"
        className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent w-full sm:w-auto"
    >
        Contact Us
    </Button>
  )
}

export default CustomButton