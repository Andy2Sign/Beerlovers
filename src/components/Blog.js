import React from 'react';
import FormInput from './FormInput';

const Blog = ({saveNewItem, handleSubmit}) => {
   
    
  return (
    <div>
      <FormInput saveNewItem={saveNewItem} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Blog;
