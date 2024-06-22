import React from 'react'
import { Button } from '@components/ui/button'
const hero = () => {
  return (
    <div>
      <section className="shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Ai Powered Form Builder 
              <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 sm:block"> make forms in seconds . </strong>
            </h1>

            <p className="mt-4 sm:text-md/relaxed">
            Create tailored forms effortlessly with our custom templates. Upgrade to premium for advanced features and elevate your form-building experience.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium shadow bg-primary text-white focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
                >
                Get Started
              </a>
              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:bg-primary hover:text-white focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default hero
