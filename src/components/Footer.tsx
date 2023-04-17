import { View, Text } from "@react-pdf/renderer";

export default function Footer() {
  return (
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
  );
}
