'use client'
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

type Option = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const dropdownVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange, className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const selected = options.find(opt => opt.value === value);

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ width: 170 }}
      onClick={e => e.stopPropagation()}
    >
      <button
        className="bg-black text-white rounded-full px-6 py-2 flex items-center gap-2 font-poppins text-base focus:outline-none border border-neutral-800 w-full shadow-md"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{ width: '100%' }}
      >
        <span className="truncate w-full text-left">{selected ? selected.label : "Seçiniz"}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="ml-2">
          <Icon icon="hugeicons:arrow-down-01" className='text-xl'/>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            className={`absolute left-0 top-full mt-2 w-full bg-black rounded-xl shadow-lg border border-neutral-800 z-40 overflow-hidden ${
              open ? "" : "pointer-events-none"
            }`}
            style={{ width: "100%" }}
            role="listbox"
            onMouseDown={e => e.stopPropagation()}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                className={`px-6 py-2 cursor-pointer font-poppins text-white hover:bg-primary/20 transition-colors duration-150 ${
                  opt.value === value ? "bg-primary/10" : ""
                }`}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                role="option"
                aria-selected={opt.value === value}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectBox;