import "./Home.css";
// import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <div className="home-container primary-color">
      <div className="section1 flex col-10">
        <div className="profile">
          <img
            className="profilePicture "
            src="https://media-exp1.licdn.com/dms/image/C5603AQEeMgXOApyssw/profile-displayphoto-shrink_800_800/0/1655745206668?e=1661385600&v=beta&t=VmG-gKTsakcydE7CZGPZuhSD5w9lSl4IWrHWKfnlIm0"
            alt="error"
          />
          <div>
            <div className="information text-secondary">
              <div className="profileTitles">
                <h1>Collin Beczak</h1>
                <h3>Software Developer</h3>
                <h4>Information:</h4>
              </div>
              <div>
                <a href="tel:4697634197">
                  <svg className="svg-info" viewBox="0 0 17 13">
                    <path d="M4.5 11.8V1c0-.8.3-1 1-1h5.1c.7 0 1 .3 1 1v10.8c0 .5-.1.9-.5 1.2-2-.1-4-.1-6.1-.1-.4-.3-.5-.6-.5-1.1zm1.2-1.9h4.7V2.3H5.7zm1.8 1.4c0 .3.3.6.7.6.4 0 .7-.3.7-.7-.2-.2-.4-.5-.8-.5s-.6.3-.6.6zm1.3-10c.1 0 .2-.1.3-.2L8.9.9H7.5c-.1 0-.2.2-.2.2l.2.2zm7.4 5.9c-.2.5-.3 1-.5 1.5l-.9 1.5c-.2.3-.4.3-.7.1-.2-.2-.2-.4 0-.7 1.7-2.1 1.6-4.3 0-6.3-.2-.2-.3-.5 0-.7.3-.2.5-.1.7.1.7.8 1.1 1.7 1.3 2.7 0 .1.1.2.1.3zM1.4 2.8c.2-.2.5-.4.8-.2.3.3.1.5-.1.7C.5 5.2.5 7.7 2.1 9.5c.2.2.3.5.1.7-.3.2-.5.1-.7-.1C.5 9 0 7.8 0 6.2 0 5 .5 3.8 1.4 2.8zM2.5 4c.2-.2.4-.3.7-.2.3.2.3.5.1.7-.9 1.3-.9 2.6 0 3.8.2.2.2.5 0 .6-.2.2-.5.1-.7-.1-.6-.6-.9-1.4-.9-2.3 0-1 .3-1.8.8-2.5zm11.2 4.69c-.2.2-.4.4-.7.2-.3-.2-.2-.499 0-.699.9-1.197.9-2.495 0-3.693-.2-.299-.3-.499 0-.698.3-.2.5-.1.7.2.5.698.8 1.497.8 2.395 0 .898-.3 1.597-.8 2.296z"></path>
                  </svg>
                </a>
                <a href="https://github.com/collinbeczak">
                  <svg
                    className="svg-info"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </a>
                <a href="mailto:ctbeczak08@gmail.com">
                  <svg className="svg-info" viewBox="0 0 12 8">
                    <path d="M11.45 0c.127 0 .237.115.237.247v7.349c0 .134-.11.248-.238.248H.237A.246.246 0 0 1 0 7.596V.246C0 .116.11 0 .237 0zm-.508 1.32c.018-.057-.018-.112-.071-.15a.16.16 0 0 0-.18 0L5.96 3.745c-.072.037-.162.037-.216 0L.994 1.17c-.053-.037-.125-.018-.18 0-.053.039-.089.094-.089.151v.933c0 .074.036.13.09.168L5.744 5.24a.162.162 0 0 0 .09.018c.036 0 .054 0 .09-.018l4.928-2.82a.199.199 0 0 0 .09-.167z"></path>
                  </svg>
                </a>
                <a href="https://drive.google.com/file/d/135erh7Cz2j2ELRk3WXrKfyHFOh-rel9x/view?usp=sharing">
                  <svg
                    className="svg-info"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="2"
                    viewBox="0 0 150 150"
                  >
                    <path d="M 48.976562 90.285156 C 48.976562 91.980469 50.371094 93.375 52.066406 93.375 L 98.28125 93.375 C 99.976562 93.375 101.371094 91.980469 101.371094 90.285156 C 101.371094 88.589844 99.976562 87.195312 98.28125 87.195312 L 52.066406 87.195312 C 50.355469 87.195312 48.976562 88.589844 48.976562 90.285156 Z M 98.28125 102.839844 L 52.066406 102.839844 C 50.371094 102.839844 48.976562 104.234375 48.976562 105.929688 C 48.976562 107.625 50.371094 109.019531 52.066406 109.019531 L 98.28125 109.019531 C 99.976562 109.019531 101.371094 107.625 101.371094 105.929688 C 101.371094 104.234375 99.976562 102.839844 98.28125 102.839844 Z M 98.28125 102.839844 " />
                    <path d="M 85.980469 24.300781 L 39.914062 24.300781 C 36.511719 24.300781 33.734375 27.074219 33.734375 30.480469 L 33.734375 119.519531 C 33.734375 122.925781 36.511719 125.699219 39.914062 125.699219 L 110.101562 125.699219 C 113.503906 125.699219 116.28125 122.925781 116.28125 119.519531 L 116.28125 54.601562 Z M 90 37.066406 L 104.234375 51.300781 L 91.066406 51.300781 C 90.496094 51.300781 90 50.804688 90 50.234375 Z M 110.085938 119.503906 C 110.085938 119.503906 110.085938 119.519531 110.085938 119.503906 L 39.914062 119.519531 C 39.914062 119.519531 39.898438 119.519531 39.898438 119.503906 L 39.898438 30.496094 C 39.898438 30.496094 39.898438 30.480469 39.914062 30.480469 L 83.566406 30.480469 L 83.804688 30.71875 L 83.804688 50.21875 C 83.804688 54.210938 87.074219 57.464844 91.050781 57.464844 L 110.085938 57.464844 Z M 110.085938 119.503906 " />
                    <path d="M 62.820312 56.941406 C 68.265625 56.941406 72.675781 52.53125 72.675781 47.085938 C 72.675781 41.640625 68.265625 37.230469 62.820312 37.230469 C 57.375 37.230469 52.949219 41.625 52.949219 47.085938 C 52.949219 52.53125 57.359375 56.941406 62.820312 56.941406 Z M 62.820312 42.628906 C 65.28125 42.628906 67.273438 44.625 67.273438 47.085938 C 67.273438 49.546875 65.28125 51.539062 62.820312 51.539062 C 60.359375 51.539062 58.363281 49.546875 58.363281 47.085938 C 58.363281 44.625 60.359375 42.628906 62.820312 42.628906 Z M 52.066406 73.933594 C 53.773438 73.933594 55.15625 72.554688 55.15625 70.84375 C 55.15625 67.5 58.664062 64.664062 62.820312 64.664062 C 66.976562 64.664062 70.484375 67.484375 70.484375 70.84375 C 70.484375 72.554688 71.863281 73.933594 73.574219 73.933594 C 75.285156 73.933594 76.664062 72.554688 76.664062 70.84375 C 76.664062 64.035156 70.453125 58.484375 62.820312 58.484375 C 55.183594 58.484375 48.976562 64.035156 48.976562 70.84375 C 48.976562 72.554688 50.355469 73.933594 52.066406 73.933594 Z M 52.066406 73.933594 " />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutMe ">
          <div className="text-primary">
            <h1 className="summary-header">Professional Summary</h1>
            <div className="summary">
              <p>
                Driven, self-motivated software engineer entering the industry.
                Able to do well under pressure, handle responsibility, and
                communicate effectively with teammates. Looking to gain deep
                knowledge in web and mobile technologies in addition to
                professional software development and delivery best practices.
              </p>
            </div>
          </div>
          <div className="text-primary">
            <div>
              <h1 className="summary-header">Professional Experience</h1>
              <div className="summary">
                <p>Intern at Eastslope Studios, remote in Wichita KS</p>
                <br />
                <ul>
                  <li>
                    Developed websites using HTML, CSS, JavaScript , React JS,
                    Tailwind, and Alpine.
                  </li>
                  <li>Studied many Udemy courses, and other online sources.</li>
                  <li>Created personal projects to hone my skills.</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="summary-header">Education</h1>
              <div className="summary">
                <p>
                  Received High School Diploma May 2022 at Coppell High School,
                  Coppell, TX
                </p>
                <br />
                <b>Udemy Courses:</b>
                <ul>
                  <li>Modern React with Redux - Stephen Grider</li>
                  <li>Javascript Fundamentals - Bharath Thippireddy</li>
                  <li>
                    Node with React: FullStack Web Development - Stephen Grider
                  </li>
                  <li>Node JS: Advanced Concepts - Stephen Grider</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 flex2 primary-color col-10 text-primary">
        <div className="skillsContainer col-6">
          <div className="listBackground">
            <h2>Skills:</h2>
            <ul>
              <li>Flexible and Adaptable</li>
              <li>Collaboration</li>
              <li>Problem Solver</li>
              <li>Creative</li>
              <li>Resourceful</li>
              <li>Self-Motivated</li>
            </ul>
          </div>
        </div>
        <div className="technologiesContainer col-6 ">
          <div className="listBackground">
            <h2>Technologies:</h2>
            <ul>
              <li>Javascript - Proficient</li>
              <li>Html - Proficient</li>
              <li>CSS - intermediate</li>
              <li>Alpine - intermediate</li>
              <li>Tailwind - intermediate</li>
              <li>React JS - intermediate</li>
              <li>JSX - Proficient</li>
              <li>Visual Studio Code - Proficient</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="projectsContainer">
          <div className="projects col-10 text-primary">
            <div className="projectsTitle">
              <h1>Projects</h1>
            </div>
            <div className="projectCell">
              <a
                className="projectHeader"
                href="https://collinstodolist.herokuapp.com/"
              >
                <h2>To-Do List</h2>
              </a>
              <p>September 2021</p>
              <h3>
                Developed a Web App functioning as a To-Do List. Through the use
                of Vanilla Javascript, HTML, and CSS, an interactive,
                functioning To-Do list was created.
              </h3>
            </div>
            <div className="projectCell">
              <a
                className="projectHeader"
                href="https://ctbtictactoe.herokuapp.com/"
              >
                <h2>TicTacToe Game</h2>
              </a>
              <p>January 2022</p>
              <h3>
                Developed a React App that implemented JSX, Javascript, CSS,
                Google Oauth, mongoDB, and Localhost to create a personalized
                score for all registered users in this TicTacToe game.
              </h3>
            </div>
            <div className="projectCell">
              <a className="projectHeader" href="">
                <h2>Responsive Web Design Practice</h2>
              </a>
              <p>March 2022</p>
              <h3>
                Various projects practicing with Responsive Web Design that
                implemented default CSS in some and frameworks in others. This
                practice allowed for websites in any screen size to appear
                structured to that screen size.
              </h3>
            </div>
            <div className="projectCell">
              <a className="projectHeader" href="">
                <h2>Map Roulette Community Tickets</h2>
              </a>
              <p>June 2022</p>
              <h3>
                Contributed to MapRoulette in the creation of community tickets.
              </h3>
            </div>
            <div className="projectCell">
              <a className="projectHeader" href="">
                <h2>Personal Website</h2>
              </a>
              <p>June 2022</p>
              <h3>
                Created a personal website, learning how to deploy/host
                websites, create a domain name, and further develop skills in
                React JS, JSX, and CSS.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* <div className="contactMe col-9 col-">
<ContactMe />
</div> */
