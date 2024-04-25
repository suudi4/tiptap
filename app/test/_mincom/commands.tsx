
"use client"
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Highlight from '@tiptap/extension-highlight'

const TiptapEditor = ({ initialContent = "" }) => {


  
  // const handleImproveClick = async () => {
  //   const content = editor.getHTML();
  //   const improvedContent = await improveContent(content);
  //   editor.commands.setContent(improvedContent);
  // };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write your content here...',
      }),
      Highlight,
    ],
   
    content: initialContent,
    
  })

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <button onClick={() => handleImproveClick(editor)}>Improve Content</button>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          // className={editor.isActive('bold') ? 'is-active' : ''}
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          // className={editor.isActive('italic') ? 'is-active' : ''}
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          // className={editor.isActive('strike') ? 'is-active' : ''}
        >
          strike
        </button>
      </BubbleMenu>
      

      <EditorContent className='h-full w-full bg-red-300' editor={editor} />
      
     
    </div>
  )
}

export default TiptapEditor



const improveContent = async (content) => {
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003", // Choose appropriate model
    //   prompt: `Improve the following text:\n\n${content}`,
    //   max_tokens: 256, // Adjust as needed
    //   n_choices: 1,
    //   temperature: 0.7, // Adjust for creativity
    // });
  
    // return response.data.choices[0].text.trim();
    return "suudi"
  };
 // Outside the TiptapEditor component
const handleImproveClick = async (editor) => {
    const { state } = editor
    const { $from, $to } = state.selection
  
    // Check if there is a selection
    if (!$from || !$to) {
      alert('Please highlight the text you want to improve.')
      return
    }
  
    const fromPos = $from.pos
    const toPos = $to.pos
    const text = state.doc.textBetween(fromPos, toPos)
  
    const improvedContent = await improveContent(text)
  
    editor.chain().focus().deleteRange({ from: fromPos, to: toPos }).insertContent(improvedContent).run()
  }