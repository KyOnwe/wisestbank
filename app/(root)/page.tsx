import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Wise', lastName: 'Ape', email: 'wisestape@gmail.com' };

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName}
                subtext="Access and manage your accounts and transactions efficiently" 
                />

                <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={250000.58}
                  />
            </header>

            RECENT TRANSACTIONS
        </div>
        
        <RightSideBar
          user={ loggedIn }
          transactions={[]}
          banks={[{ currentBalance: 13500.50 }, { currentBalance: 102420.29 }]} 
        />
    </section>
  )
}

export default Home