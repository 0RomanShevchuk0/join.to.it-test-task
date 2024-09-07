import { useState } from "react"
import { IEvent } from "../shared/types/event"
import { formatDateToDatetimeLocal, parseDatetimeLocalToDate } from "../shared/utils/dateUtils"

interface UseEventFormProps {
  event: IEvent
  onSave: (updatedEvent: IEvent) => void
  onClose: () => void
}

const useEventForm = ({ event, onSave, onClose }: UseEventFormProps) => {
  const [formData, setFormData] = useState({
    name: event.name || "",
    notes: event.notes || "",
    start: formatDateToDatetimeLocal(event.start),
    end: formatDateToDatetimeLocal(event.end),
    color: event.color || "#000000",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateDates = (start: Date, end: Date) => {
    const now = new Date()
    if (start < now || end < now) {
      return "Dates cannot be in the past."
    }
    if (start >= end) {
      return "Start date and time must be before end date and time."
    }
    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { start, end } = formData
    const startDate = parseDatetimeLocalToDate(start)
    const endDate = parseDatetimeLocalToDate(end)

    const errorMsg = validateDates(startDate, endDate)
    if (errorMsg) {
      setError(errorMsg)
      return
    }

    setError("")
    onSave({
      ...event,
      ...formData,
      start: startDate,
      end: endDate,
    })
    onClose()
  }

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  }
}

export default useEventForm
