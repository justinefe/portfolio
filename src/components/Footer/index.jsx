import React from 'react';
import { getYear } from '../../utils';
import './Footer.scss';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <div className="footer flex-center">
    <div className="social-links-wrap flex-center">
      <SocialLinks
        imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582817751/xdvpduw0hwti8uue2nox.svg"
        socialLink="https://web.facebook.com/efe.justin"
      />
      <SocialLinks
        imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582862682/quiqhadnhgvfvciuvw9h.svg"
        socialLink="https://twitter.com/igugu"
      />
      <SocialLinks
        imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582818253/ma2ibgechehkbffpd6fh.svg"
        socialLink="https://github.com/justinefe"
      />
      <SocialLinks
        imgLink="http://res.cloudinary.com/amoslv/image/upload/v1582818440/lsniwzxquxdvg5g70dub.svg"
        socialLink="https://www.linkedin.com/in/justin-igugu-4bb465171/"
      />
    </div>
    <p>{`Copyright ${getYear()}`}</p>
  </div>
);

export default Footer;
