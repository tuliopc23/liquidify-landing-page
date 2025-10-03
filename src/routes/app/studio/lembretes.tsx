import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { css } from "../../../../styled-system/css";
import SectionHeader from "../../../components/studio/SectionHeader";
import ReminderCard from "../../../components/studio/ReminderCard";
import EventItem from "../../../components/studio/EventItem";
import MonthThemeCard from "../../../components/studio/MonthThemeCard";
import { getReminders, getEvents, getMonthTheme } from "../../../lib/cms";
import type { Reminder, Event, MonthTheme } from "../../../lib/cms";

function LembretesPage() {
  const [reminders, setReminders] = React.useState<Reminder[]>([]);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [monthTheme, setMonthTheme] = React.useState<MonthTheme | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [remindersData, eventsData, themeData] = await Promise.all([
          getReminders(),
          getEvents(),
          getMonthTheme(),
        ]);
        setReminders(remindersData);
        setEvents(eventsData);
        setMonthTheme(themeData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const containerStyle = css({
    backgroundColor: "mb.bg",
    minHeight: "100vh",
    padding: "2.5rem 3rem",
  });

  const gridStyle = css({
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      lg: "2fr 1fr",
    },
    gap: "2rem",
  });

  return (
    <>
      <Helmet>
        <title>Lembretes & Próximos - MB Studio</title>
      </Helmet>
      <div className={containerStyle}>
        <SectionHeader title="Lembretes & Próximos" />
        {loading ? (
          <div
            className={css({
              padding: "3rem",
              textAlign: "center",
              color: "muted",
            })}
          >
            Carregando...
          </div>
        ) : (
          <div className={gridStyle}>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              })}
            >
              <h3
                className={css({
                  fontSize: "title3",
                  fontFamily: "caladea",
                  fontWeight: 600,
                })}
              >
                Lembretes
              </h3>
              {reminders.map((reminder) => (
                <ReminderCard key={reminder.id} reminder={reminder} />
              ))}

              <h3
                className={css({
                  fontSize: "title3",
                  fontFamily: "caladea",
                  fontWeight: 600,
                  marginTop: "2rem",
                })}
              >
                Próximos Eventos
              </h3>
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
            <div>{monthTheme && <MonthThemeCard theme={monthTheme} />}</div>
          </div>
        )}
      </div>
    </>
  );
}

export const Route = createFileRoute("/app/studio/lembretes")({
  component: LembretesPage,
});
