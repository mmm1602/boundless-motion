import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const manualEvents = [
      {
        id: "1",
        title: "🚀 Hyperloop Workshop",
        start: "2025-06-10",
        description: "Build and simulate magnetic levitation systems.",
      },
      {
        id: "2",
        title: "🛸 Drone Design Sprint",
        start: "2025-07-15",
        description: "Collaborate on a manned drone prototype.",
      },
      {
        id: "3",
        title: "📦 Club Showcase",
        start: "2025-08-20",
        description: "Demo projects at UCF Engineering Expo.",
      },
    ];

    setEvents(manualEvents);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-white">
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">📅 Upcoming Events</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Stay up to date with Boundless Motion’s workshops, showcases, and sprint events.
        </p>
      </div>

      <div className="bg-gray-900/50 rounded-xl shadow-lg p-4 overflow-hidden">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          eventContent={renderEventContent}
          headerToolbar={{
            start: "title",
            center: "",
            end: "prev,next",
          }}
        />
      </div>
    </section>
  );
}

// Custom event renderer with emoji and subtext
function renderEventContent(eventInfo: any) {
  return (
    <div className="text-sm leading-snug">
      <div className="font-semibold">{eventInfo.event.title}</div>
      {eventInfo.event.extendedProps.description && (
        <div className="text-xs text-gray-400">{eventInfo.event.extendedProps.description}</div>
      )}
    </div>
  );
}
