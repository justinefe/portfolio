import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import DeveloperSvg from '../../assets/DeveloperSvg';
import './Welcome.scss';

const Welcome = () => (
  <div className="welcome">
    <DeveloperSvg />
    <div className="welcome__info">
      <TypeWriterEffect
        textStyle={{ fontFamily: 'Salsa', color: '#3F3D56', fontSize: '2em' }}
        cursorColor="#3F3D56"
        text="Hi, I am Justin Igugu"
        hideCursorAfterText
        typeSpeed={40}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 400,
          fontSize: '1.5em',
        }}
        startDelay={4000}
        cursorColor="#3F3D56"
        multiText={[
          'I am a Software Engineer',
          'I am good at problem solving...',
          'A creative designer',
          'A Team Player',
          'To get my service, reach out to me now',
        ]}
        multiTextDelay={3000}
        typeSpeed={80}
      />
    </div>
  </div>
);

export default Welcome;
