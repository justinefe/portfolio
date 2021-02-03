import React from 'react';
import './Stacks.scss';
import StackList from './StackList';

const Stacks = () => (
  <div className="stacks">
    <h3>Stacks</h3>
    <div className="stacks__wrap">
      <StackList
        stackName="React"
        score="75"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/react_wii1jw.svg"
      />
      <StackList
        stackName="React-Native"
        score="40"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/react_wii1jw.svg"
      />
      <StackList
        stackName="Redux"
        score="50"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/redux_co340h.svg"
      />
      <StackList
        stackName="Firebase"
        score="60"
        imgLink="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
      />
      <StackList
        stackName="Node"
        score="65"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/nodejs_abllv9.svg"
      />
      <StackList
        stackName="Webpack"
        score="70"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/webpack_euqggc.svg"
      />
    </div>
  </div>
);

export default Stacks;
