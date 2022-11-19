import React from 'react'
import {NewblogCon} from  "../styled/NewBlogStyled";



function NewBlog() {
  return (
    <NewblogCon>
      <img src="assets/blok.png" alt="" />
      <h2>New Blog</h2>
      <label htmlFor="title">Title</label>
      <input placeholder="Title" id="title" type="text" />
      <label htmlFor="url">Image URL</label>
      <input placeholder="Image URL" id="url" type="text" />
      <label htmlFor="content">Content</label>
      <textarea placeholder="Content" name="content" id="content"></textarea>
      <button>SUBMIT</button>
    </NewblogCon>
  );
}

export default NewBlog;

