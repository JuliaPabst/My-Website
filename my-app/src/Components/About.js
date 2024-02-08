import React from "react";

export default function About() {
  return (
    <div>
      <section>
        <h1>Julia Pabst</h1>
        <img src="/square.jpg" alt="Julia Pabst" className="myImage"></img>
        <p>
          Hi, ich bin Jules! Diese Website soll zeigen, wer ich bin und was ich
          bereits gemacht habe.
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <div>
          <a href="tel:+436601256182">+43 660 1256182</a>
        </div>
        <div>
          <a href="mailto:ju.pabst@gmail.com">ju.pabst@gmail.com</a>
        </div>
        <div>Am Tabor 23/92, 1020 Wien</div>
      </section>
    </div>
  );
}
