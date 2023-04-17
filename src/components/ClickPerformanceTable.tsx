import { View, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";

export default function ClickPerformanceTable({ data }: { data: FormData }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
          Click Performance
        </Text>
        <View
          style={{
            fontSize: 8,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              width: "100%",
              paddingRight: 4,
              paddingBottom: 6,
              color: "darkgray",
            }}
          >
            <Text style={{ width: "70%" }}>URL</Text>
            <Text style={{ width: "10%", textAlign: "right" }}>Clicks</Text>
            <Text style={{ width: "10%", textAlign: "right", paddingRight: 4 }}>
              Rate
            </Text>
          </View>
          {Number.isNaN(data.clickPerformance[0].clicks) ? (
            <View style={{ paddingBottom: 8 }}>
              <Text style={{ textAlign: "center" }}>No Clicks Available</Text>
            </View>
          ) : (
            data.clickPerformance.map((row, i) => (
              <View
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 30,
                  width: "100%",
                  paddingRight: 4,
                  paddingBottom: 6,
                  fontSize: 10,
                }}
              >
                <Text style={{ width: "70%" }}>{row.url}</Text>
                <Text style={{ width: "10%", textAlign: "right" }}>
                  {row.clicks}
                </Text>
                <Text
                  style={{
                    width: "10%",
                    textAlign: "right",
                    paddingRight: 4,
                  }}
                >
                  {row.percentage}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>
    </View>
  );
}
