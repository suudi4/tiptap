
"use client"
import { useEditor, EditorContent } from '@tiptap/react'

import TiptapEditor from './_mincom/commands'

import { CommandDemo } from './_mincom/commdemo'
import { Menubar,MenubarMenu } from '@/components/ui/menubar'

const page = () => {


 

  return (
    <div className="flex flex-col h-screen w-full m-10 overflow-hidden">
    <div className="flex-grow overflow-y-auto">
        <TiptapEditor initialContent="waynkaa" />
    </div>
    
    <div className="flex-none">
        <CommandDemo />
        <Menubar>
            <MenubarMenu>
                {/* Items can be added here */}
            </MenubarMenu>
            Somali
        </Menubar>
    </div>
</div>

  )
}

export default page

