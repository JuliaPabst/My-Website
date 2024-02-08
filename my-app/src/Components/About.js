import React from "react";

export default function About() {
  return (
    <div>
      <section>
        <h1>Julia Pabst</h1>
        <h2>Web & Mobile Development</h2>
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
      <section>
        <h1>CV</h1>
        <div>
          <h2>Skills</h2>
          <div>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
          </div>
        </div>
        <div>
          <h2>Ausbildung</h2>
          <div>
            <h3>BSC Informatik</h3>
            <p>FH Technikum Wien</p>
            <p>Seit September 2023</p>
            <p>
              Erlernen der Programmiersprachen C und PHP. Grundlagen des
              Datenmanagements mit SQL.
            </p>
          </div>
          <div>
            <h3>iOS & Swift - The Complete iOS App Development Bootcamp</h3>
            <p>Udemy, Dr. Angela Yu</p>
            <p>Seit Dezember 2023</p>
            <p>
              Erlernen der Programmiersprache Swift. Anwendung von UIKit,
              SwiftUI, Networking, Firebase, CoreData, Realm.
            </p>
          </div>
          <div>
            <h3>Diplom Web-Development</h3>
            <p>Codecool</p>
            <p>Dezember 2022 - Juni 2023</p>
            <p>
              Erlernen der Programmiersprache JavaScript. Anwendung von GitHub
              und MERN-Stack.
            </p>
          </div>
          <div>
            <h3>Diplom Frontend-Development</h3>
            <p>SheCodes</p>
            <p>November 2022 - Mai 2023</p>
            <p>
              Erlernen von HTML und CSS. Anwendung von Networking und React.
            </p>
          </div>
          <div>
            <h3>BA Journalismus und Medienmanagement</h3>
            <p>FH Wien der WKW</p>
            <p>Oktober 2017 - Juli 2021</p>
            <p>
              Journalistische Theorien sowie moralische Grundlagen. Erstellung
              von multimedialen Inhalten.
            </p>
            <p>Auslandssemester: Tampere University of Applied Sciences</p>
            <p>Jänner 2020 - Mai 2020</p>
            <p>Grundlagen des Contemporary Art Film makings.</p>
          </div>
          <div>
            <h3>Diplom in Digitaler Fotografie und Bildbearbeitung</h3>
            <p>Lik Akademie für Foto und Design</p>
            <p>September 2015 - Juli 2017</p>
            <p>
              Erlernen der unterschiedlichen Arten von Fotografie
              (Portraitfotografie, Landschaftsfotografie, Produktfotografie) und
              der digitalen Bildbearbeitung mit Adobe Photoshop.
            </p>
          </div>
        </div>
        <div>
          <h2>Berufserfahrung</h2>
          <div>
            <h3>Freie Journalistin und Fotografin</h3>
            <p>September 2017 - November 2022</p>
            <p>Die Presse, trend, Brutkasten, Kanal3</p>
            <p>
              Schreiben, Fotografie, Podcast Produktion, Instagram-Betreuung im
              Bereich Wirtschafts- und Technologiejournalismus
            </p>
          </div>
          <div>
            <h3>Co-Founder und stellvertretende Chefredakteurin</h3>
            <p>Juli 2020 - Juni 2022</p>
            <p>
              <a href="amrand.at">amrand.at</a>
            </p>
            <p>
              Konzeption und Aufbau eines multimedialen Onlinemagazins.
              Redaktionsleitung und erstellen von multimedialem Content für die
              Website und Social Media.
            </p>
          </div>
          <div>
            <h3>Praktika</h3>
            <div>
              <h4>ORF-Korrespondentenbüro in Brüssel</h4>
              <p>Jänner 2021 - März 2021</p>
              <p>Recherche und Konzeption von Audiobeiträgen für OE1.</p>
            </div>
            <div>
              <h4>ORF ECO</h4>
              <p>September 2019 & September 2020</p>
              <p>Recherche und Konzeption von TV-Beiträgen.</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Interessen</h2>
          <p>Singen in einer Band</p>
          <p>Laufen & Radfahren</p>
          <p>Science Fiction (Bücher, Filme, Serien)</p>
        </div>
      </section>
    </div>
  );
}
