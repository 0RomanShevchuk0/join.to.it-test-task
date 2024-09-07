import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import EventPopUp from "./EventPopUp"
import useCalendar from "../hooks/useCalendar"
import Button from "../shared/ui/Button"

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const {
    events,
    selectedEvent,
    isCreating,
    handleEventClick,
    handleClosePopup,
    handleSave,
    eventPropGetter,
    handleCreateEvent,
    handleDeleteEvent,
  } = useCalendar()

  return (
    <div className="h-full">
      <Button onClick={handleCreateEvent}>Create Event</Button>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="name"
        views={["month", "week", "day"]}
        defaultView="month"
        onSelectEvent={handleEventClick}
        eventPropGetter={eventPropGetter}
      />
      {selectedEvent && (
        <EventPopUp
          onClose={handleClosePopup}
          event={selectedEvent}
          onSave={handleSave}
          onDelete={handleDeleteEvent}
          isNewEvent={isCreating}
        />
      )}
    </div>
  )
}

export default MyCalendar
