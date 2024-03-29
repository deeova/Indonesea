"use client";

import React, {useCallback, useEffect, useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
}
const CounterForm: React.FC<CounterProps> = ({
  value,
  onChange,
}) => {
  const [hiddenInputValue, setHiddenInputValue] = useState(value);
  useEffect(() => {
    // Update the hidden input value when the Form value changes
    setHiddenInputValue(value);
  }, [value]);

  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 0) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="
                        w-10
                        h-10
                        rounded-full
                        border-[1px]
                        border-neutral-400
                        flex
                    
                        items-center
                        justify-center
                        text-neutral-600
                        cursor-pointer
                        hover: opacity-80
                        transition
                    "
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="
                        w-10
                        h-10
                        rounded-full
                        border-[1px]
                        border-neutral-400
                        flex
                        items-center
                        justify-center
                        text-neutral-600
                        cursor-pointer
                        hover: opacity-80
                        transition
                    "
        >
          <AiOutlinePlus />
        </div>
      </div>
      <input
        type="hidden"
        value={hiddenInputValue}
      />
    </div>
  );
};

export default CounterForm;
