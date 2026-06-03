export const OPENING_HOURS = {
  openHour: 12,
  openMinute: 0,
  closeHour: 21,
  closeMinute: 0,
  /** Tuesday = closed (Europe/Berlin) */
  closedWeekday: 2,
  timeZone: "Europe/Berlin",
} as const;

type BerlinTime = {
  weekday: number;
  hour: number;
  minute: number;
  minutesOfDay: number;
};

function getBerlinTime(date = new Date()): BerlinTime {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: OPENING_HOURS.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekdayLabel = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  return {
    weekday: weekdayMap[weekdayLabel] ?? 1,
    hour,
    minute,
    minutesOfDay: hour * 60 + minute,
  };
}

function formatTime(hour: number, minute: number): string {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export type OpeningStatus =
  | { state: "open"; until: string }
  | { state: "closed"; nextOpen: string }
  | { state: "closed_today" };

export function getOpeningStatus(now = new Date()): OpeningStatus {
  const { weekday, minutesOfDay } = getBerlinTime(now);
  const openAt =
    OPENING_HOURS.openHour * 60 + OPENING_HOURS.openMinute;
  const closeAt =
    OPENING_HOURS.closeHour * 60 + OPENING_HOURS.closeMinute;
  const openLabel = formatTime(
    OPENING_HOURS.openHour,
    OPENING_HOURS.openMinute
  );
  const closeLabel = formatTime(
    OPENING_HOURS.closeHour,
    OPENING_HOURS.closeMinute
  );

  if (weekday === OPENING_HOURS.closedWeekday) {
    return { state: "closed_today" };
  }

  if (minutesOfDay >= openAt && minutesOfDay < closeAt) {
    return { state: "open", until: closeLabel };
  }

  return { state: "closed", nextOpen: openLabel };
}

export function scheduleLabel(): string {
  return `${formatTime(OPENING_HOURS.openHour, OPENING_HOURS.openMinute)} – ${formatTime(OPENING_HOURS.closeHour, OPENING_HOURS.closeMinute)}`;
}
