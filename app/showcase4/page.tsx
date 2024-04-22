"use client";
import Nav from "../components/Nav";
import Scene from "../components/Scene4";
import { useState } from "react";

export default function Showcase4() {
  const [test1, setTest1] = useState(false);
  const [test1Text, setTest1Text] = useState(false);
  const [test2, setTest2] = useState(false);
  const [test2Text, setTest2Text] = useState(false);

  const handleTest1 = () => {
    setTest1(!test1);
    setTest1Text(!test1);
    setTest2Text(false);
  };

  const handleTest2 = () => {
    setTest2(!test2);
    setTest1Text(false);
    setTest2Text(!test2);
  };

  return (
    <main>
      <Nav />

      <div className="background">
        <Scene
          test1={test1}
          setTest1={setTest1}
          test2={test2}
          setTest2={setTest2}
        />
      </div>

      <span className="instructions">
        <h2>Controls</h2>
        <br />
        <ul>
          <li>
            <b>Scroll Wheel:</b> Rotate & Reveal Text
          </li>
        </ul>
      </span>

      <span className="controls">
        <button className="control-btn" onClick={() => handleTest1()}>
          1
        </button>
        <button className="control-btn" onClick={() => handleTest2()}>
          2
        </button>
      </span>

      <div className="container-holder">
        <div className="container">
          {test1Text && (
            <>
              <h2>Lorem ipsum</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vestibulum lorem at lacinia condimentum. Proin ac maximus
                tortor, ac aliquam dui. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse potenti. Curabitur at quam
                pellentesque nisi tincidunt pellentesque. Nullam eget maximus
                erat. Praesent vel dignissim metus. Aenean congue sit amet
                sapien at tincidunt.
              </p>
            </>
          )}
          {test2Text && (
            <>
              <h2>Nullam eu</h2>
              <br />
              <p>
                Nullam eu consectetur nunc, eu malesuada enim. Mauris at metus
                ut lacus fermentum euismod eu eu justo. Morbi tincidunt augue et
                ante pretium facilisis. Vivamus aliquam metus nec sem accumsan,
                quis lobortis diam sagittis. Nullam efficitur mi at enim maximus
                tincidunt. Maecenas vulputate tincidunt sem, vehicula
                scelerisque orci consectetur a. Phasellus at pharetra odio, in
                convallis leo. Curabitur volutpat odio non pretium aliquet.
                Proin tempus mollis suscipit. Aliquam ligula metus, finibus at
                cursus at, dapibus non turpis.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
