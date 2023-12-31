import { Key } from 'react';
import TicketCard from './(components)/TicketCard'
import { Ticket } from './(models)/types';

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: "no-store"
    })

    return res.json()
  } catch (error) {
    console.log("Failed to get tickets", error);

  }
}

const Daschboard = async () => {
  const { tickets } = await getTickets()

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className='p-5'>
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className='mb-4'>
            <h2>{uniqueCategory}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
              {tickets.filter((ticket: { category: string; }) => ticket.category === uniqueCategory).map((filteredTicket: Ticket, _index: string) => (
                <TicketCard id={_index} key={_index} ticket={filteredTicket} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Daschboard
