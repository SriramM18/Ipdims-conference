import React,{useState,useRef} from 'react'

import { Label, TextInput,Select,FileInput,Button } from 'flowbite-react'
import emailjs from '@emailjs/browser';
const FormComponent = () => {

 const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_09mobvf', 'template_r6wrfu2', form.current, 'TUaXD6jkkAHrLi8Jx')
        .then((result) => {
            console.log(result.text);
            alert("form submitted successfully");
            
        }, (error) => {
            alert("failed to submit");
        });
    };

  return (
    
    <div className="shadow drop-shadow-sm bg-white p-8 mt-16    rounded-lg ">
    <h2 className='text-4xl text-footerblue font-semibold text-center mb-4'>Fill Payment Details</h2>
    <form className="" ref={form} onSubmit={sendEmail}>
    <div className="sm:flex flex-col lg:flex justify-between  ">
    <div className="flex flex-col gap-4 ">
    <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authorname"
        value="Author Name"
      />
      <span className='text-errorRed'> *</span>
    </div>
    <TextInput classname='required'
      id="authorname"
      type="text"
      sizing="sm"
      required='true'
      name='author_name'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authoremail"
        value="Author Email"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <input required='true' className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' 
    type="email" id="quantity" name="author_email" ></input>


  </div>

  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authorph"
        value="Author Phone number"
        required='true'
      />
      <span className='text-errorRed'> *</span>


    </div>
    {/* <input required='true' className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="text" id="quantity" name="quantity" min="1111111111" max="9999999999"></input> */}
    <TextInput
      id="paperid"
      type="tel"
      name="author_mobile"
      // sizing="sm"
      required='true'
    />
  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="paperid"
        value="Paper ID"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <TextInput
      id="paperid"
      type="number"
      sizing="sm"
      required='true'
      name="paper_id"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="papertitle"
        value="Paper Title"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <TextInput
      id="papertitle"
      type="text"
      sizing="md"
      required='true'
      name="paper_title"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="organization"
        value="Organization"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <TextInput
      id="organization"
      type="text "
      sizing="md"
      required='true'
      name="organization"
    />
  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="nationality"
        value="Nationality"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <Select id="countries" required  name="nationality">
            <option>Select</option>
            <option>Indian</option>
            <option>Foreigner</option>
            
            
          </Select>
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="category"
        value="Category Of Registeration"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <Select id="countries" required name="category"> 
            <option>Student</option>
            <option>Acadamecian</option>
            <option>Industrialist</option>


            
          </Select>
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="large"
        value="Amount Paid"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <input required='true' 
    className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' 
    type="number" id="quantity" 
    name="amount_paid" 
    min="1000" max="100000"></input>
  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="nationality"
        value="Transaction ID"
      />
      <span className='text-errorRed'> *</span>




    </div>
    <TextInput
    
      id="large"
      type="number"
      required="true"
      name="transaction_id"
      // sizing="md"
    />
    
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="category"
        value="Date Of Transaction"
      />
      <span className='text-errorRed'> *</span>


    </div>
    <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0'
      id="large"
      type="date"
      sizing="md"
      required='true'
      name='date-of_transaction'
    />
    
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="large"
        value="Payment Proof"
      />
    <span className='text-errorRed'> *</span>


    </div>


    <FileInput id="file" helperText="Upload High Resolution Copy " required='true' 
      // name="attatchment"
    />
  </div>
</div>


</div>
{/* <Button type="submit" className='rounded-lg lg:mx-auto text-black bg-white '>Submit</Button> */}
<span className="ml-48">
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
export default FormComponent