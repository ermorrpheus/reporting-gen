/* eslint-disable jsx-a11y/alt-text */
import { Font, pdf, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

import { MyDocument } from "../components/MyDocument";
import { ClickData, FormData, DataItem, EmailProvider } from "@/lib/types";
import {
  convertEmailToJSON,
  convertCCToJSON,
  convertMailchimpToJSON,
} from "@/lib/utils";
import Input from "@/components/Input";

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
    clickPerformanceData: [],
    emailOpens: [],
    emailClicks: [],
    emailUnsubscribes: [],
    emailBounces: [],
    graphic: "",
    selectedProvider: "",
  });

  
  const [rawClickPerformance, setRawClickPerformance] = useState<string>("");
  const [rawOpens, setRawOpens] = useState<string>("");
  const [rawClicks, setRawClicks] = useState<string>("");
  const [rawUnsubscribes, setRawUnsubscribes] = useState<string>("");
  const [rawBounces, setRawBounces] = useState<string>("");
  
  const [opensChecked, setOpensChecked] = useState(false);
  const [clicksChecked, setClicksChecked] = useState(false);
  const [unsubscribesChecked, setUnsubscribesChecked] = useState(false);
  const [bouncesChecked, setBouncesChecked] = useState(false);
  
  const [selectedProvider, setSelectedProvider] = useState<EmailProvider>(null);
  
  const clickPerformanceData = selectedProvider === 'constantContact'
    ? convertCCToJSON(rawClickPerformance) as ClickData[]
    : convertMailchimpToJSON(rawClickPerformance) as DataItem[];

  const handleClick = async () => {
    const mutatedFormData = {
      ...formData,
      clickPerformanceData: clickPerformanceData,
      emailOpens: convertEmailToJSON(rawOpens),
      emailClicks: convertEmailToJSON(rawClicks),
      emailUnsubscribes: convertEmailToJSON(rawUnsubscribes),
      emailBounces: convertEmailToJSON(rawBounces),
      selectedProvider: selectedProvider,
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

  const handleRawOpens = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setRawOpens(input);
  };

  const handleRawClicks = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setRawClicks(input);
  };

  const handleRawUnsubscribes = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setRawUnsubscribes(input);
  };

  const handleRawBounces = (e: { target: { value: any } }) => {
    const input = e.target.value;
    setRawBounces(input);
  };

  const handleOpensChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setOpensChecked(e.target.checked);
  };

  const handleClicksChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setClicksChecked(e.target.checked);
  };

  const handleUnsubscribesChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setUnsubscribesChecked(e.target.checked);
  };

  const handleBouncesChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setBouncesChecked(e.target.checked);
  };

  const handleProviderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProvider(e.target.id as EmailProvider);
  };

  return (
    <div className="bg-slate-50">
      <div className="flex flex-col max-w-xl mx-auto w-full gap-6 p-6 bg-white">
        <h2 className="text-xl mt-8">Information</h2>
        <hr />
        <Input
          setFormData={setFormData}
          formData={formData}
          properName={"Business Name"}
          shortName={"businessName"}
          type={"text"}
          placeholder={"i.e. Peoria Park District"}
        />
        <Input
          setFormData={setFormData}
          formData={formData}
          properName={"Campaign Name"}
          shortName={"campaignName"}
          type={"text"}
          placeholder={"January 2023 Midmonth Newsletter"}
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Deliver Date"}
            shortName={"delivery"}
            type={"date"}
            placeholder={""}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Delivery Time"}
            shortName={"time"}
            type={"time"}
            placeholder={""}
          />
        </div>
        <Input
          setFormData={setFormData}
          formData={formData}
          properName={"Subject"}
          shortName={"subject"}
          type={"text"}
          placeholder={"i.e. Join us for our event this weekend!"}
        />
        <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <span className="text-xs block font-medium text-gray-700">
            Email Provider
          </span>
          <div className="grid grid-cols-3 gap-4 mt-4 mb-2">
            <label htmlFor="constantContact">
              <input
                id="constantContact"
                name="emailProvider"
                type="radio"
                checked={selectedProvider === 'constantContact'}
                onChange={handleProviderChange}
                className="rounded-full p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="text-xs text-gray-700 ml-4">
                Constant Contact
              </span>
            </label>
            <label htmlFor="mailchimp" className="flex items-center">
              <input
                id="mailchimp"
                name="emailProvider"
                type="radio"
                checked={selectedProvider === 'mailchimp'}
                onChange={handleProviderChange}
                className="rounded-full p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="text-xs text-gray-700 ml-4">Mailchimp</span>
            </label>
          </div>
        </div>
        <div className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <p className="text-xs block font-medium text-gray-700">
            Reporting Needs (Names/Details) -{" "}
            <span className="font-normal">
              <em>Check all that apply</em>
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
            <label htmlFor="openDetails" className="flex items-center">
              <input
                id="openDetails"
                type="checkbox"
                className="rounded-md p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                checked={opensChecked}
                onChange={handleOpensChange}
              />
              <span className="text-xs text-gray-700 ml-4">Opens</span>
            </label>
            <label htmlFor="clickDetails">
              <input
                id="clickDetails"
                type="checkbox"
                className="rounded-md p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                checked={clicksChecked}
                onChange={handleClicksChange}
              />
              <span className="text-xs text-gray-700 ml-4">Clicks</span>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2 mb-4">
            <label htmlFor="unsubDetails">
              <input
                id="unsubDetails"
                type="checkbox"
                className="rounded-md p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                checked={unsubscribesChecked}
                onChange={handleUnsubscribesChange}
              />
              <span className="text-xs text-gray-700 ml-4">Unsubscribes</span>
            </label>
            <label htmlFor="bounceDetails">
              <input
                id="bounceDetails"
                type="checkbox"
                className="rounded-md p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                checked={bouncesChecked}
                onChange={handleBouncesChange}
              />
              <span className="text-xs text-gray-700 ml-4">Bounces</span>
            </label>
          </div>
        </div>
        <h2 className="text-xl mt-8">Performance</h2>
        <hr />
        <Input
          setFormData={setFormData}
          formData={formData}
          properName={"Sent"}
          shortName={"sent"}
          type={"number"}
          placeholder={"Ex. 9731"}
        />
        <div className="grid grid-cols-2 gap-6">
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Opens"}
            shortName={"opens"}
            type={"number"}
            placeholder={"Ex. 3190"}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Clicks"}
            shortName={"clicks"}
            type={"number"}
            placeholder={"Ex. 1203"}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Open Rate"}
            shortName={"openRate"}
            type={"number"}
            placeholder={"Ex. 32.8"}
            step={0.1}
            min={0}
            max={100}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Click Rate"}
            shortName={"clickRate"}
            type={"number"}
            placeholder={"Ex. 12.4"}
            step={0.1}
            min={0}
            max={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Open Rate - Industry Average"}
            shortName={"averageOpenRate"}
            type={"number"}
            placeholder={"Ex. 23.7"}
            step={0.1}
            min={0}
            max={100}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Click Rate - Industry Average"}
            shortName={"averageClickRate"}
            type={"number"}
            placeholder={"Ex. 5.1"}
            step={0.1}
            min={0}
            max={100}
          />
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
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Desktop Open Rate"}
            shortName={"openPctDesktop"}
            type={"number"}
            placeholder={"Ex. 91"}
            min={0}
            max={100}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Mobile Open Rate"}
            shortName={"openPctMobile"}
            type={"number"}
            placeholder={"Ex. 9"}
            min={0}
            max={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Desktop Click Rate"}
            shortName={"clickPctDesktop"}
            type={"number"}
            placeholder={"Ex. 56"}
            min={0}
            max={100}
          />
          <Input
            setFormData={setFormData}
            formData={formData}
            properName={"Mobile Click Rate"}
            shortName={"clickPctMobile"}
            type={"number"}
            placeholder={"Ex. 44"}
            min={0}
            max={100}
          />
        </div>
        <h2 className="text-xl mt-8">Reporting Details</h2>
        <hr />
        {opensChecked && (
          <label
            htmlFor="openEmailDetails"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Opens</span>
            <textarea
              id="openEmailDetails"
              rows={8}
              placeholder=""
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={rawOpens}
              onChange={handleRawOpens}
            />
          </label>
        )}
        {clicksChecked && (
          <label
            htmlFor="clickEmailDetails"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Clicks</span>
            <textarea
              id="clickEmailDetails"
              rows={8}
              placeholder=""
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={rawClicks}
              onChange={handleRawClicks}
            />
          </label>
        )}
        {unsubscribesChecked && (
          <label
            htmlFor="unsubscribesEmailDetails"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              Unsubscribes
            </span>
            <textarea
              id="unsubscribesEmailDetails"
              rows={8}
              placeholder=""
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={rawUnsubscribes}
              onChange={handleRawUnsubscribes}
            />
          </label>
        )}
        {bouncesChecked && (
          <label
            htmlFor="bouncesEmailDetails"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">Bounces</span>
            <textarea
              id="bouncesEmailDetails"
              rows={8}
              placeholder=""
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              value={rawBounces}
              onChange={handleRawBounces}
            />
          </label>
        )}
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
