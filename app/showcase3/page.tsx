"use client";
import Nav from "../components/Nav";
import Scene3 from "../components/Scene3";
import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Showcase3() {
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false);

  return (
    <ReactLenis root>
      <main>
        <div
          className="main"
          style={{ width: "100%", minHeight: "100vh", position: "relative" }}
        >
          <Nav />

          <div className="background">
            <Scene3
              test1={test1}
              setTest1={setTest1}
              test2={test2}
              setTest2={setTest2}
            />
          </div>

          <div className="instructions">
            <span>Controls</span>
            <ul>
              <li>
                Scroll Wheel: Rotate & Reveal Text
              </li>
            </ul>
          </div>

          <div className="container-holder">
            <div className="container">
              {test1 && (
                <>
                  <h2>Lorem ipsum</h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vestibulum lorem at lacinia condimentum. Proin ac
                    maximus tortor, ac aliquam dui. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse potenti. Curabitur
                    at quam pellentesque nisi tincidunt pellentesque. Nullam
                    eget maximus erat. Praesent vel dignissim metus. Aenean
                    congue sit amet sapien at tincidunt.
                  </p>
                </>
              )}
              {test2 && (
                <>
                  <h2>Nullam eu</h2>
                  <br />
                  <p>
                    Nullam eu consectetur nunc, eu malesuada enim. Mauris at
                    metus ut lacus fermentum euismod eu eu justo. Morbi
                    tincidunt augue et ante pretium facilisis. Vivamus aliquam
                    metus nec sem accumsan, quis lobortis diam sagittis. Nullam
                    efficitur mi at enim maximus tincidunt. Maecenas vulputate
                    tincidunt sem, vehicula scelerisque orci consectetur a.
                    Phasellus at pharetra odio, in convallis leo. Curabitur
                    volutpat odio non pretium aliquet. Proin tempus mollis
                    suscipit. Aliquam ligula metus, finibus at cursus at,
                    dapibus non turpis.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
