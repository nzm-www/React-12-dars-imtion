import { Input } from "antd";
import React, { useState } from "react";
import "../styles/home.css";

function Home() {
  const [arr, setArr] = useState([]);
  const [item, setItem] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [newArr, setNewArr] = useState([]);

  const handle = (e) => {
    const newItem = { ...item };
    newItem[e.target.id] = e.target.value;
    setItem(newItem);
    console.log(item);
  };

  const addItemToArr = (user) => {
    setArr((prev) => {
      return [...prev, user];
    });
    console.log(arr);
    localStorage.setItem("Items", JSON.stringify(arr));
  };

  function handleSubmit(e) {
    e.preventDefault();
    addItemToArr(item);
  }
  let items = localStorage.getItem("Items");

  function removeUser(index) {
    const users = JSON.parse(items);
    users.slice(index, 1);
    setNewArr(users);
    localStorage.removeItem("Items");
    localStorage.setItem("Items", JSON.stringify(newArr));
  }

  return (
    <div className="home">
      <div className="home-left p-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="home-form d-flex flex-column gap-2"
        >
          <div className="fullname d-flex flex-column gap-2">
            <div className="name">
              <label htmlFor="">Name :</label>
              <Input
                onChange={(e) => handle(e)}
                value={item.name}
                id="name"
                placeholder="Enter the name"
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="">Email :</label>
            <Input
              onChange={(e) => handle(e)}
              value={item.email}
              id="email"
              type="email"
              placeholder="Enter the email"
            />
          </div>
          <div className="Phone number">
            <label htmlFor="">Phone number :</label>
            <Input
              onChange={(e) => handle(e)}
              value={item.phone}
              placeholder="Enter phone number"
              id="phone"
            />
          </div>
          <div className="image d-flex flex-column gap-1">
            <label htmlFor="">Upload avatar</label>
            <Input
              onChange={(e) => handle(e)}
              id="avatar"
              value={item.avatar}
              placeholder="Paste avatar url"
            />
          </div>
          <div className="submit">
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="home-right">
        {JSON.parse(items)?.map((item, index) => {
          return (
            <div className="card">
              <div className="image">
                <img src={item.avatar} alt="" />
              </div>
              <div className="name">
                <p>{item.name}</p>
              </div>
              <div className="email">
                <p>{item.email}</p>
              </div>
              <div className="phone">
                <p>{item.phone}</p>
              </div>
              <div className="btns">
                <button
                  onClick={() => removeUser(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
