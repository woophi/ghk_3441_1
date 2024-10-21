import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const progressContainer = style({
  height: '88px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '95%',
});
const progress = style({
  width: '100%',
});
const progressRed = style({
  width: '100%',
});

globalStyle(`${progressRed} > div`, {
  background: '#FF5431 !important',
});

const se = recipe({
  base: {
    position: 'absolute',
    zIndex: 1,
    top: 58,
  },
  variants: {
    position: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
});

const dot = recipe({
  base: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: '99999px',
  },
  variants: {
    size: {
      s: {
        width: '12px',
        height: '12px',
        top: 38,
      },
      m: {
        width: '16px',
        height: '16px',
        top: 36,
      },
    },
    color: {
      orange: {},
      gray: {},
      green: {},
      red: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        color: 'orange',
        size: 's',
      },
      style: {
        border: '2px solid #FA9313',
      },
    },
    {
      variants: {
        color: 'orange',
        size: 'm',
      },
      style: {
        border: '4px solid #FA9313',
      },
    },
    {
      variants: {
        color: 'green',
        size: 's',
      },
      style: {
        border: '2px solid #0CC44D',
      },
    },
    {
      variants: {
        color: 'green',
        size: 'm',
      },
      style: {
        border: '4px solid #0CC44D',
      },
    },
    {
      variants: {
        color: 'gray',
        size: 's',
      },
      style: {
        border: '2px solid #E7E8EB',
      },
    },
    {
      variants: {
        color: 'gray',
        size: 'm',
      },
      style: {
        border: '4px solid #E7E8EB',
      },
    },
    {
      variants: {
        color: 'red',
        size: 's',
      },
      style: {
        border: '2px solid #FF5431',
      },
    },
    {
      variants: {
        color: 'red',
        size: 'm',
      },
      style: {
        border: '4px solid #FF5431',
      },
    },
  ],
});

const textBottom = style({
  position: 'absolute',
  zIndex: 2,
  top: 58,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const tagImg = style({
  borderRadius: '8px',
});

const tag = recipe({
  base: {
    width: '60px',
    height: '26px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  variants: {
    color: {
      orange: {
        backgroundColor: '#FA9313',
      },
      green: {
        backgroundColor: '#0CC44D',
      },
      red: {
        backgroundColor: '#FF5431',
      },
      gray: {},
    },
  },
});
const stick = recipe({
  base: {
    width: '1px',
    height: '13px',
  },
  variants: {
    color: {
      orange: {
        backgroundColor: '#FA9313',
      },
      green: {
        backgroundColor: '#0CC44D',
      },
      red: {
        backgroundColor: '#FF5431',
      },
      gray: {},
    },
  },
});

const tagContainer = style({
  position: 'absolute',
  zIndex: 2,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ':hover': {
    zIndex: 5,
  },
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const compSt = {
  progressContainer,
  progress,
  se,
  dot,
  textBottom,
  tag,
  stick,
  tagContainer,
  tagImg,
  container,
  progressRed,
};
