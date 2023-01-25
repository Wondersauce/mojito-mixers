import { FormControl, FormControlLabel, FormLabel, FormHelperText, Radio, RadioGroup as MUIRadioGroup, RadioProps as MUIRadioProps } from "@mui/material";
import React from "react";
import { Control, Controller, Path } from "react-hook-form";


export interface RadioProps {
  label: string | number | React.ReactElement;
  value: string;
}
export interface RadioGroupProps extends MUIRadioProps{
  name: string;
  value?: RadioProps;
  label: string | number | React.ReactElement;
  items: RadioProps[];
  error?: boolean;
  helperText?: string;
}


export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  value,
  helperText,
  onChange,
  error,
  items,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event as React.ChangeEvent<HTMLInputElement>, true);
    }
  };
  return (
    <FormControl>
      <FormLabel>{ label }</FormLabel>
      <MUIRadioGroup
        row
        aria-labelledby="radio-row-radio-buttons-group-label"
        name={ name }
        defaultValue={ value?.value }
        value={ value?.value }
        onChange={ handleRadioChange }>
        { items.map((item: RadioProps) => (
          <FormControlLabel
            name={ item.value }
            key={ item.value }
            value={ item.value }
            control={ <Radio /> }
            // onChange={ handleRadioChange }
            label={ item.label } />
        )) }
      </MUIRadioGroup>
      { error && <FormHelperText sx={{ color: "red" }}>{ helperText }</FormHelperText> }
    </FormControl>
  );
};

export type ControlledRadioGroup<TFieldValues = any, TContext = any> = RadioGroupProps & {
  name: Path<TFieldValues>;
  control: Control<TFieldValues, TContext>;
};

// eslint-disable-next-line react/function-component-definition
export function ControlledRadio<TFieldValues = any, TContext = any>({
  name: parentName,
  control,
  label,
  ...props
}: ControlledRadioGroup<TFieldValues, TContext>) {
  return (
    <Controller
      name={ parentName }
      control={ control }
      render={ ({ field: { name, onChange, ref, value, ...field }, fieldState }) => {
        const error = fieldState?.error;

        return (
          <RadioGroup
            // id={ name }
            name={ name }
            label={ label }
            value={ value as RadioProps }
            onChange={ onChange }
            inputRef={ ref }
            error={ !!error }
            helperText={ error?.message }
            items={ props.items }
            { ...field } />
        );
      } } />
  );
}
