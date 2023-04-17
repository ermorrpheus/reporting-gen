/* eslint-disable jsx-a11y/alt-text */
import { Font, pdf, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

import { MyDocument } from "../components/MyDocument";
import { ClickData, FormData } from "@/lib/types";
import { convertToJSON } from "@/lib/utils";

Font.register({
  family: "AvenirNext",
  fonts: [
    {
      src: "./AvenirNextLTPro-Regular.otf",
    },
    {
      src: "./AvenirNextLTPro-Bold.otf",
      fontWeight: "bold",
    },
    {
      src: "./AvenirNextLTPro-It.otf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

export default function PdfCreator() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    campaignName: "",
    delivery: "",
    time: "",
    subject: "",
    sent: "",
    opens: "",
    clicks: "",
    openRate: "",
    openPctDesktop: "",
    openPctMobile: "",
    clickRate: "",
    clickPctDesktop: "",
    clickPctMobile: "",
    averageOpenRate: "",
    averageClickRate: "",
    clickPerformance: [],
    graphic: "",
  });
  const [rawClickPerformance, setRawClickPerformance] = useState<string>("");

  const handleClick = async () => {
    const mutatedFormData = {
      ...formData,
      clickPerformance: convertToJSON(rawClickPerformance) as ClickData[],
    };
    const newPDF = await pdf(<MyDocument data={mutatedFormData} />);
    const blob = await newPDF.toBlob();
    const url = URL.createObjectURL(blob);
    console.log(mutatedFormData);
    window.open(url, "_blank");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, graphic: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickPerformance = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setRawClickPerformance(input);
  };

  return (
    <div className="bg-slate-50">
      <div className="flex flex-col max-w-xl mx-auto gap-6 p-6 bg-white">
        <h2 className="text-xl mt-8">Information</h2>
        <hr />
        <label
          htmlFor="business_name"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            Business Name
          </span>
          <input
            type="text"
            id="business_name"
            placeholder="i.e. Dr. Robinson"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
          />
        </label>
        <label
          htmlFor="campaignName"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            Campaign Name
          </span>
          <input
            type="text"
            id="campaignName"
            placeholder="January 2023 Newsletter"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={formData.campaignName}
            onChange={(e) =>
              setFormData({ ...formData, campaignName: e.target.value })
            }
          />
        </label>
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="delivery"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Delivery Date
            </span>
            <input
              type="date"
              id="delivery"
              placeholder="i.e. Dr. Robinson"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.delivery}
              onChange={(e) =>
                setFormData({ ...formData, delivery: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="time"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Delivery Time
            </span>
            <input
              type="time"
              id="time"
              placeholder="10:00am"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </label>
        </div>
        <label
          htmlFor="subject"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">Subject</span>
          <input
            type="text"
            id="subject"
            placeholder="Ex. Join us for our event this weekend!"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </label>
        <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs font-medium text-gray-700">
            Reporting Needs
          </span>
        </div>
        <h2 className="text-xl mt-8">Performance</h2>
        <hr />
        <label
          htmlFor="sent"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">Sent</span>
          <input
            type="number"
            id="sent"
            placeholder="Ex. 9731"
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={formData.sent}
            onChange={(e) => setFormData({ ...formData, sent: e.target.value })}
          />
        </label>
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="opens"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Opens</span>
            <input
              type="number"
              id="opens"
              placeholder="Ex. 3190"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.opens}
              onChange={(e) =>
                setFormData({ ...formData, opens: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="clicks"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Clicks</span>
            <input
              type="number"
              id="clicks"
              placeholder="Ex. 1203"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.clicks}
              onChange={(e) =>
                setFormData({ ...formData, clicks: e.target.value })
              }
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="openRate"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Open Rate</span>
            <input
              type="number"
              step={0.1}
              min={0}
              max={100}
              id="openRate"
              placeholder="Ex. 32.8"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.openRate}
              onChange={(e) =>
                setFormData({ ...formData, openRate: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="clickRate"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Click Rate
            </span>
            <input
              type="number"
              step={0.1}
              min={0}
              max={100}
              id="clickRate"
              placeholder="Ex. 12.4"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.clickRate}
              onChange={(e) =>
                setFormData({ ...formData, clickRate: e.target.value })
              }
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="averageOpenRate"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Open Rate - Industry Average
            </span>
            <input
              type="number"
              step={0.1}
              min={0}
              max={100}
              id="averageOpenRate"
              placeholder="Ex. 23.7"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.averageOpenRate}
              onChange={(e) =>
                setFormData({ ...formData, averageOpenRate: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="averageClickRate"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Click Rate - Industry Average
            </span>
            <input
              type="number"
              step={0.1}
              min={0}
              max={100}
              id="averageClickRate"
              placeholder="Ex. 5.1"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.averageClickRate}
              onChange={(e) =>
                setFormData({ ...formData, averageClickRate: e.target.value })
              }
            />
          </label>
        </div>
        <label
          htmlFor="clickPerformance"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">
            Click Performance
          </span>
          <textarea
            id="clickPerformance"
            rows={8}
            placeholder=""
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            value={rawClickPerformance}
            onChange={handleClickPerformance}
          />
        </label>
        <label
          htmlFor="graphic"
          className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <span className="text-xs font-medium text-gray-700">Email</span>
          <input
            id="graphic"
            type="file"
            placeholder=""
            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            onChange={handleFileChange}
          />
        </label>
        <h2 className="text-xl mt-8">Reporting</h2>
        <hr />
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="openPctDesktop"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Desktop Open Rate
            </span>
            <input
              type="number"
              min={0}
              max={100}
              id="openPctDesktop"
              placeholder="Ex. 91"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.openPctDesktop}
              onChange={(e) =>
                setFormData({ ...formData, openPctDesktop: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="openPctMobile"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Mobile Open Rate
            </span>
            <input
              type="number"
              min={0}
              max={100}
              id="openPctMobile"
              placeholder="Ex. 9"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.openPctMobile}
              onChange={(e) =>
                setFormData({ ...formData, openPctMobile: e.target.value })
              }
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <label
            htmlFor="clickPctDesktop"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Desktop Click Rate
            </span>
            <input
              type="number"
              min={0}
              max={100}
              id="clickPctDesktop"
              placeholder="Ex. 56"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.clickPctDesktop}
              onChange={(e) =>
                setFormData({ ...formData, clickPctDesktop: e.target.value })
              }
            />
          </label>
          <label
            htmlFor="clickPctMobile"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Mobile Click Rate
            </span>
            <input
              type="number"
              min={0}
              max={100}
              id="clickPctMobile"
              placeholder="Ex. 44"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={formData.clickPctMobile}
              onChange={(e) =>
                setFormData({ ...formData, clickPctMobile: e.target.value })
              }
            />
          </label>
        </div>
        <h2 className="text-xl mt-8">Reporting Details</h2>
        <hr />
        <button
          className="bg-slate-700 px-4 py-2 text-white max-w-fit hover:bg-slate-900 self-center"
          onClick={handleClick}
        >
          Create PDF
        </button>
      </div>
    </div>
  );
}
