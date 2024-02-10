import React from 'react';
import { Box, LargeText, MediumText } from '../src';

export default {
  title: 'Box',
};

export const Default = () => (
  <Box options={{ width: '300px', aspectRatio: '1' }}>
    <LargeText bold>Hello World</LargeText>
    <br />
    <MediumText>
      Nihil ipsum quae incidunt praesentium. Corporis vel earum velit illo beatae minus quibusdam ab harum. Eius
      mollitia ex expedita. Quos blanditiis mollitia quaerat. Earum reprehenderit deserunt dolores placeat veritatis
      animi provident laborum.
    </MediumText>
  </Box>
);
