import React from "react";

function About(props) {
  return (
    <>
      <main>
        <div className="new-container">
          <div className="card">
            <h2>Phebe Bi</h2>
            <img src="img/Phebe_Bi.jpg" alt="Phebe in Hawaii" />
            <p>Hi guys! My name is Phebe Tianfei Bi.</p>
            <p>I am a junior student that pursuing a major in informatics with track of Information Assurance and Cybersecurity. </p>
          </div>

          <div className="card">
            <h2>Haonan Zheng</h2>
            <img src="img/Haonan_Zheng.jpg" alt="Haonan on the beach" />
            <p>Hello everyone! My name is Haonan Zheng.</p>
            <p>I am a rising junior student in University of Washington. I am majoring in Geography and applying to informatics.</p>
          </div>

          <div className="card">
            <h2>Sylvia Li</h2>
            <img src="img/Sylvia.jpeg" alt="Sylvia at the Playland" />
            <p>I’m Sylvia Li and I’m from 2024 class of UW.</p>
            <p>I was nervous when I first came to the campus trying to find an apartment. I hope this website can provide real and useful information. Thank you so much for visiting our site! We're more than happy to help.</p>
          </div>

          <div className="card">
            <h2>Wendy Huang</h2>
            <img src="img/Wendy_Huang.jpg" alt="Wendy at a coffee shop" />
            <p>Hi, this is Wendy, I’m a rising senior majoring in informatics and Economics.</p>
            <p> I live in an off-campus apartment, and I understand the difficulty of finding an apartment. Hopefully this website can help you search, filter, and compare every choices!</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
