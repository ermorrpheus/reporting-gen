/* eslint-disable jsx-a11y/alt-text */
import { Font, pdf, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";

import { MyDocument } from "../components/MyDocument";

export type FormData = {
  businessName: string;
  subhead?: string;
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
};

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
    subhead: "",
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
  });

  const handleClick = async () => {
    const newPDF = await pdf(<MyDocument data={formData} />);
    const blob = await newPDF.toBlob();
    const url = URL.createObjectURL(blob);
    {
      console.log(formData.time);
    }
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col max-w-xl mx-auto gap-6 p-6">
      <div>
        <label className="">Business Name:</label>
        <input
          type="text"
          value={formData.businessName}
          onChange={(e) =>
            setFormData({ ...formData, businessName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Email Name:</label>
        <input
          type="text"
          value={formData.subhead}
          onChange={(e) =>
            setFormData({ ...formData, subhead: e.target.value })
          }
        />
      </div>
      <div>
        <label>Delivery:</label>
        <input
          type="date"
          value={formData.delivery}
          onChange={(e) =>
            setFormData({ ...formData, delivery: e.target.value })
          }
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </div>
      <div>
        <label>Emails Sent:</label>
        <input
          type="text"
          value={formData.sent}
          onChange={(e) => setFormData({ ...formData, sent: e.target.value })}
        />
      </div>
      <div>
        <label>Opens:</label>
        <input
          type="text"
          value={formData.opens}
          onChange={(e) => setFormData({ ...formData, opens: e.target.value })}
        />
      </div>
      <div>
        <label>Clicks:</label>
        <input
          type="text"
          value={formData.clicks}
          onChange={(e) => setFormData({ ...formData, clicks: e.target.value })}
        />
      </div>
      <div>
        <label>Open Rate:</label>
        <input
          type="text"
          value={formData.openRate}
          onChange={(e) =>
            setFormData({ ...formData, openRate: e.target.value })
          }
        />
      </div>
      <div>
        <label>Click Rate:</label>
        <input
          type="text"
          value={formData.clickRate}
          onChange={(e) =>
            setFormData({ ...formData, clickRate: e.target.value })
          }
        />
      </div>
      <div>
        <label>Average Open Rate:</label>
        <input
          type="text"
          value={formData.averageOpenRate}
          onChange={(e) =>
            setFormData({ ...formData, averageOpenRate: e.target.value })
          }
        />
      </div>
      <div>
        <label>Average Click Rate:</label>
        <input
          type="text"
          value={formData.averageClickRate}
          onChange={(e) =>
            setFormData({ ...formData, averageClickRate: e.target.value })
          }
        />
      </div>
      <div>
        <label>Opens Desktop:</label>
        <input
          type="text"
          value={formData.openPctDesktop}
          onChange={(e) =>
            setFormData({ ...formData, openPctDesktop: e.target.value })
          }
        />
      </div>
      <div>
        <label>Opens Mobile:</label>
        <input
          type="text"
          value={formData.openPctMobile}
          onChange={(e) =>
            setFormData({ ...formData, openPctMobile: e.target.value })
          }
        />
      </div>
      <div>
        <label>Click Desktop:</label>
        <input
          type="text"
          value={formData.clickPctDesktop}
          onChange={(e) =>
            setFormData({ ...formData, clickPctDesktop: e.target.value })
          }
        />
      </div>
      <div>
        <label>Click Mobile:</label>
        <input
          type="text"
          value={formData.clickPctMobile}
          onChange={(e) =>
            setFormData({ ...formData, clickPctMobile: e.target.value })
          }
        />
      </div>
      <button
        className="bg-slate-700 px-4 py-2 text-white max-w-fit hover:bg-slate-900"
        onClick={handleClick}
      >
        Create PDF
      </button>
    </div>
  );
}
