import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-d">
        <div className="f1">
          <h3>DOCUMENTS</h3>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">footer.docs.installation</a>
            </li>
            <li>
              <a href="#!">footer.docs.mainConcepts</a>
            </li>
            <li>
              <a href="#!">footer.docs.advancedGuides</a>
            </li>
            <li>
              <a href="#!">footer.docs.apiReference</a>
            </li>
            <li>
              <a href="#!">footer.docs.hooks</a>
            </li>
            <li>
              <a href="#!">footer.docs.testing</a>
            </li>
            <li>
              <a href="#!">footer.docs.contributing</a>
            </li>
            <li>
              <a href="#!">footer.docs.faq</a>
            </li>
          </ul>
        </div>
        <div className="f2">
          <h3> CHANNELS</h3>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">footer.channels.gitHub</a>
            </li>
            <li>
              <a href="#!">footer.channels.stackOverflow</a>
            </li>
            <li>
              <a href="#!">footer.channels.discussionForums</a>
            </li>
            <li>
              <a href="#!">footer.channels.devCommunity</a>
            </li>
            <li>
              <a href="#!">footer.channels.facebook</a>
            </li>
            <li>
              <a href="#!">footer.channels.twitter</a>
            </li>
          </ul>
        </div>
        <div className="f3">
          <h3>MORE</h3>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">footer.more.tutorial</a>
            </li>
            <li>
              <a href="#!">footer.more.blog</a>
            </li>
            <li>
              <a href="#!">footer.more.acknowledgements</a>
            </li>
            <li>
              <a href="#!">footer.more.privacy</a>
            </li>
            <li>
              <a href="#!">footer.more.terms</a>
            </li>
          </ul>
        </div>
        <div className="f4">
          <h3>COMMUNITY</h3>
          <hr className="footer-hr" />
          <ul>
            <li>
              <a href="#!">footer.community.codeofConduct</a>
            </li>
            <li>
              <a href="#!">footer.community.communityResources</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © Copyright 2022 | All Rights Reserved
      </div>
    </footer>
  );
};
