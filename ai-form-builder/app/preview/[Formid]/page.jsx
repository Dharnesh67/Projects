"use client";
import FormUi from "@/app/styleform/FormUi";
import { db } from "@/configs";
import { Jsonforms } from "@/configs/schema";
import { eq } from "drizzle-orm";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
const page = ({ params }) => {
  let a = useParams();
  const [formdata, setformdata] = useState([]);
  const [flag, setflag] = useState(false)
  const data = async () => {
    const result = await db.select().from(Jsonforms).where(eq(Jsonforms.id, params.Formid));
    const str = result[0].jsonform; // string
    if (str.length>0) {
      setflag(true);
    }
    const jsonstr = JSON.parse(str); // json format
    setformdata(jsonstr);
  };
  useEffect(() => {
    if (params) {
      data();
    }
  }, []);
  return (
    <div className="flex items-center justify-center w-screen">
      {flag? <FormUi formdata={formdata} />: <div className="text-2xl font-bold">No Data Found</div>}
    </div>
  );
};

export default page;
