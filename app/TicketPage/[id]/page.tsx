import TicketForm from "@/app/(components)/TicketForm"

const getTicketbyId = async (id: string) =>{
    const res = await fetch(`http://localthost:3000/api/Tickets/${id}`, {
      cache: 'no-store'
    })

    if(!res.ok) {
      throw new Error("Failed to get ticket.")
    }

    return res.json()
}

type Props = {
  params: {id: string}
}

const TicketPage = async ({params}: Props) => {
  const EDITMODE = params.id === "new" ? false : true
  let updateTicketData = {}

  if(EDITMODE) {
    updateTicketData = await getTicketbyId(params.id)
  }

  return (
    <>
      <TicketForm />
    </>
  )
}

export default TicketPage
