import React, { useState } from "react";
import "../css/AddBlog.css";
// id
//       status
//       title
//       content
//       userId
//       organizationId

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  return (
    <div>
      <form action="" className="form">
        <h2>Add blog</h2>
        <label for="title">Title:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="content">Content:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="userId">UserId:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the userId"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="organizationId">OrganizationId:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the organization id"
          onChange={(e) => {
            setOrganizationId(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="staus">Staus:</label>
        <br />
        <input
          type="text"
          placeholder="Enter the status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddBlog;
