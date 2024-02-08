import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutGerman() {
  return (
    <Container>
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
        <Row>
          <Col lg={3} xl={3}>
            <div>
              <h2>Skills</h2>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>HTML & CSS</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>JavaScript & MERN-Stack</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>Swift</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>C & PHP</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>SQL</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill"></div>
                </div>
                <div>git & GitHub</div>
              </div>
            </div>
            <div className="d-none d-lg-block d-xl-block">
              <h2>Sprachen</h2>
              <p>Deutsch: C2</p>
              <p>Englisch: C2</p>
              <p>Französisch: B1</p>
            </div>
            <div className="d-none d-lg-block d-xl-block">
              <h2>Interessen</h2>
              <p>Singen in einer Band</p>
              <p>Laufen & Radfahren</p>
              <p>Science Fiction (Bücher, Filme, Serien)</p>
            </div>
          </Col>
          <Col lg={9} xl={9}>
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
                <h3>
                  <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/">
                    iOS & Swift - The Complete iOS App Development Bootcamp
                  </a>
                </h3>
                <p>Udemy, Dr. Angela Yu</p>
                <p>Seit Dezember 2023</p>
                <p>
                  Erlernen der Programmiersprache Swift. Anwendung von UIKit,
                  SwiftUI, Networking, Firebase, CoreData, Realm.
                </p>
              </div>
              <div>
                <h3>
                  <a href="https://codecool.com/en/courses/front-end-development-course/">
                    Diplom Web-Development
                  </a>
                </h3>
                <p>Codecool</p>
                <p>Dezember 2022 - Juni 2023</p>
                <p>
                  Erlernen der Programmiersprache JavaScript. Anwendung von
                  GitHub und MERN-Stack.
                </p>
              </div>
              <div>
                <h3>
                  <a href="https://www.shecodes.io/workshop-pro">
                    Diplom Frontend-Development
                  </a>
                </h3>
                <p>SheCodes</p>
                <p>November 2022 - Mai 2023</p>
                <p>
                  Erlernen von HTML und CSS. Anwendung von Networking und React.
                </p>
              </div>
              <div>
                <h3>
                  <a href="https://www.fh-wien.ac.at/studium/bachelor/journalismus-medienmanagement/?gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7laQSC6RCZWFV1Ure3a0nOXw5jr-twj5QbLDFxS_czIMmoMe0vNyXQhoCFEcQAvD_BwE">
                    BA Journalismus und Medienmanagement
                  </a>
                </h3>
                <p>FH Wien der WKW</p>
                <p>Oktober 2017 - Juli 2021</p>
                <p>
                  Journalistische Theorien sowie moralische Grundlagen.
                  Erstellung von multimedialen Inhalten.
                </p>
                <p>Auslandssemester: Tampere University of Applied Sciences</p>
                <p>Jänner 2020 - Mai 2020</p>
                <p>Grundlagen des Contemporary Art Film makings.</p>
              </div>
              <div>
                <h3>
                  <a href="https://www.likakademie.com/lehrplan-dfo">
                    Diplom in Digitaler Fotografie und Bildbearbeitung
                  </a>
                </h3>
                <p>Lik Akademie für Foto und Design</p>
                <p>September 2015 - Juli 2017</p>
                <p>
                  Erlernen der unterschiedlichen Arten von Fotografie
                  (Portraitfotografie, Landschaftsfotografie, Produktfotografie)
                  und der digitalen Bildbearbeitung mit Adobe Photoshop.
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
                  Schreiben, Fotografie, Podcast Produktion, Instagram-Betreuung
                  im Bereich Wirtschafts- und Technologiejournalismus
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
                  Redaktionsleitung und erstellen von multimedialem Content für
                  die Website und Social Media.
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
            <div className="d-block d-lg-none">
              <h2>Sprachen</h2>
              <p>Deutsch: C2</p>
              <p>Englisch: C2</p>
              <p>Französisch: B1</p>
            </div>
            <div className="d-block d-lg-none">
              <h2>Interessen</h2>
              <p>Singen in einer Band</p>
              <p>Laufen & Radfahren</p>
              <p>Science Fiction (Bücher, Filme, Serien)</p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
