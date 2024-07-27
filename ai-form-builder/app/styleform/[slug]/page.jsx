// "use client";
// import { db } from "@/configs";
// import { Jsonforms } from "@/configs/schema";
// import { eq } from "drizzle-orm";
// import { ArrowLeft } from "lucide-react";
// import { SquareArrowOutUpRight, Share2 } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import FormUi from "../FormUi";
// import { toast } from "sonner";
// import Controller from "../_components/Controller";
// import Link from "next/link";
// const Editform = ({ params }) => {
//   // data Fetch
//   const route = useRouter();
//   const [formdata, setformdata] = useState([]);
//   const [theme, settheme] = useState("light");
//   const data = async () => {
//     const result = await db.select().from(Jsonforms).where(eq(Jsonforms.id, params.slug));
//     const str = result[0].jsonform; // string
//     // console.log(str);
//     const jsonstr = JSON.parse(str); // json format
//     setformdata(jsonstr);

//   };
//   const [updatetrigger, setupdatetrigger] = useState();
//   const [bg, setbg] = useState("light");
//   useEffect(() => {
//     data();
//   }, []);
//   useEffect(() => {
//     setformdata(formdata);
//     if (updatetrigger) {
//       let res = db
//         .update(Jsonforms)
//         .set({ jsonform: JSON.stringify(formdata) })
//         .where(eq(Jsonforms.id, params.slug));
//     }
//   }, [updatetrigger]);
//   const deletefield = (index) => {
//     formdata.formFields.splice(index, 1);
//     setupdatetrigger(Date.now());
//     toast.success("Field Deleted");
//   };
//   const update = (val, index) => {
//     formdata.formFields[index].fieldName = val.fieldName;
//     formdata.formFields[index].placeholder = val.placeholder;
//     setupdatetrigger(Date.now());
//     toast.success("Field Updated");
//   };
//   return (
//     <div>
//       <p className="p-2 font-bold capitalize text-xl flex gap-2 items-center justify-between ">
//         <div
//           onClick={() => route.back()}
//           className="flex items-center font-light hover:font-extrabold cursor-pointer gap-3"
//         >
//           {<ArrowLeft />} Back
//         </div>

//         <div className="text-2xl text-primary">
//           {formdata.formTitle ? formdata.formTitle : "Title"}: {params.slug}
//         </div>
//         <div className="flex gap-2">
//           <Link href={"/aiform/"+params.slug}>
//             <button className="bg-primary text-sm text-white p-2 rounded-lg flex items-center gap-2">
//               <SquareArrowOutUpRight className="w-5"></SquareArrowOutUpRight>
//               Preview
//             </button>
//           </Link>
//           <Link href={"/"}>
//             <button className="bg-green-600 text-sm text-white p-2 rounded-lg flex items-center gap-2">
//               <Share2 className="w-5"></Share2>
//               Send
//             </button>
//           </Link>

//           <button
//             onClick={() => {
//               setupdatetrigger(Date.now());
//               toast.success("Form Updated");
//             }}
//             className="bg-primary text-sm text-white p-2 rounded-lg"
//           >
//             Update
//           </button>
//         </div>
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-4  h-screen">
//         <div className="p-2 border-2 m-1 mr-0 border-slate-300 rounded-lg h-full shadow-md">
//           <Controller settheme={settheme} setbg={setbg} />
//         </div>
//         <div
//           className="md:col-span-3 border-2 border-slate-300 m-1 rounded-lg h-full flex items-center justify-center"
//           style={{ background: bg }}
//         >
//           {/* This Is the Form Ui Section Where Our Form Will BE visible*/}
//           {
//             <FormUi
//               formdata={formdata}
//               update={update}
//               deletefield={(index) => {
//                 deletefield(index);
//               }}
//               theme={theme}
//             />
//           }
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Editform;



"use client";
import { db } from "@/configs";
import { Jsonforms } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { SquareArrowOutUpRight, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import FormUi from "../FormUi";
import { toast } from "sonner";
import Controller from "../_components/Controller";
import Link from "next/link";

const Editform = ({ params }) => {
  // data Fetch
  const route = useRouter();
  const [formdata, setformdata] = useState([]);
  const [theme, settheme] = useState("light");
  const [bg, setbg] = useState("light");

  const data = async () => {
    const result = await db.select().from(Jsonforms).where(eq(Jsonforms.id, params.slug));
    const str = result[0].jsonform; // string
    const jsonstr = JSON.parse(str); // json format
    setformdata(jsonstr);
    settheme(result[0].theme); // Set initial theme from DB
    setbg(result[0].background); // Set initial background from DB
  };

  const [updatetrigger, setupdatetrigger] = useState();

  useEffect(() => {
    data();
  }, []);

  useEffect(() => {
    setformdata(formdata);
    if (updatetrigger) {
      db.update(Jsonforms)
        .set({ jsonform: JSON.stringify(formdata), theme: theme, background: bg })
        .where(eq(Jsonforms.id, params.slug));
    }
  }, [updatetrigger]);

  useEffect(() => {
    if (theme || bg) {
      db.update(Jsonforms)
        .set({ theme: theme, background: bg })
        .where(eq(Jsonforms.id, params.slug));
    }
  }, [theme, bg]);

  const deletefield = (index) => {
    formdata.formFields.splice(index, 1);
    setupdatetrigger(Date.now());
    toast.success("Field Deleted");
  };

  const update = (val, index) => {
    formdata.formFields[index].fieldName = val.fieldName;
    formdata.formFields[index].placeholder = val.placeholder;
    setupdatetrigger(Date.now());
    toast.success("Field Updated");
  };

  return (
    <div>
      <p className="p-2 font-bold capitalize text-xl flex gap-2 items-center justify-between ">
        <div
          onClick={() => route.back()}
          className="flex items-center font-light hover:font-extrabold cursor-pointer gap-3"
        >
          {<ArrowLeft />} Back
        </div>

        <div className="text-2xl text-primary">
          {formdata.formTitle ? formdata.formTitle : "Title"}: {params.slug}
        </div>
        <div className="flex gap-2">
          <Link href={"/aiform/" + params.slug}>
            <button className="bg-primary text-sm text-white p-2 rounded-lg flex items-center gap-2">
              <SquareArrowOutUpRight className="w-5"></SquareArrowOutUpRight>
              Preview
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-green-600 text-sm text-white p-2 rounded-lg flex items-center gap-2">
              <Share2 className="w-5"></Share2>
              Send
            </button>
          </Link>

          <button
            onClick={() => {
              setupdatetrigger(Date.now());
              toast.success("Form Updated");
            }}
            className="bg-primary text-sm text-white p-2 rounded-lg"
          >
            Update
          </button>
        </div>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className="p-2 border-2 m-1 mr-0 border-slate-300 rounded-lg h-full shadow-md">
          <Controller settheme={settheme} setbg={setbg} />
        </div>
        <div
          className="md:col-span-3 border-2 border-slate-300 m-1 rounded-lg h-full flex items-center justify-center"
          style={{ background: bg }}
        >
          {/* This Is the Form Ui Section Where Our Form Will BE visible*/}
          {
            <FormUi
              formdata={formdata}
              update={update}
              deletefield={(index) => {
                deletefield(index);
              }}
              theme={theme}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Editform;
