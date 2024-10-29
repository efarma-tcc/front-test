import React, { useState, useEffect } from "react";

import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const statuses = [
  { value: "remedio1", label: "Remédio 01" },
  { value: "remedio2", label: "Remédio 02" },
  { value: "remedio3", label: "Remédio 03" },
  { value: "remedio4", label: "Remédio 04" },
  { value: "remedio5", label: "Remédio 05" },
  { value: "remedio6", label: "Remédio 06" },
  { value: "remedio7", label: "Remédio 07" },

];

export function ComboBoxResponsive() {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    // Handle potential cleanup on component unmount (optional)
    return () => {};
  }, []);


  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>Selecione o Remédio</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>
  );
}

function StatusList({ setOpen, setSelectedStatus }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.label}
              value={status.label}
              onSelect={(label) => {
                setSelectedStatus(statuses.find((priority) => priority.label === label) || null);
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
