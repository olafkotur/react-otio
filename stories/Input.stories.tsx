import React, { useState } from 'react';
import {
  FileInput as FileInputComponent,
  Icon,
  IconName,
  NumberInput as NumberInputComponent,
  TextInput as TextInputComponent,
} from '../src';

export default {
  title: 'Input',
  decorators: [
    (Story: React.FC) => (
      <div style={{ width: 200, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};

export const TextInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextInputComponent
        value={value}
        onChange={setValue}
        label="Text"
        placeholder="Hello World"
        bg="#20202B"
        icon={<Icon name={IconName.PENCIL} />}
      />

      <TextInputComponent
        disabled
        value={value}
        onChange={setValue}
        label="Disabled"
        placeholder="Hello World"
        bg="#20202B"
        icon={<Icon name={IconName.XMARK} />}
      />
    </>
  );
};

export const NumberInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <NumberInputComponent
        value={value}
        onChange={setValue}
        label="Number"
        placeholder="42"
        bg="#20202B"
        icon={<Icon name={IconName.PENCIL} />}
      />
      <NumberInputComponent
        disabled
        value={value}
        onChange={setValue}
        label="Disabled"
        placeholder="42"
        bg="#20202B"
        icon={<Icon name={IconName.XMARK} />}
      />
    </>
  );
};

export const FileInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <FileInputComponent
        label="File"
        value={value}
        onChange={setValue}
        bg="#20202B"
        icon={<Icon name={IconName.UPLOAD} />}
      />
      <FileInputComponent
        disabled
        label="Disabled"
        value={value}
        onChange={setValue}
        bg="#20202B"
        icon={<Icon name={IconName.XMARK} />}
      />
    </>
  );
};
