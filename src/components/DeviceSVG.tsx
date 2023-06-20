import { G, Line, Rect, Svg, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";

export default function DeviceSVG({ data }: { data: FormData }) {
  return (
    <Svg viewBox="0 -5 210 140">
      {/* 100% Line */}
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
      {/* 75% Line */}
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
      {/* 50% Line */}
      <G>
        <Line
          x1="10"
          x2="210"
          y1="60"
          y2="60"
          strokeWidth={1}
          stroke="#efefef"
        />
        <Text x="2" y="62" style={{ fill: "#efefef", fontSize: 6 }}>
          50
        </Text>
      </G>
      {/* 25% Line */}
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
      {/* 0% Line */}
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
          x={data.clickPctDesktop.toString().length > 1 ? 54 : 57}
          y={105 - parseInt(data.clickPctDesktop)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.clickPctDesktop).toFixed(0)}%`}</Text>
        <Text
          x={data.clickPctMobile.toString().length > 1 ? 137 : 140}
          y={105 - parseInt(data.clickPctMobile)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.clickPctMobile).toFixed(0)}%`}</Text>
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.clickPctDesktop)}
          y={110 - parseInt(data.clickPctDesktop)}
          x="43.33"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.clickPctMobile)}
          y={110 - parseInt(data.clickPctMobile)}
          x="126.67"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Text x="42" y="125" style={{ fontSize: 11, fontFamily: "AvenirNext" }}>
          Desktop
        </Text>
        <Text
          x="129.5"
          y="125"
          style={{ fontSize: 11, fontFamily: "AvenirNext" }}
        >
          Mobile
        </Text>
      </G>
    </Svg>
  );
}
