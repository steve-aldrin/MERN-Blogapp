import { useState } from "react";
import Header from "../Header";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

const modules={

  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ]
};

const formats=[
  'header','bold','italic','image'
];
const CreatePost= () => {
    const [text,setText]=useState('');
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [files,setFiles]=useState('');
    const [redirect,setRedirect]=useState(false);
   async function create(ev){
      const data= new FormData();
      data.set('title',title);
      data.set('summary',summary)
      data.set('file',files[0]);
      data.set('text',text);
 
     ev.preventDefault();
     const response=await fetch('http://localhost:4000/create',{
      method:'POST',
      body:data,
      credentials:'include',

  });
  if (response.ok){
    setRedirect(true);
  };


 
     
    };
    if (redirect){
      return <Navigate to={'/'}/>
    };
    
 
    return ( 
        
        <>
        
      <form  className="createform" onSubmit={create}>
        <label>Title:</label>
        <input className="createtitle"value={title} onChange={(ev=>setTitle(ev.target.value))} placeholder="Title"></input>
        <label>Summary</label>
        <input className="createdesc" value={summary} onChange={(ev=>setSummary(ev.target.value))} placeholder="Description"></input>
        <label>Cover Image</label>
        <input type="file" onChange={ev=>{setFiles(ev.target.files)}} />
        <ReactQuill theme="snow" value={text} formats={formats} modules={modules}onChange={ev=>setText(ev)} />
        <button className="buttonsign" > Submit </button>
      </form>

        </>
     );
}
 
export default CreatePost;