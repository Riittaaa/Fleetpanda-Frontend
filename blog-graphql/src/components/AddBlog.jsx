import React from "react";
// id
//       status
//       title
//       content
//       userId
//       organizationId

function AddBlog() {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the title"
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
      />

      <input
        type="file"
        placeholder="Enter the content"
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
      />
      <input type="submit" />
    </div>
  );
}

export default AddBlog;
