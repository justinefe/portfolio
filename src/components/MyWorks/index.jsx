import React from 'react';
import './MyWorks.scss';
import SliderMenu from 'react-slider-menu-package';
import ProjectDiv from './ProjectDiv';

const MyWorks = () => (
  <div className="my-works" id="works">
    <h2 className="my-works__title">My Works</h2>
    <div className="my-works__slider-wrap">
      <SliderMenu
        autoMode
        elementsPerView={3}
        height={250}
        sliderTransition={1.5}
        autoModeDelayTime={15}
        elementsMinWidth={350}
      >
        <ProjectDiv
          appLink="https://justinefe.github.io/Auto-Mart/UI/index.html"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1596059864/auto-mart/auta_dpflvw.png"
        />
        <ProjectDiv
          appLink="https://linkedin-justclone.web.app/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1612345699/linkedIn_ll03mo.png"
        />
        <ProjectDiv
          appLink="https://online-voting-frontend.herokuapp.com/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1596061345/auto-mart/voting_zaqz1f.png"
        />
        <ProjectDiv
          appLink="https://justimuzik.web.app/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1612345683/justwaves_2_rs9hcq.png"
        />
        <ProjectDiv
          appLink="https://amoskeyz.github.io/Epic-mail/UI/index.html"
          imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582806900/i6g9pk96xv69afaytwgq.png"
        />
        {/* <ProjectDiv
          appLink="https://epic-mail-react-app.herokuapp.com/#/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110587/Screen_Shot_2019-10-26_at_6.21.10_PM_tg3li7.png"
        />
        <ProjectDiv
          appLink="https://crypto-book-order-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110595/Screen_Shot_2019-10-26_at_6.18.56_PM_jisamy.png"
        />
        <ProjectDiv imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110675/Screen_Shot_2019-10-26_at_6.20.09_PM_jnin7m.png" />
        <ProjectDiv
          appLink="https://lyrics-app-react.herokuapp.com/"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572110588/Screen_Shot_2019-10-26_at_6.22.22_PM_v4txrg.png"
        />
        <ProjectDiv
          appLink="https://busha-admin-dashboars-app.herokuapp.com/balances"
          imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572111009/Screen_Shot_2019-10-26_at_6.27.29_PM_mxpny0.png"
        /> */}
      </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
