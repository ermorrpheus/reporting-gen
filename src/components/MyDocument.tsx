/* eslint-disable jsx-a11y/alt-text */
import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";
import DistributionSVG from "@/components/DistributionSVG";
import DeviceSVG from "@/components/DeviceSVG";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClickPerformanceTableCC from "@/components/ClickPerformanceTableCC";

export const MyDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page
      wrap
      size={"A4"}
      style={{
        paddingHorizontal: 24,
        paddingTop: 112,
        paddingBottom: 48,
        fontSize: 12,
        fontFamily: "AvenirNext",
      }}
    >
      <Header data={data} />
      <View>
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
              flex: 2,
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
                paddingBottom: 4,
                textAlign: "center",
              }}
            >
              Campaign Distribution
            </Text>
            <DistributionSVG data={data} />
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
                paddingBottom: 4,
                textAlign: "center",
              }}
            >
              Device Distribution
            </Text>
            <DeviceSVG data={data} />
          </View>
        </View>
      </View>

      {data.clickPerformanceData.length > 10 ? (
        <View break>
          <ClickPerformanceTableCC data={data} />
        </View>
      ) : (
        <ClickPerformanceTableCC data={data} />
      )}

      {data.graphic && (
        <View break>
          <View>
            <Image
              src={data.graphic}
              style={{
                width: "auto",
                height: "100%",
                maxHeight: 672,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
      )}

      {data.emailOpens.length > 0 && data.emailOpens[0] !== "" && (
        <View break>
          <View>
            <Text>
              <Text style={{ color: "#A3A3A2", fontSize: 12 }}>OPENS</Text>
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.emailOpens.map((email, i) => (
                <Text
                  key={i}
                  style={{
                    fontSize: 8,
                    textAlign: "left",
                    width: "33.33%",
                  }}
                >
                  {email}
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}

      {data.emailUnsubscribes.length > 0 &&
        data.emailUnsubscribes[0] !== "" && (
          <View style={{ paddingTop: 24 }}>
            <View>
              <Text>
                <Text style={{ color: "#A3A3A2", fontSize: 12 }}>
                  UNSUBSCRIBES
                </Text>
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {data.emailUnsubscribes.map((email, i) => (
                  <Text
                    key={i}
                    style={{
                      fontSize: 8,
                      textAlign: "left",
                      width: "33.33%",
                    }}
                  >
                    {email}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}

      {data.emailBounces.length > 0 && data.emailBounces[0] !== "" && (
        <View>
          <View style={{ paddingTop: 24 }}>
            <Text>
              <Text style={{ color: "#A3A3A2", fontSize: 12 }}>BOUNCES</Text>
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.emailBounces.map((email, i) => (
                <Text
                  key={i}
                  style={{
                    fontSize: 8,
                    textAlign: "left",
                    width: "33.33%",
                  }}
                >
                  {email}
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}

      <Footer />
    </Page>
  </Document>
);
