export const DefaultButton = () => {
  return (
    <div className="relative">
      <svg width="88px" height="38px">
        <defs>
          <filter
            filterUnits="userSpaceOnUse"
            id="Filter_0"
            x="0.5px"
            y="0.5px"
            width="87px"
            height="37px"
          >
            <feOffset in="SourceAlpha" dx="0" dy="2" />
            <feGaussianBlur result="blurOut" stdDeviation="0" />
            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
            <feComposite operator="atop" in="floodOut" in2="blurOut" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="Filter_1">
            <feOffset in="SourceAlpha" dx="0" dy="2" />
            <feGaussianBlur result="blurOut" stdDeviation="0" />
            <feFlood flood-color="rgb(255, 255, 255)" result="floodOut" />
            <feComposite
              operator="out"
              in="floodOut"
              in2="blurOut"
              result="compOut"
            />
            <feComposite operator="in" in="compOut" in2="SourceAlpha" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15" />
            </feComponentTransfer>
            <feBlend mode="normal" in2="SourceGraphic" />
          </filter>
          <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
            <stop offset="0%" stop-color="rgb(14,14,14)" stop-opacity="0.8" />
            <stop offset="70%" stop-color="rgb(39,39,39)" stop-opacity="0.8" />
            <stop offset="70%" stop-color="rgb(43,43,43)" stop-opacity="0.8" />
            <stop offset="100%" stop-color="rgb(68,68,68)" stop-opacity="0.8" />
          </linearGradient>
        </defs>
        <g filter="url(#Filter_0)">
          <g filter="url(#Filter_1)">
            <path
              fill-rule="evenodd"
              fill="rgb(0, 0, 0)"
              d="M7.500,4.622 L80.500,4.622 C82.157,4.622 83.500,5.966 83.500,7.622 L83.500,27.622 C83.500,29.279 82.157,30.622 80.500,30.622 L7.500,30.622 C5.843,30.622 4.500,29.279 4.500,27.622 L4.500,7.622 C4.500,5.966 5.843,4.622 7.500,4.622 Z"
            />
          </g>
        </g>
        <path
          stroke-width="1px"
          stroke="rgb(0, 0, 0)"
          fill="url(#PSgrad_0)"
          d="M7.500,4.622 L80.500,4.622 C82.157,4.622 83.500,5.966 83.500,7.622 L83.500,27.622 C83.500,29.279 82.157,30.622 80.500,30.622 L7.500,30.622 C5.843,30.622 4.500,29.279 4.500,27.622 L4.500,7.622 C4.500,5.966 5.843,4.622 7.500,4.622 Z"
        />
      </svg>
      <span className="absolute">test</span>
    </div>
  );
};
export const ActiveButton = () => {
  return (
    <svg width="88px" height="36px">
      <g filter="url(#Filter_0)">
        <g filter="url(#Filter_1)">
          <path
            fill-rule="evenodd"
            fill="rgb(0, 0, 0)"
            d="M7.500,4.500 L80.500,4.500 C82.157,4.500 83.500,5.843 83.500,7.500 L83.500,27.500 C83.500,29.157 82.157,30.500 80.500,30.500 L7.500,30.500 C5.843,30.500 4.500,29.157 4.500,27.500 L4.500,7.500 C4.500,5.843 5.843,4.500 7.500,4.500 Z"
          />
        </g>
      </g>
      <path
        stroke-width="1px"
        stroke="rgb(0, 0, 0)"
        fill="url(#PSgrad_0)"
        d="M7.500,4.500 L80.500,4.500 C82.157,4.500 83.500,5.843 83.500,7.500 L83.500,27.500 C83.500,29.157 82.157,30.500 80.500,30.500 L7.500,30.500 C5.843,30.500 4.500,29.157 4.500,27.500 L4.500,7.500 C4.500,5.843 5.843,4.500 7.500,4.500 Z"
      />
    </svg>
  );
};
