"use client"

import { useRouter } from "next/navigation"
import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react"

type StartingTicketData = {
    title: string;
    description: string;
    priority: number;
    progress: number;
    status: string;
    category: string;
}

const TicketForm = () => {

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {

    }

    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem"
    }

    const [formData, setFormData] = useState<StartingTicketData>(startingTicketData)

    return (
        <div className="flex justify-center">
            <form
                className="flex flex-col gap-3 w-1/2"
                method="post"
                onSubmit={handleSubmit}
            >
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    value={formData.title}
                />
                <label>Description</label>
                <textarea
                    id="desciption"
                    name="desciption"
                    onChange={handleChange}
                    required={true}
                    value={formData.description}
                    rows={5}
                />

                <label>Category</label>
                <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange}
                >
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>

                <label>Priority</label>
                <div>
                    <input 
                        type="radio" 
                        id="priority-1" 
                        name="priority" 
                        onChange={handleChange} 
                        value={1}
                        checked={formData.priority == 1}
                    />
                </div>
            </form>
        </div>
    )
}

export default TicketForm
