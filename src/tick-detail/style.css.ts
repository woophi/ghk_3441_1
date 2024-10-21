import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  overflowX: 'hidden',
});

export const tdSt = {
  container,
};
