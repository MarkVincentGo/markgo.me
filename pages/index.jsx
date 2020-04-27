import React, { Component } from 'react';
import Modal from 'react-modal';
import ProjectModal from './ProjectModal';
import Layout from './Layout';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';

const fontImport = `
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Bold.ttf');
  src: url('/fonts/Montserrat-Regular.ttf');
  src: url('/fonts/Montserrat-Black.ttf');
  src: url('/fonts/Montserrat-ExtraLight.ttf');
  font-display: swap;
}

.ReactModal__Overlay {
  width: 0;
  height: 0;
  margin: auto;
  transition: width 250ms, height 250ms;
}

.ReactModal__Overlay--after-open{
  width: 70vw;
  height: 70vh;
}

.ReactModal__Overlay--before-close{
  width: 0;
  height: 0;
}
`;


export default class index extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      selectedProject: null,
      socialMediaInfo: [
        {
          name: 'LinkedIn',
          logoPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
          link: 'https://www.linkedin.com/in/mark-vincent-go/',
        },
        {
          name: 'GitHub',
          logoPath: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3',
          link: 'https://github.com/MarkVincentGo',
        },
        {
          name: 'Resume',
          logoPath: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
          link: '/MG_SE_Resume.pdf',
        },
      ],
      technologiesInfo: [
        {
          stack: 'Front-End',
          technologies: ['HTML5', 'CSS', 'JavaScript', 'React | Redux', 'Vue'],
        },
        {
          stack: 'Server',
          technologies: ['NodeJS', 'Express', 'Python'],
        },
        {
          stack: 'Database',
          technologies: ['MySql', 'MongoDB', 'PostgreSQL', 'Cassandra', 'Redis'],
        },
        {
          stack: 'Deployment',
          technologies: ['AWS EC2 | S3', 'NGINX', 'Docker', 'Git | GitHub'],
        },
      ],
      projectsInfo: [
        {
          name: 'Big Tuna',
          description: 'House Tour Scheduling Application',
          color: '#bd3754',
          githubLink: 'https://github.com/Big-Tunas/Bluefin-Service-ScheduleTour',
          longThing: '/house-key.png',
          technologies: ['React', 'Styled-Components', 'Docker', 'Express | NodeJS, MySQL'],
          demo: '/FECDemo.mp4',
        },
        {
          name: 'Bon-App-Etit',
          description: 'Back-End of Restaurant Reservation Service handling 10,000 Requests per second',
          color: '#8431b5',
          githubLink: 'https://github.com/MarkVincentGo/reservation-service',
          longThing: '/utensil.png',
          technologies: ['AWS EC2', 'NGINX', 'Express | NodeJS', 'Docker', 'PostgreSQL'],
          demo: '',
        },
        {
          name: 'What2Cook',
          description: 'Recipe Generator Application',
          color: '#3fbf50',
          githubLink: 'https://github.com/MarkVincentGo/What2Cook',
          longThing: '/spatula.png',
          technologies: ['Vue', 'CSS', 'Express | NodeJS', 'MongoDB'],
          demo: '/MVPDemo.mp4',
        },
        {
          name: 'DomOnion',
          description: 'Deck Building Game',
          color: '#bfb63f',
          githubLink: 'https://github.com/MarkVincentGo/Virtual-Dominion',
          longThing: 'sword.png',
          technologies: ['React', 'Redux', 'Socket.io', 'Express | NodeJS'],
          demo: '',
        },
        {
          name: 'Motion Booth',
          description: 'Live-Photo Strip iOS Application',
          color: '#3fbf8a',
          githubLink: '',
          longThing: 'camera-tripod.png',
          technologies: ['React Native', 'XCode', 'Express | NodeJS'],
          demo: '',
        },
        {
          name: 'Resume Roasters',
          description: 'Resume Review Service',
          color: '#d19234',
          githubLink: '',
          longThing: 'pencil.png',
          technologies: ['React', 'Express | NodeJS', 'MaterialUI'],
          demo: '',
        },
      ],
    };
    this.openProjectModal = this.openProjectModal.bind(this);
    this.closeProjectModal = this.closeProjectModal.bind(this);
  }

  openProjectModal(projectInfo) {
    this.setState({ isModalOpen: true, selectedProject: projectInfo });
  }

  closeProjectModal() {
    this.setState({ isModalOpen: false, selectedProject: null });
  }

  render() {
    const {
      isModalOpen, selectedProject, socialMediaInfo, technologiesInfo, projectsInfo,
    } = this.state;

    return (
      <Layout portfolioButtons={socialMediaInfo}>
        <Modal
          isOpen={isModalOpen}
          shouldCloseOnEsc
          onRequestClose={this.closeProjectModal}
          style={{ overlay: { margin: 'auto' } }}
          closeTimeoutMS={200}
          onClick={this.closeProjectModal}
        >
          <ProjectModal
            closeProjectModal={this.closeProjectModal}
            selectedProject={selectedProject}
          />
        </Modal>
        <About />
        <Technologies stacks={technologiesInfo} />
        <Projects openProjectModal={this.openProjectModal} projects={projectsInfo} />
        <style>{fontImport}</style>
      </Layout>
    );
  }
}
