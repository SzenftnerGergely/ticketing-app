
type TicketPageProps = {
  params: {id: number}
}

const TicketPage = ({params}: TicketPageProps) => {
  return (
    <div>
      {params.id}
    </div>
  )
}

export default TicketPage
