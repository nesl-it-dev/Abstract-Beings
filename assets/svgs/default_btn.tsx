import React from "react";

interface DefaultBtnProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({
  width = 511,
  height = 153,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 511 153"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g filter="url(#filter0_dd_2003_271)">
      <path
        d="M11.8156 14.5384C12.4129 6.84764 18.8279 0.911621 26.5419 0.911621H492.856C501.531 0.911621 508.338 8.35149 507.569 16.9919L497.959 124.952C497.283 132.542 490.944 138.373 483.323 138.413L18.7431 140.825C9.72879 140.871 2.59851 133.206 3.29658 124.219L11.8156 14.5384Z"
        fill="#3BB589"
      />
      <path
        d="M13.0961 14.6379C13.6415 7.61586 19.4987 2.19602 26.5419 2.19602H492.856C500.776 2.19602 506.992 8.98895 506.289 16.878L496.679 124.838C496.062 131.768 490.274 137.092 483.316 137.128L18.7365 139.54C10.4733 139.583 3.93723 132.556 4.57712 124.318L13.0961 14.6379Z"
        stroke="black"
        strokeWidth={2.56881}
      />
    </g>
    <mask
      id="mask0_2003_271"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={1}
      width={505}
      height={140}
    >
      <path
        d="M11.8156 14.6268C12.4129 6.93601 18.8279 1 26.5419 1H492.856C501.531 1 508.338 8.43987 507.569 17.0803L497.959 125.04C497.283 132.631 490.943 138.461 483.323 138.501L18.7431 140.913C9.72879 140.96 2.59851 133.294 3.29658 124.307L11.8156 14.6268Z"
        fill="#02AB89"
      />
    </mask>
    <g mask="url(#mask0_2003_271)">
      <g
        style={{
          mixBlendMode: "overlay",
        }}
        opacity={0.7}
      >
        <rect x={4.71875} y={1} width={509.719} height={16.6972} fill="white" />
      </g>
      <g
        style={{
          mixBlendMode: "overlay",
        }}
        opacity={0.7}
      >
        <rect
          x={-0.71875}
          y={124.303}
          width={509.719}
          height={16.6972}
          fill="black"
        />
      </g>
      <g filter="url(#filter1_dd_2003_271)">
        <path
          d="M13.0961 14.7263C13.6415 7.70424 19.4987 2.2844 26.5419 2.2844H492.856C500.776 2.2844 506.992 9.07733 506.289 16.9664L496.679 124.926C496.062 131.857 490.274 137.18 483.316 137.217L18.7365 139.629C10.4733 139.672 3.93723 132.645 4.57712 124.406L13.0961 14.7263Z"
          stroke="black"
          strokeWidth={2.56881}
          shapeRendering="crispEdges"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_dd_2003_271"
        x={0.681192}
        y={0.911621}
        width={509.517}
        height={151.473}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.56881} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2003_271"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={8.99083} />
        <feGaussianBlur stdDeviation={1.2844} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2003_271"
          result="effect2_dropShadow_2003_271"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2003_271"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dd_2003_271"
        x={0.681192}
        y={1}
        width={509.517}
        height={151.473}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.56881} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2003_271"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={8.99083} />
        <feGaussianBlur stdDeviation={1.2844} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2003_271"
          result="effect2_dropShadow_2003_271"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2003_271"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default DefaultBtn;
