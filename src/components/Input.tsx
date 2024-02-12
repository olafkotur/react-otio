import React, { CSSProperties, InputHTMLAttributes, ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import { useOnClickout } from '../hooks/use-on-clickout';
import { Button, IconButton } from './Button';
import { ColumnContainer, RowContainer, SpaceBetweenContainer } from './Container';
import { Icon, IconName } from './Icon';
import { Spacer } from './Spacer';
import { MediumText } from './Text';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
  background?: string;
  icon?: ReactElement;
  containerStyle?: CSSProperties;
}

export interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
  background?: string;
  icon?: ReactElement;
  containerStyle?: CSSProperties;
}

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  icon?: ReactElement;
  containerStyle?: CSSProperties;
}

export interface SelectInputProps {
  value: string;
  choices: { value: string; label: string }[];
  label?: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactElement;
  containerStyle?: CSSProperties;
  onChange?: (value: string) => void;
}

export interface CheckboxInputProps {
  name: string;
  checked: boolean;
  label?: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  icon?: ReactElement;
  containerStyle?: CSSProperties;
  onChange?: (checked: boolean) => void;
}

const Input = styled.input`
  border: none;
  background: none;
  color: inherit;
  font-size: inherit;
  width: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'auto')};

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: italic;
    color: ${(props) => props.theme.color.text.faint};
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Container = styled.div<{ label?: string; background?: string; disabled?: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  color: ${(props) => props.color ?? props.theme.color.text.normal};
  padding: 0 ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.background ?? props.theme.color.background.secondary};
  filter: drop-shadow(${(props) => props.theme.shadow.medium});
  border-radius: ${(props) => props.theme.borderRadius.medium};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const SelectInputListContainer = styled.div<{ height: number; width: number; label: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: calc(
    ${(props) => props.height}px + ${(props) => props.theme.spacing.small} +
      ${(props) => (props.label ? '18px' : '0px')}
  );
  width: calc(${(props) => props.width}px - (1 * ${(props) => props.theme.spacing.medium}));
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.theme.color.background.secondary};
  z-index: ${(props) => props.theme.zIndex.select};
`;

const SelectInputOption = styled(MediumText)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${(props) => props.theme.spacing.verySmall};
  padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.color.background.tertiary};
  border-radius: ${(props) => props.theme.borderRadius.small};

  &:hover {
    background: ${(props) => props.theme.color.state.selected};
  }
`;

export const TextInput = ({
  label,
  color,
  background,
  disabled,
  icon,
  containerStyle,
  ...props
}: TextInputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && (
        <RowContainer>
          <Spacer type="horizontal" value={5} />
          <MediumText faint>{label}</MediumText>
        </RowContainer>
      )}
      <Spacer type="vertical" value={5} />
      <Container color={color} background={background} disabled={disabled} style={containerStyle}>
        {icon && (
          <RowContainer>
            {icon}
            <Spacer type="horizontal" value={10} />
          </RowContainer>
        )}
        <Input {...props} type="text" />
      </Container>
    </ColumnContainer>
  );
};

export const NumberInput = ({
  label,
  color,
  background,
  disabled,
  icon,
  containerStyle,
  ...props
}: NumberInputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && (
        <RowContainer>
          <Spacer type="horizontal" value={5} />
          <MediumText faint>{label}</MediumText>
        </RowContainer>
      )}
      <Spacer type="vertical" value={5} />
      <Container color={color} background={background} disabled={disabled} style={containerStyle}>
        {icon && (
          <RowContainer>
            {icon}
            <Spacer type="horizontal" value={10} />
          </RowContainer>
        )}
        <Input {...props} type="number" />
      </Container>
    </ColumnContainer>
  );
};

export const FileInput = ({
  label,
  color,
  background,
  disabled,
  icon,
  containerStyle,
  ...props
}: FileInputProps): ReactElement => {
  const [value, setValue] = useState<File | null>(null);

  const ref = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue(file);
    }
    props.onChange?.(event);
  };

  return (
    <ColumnContainer>
      {label && (
        <RowContainer>
          <Spacer type="horizontal" value={5} />
          <MediumText faint>{label}</MediumText>
        </RowContainer>
      )}
      <Spacer type="vertical" value={5} />
      <Container color={color} background={background} disabled={disabled} style={containerStyle}>
        {icon && (
          <RowContainer>
            {icon}
            <Spacer type="horizontal" value={10} />
          </RowContainer>
        )}
        <Input {...props} hidden type="file" ref={ref} onChange={handleOnChange} multiple={false} />
        <Button style={{ background: 'none', filter: 'none', padding: 0 }} onClick={() => ref.current?.click()}>
          <MediumText faint={!value?.name} italic={!value?.name}>
            {value?.name ?? 'Choose a file'}
          </MediumText>
        </Button>
      </Container>
    </ColumnContainer>
  );
};

export const SelectInput = ({
  label,
  color,
  background,
  disabled,
  icon,
  value,
  choices,
  placeholder,
  containerStyle,
  onChange,
}: SelectInputProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (value: string) => {
    setIsOpen(false);
    onChange?.(value);
  };

  useOnClickout([ref], () => setIsOpen(false));

  return (
    <ColumnContainer ref={ref}>
      {label && (
        <RowContainer>
          <Spacer type="horizontal" value={5} />
          <MediumText faint>{label}</MediumText>
        </RowContainer>
      )}
      <Spacer type="vertical" value={5} />
      <Container color={color} background={background} disabled={disabled} style={containerStyle} ref={containerRef}>
        <SpaceBetweenContainer>
          <RowContainer>
            {icon && (
              <RowContainer>
                {icon}
                <Spacer type="horizontal" value={10} />
              </RowContainer>
            )}
            <MediumText faint={!value} italic={!value}>
              {value || placeholder}
            </MediumText>
          </RowContainer>
          <IconButton onClick={() => setIsOpen(!isOpen)} style={{ background: 'transparent' }} size="20px">
            <Icon name={isOpen ? IconName.CHEVRON_UP : IconName.CHEVRON_DOWN} />
          </IconButton>
        </SpaceBetweenContainer>
      </Container>
      {isOpen && containerRef.current && (
        <SelectInputListContainer
          width={containerRef.current.clientWidth}
          height={containerRef.current.clientHeight}
          label={!!label}
        >
          {choices.map((choice, index) => (
            <SelectInputOption key={index} onClick={() => handleSelectOption(choice.value)}>
              {choice.label}
            </SelectInputOption>
          ))}
        </SelectInputListContainer>
      )}
    </ColumnContainer>
  );
};

export const CheckboxInput = ({
  name,
  checked,
  label,
  color,
  background,
  disabled,
  icon,
  containerStyle,
  onChange,
}: CheckboxInputProps): ReactElement => {
  return (
    <ColumnContainer>
      {label && (
        <RowContainer>
          <Spacer type="horizontal" value={5} />
          <MediumText faint>{label}</MediumText>
        </RowContainer>
      )}
      <Spacer type="vertical" value={5} />
      <Container color={color} background={background} disabled={disabled} style={containerStyle}>
        {icon && (
          <RowContainer>
            {icon}
            <Spacer type="horizontal" value={10} />
          </RowContainer>
        )}
        <SpaceBetweenContainer>
          <MediumText faint italic>
            {name}
          </MediumText>
          <IconButton style={{ background: 'none' }} disabled={disabled} onClick={() => onChange?.(!checked)}>
            <Icon name={checked ? IconName.SQUARE_CHECK : IconName.SQUARE} size="24px" />
          </IconButton>
        </SpaceBetweenContainer>
      </Container>
    </ColumnContainer>
  );
};
