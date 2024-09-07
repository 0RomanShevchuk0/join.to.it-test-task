import { useState } from "react"
import { IEvent } from "../shared/types/event"
import { initialEvents } from "../mockData"

type UseCalendarReturnType = {
  events: IEvent[]
  selectedEvent: IEvent | null
  isCreating: boolean
  handleEventClick: (event: IEvent) => void
  handleClosePopup: () => void
  handleSave: (updatedEvent: IEvent) => void
  eventPropGetter: (event: IEvent) => object
  handleCreateEvent: () => void
  handleDeleteEvent: (eventId: string) => void
}

const useCalendar = (): UseCalendarReturnType => {
  const [events, setEvents] = useState<IEvent[]>(initialEvents)
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null)
  const [isCreating, setIsCreating] = useState(false)

  const handleEventClick = (event: IEvent) => {
    setSelectedEvent(event)
  }

  const handleClosePopup = () => {
    setSelectedEvent(null)
  }

  const handleSave = (updatedEvent: IEvent) => {
    if (isCreating) {
      setEvents([...events, updatedEvent])
      setIsCreating(false)
    } else {
      setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)))
    }
    handleClosePopup()
  }

  const handleCreateEvent = () => {
    setIsCreating(true)
    setSelectedEvent({
      id: Date.now().toString(),
      name: "",
      notes: "",
      start: new Date(),
      end: new Date(),
      color: "#000000",
    })
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
    handleClosePopup()
  }

  const eventPropGetter = (event: IEvent) => {
    return {
      style: {
        backgroundColor: event.color,
        border: "none",
      },
    }
  }

  return {
    events,
    selectedEvent,
    handleEventClick,
    handleClosePopup,
    handleSave,
    eventPropGetter,
    handleCreateEvent,
    handleDeleteEvent,
    isCreating,
  }
}

export default useCalendar
