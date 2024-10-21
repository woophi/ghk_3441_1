import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

export const btmContent = style({
  padding: 0,
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '26px',
  marginTop: '1rem',
});

export const lrSt = {
  container,
  btmContent,
  row,
};
