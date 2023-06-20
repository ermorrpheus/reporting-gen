import { ClickData, DataItem } from "@/lib/types";

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

export const convertCCToJSON = (inputString: string): ClickData[] => {
  const lines = inputString.trim().split(/\r?\n/);
  
  const result = lines.map((line) => {
    const [url, clicks, percentage] = line.trim().split(/\s+/);
    const truncatedUrl =
      url.length > 50 ? url.trim().substring(0, 50) + "..." : url.trim();
    return {
      url: truncatedUrl,
      clicks: parseInt(clicks),
      percentage,
    };
  });
  return result;
};

export const convertMailchimpToJSON = ({
  data,
}: {
  data: string;
}): DataItem[] => {
  const lines = data.trim().split(/\r?\n/);

  return lines.map((line) => {
    const [url, clicks, percentage] = line.split(/\s+/);
    const truncatedUrl =
      url.length > 50 ? url.trim().substring(0, 50) + "..." : url.trim();

    return {
      url: truncatedUrl,
      clicks: clicks,
      percentage: percentage,
    } as DataItem;
  });
};

export const convertEmailToJSON = (emailString: string): string[] => {
  const emailArray = emailString.split("\n");
  return emailArray;
};

export const convertEmailToJSON2 = (emailString: string): string[] => {
  const emailArray = emailString.split("\n");
  return emailArray;
};