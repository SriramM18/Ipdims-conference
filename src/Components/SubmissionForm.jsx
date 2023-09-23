import React,{useState,useRef} from 'react'
import { Label, TextInput,Select,FileInput,Button } from 'flowbite-react'
import axios from 'axios';
import emailjs from '@emailjs/browser';




const SubmissionForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_09mobvf', 'template_uh8qr9a', form.current, 'TUaXD6jkkAHrLi8Jx')
        .then((result) => {
            console.log(result.text);
            alert("form submitted successfully")
        }, (error) => {
            alert("failed to submit");
        });
    };




//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [attachment, setAttachment] = useState(null);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new FormData object and append form data
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('attachment', attachment);

//     // Send form data to server using fetch API
//     fetch('/submitform', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       // Handle response from server
//       alert("submitted succesfully");
//     })
//     .catch(error => {
//       // Handle error
//       alert(error);
//     });
//   }
  return (
    <div className="shadow drop-shadow-sm bg-white p-8 mt-16    rounded-lg">
    <h2 className='text-4xl text-footerblue font-semibold text-center mb-4'>
   Submission </h2>
    <form className="" ref={form} onSubmit={sendEmail} >
    <div className="lg:flex justify-between sm:flex-col">
        <div className="flex flex-col gap-4 ">
            
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="authorname"
                    value="Corresponding Author Name"
                />
                <span className='text-errorRed'> *</span>
                </div>
                <TextInput classname='required'
                id="authorname"
                type="text"
                sizing="sm"
                required='true'
                name="author_name"
                />
            </div>
            
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="authorAffiliation"
                    value="Corresponding Author Affiliation"
                />
                <span className='text-errorRed'> *</span>
                </div>
                <TextInput classname='required'
                id="authorAffiliation"
                type="text"
                sizing="sm"
                required='true'
                name="author_affiliation"
                />
            </div>
             <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="authoremail"
                    value="Corresponding Author Email"
                />
                <span className='text-errorRed'> *</span>


                </div>
                <input name="author_email" 
                required='true' 
                className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' 
                type="email"
                //  value={email} 
                 id="authoremail" 
                //  onChange={e => setEmail(e.target.value)}
                 >

                </input>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="authorph"
                        value="Corresponding Author Mobile number"
                        required='true'
                    />
                    <span className='text-errorRed'> *</span>


                </div>
                <TextInput
                name="author_mobile"
                    id="authorph"
                    type="tel"
                    // sizing="sm"
                    required='true'
                />
            </div>
        </div>  


        <div className="flex flex-col gap-4 justify-end">

            
            

           <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="file"
                            value="Upload Paper"
                        />
                        <span className='text-errorRed'> *</span>
                    </div>
                        <FileInput id="file"  type='file'
                        helperText="Upload High Resolution Copy in pdf format " 
                        required='true' 
                        // name="attatchment"
                         />
                </div>
            
            
        </div>




        <div className="flex flex-col gap-4">
            <div>
            
                <div className="mb-2 block">
                <Label
                    htmlFor="papertitle"
                    value="Paper Title"
                />
                <span className='text-errorRed'> *</span>
                </div>

                <TextInput
                name="paper_title"
                id="papertitle"
                type="text"
                sizing="md"
                // value={name}
                // onChange={e => setName(e.target.value)}
                required='true'
                />
            </div>
            <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="numberOfPages"
                            value="Number Of Pages"
                        />
                    <span className='text-errorRed'> *</span>
                    </div>
                    <input required='true' className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0'
                    type="number" 
                    id="numberOfPages" 
                    name="number_of_pages" min="1" max="1000"></input>
                </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="abstract"
                        value="Abstract"
                        />
                    <span className='text-errorRed'> *</span>
                </div>
                <TextInput classname='required'
                    id="abstract"
                    type="text"
                    sizing="lg"
                    required='true'
                    name="abstract"
                />
            </div>


                
                
        </div>

</div>
{/* <Button type="submit" className='rounded-lg lg:mx-auto text-black bg-white '>Submit</Button> */}
<span className="ml-48">

{/* button div */}
<div className='d-flex justify-center align-middle'>
<button
      type="submit"
      className="  rounded-lg  bg-footerblue text-white ring-2 ring-footerblue  px-5 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >Submit</button>
    </div>
    </span>
</form>
    </div>
  )
}

export default SubmissionForm