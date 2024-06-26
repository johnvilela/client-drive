import * as React from 'react';

import { classHelper } from '@/lib/utils/classHelper';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="group">
        {label && (
          <label
            className={classHelper(
              'block mb-1 text-sm font-medium text-muted-foreground group-focus-within:text-primary',
              { 'text-red-600': error },
            )}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={classHelper(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            { 'ring-2 ring-red-600': error },
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
