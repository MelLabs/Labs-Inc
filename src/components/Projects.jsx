import styles, { layout } from '../style'
import React from 'react'
import { deal, tyag } from '../assets'
import Button from './Button'




export default function Projects() {
  return (
    <div>
      <section className="">
        <h1 className={styles.heading2}>
          Our Projects
        </h1>
        <p className={`${styles.paragraph}  mt-5`}>
          This profound insight guides our comprehensive strategy — from meticulous research and strategic planning to the seamless execution of brand development and website or product deployment.
        </p>

        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              alt="Testimonial"
              src={tyag}
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                Tyag
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                “
                Reconnect with your spiritual essence using the Tyag app – your ultimate companion for a mindful and disciplined spiritual journey. The app created for freelancing soon to be live in play store and App Store.

                ”
              </p>


            </div>
          </div>
        </div>
      </section>
    </div>



  )
}

