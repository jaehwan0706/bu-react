import React, { useState } from "react";

import Header from "./Header.js";
import Nav from "./Nav.js";
import Article from "./Article.js";
import Create from "./Create.js";
import Update from "./Update.js";

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  // const topics = [
  //   { id: 1, title: "html", body: "html is ...." },
  //   { id: 2, title: "css", body: "css is ...." },
  //   { id: 3, title: "javascript", body: "javascript is ...." },
  // ];
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ...." },
    { id: 2, title: "css", body: "css is ...." },
    { id: 3, title: "javascript", body: "javascript is ...." },
  ]);

  console.log(mode);

  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if (mode === "READ") {
    let index = topics.findIndex(
      (topic) => topic.id === id
    )
    // let title, body = null;
    // for (let i =0; i < topics.length; i++) {
    //   if (topics[i].id === id) {
    //     title = topics[i].title;
    //     body = topics[i].body;
    //   }
    // }

    // content = <Article title={title} body={body} />;
    content = <Article title={topics[index].title} body={topics[index].body} />;
    // content = <Article title = "Welcome" body = "Hello, Read"/>
    contextControl = <>
      <li><a href = {'/Update' + id}  onClick = {event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type = "button" value = "Delete" onClick = {() => {
        const newTopic = [];
        for(let i =0; i < topics.length; i++){
          if(topics[i].id !== id){
            newTopic.push(topics[i]);
          }
        }
        setTopics(newTopic);
        setMode('WELCOME');
      }}/></li>
    </>

  }else if(mode ==='CREATE'){
    //Create.js추가
      content = <Create onCreate = {
        (title, body) => {
          const newTopic = {id: nextId, title:title, body:body}
          // topics.push(newTopic);
          const newTopics = [...topics, newTopic]; //spread문법
          setTopics(newTopics);
          //다시 읽기(READ) 모드로 전환
          setMode('READ');
          setId(nextId);
          setNextId(nextId +1);
        }}></Create>
    }else if(mode === 'UPDATE'){
      let index = topics.findIndex(
      (topic) => topic.id === id
      )
      content = <Update title = {topics[index].title} body = {topics[index].body} onUpdate = {(title, body) => {
        console.log(title, body);
        const newTopics = [...topics]
        const updatedTopic = {id:id, title:title, body:body};
        for(let i =0; i < newTopics.length; i++){
          if(newTopics[i].id === id){
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics);
      }}></Update>
    }

  const handleHeader = () => {
    setMode("WELCOME");
  };

  return (
    <div>
      {/* <Header title = "React"  onChangeMode = {
        () => {
          // alert('Header');
          setMode('WELCOME');
        }
      } */}
      {/* <Header title = "React" message = "Have a good day"/>   */}
      <Header title="React" onChangeMode={handleHeader} />

      {/* <Nav topics = {topics}></Nav> */}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          // alert(id);
          setMode("READ");
          setId(id);
        }}
      />

      {content}
      {/* <Article title = "Welcome" body = "Hello, Web"/> */}
      {/* <Article title = "Hi" body = "Hello, React"/> */}
      <ul>

      <li><a href = "/create" onClick = {event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a></li>

      {/* <li><a href = "/update">Update</a></li> */}
      {contextControl}
      </ul>
    </div>
  );
}

export default App;

//<header></header>-->열고 닫아야 한다
// 또한 열고 닫고를 한번에 하고 싶으면 <Header/> 이렇게 사용가능
