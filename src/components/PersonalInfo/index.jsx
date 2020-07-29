import React from 'react';
import './PersonalInfo.scss';
import InfoList from './InfoList';

const PersonalInfo = () => (
  <div className="personal-info">
    <img
      src="https://res.cloudinary.com/ddz109stk/image/upload/v1596058734/auto-mart/IMG-20180629-WA0005_tdrdq2.jpg"
      alt=""
    />
    <div className="personal-info__bio flex-center">
      <div className="personal-info__bio__wrap">
        <InfoList label="Name:" detail="Justin Igugu" />
        <InfoList label="Github:" detail="justinefe" />
        <InfoList label="Address:" detail="Lagos, Nigeria" />
        <InfoList label="Hobbies:" detail="Reading, Music, football" />
      </div>
    </div>
  </div>
);

export default PersonalInfo;
