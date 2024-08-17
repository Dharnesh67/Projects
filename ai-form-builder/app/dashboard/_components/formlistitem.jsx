import React from "react";
import { Trash, Share } from "lucide-react";
import Link from "next/link";
import { db } from "@/configs";
import { Jsonforms } from "@/configs/schema";
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
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { eq } from "drizzle-orm";
const FormListItem = ({ id, formheading, title, formdata, refreshdata }) => {
  const { user } = useUser();

  const Del = async (id) => {
    const result = await db.delete(Jsonforms).where(eq(Jsonforms.id, id));
    if (result) {
      toast("Form Deleted");
      refreshdata();
    }
  };

  return (
    <div className="border border-x-4 border-y-gray-300 border-primary my-2 mx-1 flex items-center rounded-md font-bold text-lg shadow-lg transition duration-500 ease-in-out">
      <div className="flex items-center justify-between w-full p-2" key={id}>
        <Link href={`/styleform/${id}`} key={id}>
          <div className="flex items-center justify-between">
            <div className="text-primary border p-2 rounded-full">{id}</div>
            <div className="text-base lg:text-lg">
              {formheading}
              <div className="text-xs lg:text-sm font-normal text-gray-600">{title}</div>
            </div>
          </div>
        </Link>
        <div className="flex">
          <AlertDialog>
            <AlertDialogTrigger>
              <div className="text-red-500 hover:bg-red-100 p-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer">
                <Trash size={19} />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Item will be permanently deleted. You can't undo this action.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => Del(id)}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <div className="hover:bg-blue-100 p-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer">
            <Share size={19} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormListItem;
