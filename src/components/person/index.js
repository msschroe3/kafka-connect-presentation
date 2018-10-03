import React from "react";
import TwitterIcon from "react-icons/lib/fa/twitter";
import LinkedinIcon from "react-icons/lib/fa/linkedin";
import GithubIcon from "react-icons/lib/fa/github";

import "./person.css";

export default function Person({
  avatar,
  name,
  title,
  twitter,
  linkedin,
  github
}) {
  return (
    <div className="person">
      <img className="person-avatar" src={avatar} />
      <div className="person-details">
        <h2 className="person-name">{name}</h2>
        <h3 className="person-title">{title}</h3>

        {github && (
          <a
            className="person-social"
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener"
          >
            <GithubIcon className="icon" color="#1da1f2" />@{github}
          </a>
        )}
        {linkedin && (
          <a
            className="person-social"
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener"
          >
            <LinkedinIcon className="icon" color="#1da1f2" />@{linkedin}
          </a>
        )}
        {twitter && (
          <a
            className="person-social"
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener"
          >
            <TwitterIcon className="icon" color="#1da1f2" />@{twitter}
          </a>
        )}
      </div>
    </div>
  );
}
