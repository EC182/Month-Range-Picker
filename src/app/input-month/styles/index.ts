import x from "./tokens-camel";
import mobile from './mobile';

// Input
export const inputWrapper = {
  backgroundColor: x.colorWhite,
  border: x.borderDarkThin,
  borderRadius: 2,
  display: 'flex',
  boxSizing: 'border-box',
  height: `${x.sizeXl}px`,
  padding: '0 0 0 8px',
};

export const inputs = ({
  alignItems: 'center',
  alignSelf: 'center',
  flexGrow: 1,
  lineHeight: '16px',
  overflow: 'hidden',
  textverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const actions = ({
  display: 'flex',
});

export const rangeValue = {
  background: 'none',
  border: 'none',
  cursor: 'text',
  display: 'inline-block',
  lineHeight: '16px',
  minWidth: 1,
  outline: 0,
  padding: 0,
  paddingRight: 4,
  width: 'auto',
  ':empty': {
    cursor: 'text',
    pointerEvents: 'none',
    ':after': {
      color: x.colorGray400,
      content: 'attr(data-placeholder)',
    },
  },
  ':focus': {
    border: `${x.borderThin}px solid ${x.colorEeGray300} !important`,
    marginRight: 4,
    padding: '2px 4px',
  },
  '& + &': {
    marginRight: 0,
    paddingRight: 0,
    ':focus': {
      border: `${x.borderThin}px solid ${x.colorEeGray300} !important`,
      padding: '2px 4px',
    },
  },
};

export const rangeDivider = {
  display: 'inline-block',
  padding: '0 4px',
};

export const clear = ({
  borderRadius: '0',
  color: `${x.colorTextPrimary} !important`,
  margin: '-1px -4px -1px 0',
  ':after': {
    borderRadius: '0 !important',
  },
  ':focus': {
    border: `1px solid ${x.colorBlueberry500} !important`,
  },
});

export const isFocused = {
  boxShadow: `0 0 5px ${x.colorBlueberry500}`,
  border: `${x.borderThin}px solid ${x.colorBlueberry500} !important`,
};

export const isDisabled = {
  backgroundColor: x.colorGray100,
  color: `${x.colorGray400}`,
  cursor: 'not-allowed',
  input: {
    color: `${x.colorGray400}`,
  },
};

export const inputFocusedCancel = {
  flexGrow: 1,
  backgroundColor: 'transparent',
  ':focus': {
    padding: 'none',
    outline: 'none',
  },
};


// Calendar
export const calendarContainer = {
  '&': {
    [`@media ${mobile(x.breakpointPhone)}`]: {
      paddingRight: 34,
    },
  },
  '& + &': {
    marginLeft: 28,
    [`@media ${mobile(x.breakpointPhone)}`]: {
      marginLeft: 0,
      marginTop: 16,
      paddingLeft: 34,
      paddingRight: 0,
    },
  },
};

export const calendarRangeContainer = {
  display: 'flex',
  margin: -8,
  [`@media ${mobile(x.breakpointPhone)}`]: {
    display: 'block',
  },
};

export const calenderButtonStyles = {
  color: `${x.colorTextPrimary} !important`,
  width: x.sizeXl,
  ':focus': {
    border: `1px solid ${x.colorBlueberry500} !important`,
  },
  ':disabled': {
    background: 'transparent',
    color: `${x.colorTextDisabled} !important`,
    border: `1px solid ${x.colorGray300} !important`,
  },
};

export const calenderButtonStylesBorder = {
  ...calenderButtonStyles,
  borderLeft: `1px solid ${x.colorGray300} !important`,
  borderRadius: '0 2px 2px 0',
  margin: '-1px -1px -1px 0 !important',
  ':after': {
    borderRadius: '0 2px 2px 0 !important',
  },
};

export const yearPicker = {
  alignItems: 'flex-start',
  display: 'flex',
  paddingTop: 4,
};

export const yearButtonContainer = {
  marginTop: -4,
};

export const yearContainer = {
  borderBottom: x.borderDarkThin,
  flexGrow: 1,
  fontWeight: x.fontWeightBold,
  marginBottom: 4,
  minWidth: 212,
  paddingBottom: 8,
};

export const year = {
  border: `${x.borderThin}px solid transparent`,
  boxSizing: 'border-box',
  color: x.colorGray700,
  fontWeight: x.fontWeightBold,
  outline: 0,
  paddingBottom: 4,
  paddingTop: 4,
  textAlign: 'center',
  width: '100%',
  ':focus': isFocused,
};

export const months = {
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1,
  '& + &': {
    marginTop: 4,
  },
};

export const monthButton = {
  backgroundColor: 'unset',
  border: x.borderDarkThick,
  borderColor: 'transparent',
  borderRadius: '50%',
  boxSizing: 'border-box',
  display: 'block',
  marginTop: 4,
  padding: 0,
  position: 'relative',
  width: '25%',
  ':before': {
    content: '""',
    display: 'block',
    paddingTop: '100%',
  },
  ':hover,:focus': {
    borderColor: x.colorControlsSecondaryHover,
    cursor: 'pointer',
  },
  ':active': {
    backgroundColor: x.colorControlsSecondaryPress,
    borderColor: x.colorControlsSecondaryPress,
    color: x.colorWhite,
    cursor: 'pointer',
  },
  span: {
    display: 'block',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};


// Calendar selection
export const currentMonth = {
  ...monthButton,
  borderColor: 'auto',
  border: x.borderDarkThick,
  ':focus': {
    borderColor: x.colorControlsSecondaryHover,
  },
};

export const selectedMonth = {
  ...monthButton[':active'],
  cursor: 'default',
  fontWeight: x.fontWeightBold,
  ':hover, :focus': {
    backgroundColor: x.colorControlsSecondaryPress,
    borderColor: x.colorControlsSecondaryPress,
    color: x.colorWhite,
    cursor: 'pointer',
  },
};

export const selectedMonthRangeStart = {
  border: 'none',
  fontWeight: x.fontWeightBold,
  ':after': {
    backgroundColor: x.colorControlsSecondary,
    content: '""',
    display: 'block',
    height: '100%',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
    zIndex: -1,
  },
  ':hover, :focus': {
    boxShadow: `inset 0 0 0 2px ${x.colorControlsSecondaryHover}`,
  },
};

export const selectedMonthRangeEnd = {
  border: 'none',
  fontWeight: x.fontWeightBold,
  ':after': {
    ...selectedMonthRangeStart[':after'],
    left: 0,
    right: 'auto',
  },
  ':hover, :focus': {
    boxShadow: `inset 0 0 0 2px ${x.colorControlsSecondaryHover}`,
  },
};

export const monthInRange = {
  ...monthButton,
  backgroundColor: x.colorControlsSecondary,
  borderRadius: 0,
  color: x.colorWhite,
  fontWeight: x.fontWeightBold,
  ':hover, :focus': {
    borderColor: x.colorControlsSecondaryHover,
  },
};


// Calendar flyout (mobile)
export const monthsRangeFlyout = {
  [`@media ${mobile(x.breakpointPhone)}`]: {
    boxShadow: '0px 0px 100vh 100vh rgba(0, 0, 0, .5)',
    maxHeight: '90vh',
    maxWidth: '90vw',
    overflow: 'auto',
    position: 'fixed !important',
    left: '5vw !important',
    top: '5vh !important',
  },
};

export const monthsRangeFlyoutWrapper: any = {
  [`@media ${mobile(x.breakpointPhone)}`]: {
    transform: 'none !important',
  },
};


// Presets
export const presetsContainer = {
  borderRight: x.borderDarkThin,
  margin: '-8px 8px -8px 0',
  maxWidth: 400,
  padding: '12px 12px 12px 4px',
  [`@media ${mobile(x.breakpointPhone)}`]: {
    borderRight: 'none',
    marginRight: 0,
    paddingRight: 4,
  },
};

export const presetsWrapper = {
  marginBottom: 8,
  width: '100%',
  [`@media ${mobile(x.breakpointPhone)}`]: {
    display: 'inline-block',
    margin: `0 1% ${x.sizeXs}px 1%`,
    width: '48%',
  },
};

export const presetButton = {
  backgroundColor: x.colorBlueberry50,
  border: 'none',
  borderRadius: x.borderRadiusSm,
  color: x.colorBlueberry500,
  fontSize: x.fontSizeParagraphMd,
  lineHeight: x.lineHeightXxs + 'px',
  padding: '8px 12px',
  textAlign: 'left',
  width: '100%',
  ':hover, :focus': {
    backgroundColor: x.colorBlueberry100,
    boxShadow: `inset 0 0 0 2px ${x.colorBlueberry100}`,
    color: x.colorBlueberry800,
    cursor: 'pointer',
  },
  [`@media ${mobile(x.breakpointPhone)}`]: {
    textAlign: 'center',
  },
};