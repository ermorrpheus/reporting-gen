/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";

type FormData = {
  name: string;
  email: string;
  phone: string;
  delivery: string;
  subject: string;
};

const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page size={"A4"} style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 14 }}>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{
                textAlign: "left",
                width: 60,
                height: 60,
                display: "flex",
              }}
              src="/Profile_Picture.png" />
            <View style={{ display: "flex", flexDirection: "column", paddingLeft: 12 }}>
              <Text style={{ textAlign: "center" }}>
                Central States Media
              </Text>
              <Text style={{ textAlign: "center" }}>
                Email Delivery: {data.delivery}
              </Text>
              <Text style={{ textAlign: "center" }}>
                Email Subject: {data.subject}
              </Text>
            </View>
          </View>
          <View>
            <Text>Name: {data.name}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Phone: {data.phone}</Text>
          </View>
        </View>
        <View style={{ alignSelf: 'flex-end'}}>
          <Text style={{ textAlign: "center" }}>My Company Footer</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function PdfCreator() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    delivery: "",
    subject: "",
  });

  const handleClick = async () => {
    const newPDF = await pdf(<MyDocument data={formData} />);
    const blob = await newPDF.toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        padding: 24,
        display: "flex",
        flexDirection: "column",
        maxWidth: 600,
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        gap: 24,
      }}
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label>Delivery:</label>
        <input
          type="text"
          value={formData.delivery}
          onChange={(e) =>
            setFormData({ ...formData, delivery: e.target.value })
          }
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
      <button onClick={handleClick}>Create PDF</button>
    </div>
  );
}
