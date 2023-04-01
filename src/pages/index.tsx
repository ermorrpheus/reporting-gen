/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
  PDFViewer,
  pdf,
  Svg,
  G,
  Rect,
  Line,
} from "@react-pdf/renderer";

type FormData = {
  businessName: string;
  subhead?: string;
  delivery: string;
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

const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page
      size={"A4"}
      style={{
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 12,
        fontSize: 12,
        fontFamily: "AvenirNext",
      }}
    >
      <View
        fixed
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 12,
        }}
      >
        {/* Header */}
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Image
            style={{
              textAlign: "left",
              width: 80,
              height: 80,
              display: "flex",
            }}
            src="/csm-logo.png"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              paddingLeft: 18,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textTransform: "uppercase",
                color: "#8A8B8A",
              }}
            >
              {data.businessName}
            </Text>
            <Text style={{ textTransform: "uppercase", color: "#8A8B8A" }}>
              {data.subhead}
            </Text>
            <Text style={{ textTransform: "uppercase", color: "#8A8B8A" }}>
              Delivery: {data.delivery}
            </Text>
            <Text style={{ textTransform: "uppercase", color: "#8A8B8A" }}>
              Subject: {data.subject}
            </Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View style={{ paddingTop: 100 }}>
        <Text
          style={{
            color: "#A3A3A2",
            fontSize: 12,
            textAlign: "center",
            paddingBottom: 12,
          }}
        >
          OVERVIEW
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 16,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Sent
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 6 }}>
              {parseInt(data.sent).toLocaleString()}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Open Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 6 }}>
              {parseFloat(data.openRate).toFixed(1)}%
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Click Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 6 }}>
              {parseFloat(data.clickRate).toFixed(1)}%
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 16,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 11,
                textAlign: "right",
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Industry Average:
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Open Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 6 }}>
              {parseFloat(data.averageOpenRate).toFixed(1)}%
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                paddingTop: 6,
                paddingBottom: 8,
                paddingLeft: 6,
              }}
            >
              Click Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 6 }}>
              {parseFloat(data.averageClickRate).toFixed(1)}%
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 16,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {data.opens} Opens
            </Text>
            <Svg viewBox="0 0 210 130">
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="10"
                  y2="10"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="-1" y="12" style={{ fill: "#efefef", fontSize: 6 }}>
                  100
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="35"
                  y2="35"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="2" y="37" style={{ fill: "#efefef", fontSize: 6 }}>
                  75
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="60"
                  y2="60"
                  strokeWidth={1}
                  stroke="#efefef"
                />
              </G>
              <Text x="2" y="62" style={{ fill: "#efefef", fontSize: 6 }}>
                50
              </Text>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="85"
                  y2="85"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="2" y="87" style={{ fill: "#efefef", fontSize: 6 }}>
                  25
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="110"
                  y2="110"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="5" y="112" style={{ fill: "#efefef", fontSize: 6 }}>
                  0
                </Text>
              </G>
              <G>
                <Text
                  x="63"
                  y={105 - parseInt(data.openPctDesktop)}
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >{`${parseInt(data.openPctDesktop).toFixed(0)}%`}</Text>
                <Text
                  x="142"
                  y={105 - parseInt(data.openPctMobile)}
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >{`${parseInt(data.openPctMobile).toFixed(0)}%`}</Text>
              </G>
              <G>
                <Rect
                  width="40"
                  height={parseInt(data.openPctDesktop)}
                  y={110 - parseInt(data.openPctDesktop)}
                  x="50"
                  fill="#7CB3CA"
                />
              </G>
              <G>
                <Rect
                  width="40"
                  height={parseInt(data.openPctMobile)}
                  y={110 - parseInt(data.openPctMobile)}
                  x="130"
                  fill="#7CB3CA"
                />
              </G>
              <G>
                <Text
                  x="55"
                  y="125"
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >
                  Desktop
                </Text>
                <Text
                  x="138"
                  y="125"
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >
                  Mobile
                </Text>
              </G>
            </Svg>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A3A3A3",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {data.clicks} Clicks
            </Text>
            <Svg viewBox="0 0 210 130">
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="10"
                  y2="10"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="-1" y="12" style={{ fill: "#efefef", fontSize: 6 }}>
                  100
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="35"
                  y2="35"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="2" y="37" style={{ fill: "#efefef", fontSize: 6 }}>
                  75
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="60"
                  y2="60"
                  strokeWidth={1}
                  stroke="#efefef"
                />
              </G>
              <Text x="2" y="62" style={{ fill: "#efefef", fontSize: 6 }}>
                50
              </Text>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="85"
                  y2="85"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="2" y="87" style={{ fill: "#efefef", fontSize: 6 }}>
                  25
                </Text>
              </G>
              <G>
                <Line
                  x1="10"
                  x2="210"
                  y1="110"
                  y2="110"
                  strokeWidth={1}
                  stroke="#efefef"
                />
                <Text x="5" y="112" style={{ fill: "#efefef", fontSize: 6 }}>
                  0
                </Text>
              </G>
              <G>
                <Text
                  x="63"
                  y={105 - parseInt(data.clickPctDesktop)}
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >{`${parseInt(data.clickPctDesktop).toFixed(0)}%`}</Text>
                <Text
                  x="142"
                  y={105 - parseInt(data.clickPctMobile)}
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >{`${parseInt(data.clickPctMobile).toFixed(0)}%`}</Text>
              </G>
              <G>
                <Rect
                  width="40"
                  height={parseInt(data.clickPctDesktop)}
                  y={110 - parseInt(data.clickPctDesktop)}
                  x="50"
                  fill="#7CB3CA"
                />
              </G>
              <G>
                <Rect
                  width="40"
                  height={parseInt(data.clickPctMobile)}
                  y={110 - parseInt(data.clickPctMobile)}
                  x="130"
                  fill="#7CB3CA"
                />
              </G>
              <G>
                <Text
                  x="55"
                  y="125"
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >
                  Desktop
                </Text>
                <Text
                  x="138"
                  y="125"
                  style={{ fontSize: 8, fontFamily: "AvenirNext" }}
                >
                  Mobile
                </Text>
              </G>
            </Svg>
          </View>
        </View>
      </View>

      <View
        fixed
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 24,
          paddingVertical: 12,
        }}
      >
        {/* Footer */}
        <View
          style={{
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ alignSelf: "flex-end", color: "#162634" }}>
            2006 w altorfer dr &#8729; peoria, il 61615
          </Text>
          <Text style={{ alignSelf: "flex-end", color: "#7CB3CA" }}>
            centralstatesmarketing.com &#8729; 309.693.2345
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function PdfCreator() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    subhead: "",
    delivery: "",
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
        <label>Business Name:</label>
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
      <button onClick={handleClick}>Create PDF</button>
    </div>
  );
}
