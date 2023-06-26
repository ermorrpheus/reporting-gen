import { View, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";

export default function ClickPerformanceTableCC({ data }: { data: FormData }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
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
            <Text style={{ width: "65%" }}>URL</Text>
            <Text style={{ width: "15%", textAlign: "right" }}>
              {data.selectedProvider === 'constantContact' ? 'Unique Clicks' : 'Total Clicks'}
            </Text>
            <Text style={{ width: "15%", textAlign: "right", paddingRight: 4 }}>
            {data.selectedProvider === 'constantContact' ? 'Distribution' : 'Unique Clicks'}
            </Text>
          </View>
          {Number.isNaN(data.clickPerformanceData[0].clicks) ? (
            <View style={{ paddingBottom: 8 }}>
              <Text style={{ textAlign: "center" }}>No Clicks Available</Text>
            </View>
          ) : (
            data.clickPerformanceData.map((row, i) => (
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
                <Text style={{ width: "65%" }}>{row.url}</Text>
                <Text style={{ width: "15%", textAlign: "right" }}>
                  {row.clicks}
                </Text>
                <Text
                  style={{
                    width: "15%",
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
