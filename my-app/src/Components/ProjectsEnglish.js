import React from "react";

export default function ProjectsEnglish() {
  return (
    <div>
      ProjectsEnglish
      <section>
        <h2>Swift</h2>
        <div>
          <h3>ToDo</h3>
          <p>
            With this app you can keep track of all your ToDos. The first
            version of this app used CoreData. The second version uses Realm.
          </p>
          <p>
            Link to GitHub repository:{" "}
            <a href="https://github.com/JuliaPabst/ToDo">ToDo</a>
          </p>
          <video
            autoPlay
            muted
            loop
            className="video projectVideo"
            alt="Video is loading"
          >
            <source src="ToDo.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <h3>Chatty</h3>
          <p>
            With this app you can keep in touch with your friends. This app uses
            Firebase to authenticate its users and store their chats.
          </p>
          <p>
            Link to GitHub repository:{" "}
            <a href="https://github.com/JuliaPabst/Chatty">Chatty</a>
          </p>
          <video
            autoPlay
            muted
            loop
            className="video projectVideo"
            alt="Video is loading"
          >
            <source src="Chatty.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
