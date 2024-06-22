'use client';
import React from 'react';

function Ourteam() {
  return (
    <div className="w-[100%] ourTeam_page">
      <div id="ourTeam" className="flex flex-col">
        <div className="md:text-6xl font-bold font-anta mt-10 h-15 mb-10 text-[#3C130E]">Our Team</div>
        <div className="flex flex-row space-x-4">
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="avai.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 md:text-2xl font-anta mt-3 h-20">Saiprasad Pandilwar</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="20" width="20" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  Muffin, the chief morale officer and inspiration for MyPerro, isn't just a dog, he is a little kid with fluffy fur, a wet nose, a wagging tail, and boundless love. But that all changed to ticks and fleas on his fur, a scared face, his tail tucked between his legs, and eyes filled
                  with a plea for help. We saw him come back in this condition from a boarding facility, he was mistreated to an extent, that we almost lost him.
                </p>

                <p>MyPerro was born from that experience. Here, your "perro" will be treated just like it is "MyPerro", with all the love, care, cuddles, belly rubs and attention they deserve.</p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="manan.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 md:text-2xl font-anta mt-3 h-20">Manan Vyas</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="20" width="20" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  Growing up in a household where dogs are treated as members of the family, I absorbed the deep-seated passion my parents had for caring for dogs. What propels me forward is the recognition of a persistent problem that has plagued pet owners for years, including my own family: the
                  need for effective solutions in pet care that truly address the challenges faced by both pets and their owners. .It is this realization that serves as the driving force behind MyPerro.
                </p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="Shivanshi.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 md:text-2xl font-anta mt-3 h-20">Shivanshi Rawat</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="20" width="20" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>
                  A pet boarding's carelessness changed the trajectory of my life. Sometimes you don't know when to stop waiting but have to make peace with the fact. Still I always say I didn't lose waffy, I carry him in my heart wherever I go. My first pet, love, best friend and indeed endless
                  source of motivation.
                </p>
                <p>Waffy is indeed CMO - cutest mischief officer , whose memories are enough to add sunshine to my life and work.He is the reason why I started and keeps me going an extra mile always.</p>
              </div>
            </div>
          </div>
          <div className="team_people rounded-tl-[3rem] rounded-br-[3rem]">
            <div className="card">
              <div className="card_face card_front">
                <img src="komo.png" alt="hi" className="rounded-tl-[3rem]" />
                <div className="text-black ml-2 md:text-2xl font-anta mt-3 h-20">Komolika Chakroborthy</div>
                <a href="https://www.google.com/">
                  <img className="ml-2 " src="linkedin.png" alt="hi" height="20" width="20" />
                </a>
              </div>
              <div className="card_face card_back">
                <p>I've always had a deep love for dogs, and at MyPerro, I'm thrilled to make a positive impact on their lives. Even small improvements in their well-being can bring enormous joy. For me, it's more than just a startup, it's about giving back and ensuring their happiness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
