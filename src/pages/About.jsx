import styled from "styled-components";
import GithubIcon from "../../assets/icons/logo-github.svg";

const About = () => {
  return (
    <div>
      <Heading>
        <h1>About</h1>
        <p>This project was built to learn the use of Context API and React.</p>
        <br />
        <ArticleLink>Read the article here</ArticleLink>
        <br />
        <a className="btn" href="https://github.com/israelmitolu/">
          <img src={GithubIcon} alt="" />
          View on Github
        </a>
      </Heading>
    </div>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;
`;

const ArticleLink = styled.a`
  border-bottom: violet solid 2px;
`;

export default About;
