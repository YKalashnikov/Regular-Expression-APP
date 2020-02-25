import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ dict }) => (
  <div className="footer">
    <ul>
      <li>
        <span>© {new Date().getFullYear()}</span>
      </li>
    {/*   {dict.footer.links.map(item => (
        <li key={'footer-' + item.label}>
          <a href={item.url}>{item.label}</a>
        </li>
      ))} */}
    </ul>
  </div>
);

Footer.propTypes = {
  dict: PropTypes.object.isRequired,
};

export default Footer;
