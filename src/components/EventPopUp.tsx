import React from "react"
import PopUp from "../shared/ui/PopUp"
import FormField from "../shared/ui/FormField"
import Button from "../shared/ui/Button"
import { IEvent } from "../shared/types/event"
import useEventForm from "../hooks/useEventForm"

type EventPopUpProps = {
  event?: IEvent
  onClose: () => void
  onSave: (updatedEvent: IEvent) => void
  onDelete: (eventId: string) => void
  isNewEvent?: boolean
}

const EventPopUp: React.FC<EventPopUpProps> = ({
  event,
  onClose,
  onSave,
  isNewEvent,
  onDelete,
}) => {
  const { formData, error, handleChange, handleSubmit } = useEventForm({
    event: event || {
      id: "",
      name: "",
      notes: "",
      start: new Date(),
      end: new Date(),
      color: "#000000",
    },
    onSave,
    onClose,
  })

  return (
    <PopUp onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold mb-4">{isNewEvent ? "Create Event" : "Edit Event"}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <FormField
          label="Title"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Notes"
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
        <FormField
          label="Start Date & Time"
          type="datetime-local"
          name="start"
          value={formData.start}
          onChange={handleChange}
          required
        />
        <FormField
          label="End Date & Time"
          type="datetime-local"
          name="end"
          value={formData.end}
          onChange={handleChange}
          required
        />
        <FormField
          label="Color"
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <div className={`w-full flex space-x-2 ${isNewEvent ? "justify-end" : 'justify-between'}`}>
          {event && !isNewEvent && (
            <Button onClick={() => onDelete(event?.id)} className="bg-red-600 hover:bg-red-700">
              Delete
            </Button>
          )}
          <div className="flex gap-3">
            <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
              Cancel
            </Button>
            <Button type="submit">{isNewEvent ? "Create" : "Save"}</Button>
          </div>
        </div>
      </form>
    </PopUp>
  )
}

export default EventPopUp
