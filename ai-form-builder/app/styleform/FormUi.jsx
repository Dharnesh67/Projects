"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import FieldEdit from "./_components/fieledit";
import { usePathname } from "next/navigation";
import userres from "@/configs/schema/";
import { db } from "@/configs/index";
import { toast } from "sonner";

const FormUi = ({ formdata, update, deletefield, theme }) => {
  const [data, setdata] = useState();
  const fieldchange = (value, name) => {
    // console.log(value,name)
    setdata({ ...data, [name]: value });
  };
  let formreference = useRef();
  const onformSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const result = await db.userres.create({
        jsonresponse: data,
        formid: formdata.formid,
        createdby: "An",
        createdat: new Date().toISOString(),
      });
      if (result) {
        formreference.reset();
        toast.success("Form Submitted Successfully");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    }
  };
  const path = usePathname();
  return (
    <div className="w-1/2 rounded-xl my-5 shadow-lg shadow-violet-400 " data-theme={theme}>
      <div className="border-2 rounded-xl p-5 shadow-md ">
        <div className="text-2xl font-bold mb-4 flex justify-center">{formdata?.formHeading}</div>
        <div className="text-md  font-light mb-4 flex justify-center">{formdata?.formTitle}</div>
        <form onSubmit={onformSubmit} ref={(el) => (formreference = el)}>
          {formdata?.formFields &&
            Array.isArray(formdata.formFields) &&
            formdata.formFields.map((field, index) => (
              <div
                key={field.fieldName}
                className={
                  field.fieldType === "radio" || field.fieldType === "checkbox"
                    ? "flex items-center mb-4"
                    : "mb-4"
                }
              >
                <label
                  className={
                    field.fieldType === "radio" || field.fieldType === "checkbox"
                      ? "flex mb-1 font-semibold mr-2 capitalize"
                      : "block mb-1 font-semibold capitalize"
                  }
                >
                  {field.fieldName}
                </label>
                {field.fieldType === "select" ? (
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options &&
                        field.options.map((option, index) => (
                          <SelectItem key={index} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                ) : field.fieldType === "radio" ? (
                  <RadioGroup>
                    {field.options &&
                      field.options.map((option, index) => (
                        <div className="flex items-center space-x-2" key={index}>
                          <RadioGroupItem value={option} id={`${field.fieldName}-${index}`} />
                        
                        </div>
                      ))}
                  </RadioGroup>
                ) : field.fieldType === "checkbox" ? (
                  <Checkbox id={field.fieldName} />
                ) : (
                  <div className="flex items-center gap-2 text-black">
                    <Input
                      onChange={(e) => fieldchange(e.target.value, e.target.name)}
                      type={field.fieldType}
                      name={field.fieldName}
                      placeholder={field.placeholder}
                      // required={field.formLevel === "required"}
                      className={
                        field.fieldType === "radio" || field.fieldType === "checkbox"
                          ? "w-4 flex text-black"
                          : field.fieldType === "textarea"
                          ? "w-full p-2 border border-gray-300 rounded focus:outline-double focus:border-primary h-24 capitalize"
                          : "w-full p-2 border border-gray-300 rounded focus:outline-double focus:border-primary capitalize"
                      }
                    />
                    {!path.includes("aiform") && (
                      <FieldEdit
                        dfvalue={field}
                        onUpdate={(val) => {
                          update(val, index);
                        }}
                        deletefield={() => deletefield(index)}
                        theme={theme}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          <button data-theme={theme} type="submit" className="w-full btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUi;
