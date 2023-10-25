import TicketForm from "@/app/(components)/TicketForm"

type TicketPageProps = {
  params: {id: number}
}

const TicketPage = ({params}: TicketPageProps) => {
  return (
    <>
      <TicketForm />
    </>
  )
}

export default TicketPage
