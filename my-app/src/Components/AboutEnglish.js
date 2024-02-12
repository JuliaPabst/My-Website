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
          Hi, I'm Jules! This website should show you who I am and what I have
          already achieved.
        </p>
      </section>
      <section>
        <h2>Contact information</h2>
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
                  <div class="progress-fill-80"></div>
                </div>
                <div>HTML & CSS</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill-70"></div>
                </div>
                <div>JavaScript & MERN-Stack</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill-60"></div>
                </div>
                <div>Swift</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill-60"></div>
                </div>
                <div>C & PHP</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill-60"></div>
                </div>
                <div>SQL</div>
              </div>
              <div>
                <div class="progress-bar">
                  <div class="progress-fill-60"></div>
                </div>
                <div>git & GitHub</div>
              </div>
            </div>
            <div className="d-none d-lg-block d-xl-block">
              <h2>Languages</h2>
              <p>German: C2</p>
              <p>English: C2</p>
              <p>French: B1</p>
            </div>
            <div className="d-none d-lg-block d-xl-block">
              <h2>Interests</h2>
              <p>Singing in a Band</p>
              <p>Running & Cycling</p>
              <p>Science Fiction (books, movies, series)</p>
            </div>
          </Col>
          <Col lg={9} xl={9}>
            <div>
              <h2>Education</h2>
              <div>
                <h3>
                  <a
                    href="https://www.technikum-wien.at/studienplan-bachelor-informatik-dual/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    B.Sc. Computer Science
                  </a>
                </h3>
                <h4>FH Technikum Wien</h4>
                <p>since September 2023</p>
                <p>
                  Learning the programming languages C, PHP and the foundations
                  of data management with SQL.
                </p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iOS & Swift - The Complete iOS App Development Bootcamp
                  </a>
                </h3>
                <h4>Udemy, Dr. Angela Yu</h4>
                <p>since December 2023</p>
                <p>
                  Learning the programming language Swift, usage of UIKit,
                  SwiftUI, Networking, Firebase, CoreData, Realm.
                </p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://codecool.com/en/courses/front-end-development-course/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diploma Web-Development
                  </a>
                </h3>
                <h4>Codecool</h4>
                <p>December 2022 - June 2023</p>
                <p>
                  Learning the programming language JavaScript, usage of GitHub
                  and MERN-Stack.
                </p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.shecodes.io/workshop-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diploma Frontend-Development
                  </a>
                </h3>
                <h4>SheCodes</h4>
                <p>November 2022 - May 2023</p>
                <p>Learning HTML and CSS, usage of Networking and React.</p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.fh-wien.ac.at/studium/bachelor/journalismus-medienmanagement/?gad_source=1&gclid=CjwKCAiAlJKuBhAdEiwAnZb7laQSC6RCZWFV1Ure3a0nOXw5jr-twj5QbLDFxS_czIMmoMe0vNyXQhoCFEcQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BA Journalism und Media Management
                  </a>
                </h3>
                <h4>FH Wien der WKW</h4>
                <p>October 2017 - July 2021</p>
                <p>
                  Journalistic theories and moral foundations. Production of
                  multimedia content.
                </p>
                <h5>
                  Exchange Semester: Tampere University of Applied Sciences
                </h5>
                <p>January 2020 - May 2020</p>
                <p>Foundations of Contemporary Art Film Making.</p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.likakademie.com/lehrplan-dfo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diploma Digital Photography und Editing
                  </a>
                </h3>
                <h4>Lik Akademie für Foto und Design</h4>
                <p>September 2015 - July 2017</p>
                <p>
                  Learning different kinds of photography (portrait, landscape,
                  product photography) and digital editing via Adobe Photoshop.
                </p>
              </div>
              <div>
                <h3>
                  <a
                    href="https://www.brg-judenburg.ac.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A-Levels
                  </a>
                </h3>
                <h4>BG/BRG Judenburg</h4>
                <p>September 2009 - July 2017</p>
                <p>
                  A-Levels in English, French, Philosophy und Psychology und
                  Math.
                </p>
              </div>
            </div>
            <div>
              <h2>Career</h2>
              <div>
                <h3>Freelance Journalist and Photographer</h3>
                <h4>Die Presse, trend, Brutkasten, Kanal3</h4>
                <p>September 2017 - November 2022</p>
                <p>
                  Writing, photography, podcast production, Instagram Management
                  in the areas of business and technology journalism. Schreiben,
                </p>
              </div>
              <div>
                <h3>Co-Founder and Vice Editor in Chief</h3>
                <h4>
                  <a href="amrand.at" target="_blank" rel="noopener noreferrer">
                    amrand.at
                  </a>
                </h4>
                <p>July 2020 - June 2022</p>
                <p>
                  Creation of a multimedia online magazine. Management of
                  editorial staff and production of multimedia content.
                </p>
              </div>
              <div>
                <h3>Internships</h3>
                <div>
                  <h4>ORF Foreign Office in Brussels</h4>
                  <p>January 2021 - March 2021</p>
                  <p>Research and production of audio content for OE1.</p>
                </div>
                <div>
                  <h4>ORF ECO</h4>
                  <p>September 2019 & September 2020</p>
                  <p>Research and production of content for TV.</p>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none">
              <h2>Languages</h2>
              <p>German: C2</p>
              <p>English: C2</p>
              <p>French: B1</p>
            </div>
            <div className="d-block d-lg-none">
              <h2>Interests</h2>
              <p>Singing in a Band</p>
              <p>Running & Cycling</p>
              <p>Science Fiction (books, movies, series)</p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
