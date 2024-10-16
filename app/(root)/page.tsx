import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.name || 'Guest'}
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