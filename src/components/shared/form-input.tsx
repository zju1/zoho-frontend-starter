import type { HTMLInputTypeAttribute } from 'react'
import { type FieldValues, type ControllerProps, useController } from 'react-hook-form'

export interface FormInputProps<T extends FieldValues> extends Omit<ControllerProps<T>, 'render'> {
  label?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  disabled?: boolean
  helperText?: string
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  defaultValue,
  disabled = false,
  rules,
  shouldUnregister,
  label,
  placeholder,
  type = 'text',
  helperText
}: FormInputProps<T>) {
  const { field, fieldState } = useController<T>({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })
  const isDirty = !!fieldState.error;

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...field}
      />
      {isDirty ? (
        <p className="text-sm font-medium text-red-500">
          {fieldState.error?.message}
        </p>
      ) : helperText ? (
        <p>{helperText}</p>
      ) : null}
    </div>
  )
}