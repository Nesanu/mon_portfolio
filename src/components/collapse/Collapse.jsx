import "./Collapse.scss";
import arrow from "../../assets/icons/arrow.svg";
import { useState } from "react";
import PropTypes from "prop-types";

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

/**Documentation de méthode
 * @description
 * Ce composant permet de créer un collapse
 * @param {string} title - Le titre du collapse.
 * @param {string | string[]} content - Le contenu du collapse.
 * @returns {JSX.Element} - Un collapse.
 * @example
 * <Collapse title="Title" content="Content" />
 * @example
 * <Collapse title="Title" content={["Content 1", "Content 2"]} />
 * @example
 * <Collapse title="Title" content={["Content 1", "Content 2", "Content 3"]} />
 */
export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? "arrow arrow_down" : "arrow arrow_up"}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {Array.isArray(content)//if content is an array, map through it and return a paragraph for each item. Otherwise, return the content. 
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </>
  );
}
