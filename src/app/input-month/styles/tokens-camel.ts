const colors = {
  "borderDarkThin": "1px solid #cccccc",
  "borderDarkThick": "2px solid #cccccc",
  "borderDarkDashed": "1px dashed #cccccc",
  "borderDisabledColor": "#cccccc",
  "borderDisabledThin": "1px solid #cccccc",
  "borderError": "2px solid #c8102e",
  "borderLightThin": "1px solid #eaeaea",
  "borderPrimaryThin": "1px solid #ff6611",
  "borderSecondaryThin": "1px solid #1588af",
  "borderRadiusCircle": "50%",
  "borderRadiusSm": 2,
  "borderRadiusMd": 4,
  "borderRadiusLg": 8,
  "borderRadiusXl": 16,
  "borderThin": 1,
  "breakpointPhone": 700,
  "breakpointTabletPortrait": 860,
  "breakpointTabletLandscape": 1024,
  "breakpointLaptop": 1280,
  "breakpointDesktop": 1440,
  "colorWhite": "#ffffff",
  "colorBlack": "#222222",
  "colorGray50": "#f5f5f5",
  "colorGray100": "#eaeaea",
  "colorGray200": "#dadada",
  "colorGray300": "#cccccc",
  "colorGray400": "#a6a6a6",
  "colorGray700": "#666666",
  "colorGray900": "#393939",
  "colorApple50": "#f8e4e4",
  "colorApple100": "#f59299",
  "colorApple200": "#e35e6b",
  "colorApple300": "#d43046",
  "colorApple400": "#c8102e",
  "colorApple500": "#b20b29",
  "colorApple600": "#9a0a24",
  "colorApple700": "#85071e",
  "colorApple800": "#71061a",
  "colorApple900": "#570917",
  "colorMango20": "#fff7ea",
  "colorMango50": "#ffe7c4",
  "colorMango100": "#ffc472",
  "colorMango200": "#ffae50",
  "colorMango300": "#ff9633",
  "colorMango400": "#ff8800",
  "colorMango500": "#ff6611",
  "colorMango600": "#ea4810",
  "colorMango700": "#cc3d0c",
  "colorMango800": "#ab2811",
  "colorMango900": "#8b1910",
  "colorMangoAccent50": "#fffbcb",
  "colorMangoAccent100": "#ffee7e",
  "colorMangoAccent300": "#ffd70b",
  "colorMangoAccent500": "#ffc400",
  "colorMangoAccent700": "#f8b100",
  "colorLime20": "#edfbeb",
  "colorLime50": "#dcf9d9",
  "colorLime100": "#abf5ab",
  "colorLime200": "#79e482",
  "colorLime300": "#53d168",
  "colorLime400": "#3dc270",
  "colorLime500": "#2eab73",
  "colorLime600": "#249661",
  "colorLime700": "#1b815a",
  "colorLime800": "#146b4d",
  "colorLime900": "#105a42",
  "colorLimeAccent50": "#f7ff97",
  "colorLimeAccent100": "#e5f569",
  "colorLimeAccent300": "#d1eb58",
  "colorLimeAccent500": "#c3dd50",
  "colorLimeAccent700": "#a6cf44",
  "colorBlueberry30": "#eef9fb",
  "colorBlueberry50": "#dff4f8",
  "colorBlueberry100": "#c3e9f2",
  "colorBlueberry200": "#8edbee",
  "colorBlueberry300": "#63c6e2",
  "colorBlueberry400": "#41a8d2",
  "colorBlueberry500": "#1588af",
  "colorBlueberry600": "#11779c",
  "colorBlueberry700": "#0e6b90",
  "colorBlueberry800": "#085a7e",
  "colorBlueberry900": "#044766",
  "colorGrape50": "#f9f0ff",
  "colorGrape100": "#e8d9f3",
  "colorGrape200": "#c7b3da",
  "colorGrape300": "#9f85be",
  "colorGrape400": "#8163af",
  "colorGrape500": "#6f5aa0",
  "colorGrape600": "#5e4982",
  "colorGrape700": "#563b70",
  "colorGrape800": "#462756",
  "colorGrape900": "#37193d",
  "colorGrapeAccent50": "#ffdaf7",
  "colorGrapeAccent100": "#f2aee2",
  "colorGrapeAccent300": "#e293cf",
  "colorGrapeAccent500": "#c674b3",
  "colorGrapeAccent700": "#a95998",
  "colorEeGray50": "#f0f0f0",
  "colorEeGray100": "#eaeaea",
  "colorEeGray200": "#e0e1e3",
  "colorEeGray300": "#cccccc",
  "colorEeGray700": "#555a5f",
  "colorEeGray900": "#323e48",
  "colorEeBlue300": "#1588af",
  "colorEeBlue500": "#466078",
  "colorEeOrange500": "#f55a0f",
  "colorBackgroundCanvas": "#ffffff",
  "colorBackgroundAccent": "#f5f5f5",
  "colorBackgroundStage": "#eaeaea",
  "colorBackgroundDark": "#666666",
  "colorBackgroundAlternatingOdd": "#ffffff",
  "colorBackgroundAlternatingEven": "#eef9fb",
  "colorBorderLight": "#eaeaea",
  "colorBorderError": "#c8102e",
  "colorChartColor1": "#41a8d2",
  "colorChartColor2": "#ffd70b",
  "colorChartColor3": "#3dc270",
  "colorChartColor4": "#d43046",
  "colorChartColor5": "#5e4982",
  "colorChartColor6": "#ff8800",
  "colorChartColor7": "#f8b100",
  "colorChartColor8": "#11779c",
  "colorChartColor9": "#53d168",
  "colorChartColor10": "#d1eb58",
  "colorChartColor11": "#a95998",
  "colorChartColor12": "#f59299",
  "colorMessagingError": "#c8102e",
  "colorMessagingSuccess": "#3dc270",
  "colorMessagingInfo": "#41a8d2",
  "colorMessagingPending": "#ffd70b",
  "colorMessagingWarning": "#ff8800",
  "colorPerformancePositive": "#3dc270",
  "colorPerformanceNegative": "#c8102e",
  "colorPerformanceNeutral": "#666666",
  "colorControlsDisabled": "#cccccc",
  "colorControlsPrimary": "#ff6611",
  "colorControlsPrimaryHover": "#ff9633",
  "colorControlsPrimaryOndark": "#ff6611",
  "colorControlsPrimaryPress": "#cc3d0c",
  "colorControlsSecondary": "#1588af",
  "colorControlsSecondaryOnmid": "#085a7e",
  "colorControlsSecondaryOndark": "#1588af",
  "colorControlsSecondaryHover": "#41a8d2",
  "colorControlsSecondaryPress": "#085a7e",
  "colorControlsOndark": "#ffffff",
  "colorStatusOverdue": "#c8102e",
  "colorStatusComplete": "#3dc270",
  "colorStatusInprogress": "#41a8d2",
  "colorStatusNotstarted": "#666666",
  "colorFocusPrimary": "#1588af",
  "colorTextDisabled": "#cccccc",
  "colorTextPrimary": "#222222",
  "colorTextPrimaryOndark": "#ffffff",
  "colorTextSecondary": "#666666",
  "colorTextSecondaryOndark": "#cccccc",
  "colorTextLinkDefault": "#1588af",
  "colorTextLinkPress": "#085a7e",
  "colorTextLinkHover": "#63c6e2",
  "colorBorder": "#cccccc",
  "zIndexBasement": "-999",
  "zIndexPopup": "700",
  "zIndexHeader": "800",
  "zIndexBackdrop": "850",
  "zIndexDialog": "900",
  "zIndexNotice": "950",
  "zIndexTop": "1000",
  "fontSans": "'Open Sans', Arial, sans-serif",
  "fontMono": "'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace",
  "fontSizeParagraphSm": 12,
  "fontSizeParagraphMd": 14,
  "fontSizeParagraphLg": 16,
  "fontSizeHeadingXs": 18,
  "fontSizeHeadingSm": 20,
  "fontSizeHeadingMd": 24,
  "fontSizeHeadingLg": 26,
  "fontSizeHeadingXl": 32,
  "fontSizeHeadingXxl": 48,
  "fontSizeCodeMd": 14,
  "fontWeightLight": "300",
  "fontWeightRegular": "400",
  "fontWeightSemiBold": "600",
  "fontWeightBold": "700",
  "formHeightSmall": 26,
  "formHeightMedium": 36,
  "formHeightLarge": 48,
  "lineHeightNone": "1",
  "lineHeightTight": "1.25",
  "lineHeightBase": "1.5",
  "lineHeightTall": "1.75",
  "lineHeightXxxs": 12,
  "lineHeightXxs": 14,
  "lineHeightXs": 16,
  "lineHeightSm": 18,
  "lineHeightMd": 20,
  "lineHeightLg": 24,
  "lineHeightXl": 32,
  "lineHeightXxl": 48,
  "opacity100": "100%",
  "opacity000": 0,
  "opacity010": "10%",
  "opacity020": "20%",
  "opacity025": "25%",
  "opacity030": "30%",
  "opacity040": "40%",
  "opacity050": "50%",
  "opacity060": "60%",
  "opacity070": "70%",
  "opacity075": "75%",
  "opacity080": "80%",
  "opacity090": "90%",
  "shadowSm": "0 1px 2px 0 rgba(0,0,0,0.25)",
  "shadowMd": "0 5px 5px rgba(0,0,0,0.2)",
  "sizeIconUtilityXs": 12,
  "sizeIconUtilitySm": 16,
  "sizeIconUtilityMd": 20,
  "sizeIconUtilityLg": 28,
  "sizeIconIllustrativeXs": 44,
  "sizeIconIllustrativeLg": 96,
  "sizeXxs": 4,
  "sizeXs": 8,
  "sizeSm": 12,
  "sizeMd": 16,
  "sizeLg": 24,
  "sizeXl": 32,
  "sizeXxl": 48,
  "sizeXxxl": 64,
  "spaceAllNone": 0,
  "spaceAllXxxs": 2,
  "spaceAllXxs": 4,
  "spaceAllXs": 8,
  "spaceAllSm": 12,
  "spaceAllMd": 16,
  "spaceAllLg": 20,
  "spaceAllXl": 24,
  "spaceAllXxl": 32,
  "spaceAllXxxl": 64,
  "spaceVerticalNone": 0,
  "spaceVerticalXxxs": 2,
  "spaceVerticalXxs": 4,
  "spaceVerticalXs": 8,
  "spaceVerticalSm": 12,
  "spaceVerticalMd": 16,
  "spaceVerticalLg": 20,
  "spaceVerticalXl": 24,
  "spaceVerticalXxl": 32,
  "spaceVerticalXxxl": 64,
  "spaceHorizontalNone": 0,
  "spaceHorizontalXxxs": 2,
  "spaceHorizontalXxs": 4,
  "spaceHorizontalXs": 8,
  "spaceHorizontalSm": 12,
  "spaceHorizontalMd": 16,
  "spaceHorizontalLg": 20,
  "spaceHorizontalXl": 24,
  "spaceHorizontalXxl": 32,
  "spaceHorizontalXxxl": 64,
  "time100": "100ms",
  "time200": "200ms",
  "time300": "300ms",
  "time400": "400ms",
  "time500": "500ms",
  "time600": "600ms",
  "time700": "700ms",
  "time800": "800ms",
  "time900": "900ms",
  "time1000": "1s"
}

export default colors;