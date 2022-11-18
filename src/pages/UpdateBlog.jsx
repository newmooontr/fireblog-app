import React from 'react'
import { UpdateCon } from '../styled/UpdateStyled';

const UpdateBlog = () => {
  return (
    <UpdateCon>
      <img src="" alt="" />
      <h2>Update Blog</h2>
      <label htmlFor="title">Title</label>
      <input type="text" />
      <label htmlFor="url">Image URL</label>
      <input type="text" />
      <label htmlFor="content">Content</label>
      <textarea name="content" id="content"></textarea>
      <button>UPDATE</button>
    </UpdateCon>
  )
}

export default UpdateBlog;