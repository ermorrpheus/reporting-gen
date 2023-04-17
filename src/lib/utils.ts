import { ClickData } from "@/lib/types";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("en-US", options);
};

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

export const convertToJSON = (inputString: string): ClickData[] => {
  const lines = inputString.trim().split(/\r?\n/);
  const result = lines.map((line) => {
    const [url, clicks, percentage] = line.trim().split(/\s+/);
    return {
      url,
      clicks: parseInt(clicks),
      percentage,
    };
  });
  return result;
};
