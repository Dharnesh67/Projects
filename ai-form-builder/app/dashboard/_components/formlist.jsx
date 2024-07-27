"use client";
import { db } from "@/configs";
import { Jsonforms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Formitem from "./formlistitem";
const Formlist = () => {
    const { user } = useUser();
    const [formdata, setformdata] = useState([]);

    const data = async () => {
        const result = await db.select().from(Jsonforms).orderBy(Jsonforms.createdat, "desc");
        setformdata(result);
    };

    useEffect(() => {
        data();
    }, []);
    return (
        <div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 ">
                {formdata.length > 0 ? (
                    formdata.map((form) => {
                        const jsonForm = JSON.parse(form.jsonform);
                        return (
                            
                                <Formitem id={form.id} formheading={jsonForm.formHeading} title={jsonForm.formTitle}  formdata={formdata} refreshdata={data}/>
                           
                        );
                    })
                ) : (
                    <li>No forms available</li>
                )}
            </ul>
        </div>
    );
}

export default Formlist;
