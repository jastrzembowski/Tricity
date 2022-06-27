import React, { useState } from "react";

export default function Faq() {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(true);
  const [isActive3, setIsActive3] = useState(true);
  const [isActive4, setIsActive4] = useState(true);

  return (
    <div className="faq-container">
      <div className="faq-box">
        <h1>Frequently asked questions</h1>
      </div>
      <div
        className={isActive ? "quest-container" : "quest-active"}
        onClick={
          isActive
            ? (e) => {
                setIsActive1(true);
                setIsActive2(true);
                setIsActive3(true);
                setIsActive4(true);
                setIsActive(false);
              }
            : (e) => setIsActive(true)
        }
      >
        <div className="quest-box">
          <h1>Question Lorem ipsum dolor sit?</h1>
          {isActive ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </div>
        {!isActive && (
          <div className="answer-box">
            <p>
              Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ea a laudantium aliquid quod illo ab officia. Praesentium alias
              modi cupiditate laudantium, mollitia dolores iusto inventore, cum,
              aspernatur optio nulla quaerat. Answer Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea a laudantium aliquid quod illo
              ab officia. Praesentium alias modi cupiditate laudantium, mollitia
              dolores iusto inventore, cum, aspernatur optio nulla quaerat.
            </p>
          </div>
        )}
        <hr />
      </div>
      <div
        className={isActive1 ? "quest-container" : "quest-active"}
        onClick={
          isActive1
            ? (e) => {
                setIsActive1(false);
                setIsActive2(true);
                setIsActive3(true);
                setIsActive4(true);
                setIsActive(true);
              }
            : (e) => setIsActive1(true)
        }
      >
        <div className="quest-box">
          <h1>Question Lorem ipsum dolor sit?</h1>
          {isActive1 ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </div>
        {!isActive1 && (
          <div className="answer-box">
            <p>
              Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ea a laudantium aliquid quod illo ab officia. Praesentium alias
              modi cupiditate laudantium, mollitia dolores iusto inventore, cum,
              aspernatur optio nulla quaerat. Answer Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea a laudantium aliquid quod illo
              ab officia. Praesentium alias modi cupiditate laudantium, mollitia
              dolores iusto inventore, cum, aspernatur optio nulla quaerat.
            </p>
          </div>
        )}
        <hr />
      </div>
      <div
        className={isActive2 ? "quest-container" : "quest-active"}
        onClick={
          isActive2
            ? (e) => {
                setIsActive2(false);
                setIsActive1(true);
                setIsActive3(true);
                setIsActive4(true);
                setIsActive(true);
              }
            : (e) => setIsActive2(true)
        }
      >
        <div className="quest-box">
          <h1>Question Lorem ipsum dolor sit?</h1>
          {isActive2 ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </div>
        {!isActive2 && (
          <div className="answer-box">
            <p>
              Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ea a laudantium aliquid quod illo ab officia. Praesentium alias
              modi cupiditate laudantium, mollitia dolores iusto inventore, cum,
              aspernatur optio nulla quaerat. Answer Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea a laudantium aliquid quod illo
              ab officia. Praesentium alias modi cupiditate laudantium, mollitia
              dolores iusto inventore, cum, aspernatur optio nulla quaerat.
            </p>
          </div>
        )}
        <hr />
      </div>
      <div
        className="quest-container"
        onClick={
          isActive3
            ? (e) => {
                setIsActive3(false);
                setIsActive2(true);
                setIsActive1(true);
                setIsActive4(true);
                setIsActive(true);
              }
            : (e) => setIsActive3(true)
        }
      >
        <div className="quest-box">
          <h1>Question Lorem ipsum dolor sit?</h1>
          {isActive3 ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </div>
        {!isActive3 && (
          <div className="answer-box">
            <p>
              Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ea a laudantium aliquid quod illo ab officia. Praesentium alias
              modi cupiditate laudantium, mollitia dolores iusto inventore, cum,
              aspernatur optio nulla quaerat. Answer Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea a laudantium aliquid quod illo
              ab officia. Praesentium alias modi cupiditate laudantium, mollitia
              dolores iusto inventore, cum, aspernatur optio nulla quaerat.
            </p>
          </div>
        )}
        <hr />
      </div>
      <div
        className={isActive4 ? "quest-container" : "quest-active"}
        onClick={
          isActive4
            ? (e) => {
                setIsActive1(true);
                setIsActive2(true);
                setIsActive3(true);
                setIsActive4(false);
                setIsActive(true);
              }
            : (e) => setIsActive4(true)
        }
      >
        <div className="quest-box">
          <h1>Question Lorem ipsum dolor sit?</h1>
          {isActive4 ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </div>
        {!isActive4 && (
          <div className="answer-box">
            <p>
              Answer Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ea a laudantium aliquid quod illo ab officia. Praesentium alias
              modi cupiditate laudantium, mollitia dolores iusto inventore, cum,
              aspernatur optio nulla quaerat. Answer Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ea a laudantium aliquid quod illo
              ab officia. Praesentium alias modi cupiditate laudantium, mollitia
              dolores iusto inventore, cum, aspernatur optio nulla quaerat.
            </p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}
