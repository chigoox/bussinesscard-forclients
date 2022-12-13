import React from "react";
import Contacts from './Contacts'
import Bio from "./Bio";
import PicCard from "./PicCard";
import Social from "./Social";



export default function App() {
  return (
    <div id="Appcont">
      <div id="App">
        <section id="picpart">
          <PicCard />
          <Social />
        </section>
        <section id="infopart">
          <Contacts />
          <Bio />
        </section>
      </div>
    </div>
  );
}

