import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    title: "",
    description: "",
    category: "",
    imageUrl: "",
}

const options = ['Travel',"Fashion",'Fitness','Sports','Food','Tech'];



const AddEditBlog = () => {
    const [formValue,setFormValue] = useState(initialState);
    const [categoryError,setCategoryError] = useState(null);
    const {title,description,category} = formValue;
    const {id} = useParams();

const navigate = useNavigate();

const onInputChange = (e) => {
    let {name,value} = e.target;
    setFormValue({...formValue,[name]:value});
};

const onCategoryChange = (e) => {
    setFormValue({...formValue,category:e.target.value});
};

const handleSubmit = (e) => {};




  return (
    <MDBValidation className='row g-3' style={{marginTop: '100px'}} noValidate onSubmit={handleSubmit}>
        {/* //not validate is used to prevent the default validation of the form */}
        <p className='fs-2 fw-bold'>Add Blog</p>
        <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={title || ""}
          name="title"
          type="text"
          onChange={onInputChange}
          required
          label="Title"
          validation="Please provide a title"
          invalid
        />
        <br />
        <MDBInput
          value={description || ""}
          name="description"
          type="text"
          onChange={onInputChange}
          required
          label="Description"
          validation="Please provide a description"
          textarea
          rows={4}
          invalid
        />
        <br />
        <select className='categoryDropdown' onChange={onCategoryChange} value ={category}>
            <option> Please select a category</option>
            {options.map((option,index) => (
                <option key={index} value={option || ''}>{option}</option>
            ))}
        </select>
        <br />
        <br />
        <MDBBtn type='submit' style={{marginRight: '10px'}}>Add</MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </MDBBtn>
        </div>
    </MDBValidation>
  )
}

export default AddEditBlog