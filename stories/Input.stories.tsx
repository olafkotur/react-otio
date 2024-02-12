import React, { useState } from 'react';
import { Icon, IconName } from '../src/components/Icon';
import {
  CheckboxInput as CheckboxInputComponent,
  FileInput as FileInputComponent,
  NumberInput as NumberInputComponent,
  SelectInput as SelectInputComponent,
  TextInput as TextInputComponent,
} from '../src/components/Input';
import { Spacer } from '../src/components/Spacer';

export default {
  title: 'Input',
  decorators: [
    (Story: React.FC) => (
      <div style={{ width: 300, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};

export const TextInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextInputComponent value={value} onChange={(e) => setValue(e.target.value)} placeholder="Text input" />

      <Spacer type="vertical" value={20} />
      <TextInputComponent
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Text input with a label"
        label="Label"
      />

      <Spacer type="vertical" value={20} />
      <TextInputComponent
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Text input with an icon"
        icon={<Icon name={IconName.PENCIL} />}
      />
    </>
  );
};

export const NumberInput = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <NumberInputComponent value={value} onChange={(e) => setValue(e.target.value)} placeholder="Number input" />

      <Spacer type="vertical" value={20} />
      <NumberInputComponent
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Number input with a label"
        label="Label"
      />

      <Spacer type="vertical" value={20} />
      <NumberInputComponent
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Number input with an icon"
        icon={<Icon name={IconName.PENCIL} />}
      />
    </>
  );
};

export const FileInput = () => {
  return (
    <>
      <FileInputComponent placeholder="File input" />

      <Spacer type="vertical" value={20} />
      <FileInputComponent placeholder="File input with a label" label="Label" />

      <Spacer type="vertical" value={20} />
      <FileInputComponent placeholder="File input with an icon" icon={<Icon name={IconName.PENCIL} />} />
    </>
  );
};

export const SelectInput = () => {
  const [value, setValue] = useState('');
  const choices = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <>
      <SelectInputComponent placeholder="Select input" value={value} onChange={setValue} choices={choices} />

      <Spacer type="vertical" value={20} />
      <SelectInputComponent
        placeholder="Select input with label"
        value={value}
        onChange={setValue}
        choices={choices}
        label="Label"
      />

      <Spacer type="vertical" value={20} />
      <SelectInputComponent
        placeholder="Select input with icon"
        value={value}
        onChange={setValue}
        choices={choices}
        icon={<Icon name={IconName.PENCIL} />}
      />
    </>
  );
};

export const CheckboxInput = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <CheckboxInputComponent
        name="Checkbox input"
        checked={checked}
        onChange={(newChecked) => {
          console.log(`Checkbox is now ${newChecked ? 'checked' : 'unchecked'}`);
          setChecked(newChecked);
        }}
      />

      <Spacer type="vertical" value={20} />
      <CheckboxInputComponent
        name="Checkbox input"
        checked={checked}
        onChange={(newChecked) => {
          console.log(`Checkbox with label is now ${newChecked ? 'checked' : 'unchecked'}`);
          setChecked(newChecked);
        }}
        label="Checkbox input with label"
      />

      <Spacer type="vertical" value={20} />
      <CheckboxInputComponent
        name="Checkbox input with icon"
        checked={checked}
        onChange={(newChecked) => {
          console.log(`Checkbox with icon is now ${newChecked ? 'checked' : 'unchecked'}`);
          setChecked(newChecked);
        }}
        icon={<Icon name={IconName.PENCIL} />}
      />
    </>
  );
};
