"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [info, setInfo] = useState("");
  const [inputText, setInputText] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const url = "http://jsonplaceholder.typicode.com/users";

  const getData = async () => {
    console.log("async");
    const res = await fetch(url)
      .then((res) => res.text())
      .then((obj) => setInfo(JSON.parse(obj)));
  };

  useEffect(() => {
    getData();
  }, [console.log(info)]);

  const getText = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  function getInfo() {
    // console.log(inputText);
    // console.log(`This name is ${info[0].name}`);

    [...info].map((el, i) => {
      if (inputText === el.name) {
        console.log(info[i].company.name);
        setCompany(info[i].company.name);
        setEmail(info[i].email);
      } else {
        // console.log("no");
      }
    });
  }

  return (
    <>
      <h1>This is Home for Fetch practice</h1>
      <main className="main">
        {[...info].map((inf, i) => (
          <li key={inf + i}>{inf.name}</li>
        ))}
      </main>
      <sub-container>
        <input type="text" onChange={getText}></input>
        <button onClick={getInfo}>Submit</button>
      </sub-container>
      <div>
        Company :{company}
        <br />
        E-mail :{email}
      </div>
    </>
  );
}
