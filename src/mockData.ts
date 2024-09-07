import { IEvent } from "./shared/types/event"

export const initialEvents: IEvent[] = [
  {
    id: "1",
    name: "Team Meeting",
    start: new Date(2024, 8, 10, 10, 0),
    end: new Date(2024, 8, 10, 11, 0),
    notes: "Discuss project updates and next steps.",
    color: "#4f32e2",
  },
  {
    id: "2",
    name: "Lunch with Client",
    start: new Date(2024, 8, 11, 12, 30),
    end: new Date(2024, 8, 11, 13, 30),
    notes: "Discuss new contract terms and deliverables.",
    color: "#4f32e2",
  },
  {
    id: "3",
    name: "Code Review",
    start: new Date(2024, 8, 12, 15, 0),
    end: new Date(2024, 8, 12, 16, 0),
    notes: "Review the latest code changes with the team.",
    color: "#4f32e2",
  },
  {
    id: "4",
    name: "Project Deadline",
    start: new Date(2024, 8, 15, 9, 0),
    end: new Date(2024, 8, 15, 17, 0),
    notes: "Submit the final version of the project report.",
    color: "#4f32e2",
  },
]
