import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutGerman() {
  return (
    <Container fluid className="px-0 background">
      <section>
        <div className="imageContainer">
          <div className="title">
            <h1 className="name">Julia Pabst</h1>
            <h2 className="profession">Web & Mobile Development</h2>
          </div>
          <img
            src="/square.png"
            alt="Julia Pabst"
            className="myImage d-block d-md-none m-0"
          />
          <img
            src="/quer.png"
            alt="Julia Pabst"
            className="myImage d-none d-md-block d-lg-none d-xl-none"
          />
          <img
            src="/panorama.png"
            alt="Julia Pabst"
            className="myImage d-none d-lg-block d-xl-block"
          />
        </div>
        <p className="padding-left-right-up dark-grey-background ">
          Hi, ich bin Jules! Diese Website soll zeigen, wer ich bin und was ich
          bereits gemacht habe.
        </p>
      </section>
      <section className="contact">
        <h2 className="contact-heading">Kontakt</h2>
        <div>
          <a href="tel:+436601256182">+43 660 1256182</a>
        </div>
        <div>
          <a href="mailto:ju.pabst@gmail.com">ju.pabst@gmail.com</a>
        </div>
        <div>Am Tabor 23/92, 1020 Wien</div>
      </section>
      <section className="padding-top-section dark-grey-background">
        <h1>CV</h1>
        <Row>
          <Col lg={4} xl={4}>
            <div>
              <h2>Skills</h2>
              <div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-80"></div>
                  </div>
                  <div>HTML & CSS</div>
                </div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-70"></div>
                  </div>
                  <div>JavaScript & MERN-Stack</div>
                </div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-60"></div>
                  </div>
                  <div>Swift</div>
                </div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-60"></div>
                  </div>
                  <div>C & PHP</div>
                </div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-60"></div>
                  </div>
                  <div>SQL</div>
                </div>
                <div className="padding-left-right-up">
                  <div class="progress-bar">
                    <div class="progress-fill-60"></div>
                  </div>
                  <div>git & GitHub</div>
                </div>
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
            <video
              autoPlay
              muted
              loop
              className="video d-none d-lg-block d-xl-block"
            >
              <source src="type2.mp4" type="video/mp4" />
            </video>
          </Col>
          <Col lg={8} xl={8}>
            <div className="padding-top-section">
              <h2>Ausbildung</h2>
              <div className="dark-grey-background">
                <h3>
                  <a
                    href="https://www.technikum-wien.at/studienplan-bachelor-informatik-dual/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    B.Sc. Informatik
                  </a>
                </h3>
                <h4 className="institution">FH Technikum Wien</h4>
                <p className="since">Seit September 2023</p>
                <p>
                  Erlernen der Programmiersprachen C und PHP. Grundlagen des
                  Datenmanagements mit SQL.
                </p>
              </div>
              <div className="padding-top padding-left-right">
                <h3>
                  <a
                    href="https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    iOS & Swift - The Complete iOS App Development Bootcamp
                  </a>
                </h3>
                <h4 className="institution">Udemy, Dr. Angela Yu</h4>
                <p className="since">Seit Dezember 2023</p>
                <p>
                  Erlernen der Programmiersprache Swift. Anwendung von UIKit,
                  SwiftUI, Networking, Firebase, CoreData, Realm.
                </p>
              </div>
              <div className="padding-top dark-grey-background">
                <h3>
                  <a
                    href="https://codecool.com/en/courses/front-end-development-course/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Diplom Web-Development
                  </a>
                </h3>
                <h4 className="institution">Codecool</h4>
                <p className="since">Dezember 2022 - Juni 2023</p>
                <p>
                  Erlernen der Programmiersprache JavaScript. Anwendung von
                  GitHub und MERN-Stack.
                </p>
              </div>
              <div className="padding-top padding-left-right">
                <h3>
                  <a
                    href="https://www.shecodes.io/workshop-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Diplom Frontend-Development
                  </a>
                </h3>
                <h4 className="institution">SheCodes</h4>
                <p className="since">November 2022 - Mai 2023</p>
                <p>
                  Erlernen von HTML und CSS. Anwendung von Networking und React.
                </p>
              </div>
              <div className="padding-top dark-grey-background">
                <h3>
                  <a
                    href="https://www.fh-wien.ac.at/studium/bachelor/journalismus-medienmanagement/?gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7laQSC6RCZWFV1Ure3a0nOXw5jr-twj5QbLDFxS_czIMmoMe0vNyXQhoCFEcQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    BA Journalismus und Medienmanagement
                  </a>
                </h3>
                <h4 className="institution">FH Wien der WKW</h4>
                <p className="since">Oktober 2017 - Juli 2021</p>
                <p>
                  Journalistische Theorien sowie moralische Grundlagen.
                  Erstellung von multimedialen Inhalten.
                </p>
                <h5>
                  Auslandssemester: Tampere University of Applied Sciences
                </h5>
                <p>Jänner 2020 - Mai 2020</p>
                <p>Grundlagen des Contemporary Art Film makings.</p>
              </div>
              <div className="padding-top padding-left-right">
                <h3>
                  <a
                    href="https://www.likakademie.com/lehrplan-dfo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Diplom in Digitaler Fotografie und Bildbearbeitung
                  </a>
                </h3>
                <h4 className="institution">
                  Lik Akademie für Foto und Design
                </h4>
                <p className="since">September 2015 - Juli 2017</p>
                <p>
                  Erlernen der unterschiedlichen Arten von Fotografie
                  (Portraitfotografie, Landschaftsfotografie, Produktfotografie)
                  und der digitalen Bildbearbeitung mit Adobe Photoshop.
                </p>
              </div>
              <div className="padding-top dark-grey-background">
                <h3>
                  <a
                    href="https://www.brg-judenburg.ac.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Matura
                  </a>
                </h3>
                <h4 className="institution">BG/BRG Judenburg</h4>
                <p className="since">September 2009 - Juli 2017</p>
                <p className="education-description">
                  Matura in Englisch, Französisch, Philosophie und Psychologie
                  und Mathematik.
                </p>
              </div>
            </div>
            <div className="padding-top-section">
              <h2>Berufserfahrung</h2>
              <div className="padding-left-right">
                <h3 className="education-link">
                  Freie Journalistin und Fotografin
                </h3>
                <h4 className="institution">
                  Die Presse, trend, Brutkasten, Kanal3
                </h4>
                <p className="since">September 2017 - November 2022</p>
                <p>
                  Schreiben, Fotografie, Podcast Produktion, Instagram-Betreuung
                  im Bereich Wirtschafts- und Technologiejournalismus
                </p>
              </div>
              <div className="padding-top dark-grey-background">
                <h3 className="education-link">
                  Co-Founder und stellvertretende Chefredakteurin
                </h3>
                <h4>
                  <a
                    href="amrand.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="institution"
                  >
                    amrand.at
                  </a>
                </h4>
                <p className="since">Juli 2020 - Juni 2022</p>
                <p>
                  Konzeption und Aufbau eines multimedialen Onlinemagazins.
                  Redaktionsleitung und erstellen von multimedialem Content für
                  die Website und Social Media.
                </p>
              </div>
              <div className="padding-top padding-left-right">
                <h3 className="education-link">Praktika</h3>
                <div>
                  <h4 className="institution">
                    ORF-Korrespondentenbüro in Brüssel
                  </h4>
                  <p className="since">Jänner 2021 - März 2021</p>
                  <p>Recherche und Konzeption von Audiobeiträgen für OE1.</p>
                </div>
                <div>
                  <h4 className="institution">ORF ECO</h4>
                  <p className="since">September 2019 & September 2020</p>
                  <p>Recherche und Konzeption von TV-Beiträgen.</p>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none padding-top-section">
              <h2>Sprachen</h2>
              <div className="dark-grey-background">
                <p className="language">
                  Deutsch: <span className="language-level">C2</span>
                </p>
                <p className="language">
                  Englisch: <span className="language-level">C2</span>
                </p>
                <p className="language-no-padding">
                  Französisch: <span className="language-level">B1</span>
                </p>
              </div>
            </div>
            <div className="d-block d-lg-none padding-top-section">
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
