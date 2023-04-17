/* eslint-disable jsx-a11y/alt-text */
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";
import OpenSVG from "@/components/OpenSVG";
import CloseSVG from "@/components/CloseSVG";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClickPerformanceTable from "@/components/ClickPerformanceTable";

export const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page
      wrap
      size={"A4"}
      style={{
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 12,
        fontSize: 12,
        fontFamily: "AvenirNext",
      }}
    >
      <Header data={data} />
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
              borderColor: "#EFEFEF",
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
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 12,
              }}
            >
              Sent
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 12 }}>
              {parseInt(data.sent).toLocaleString()}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#EFEFEF",
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
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 12,
              }}
            >
              Open Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 12 }}>
              {parseFloat(data.openRate).toFixed(1)}%
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#EFEFEF",
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
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 12,
              }}
            >
              Click Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 12 }}>
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
              borderColor: "#EFEFEF",
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
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 12,
              }}
            >
              Open Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 12 }}>
              {parseFloat(data.averageOpenRate).toFixed(1)}%
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#EFEFEF",
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
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 12,
              }}
            >
              Click Rate
            </Text>
            <Text style={{ fontSize: 28, paddingLeft: 12 }}>
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
              borderColor: "#EFEFEF",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingTop: 12,
              paddingHorizontal: 12,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                paddingBottom: 8,
                textAlign: "center",
              }}
            >
              {parseInt(data.opens).toLocaleString()} Opens
            </Text>
            <OpenSVG data={data} />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#EFEFEF",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingTop: 12,
              paddingHorizontal: 12,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                paddingBottom: 8,
                textAlign: "center",
              }}
            >
              {parseInt(data.clicks).toLocaleString()} Clicks
            </Text>
            <CloseSVG data={data} />
          </View>
        </View>
      </View>
      {data.clickPerformance.length > 10 ? (
        <View break style={{ paddingTop: 90 }}>
          <ClickPerformanceTable data={data} />
        </View>
      ) : (
        <ClickPerformanceTable data={data} />
      )}

      {data.graphic && (
        <View break>
          <View>
            <Image
              src={data.graphic}
              style={{
                width: "auto",
                height: "100%",
                maxHeight: 760,
                objectFit: "contain",
                paddingTop: 90,
              }}
            />
          </View>
        </View>
      )}
      <Footer />
    </Page>
  </Document>
);
