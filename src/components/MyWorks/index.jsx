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
          appLink="https://amazonclon.herokuapp.com/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1613979763/samples/ecommerce/amazonecommerce_zxnsoj.jpg"
        />
        <ProjectDiv
          appLink="https://justimuzik.web.app/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1612345683/justwaves_2_rs9hcq.png"
        />
        <ProjectDiv
          appLink="https://rbot-friends.herokuapp.com/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1612386237/edddd_jhh393.png"
        />
        <ProjectDiv
          appLink="https://github.com/justinefe/cyclops-backend"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1612348030/cyclopsbackend_llydn2.png"
        />{' '}
        <ProjectDiv
          appLink="https://javascripttodos.herokuapp.com/"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1614091258/javascripttodos_dvlakw.jpg"
        />
  <ProjectDiv
          appLink="https://onburna.herokuapp.com"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1615281218/cc_2_ls2jj1.png"
        /><ProjectDiv
          appLink="https://onburna.herokuapp.com/landing"
          imgLink="https://res.cloudinary.com/ddz109stk/image/upload/v1615281619/jjjj_hvhadf.png"
        />

        
        <ProjectDiv
          appLink="https://skul-front.herokuapp.com"
          imgLink="https://res-console.cloudinary.com/ddz109stk/thumbnails/transform/v1/image/upload//v1616753348/ZGFzYm9hcmRfbnBwcTl3/drilldown"
        /> 
  <ProjectDiv
          appLink="https://lassod-frontend.herokuapp.com/"
          imgLink="https://res-console.cloudinary.com/ddz109stk/thumbnails/transform/v1/image/upload//v1616753802/ZHJlYW1fb2VxcmZq/drilldown"
        /> 
  </SliderMenu>
    </div>
  </div>
);

export default MyWorks;
