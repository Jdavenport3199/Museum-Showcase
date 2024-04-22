"use client";
import Nav from "../components/Nav";
import Scene2 from "../components/Scene2";
import { useState } from "react";

export default function Showcase2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <Nav />

      <div className="background">
        <Scene2 isHovered={isHovered} setIsHovered={setIsHovered} />
      </div>

      <div className="instructions">
        <span>Controls</span>
        <ul>
          <li>Left Click: Rotate</li>
          <li>Double Click: Toggle Text</li>
        </ul>
      </div>

      {isHovered && (
        <div className="container-holder">
          <div className="container">
            <h2>Lorem ipsum</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vestibulum lorem at lacinia condimentum. Proin ac maximus tortor,
              ac aliquam dui. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse potenti. Curabitur at quam pellentesque nisi
              tincidunt pellentesque. Nullam eget maximus erat. Praesent vel
              dignissim metus. Aenean congue sit amet sapien at tincidunt.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
