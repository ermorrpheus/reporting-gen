/* eslint-disable jsx-a11y/alt-text */
import { View, Image, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";
import { formatDate, formatTime } from "@/lib/utils";

export default function Header({ data }: { data: FormData }) {
  return (
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
            {data.campaignName}
          </Text>
          <Text style={{ textTransform: "uppercase", color: "#8A8B8A" }}>
            Delivery: {formatDate(data.delivery)} at {formatTime(data.time)}
          </Text>
          <Text style={{ textTransform: "uppercase", color: "#8A8B8A" }}>
            Subject: {data.subject}
          </Text>
        </View>
      </View>
    </View>
  );
}
