import { ClickData } from "@/lib/types";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
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

export const convertToJSON = (inputData: string): ClickData[] => {
  const lines = inputData.trim().split("\n");
  return lines.map((line) => {
    const [url, clicks, percentage] = line.trim().split("\t");
    return {
      url,
      clicks: parseInt(clicks),
      percentage,
    };
  });
};