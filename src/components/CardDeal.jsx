import React from 'react'
import { deal } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Worried about how much your idea would cost to
    <br className='sm:block hidden'/> develop. </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Worry no more, we are the most reasonably priced vendors in the industry. We have a solution for a range of prices. If your budget is low, your only compromise is time.... Quality is always at your door.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={deal}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
