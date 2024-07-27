"use client"
import React from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { chatSession } from '@/configs/AiModal'
import { useUser } from '@clerk/nextjs'
import { Jsonforms } from '@/configs/schema'
import moment from 'moment/moment'
import { db } from '@/configs'   // DataBase String Is Causing Error 
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
const Createform = () => {
    const [opendialog, setopendialog] = useState(false)
    const [USERINPUT, setUSERINPUT] = useState()
    const [loading, setloading] = useState(false)
    const user = useUser();
    const route = useRouter();
    const prompt = `Please provide a form in JSON format for student registration for ${USERINPUT}. The form should include the formheading, formTitle, formFields, fieldName, placeholder (placeholder should be pleasing and different from fieldName), formLevel(indicating if the field is required or optional), and fieldtypes(Also Efficiently Handle Different Field Type Content Like, text,select etc). The JSON should follow this structure, including all necessary information for a comprehensive registration form.`  // this is our Prompt to fetch data from the AI
    const oncreateform = async () => {
        setloading(true)
        const result = await chatSession.sendMessage("Description:" + prompt + USERINPUT);
        // console.log(result.response.text())
        if (result.response.text()) {
            setopendialog(false)
            setloading(false)
            const resp = await db.insert(Jsonforms).values({
                jsonform: result.response.text(),
                createdby: user.id,
                createdat: moment().format('DD/MM/YYYY')
            }).returning({ id: Jsonforms.id });

            const userid = resp[0].id;
            if (userid) {
                route.push(`/styleform/${userid}`)  //redirect to the styleform page

            }
        }
    }
    return (
        <div>
            <Button onClick={() => {
                setopendialog(true)
            }
            } >+ Create Form</Button>
            <Dialog open={opendialog} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Form</DialogTitle>
                        <DialogDescription>
                            <Textarea className="my-3" placeholder="Enter Prompt Of Your Form" onChange={(e) => {
                                setUSERINPUT(e.target.value)
                            }
                            } />
                            <div className="m-2 flex justify-between">
                                <Button onClick={() => {
                                    setopendialog(false)
                                }
                                } variant="destructive" >Cancel</Button>
                                <Button disabled={!USERINPUT} onClick={oncreateform}>{loading ? <Loader2 className='animate-spin' /> : "Create"} </Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Createform
