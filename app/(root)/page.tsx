import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Wise', lastName: "Ape"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName}
                subtext="Access and manage your accounts and transactions efficiently" />
            </header>
        </div>
    </section>
  )
}

export default Home