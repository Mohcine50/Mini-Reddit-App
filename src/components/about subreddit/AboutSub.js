import React, { useEffect, useState } from "react";
import "./aboutSub.css";
import { nFormatter, getDate } from "../../util/util";
import moment from "moment";
function AboutSub({ subreddit }) {
  const [subredditInfo, setSubredditInfo] = useState({});

  const subredditid = `r/${subreddit}`;
  const getSubredditIcon = async (subredditId) => {
    const response = await fetch(
      `https://www.reddit.com/${subredditId}/about.json`
    );
    const data = await response.json();
    const sr_data = data.data;
    setSubredditInfo(sr_data);
  };

  useEffect(() => {
    getSubredditIcon(subredditid);
  }, []);

  return (
    <div className="aboutSub">
      <h3>About community</h3>
      <div className="sr_infos">
        <img src={subredditInfo.icon_img} alt="" />
        <h4>{subredditInfo.display_name_prefixed}</h4>
      </div>
      <p>{subredditInfo.title}</p>
      <div className="members__info">
        <p>
          {nFormatter(subredditInfo.subscribers)}
          <br /> Members
        </p>
        <p>
          {nFormatter(subredditInfo.accounts_active)} <br /> Active
        </p>
      </div>
      <span>
        <i className="fa-solid fa-calendar"></i>Created{" "}
        {moment.unix(subredditInfo.created_utc).format("ll")}
      </span>
    </div>
  );
}

export default AboutSub;
