export const formatTime = (time: string): string => {
  const timeInput = time;
  const [hours, minutes] = timeInput.split(":");
  const date = new Date();
  date.setHours(parseInt(hours));
  date.setMinutes(parseInt(minutes));
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
