import React from "react";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
// import { Delete } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const FieldEdit = ({ dfvalue,onUpdate,deletefield,theme }) => {
  const [placeholder, setplaceholder] = useState(dfvalue.placeholder)
  const [label, setlabel] = useState(dfvalue.fieldName)
  
  return (
    <div data-theme={theme} className="cursor-pointer flex gap-2 items-center">
      <Popover>
        <PopoverTrigger><Edit className="w-4" /></PopoverTrigger>
        <PopoverContent>
          <h2 className="font-bold ">Edit Labels</h2>
          <div className="capitalize">
            <label className="text-xs">Label name</label>
            <Input type="text" defaultValue={dfvalue.fieldName} onChange={(e) => {
              setlabel(e.target.value)
            }
            } />
          </div>
          <div className="capitalize">
            <label className="text-xs">Placeholder</label>
            <Input type="text" defaultValue={dfvalue.placeholder} onChange={(e) => {
              setplaceholder(e.target.value)
            }
            } />
          </div>
          <Button className="my-3" onClick={() => onUpdate({
            ...dfvalue,
            fieldName: label,
            placeholder: placeholder
          }) } >Update</Button>
        </PopoverContent>
      </Popover>
      <AlertDialog>
      <AlertDialogTrigger><Trash className="w-4 text-red-500" /></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the {dfvalue.fieldName} field.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deletefield}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      
    </div>
  );
};

export default FieldEdit;
