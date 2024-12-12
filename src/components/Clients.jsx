import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} `}>
            <img
              src={client.logo}
              alt='client'
              className=' w-20 object-contain'
            />
          </div>
        ))}
        
      </div>
    </section>
  )
}

export default Clients
