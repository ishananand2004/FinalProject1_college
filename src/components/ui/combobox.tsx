"use client";

import * as React from "react";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { type Option } from "@/types";
import { Spinner } from "./spinner";

interface ComboboxProps<T extends Option>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  options: T[];
  value?: string;
  defaultValue?: string;
  onValueChange: (value: string, option: T | null) => void;
  placeholder?: string;
  renderItem?: (option: T) => React.ReactNode;
}

export const Combobox = React.forwardRef(function <T extends Option>(
  {
    value: controlledValue = "",
    defaultValue = "",
    isLoading = false,
    onValueChange,
    placeholder = "",
    options = [],
    renderItem,
    ...props
  }: ComboboxProps<T>,
  ref: React.Ref<HTMLButtonElement>
) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);

  const selectedOption = options.find((option) => option.value === value);

  const handleOnChange = (selectedOption: T | null) => {
    setValue(selectedOption?.value ?? "");
    onValueChange(selectedOption?.value ?? "", selectedOption);
  };

  React.useEffect(() => {
    setValue(controlledValue);
  }, [controlledValue]);

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      data-testid="combobox-popover-wrapper"
    >
      <PopoverTrigger className="!bg-[#efefef]" asChild>
        <Button
          ref={ref}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex flex-1 justify-between overflow-hidden whitespace-nowrap hover:bg-foreground border border-border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out"
          data-testid="combobox-button"
          {...props}
        >
          {selectedOption
            ? selectedOption.label
            : value || (
                <span className="text-text font-normal">{placeholder}</span>
              )}
          <CaretSortIcon
            className="h-4 w-4 opacity-50 ml-auto"
            data-testid="combobox-caret-icon"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        data-testid="combobox-popover-content"
        style={{
          width: "var(--radix-popper-anchor-width)",
        }}
      >
        <Command data-testid="combobox-command">
          <CommandInput
            placeholder="Search..."
            data-testid="combobox-search-input"
          />
          <CommandEmpty data-testid="combobox-command-empty">
            {isLoading ? (
              <>
                <Spinner data-testid="combobox-loading-spinner" /> Loading...
              </>
            ) : (
              "Not found."
            )}
          </CommandEmpty>
          <CommandGroup
            className="overflow-auto max-h-[40vh]"
            data-testid="combobox-options-group"
          >
            {!isLoading
              ? options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value + option.label}
                    onSelect={() => {
                      handleOnChange(option.value === value ? null : option);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                    disabled={option.disabled ?? false}
                    data-testid={`combobox-option-${option.value}`}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        option.value === value
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <div
                      className="flex flex-col items-start justify-center"
                      data-testid={`combobox-option-details-${option.value}`}
                    >
                      {renderItem ? renderItem(option) : option.label}
                    </div>
                  </CommandItem>
                ))
              : null}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = "Combobox";
