import React from 'react';
import { Box } from '../src/components/Box';
import { LargeText, MediumText } from '../src/components/Text';

export default {
  title: 'Box',
};

export const Default = () => (
  <Box style={{ width: '300px', aspectRatio: '1' }}>
    <LargeText bold>Hello World</LargeText>
    <br />
    <MediumText>
      Nihil ipsum quae incidunt praesentium. Corporis vel earum velit illo beatae minus quibusdam ab harum. Eius
      mollitia ex expedita. Quos blanditiis mollitia quaerat. Earum reprehenderit deserunt dolores placeat veritatis
      animi provident laborum.
    </MediumText>
  </Box>
);
