import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';

interface FormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
}

const FormField: FC<FormFieldProps> = ({ name, label, placeholder, required = false, as = 'input' }) => {
  const { control } = useFormContext();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          as === 'textarea' ? (
            <textarea
              id={name}
              placeholder={placeholder}
              required={required}
              {...field}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          ) : (
            <input
              id={name}
              type="text"
              placeholder={placeholder}
              required={required}
              {...field}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          )
        )}
      />
    </div>
  );
};

export default FormField;
