import React from 'react';
import { Image } from '../src/components/Image';

export default {
  title: 'Image',
};

export const Default = () => (
  <Image
    src="https://1.gravatar.com/avatar/586523935789bef2b773972738de34dbf167112e174342a2e49853b96efc6283?size=256"
    width="500px"
    height="500px"
  />
);

export const NoImage = () => <Image src="" width="500px" height="500px" />;
