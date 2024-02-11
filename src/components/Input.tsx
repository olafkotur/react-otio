import React, { HTMLInputTypeAttribute, ReactElement, useState } from 'react';
import styled from 'styled-components';
// import { IconButton } from './Button';
import { ColumnContainer, SpaceBetweenContainer } from './Container';
import { Spacer } from './Spacer';
import { MediumText } from './Text';

export type SelectOption = { label: string; value: string };

export interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  options?: SelectOption[];
  bg?: string;
  icon?: ReactElement;
  type?: HTMLInputTypeAttribute;
  autoFocus?: boolean;
  fontSize?: string;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

const InputContainer = styled.div<{ disabled?: boolean; bg?: string; margin?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.bg ?? props.theme.backgroundColor.primary};
  filter: drop-shadow(${(props) => props.theme.dropShadow.medium});
  border-radius: ${(props) => props.theme.borderRadius.medium};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;
const Input = styled.input<{ fontSize?: string }>`
  border: none;
  background: none;
  color: ${(props) => props.theme.color.normal};
  font-size: ${(props) => props.fontSize ?? props.theme.fontSize.medium};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: italic;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const InputLabelText = styled(MediumText)`
  margin-left: ${(props) => props.theme.spacing.small};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const TextInput = ({
  id,
  value,
  label,
  placeholder,
  disabled,
  bg,
  icon,
  type = 'text',
  autoFocus,
  fontSize,
  onChange,
  onBlur,
}: InputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && <InputLabelText faint>{label}</InputLabelText>}
      <InputContainer disabled={disabled} bg={bg}>
        {icon}
        {icon && <Spacer horizontal={5} />}
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          fontSize={fontSize}
          onChange={(event) => onChange?.(event.target.value)}
          onBlur={(event) => onBlur?.(event.target.value)}
        />
      </InputContainer>
    </ColumnContainer>
  );
};

export const NumberInput = ({
  id,
  value,
  label,
  placeholder,
  disabled,
  bg,
  icon,
  onChange,
  onBlur,
}: InputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && <InputLabelText faint>{label}</InputLabelText>}
      <InputContainer disabled={disabled} bg={bg}>
        {icon}
        {icon && <Spacer horizontal={5} />}
        <Input
          id={id}
          type="number"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.value)}
          onBlur={(event) => onBlur?.(event.target.value)}
        />
      </InputContainer>
    </ColumnContainer>
  );
};

const FileInputButton = styled.button`
  padding: 2px;
  background: transparent;

  &:hover {
    background: transparent;
  }
`;

export const FileInput = ({ id, value, label, disabled, bg, icon, onChange }: InputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange?.(reader.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ColumnContainer>
      {label && <InputLabelText faint>{label}</InputLabelText>}
      <InputContainer disabled={disabled} bg={bg}>
        <label htmlFor={`file-input-${id}`}>
          <FileInputButton tooltip="Upload file">{icon}</FileInputButton>
        </label>
        <Spacer horizontal={4} />
        <SpaceBetweenContainer>
          <MediumText>{(fileName ?? value)?.substring(0, 30)}</MediumText>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id={`file-input-${id}`}
            accept=".png, .jpg, .jpeg"
          />
        </SpaceBetweenContainer>
      </InputContainer>
    </ColumnContainer>
  );
};
