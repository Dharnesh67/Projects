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
import { forms } from '@/configs/schema'
import moment from 'moment/moment'
const Createform = () => {
    const [opendialog, setopendialog] = useState(false)
    const [USERINPUT, setUSERINPUT] = useState()
    const [loading, setloading] = useState(false)
    const user=useUser();
    const prompt = `Please provide a form in JSON format for student registration for ${USERINPUT}. The form should include the form title, headings, form fields, field names, placeholders, form level (indicating if the field is required or optional), and field types. The JSON should follow this structure, including all necessary information for a comprehensive registration form.`
    const oncreateform = async () => {
        setloading(true)
        const result = await chatSession.sendMessage("Description:"+prompt+USERINPUT);
        console.log(result.response.text())
        if(result.response.text()){
            const resp=await db.insert(forms).values({
                jsonform:result.response.text(),
                createdby:user.id,
                createdat:moment().format('DD/MM/YYYY, h:mm:ss a')
            }).returning({id:forms.id});
            console.log(resp)
        }
        setloading(false)
        setopendialog(false)
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
                                <Button disabled={!USERINPUT} onClick={oncreateform}>Create</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Createform
