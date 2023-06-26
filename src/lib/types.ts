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
  clickPerformanceData: ClickData[] | DataItem[];
  emailOpens: string[];
  emailClicks: string[];
  emailUnsubscribes: string[];
  emailBounces: string[];
  graphic: string;
  selectedProvider: string | null;
};

export type ClickData = {
  url: string;
  clicks: number;
  percentage: string;
};

export interface DataItem {
  url: string;
  clicks: string;
  percentage: string;
}

export type EmailProvider = 'constantContact' | 'mailchimp' | null;