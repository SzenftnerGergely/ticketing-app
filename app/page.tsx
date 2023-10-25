import TicketCard from './(components)/TicketCard'

const Daschboard = () => {
  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Daschboard
