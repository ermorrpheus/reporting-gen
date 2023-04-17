import { G, Line, Rect, Svg, Text } from "@react-pdf/renderer";
import { FormData } from "@/lib/types";

export default function OpenSVG({ data }: { data: FormData }) {
  return (
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
          x={data.openPctDesktop.toString().length > 1 ? 63 : 66}
          y={105 - parseInt(data.openPctDesktop)}
          style={{ fontSize: 8, fontFamily: "AvenirNext" }}
        >{`${parseInt(data.openPctDesktop).toFixed(0)}%`}</Text>
        <Text
          x={data.openPctMobile.toString().length > 1 ? 142 : 145}
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
        <Text x="55" y="125" style={{ fontSize: 8, fontFamily: "AvenirNext" }}>
          Desktop
        </Text>
        <Text x="138" y="125" style={{ fontSize: 8, fontFamily: "AvenirNext" }}>
          Mobile
        </Text>
      </G>
    </Svg>
  );
}
