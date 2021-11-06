import "./styles.css";
import dancer from "./African-dancer.jpeg";
import gamin from "./Agusta-savage-gamin.jpg";
import mother from "./Sargent-johnson-mother-and-child.jpg";

export default function App() {
  return (
    <main>
      <h1>Matinee Concert 🎹🎻</h1>
      <p>
        Violin: <strong>Andreas Volmer</strong>
        <br />
        Piano: <strong>David Khourshid</strong>
      </p>
      <p>
        Doors open at 2pm; the recital starts at 2:30pm. <br />
        This is indoors - face masks will be requried.
      </p>
      <p>Donations ($10-$20) for the Timucua Arts Foundation are welcome.</p>
      <p>
        After the concert, we invite everybody over to
        <a href="https://goo.gl/maps/s8yN4Z6aucGFvTYa6"> 433 E Grant St.</a> -
        just a few steps from Timucua - for drinks and snacks.
      </p>
      <div className="program">
        <strong className="piece">
          Ludwig van Beethoven: Sonata for Piano and Violin op 12 No 1 (1798)
        </strong>
        <ol>
          <li>Allegro con brio</li>
          <li>Tema con variazioni</li>
          <li>Rondo</li>
        </ol>

        <strong className="piece">
          Claude Debussy: Sonata for Violin and Piano (1917)
        </strong>
        <ol>
          <li>Allegro vivo</li>
          <li>Intermède: Fantasque et léger</li>
          <li>Finale: Très animé</li>
        </ol>

        <strong className="piece">
          William Grant Still: Suite for Violin and Piano (1943)
        </strong>
        <div className="images">
          <div className="with-image">
            <figure>
              <img src={dancer} alt="African Dancer" />
            </figure>
            <div>
              <div>1. African Dancer</div>
              <figcaption>Richmond Barthé, African Dancer (1933)</figcaption>
            </div>
          </div>
          <div className="with-image">
            <figure>
              <img src={mother} alt="Mother and Child" />
            </figure>
            <div>
              <div>2. Mother and Child</div>
              <figcaption>Sargent Johnson, Mother and Child</figcaption>
            </div>
          </div>
          <div className="with-image">
            <figure>
              <img src={gamin} alt="Gamin" />
            </figure>
            <div>
              <div>3. Gamin</div>
              <figcaption>Augusta Savage, Gamin (1929)</figcaption>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
