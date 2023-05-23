import styles from './styles'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero Component
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>


    </div>
  )
}

export default App