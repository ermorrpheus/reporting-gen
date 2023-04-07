export type FormData = {
  businessName: string;
  campaignName: string;
  delivery: string;
  time: string;
  subject: string;
  sent: string;
  opens: string;
  clicks: string;
  openRate: string;
  openPctDesktop: string;
  openPctMobile: string;
  clickRate: string;
  clickPctDesktop: string;
  clickPctMobile: string;
  averageOpenRate: string;
  averageClickRate: string;
  clickPerformance: ClickData[];
};

export type ClickData = {
  url: string;
  clicks: number;
  percentage: string;
};
