import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Boost Your Product’s Success </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Leverage our tools to streamline your idea.
        Experience the difference our technology can make in your business.
        {/* Our technology makes it easy to collaborate and achieve your project goals. */}
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
