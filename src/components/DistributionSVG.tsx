import { G, Line, Rect, Svg, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";

export default function DistributionSVG({ data }: { data: FormData }) {
  return (
    <Svg viewBox="0 -5 420 140">
      {/* 100% Line */}
      <G>
        <Line
          x1="10"
          x2="420"
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
          x2="420"
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
          x2="420"
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
          x2="420"
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
          x2="420"
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
          x={data.openPctDesktop.toString().length > 1 ? 62 : 65}
          y={105 - parseInt(data.openPctDesktop)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.openPctDesktop).toFixed(0)}%`}</Text>
        <Text
          x={data.openPctMobile.toString().length > 1 ? 154 : 157}
          y={105 - parseInt(data.openPctMobile)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.openPctMobile).toFixed(0)}%`}</Text>
        <Text
          x={data.openPctDesktop.toString().length > 1 ? 246 : 249}
          y={105 - parseInt(data.openPctDesktop)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.openPctDesktop).toFixed(0)}%`}</Text>
        <Text
          x={data.openPctMobile.toString().length > 1 ? 338 : 341}
          y={105 - parseInt(data.openPctMobile)}
          style={{ fontSize: 10, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.openPctMobile).toFixed(0)}%`}</Text>
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.openPctDesktop)}
          y={110 - parseInt(data.openPctDesktop)}
          x="52"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.openPctMobile)}
          y={110 - parseInt(data.openPctMobile)}
          x="144"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.openPctDesktop)}
          y={110 - parseInt(data.openPctDesktop)}
          x="236"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Rect
          width="40"
          height={parseInt(data.openPctMobile)}
          y={110 - parseInt(data.openPctMobile)}
          x="328"
          fill="#7CB3CA"
        />
      </G>
      <G>
        <Text x="51" y="125" style={{ fontSize: 11, fontFamily: "AvenirNext" }}>
          Opened
        </Text>
        <Text
          x="137"
          y="125"
          style={{ fontSize: 11, fontFamily: "AvenirNext" }}
        >
          Unopened
        </Text>
        <Text
          x="234.5"
          y="125"
          style={{ fontSize: 11, fontFamily: "AvenirNext" }}
        >
          Bounces
        </Text>
        <Text
          x="313"
          y="125"
          style={{ fontSize: 11, fontFamily: "AvenirNext" }}
        >
          Unsubscribes
        </Text>
      </G>
    </Svg>
  );
}
