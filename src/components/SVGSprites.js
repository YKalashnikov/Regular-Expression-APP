import React from 'react';
import PropTypes from 'prop-types';

const SVGSprites = () => (
  <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
    <symbol
      id="info-icon"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z">
        {' '}
      </path>
    </symbol>
    <symbol
      id="complete-icon"
      viewBox="0 0 14 10"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="main-g"
        transform="translate(-116.000000, -358.000000)"
        fill="#fff">
        <g id="Group-5" transform="translate(86.000000, 222.000000)">
          <g id="Group" transform="translate(16.000000, 122.000000)">
            <polygon
              id="Shape"
              points="26.5784672 14 19.1587591 21.419708 15.290146 17.5501825 14 18.8403285 19.1587591 24 27.8686131 15.290146"
            />
          </g>
        </g>
      </g>
    </symbol>
    <symbol
      id="error-icon"
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="main-g"
          transform="translate(-424.000000, -357.000000)"
          fill="#FFFFFF">
          <g id="Group-5" transform="translate(86.000000, 222.000000)">
            <g id="Group-3" transform="translate(308.000000, 0.000000)">
              <g id="Group" transform="translate(16.000000, 122.000000)">
                <polygon
                  id="Shape"
                  points="27 14.3139286 25.6860714 13 20.5 18.1860714 15.3139286 13 14 14.3139286 19.1860714 19.5 14 24.6860714 15.3139286 26 20.5 20.8139286 25.6860714 26 27 24.6860714 21.8139286 19.5"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </symbol>
    <symbol
      id="logo"
      width="126px"
      height="26px"
      viewBox="0 0 126 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="iPad-Pro-Landscape"
          transform="translate(-87.000000, -49.000000)"
          fill="#383838">
          <path
            d="M92.592,65.008 L95.888,65.008 L99.12,74 L105.104,74 L100.848,63.984 C103.376,62.768 104.208,60.496 104.208,57.52 C104.208,52.944 102.096,50 95.632,50 L87.472,50 L87.472,74 L92.592,74 L92.592,65.008 Z M92.592,54.672 L96.08,54.672 C98.352,54.672 98.64,56.176 98.64,57.52 C98.64,58.832 98.352,60.368 96.08,60.368 L92.592,60.368 L92.592,54.672 Z M116.816,74.448 C120.272,74.448 123.088,73.712 124.528,72.816 L124.528,60.112 L116.016,60.112 L116.016,64.688 L119.408,64.688 L119.408,69.552 C119.056,69.616 118.416,69.648 117.936,69.648 C113.488,69.648 111.856,67.984 111.856,62 C111.856,56.4 113.36,54.352 117.936,54.352 C119.92,54.352 122.064,54.832 124.048,55.664 L124.048,50.672 C122.608,50.032 120.24,49.552 116.976,49.552 C109.68,49.552 106.672,53.648 106.672,62 C106.672,70.352 109.68,74.448 116.816,74.448 L116.816,74.448 Z M140.88,74 L146.896,74 L140.272,61.52 L146.48,50 L140.592,50 L136.688,58.576 L132.784,50 L126.896,50 L133.104,61.52 L126.48,74 L132.496,74 L136.688,65.392 L140.88,74 Z M154.16,65.68 L157.168,65.68 C163.568,65.68 165.776,62 165.776,57.84 C165.776,53.744 163.568,50 157.168,50 L149.04,50 L149.04,74 L154.16,74 L154.16,65.68 Z M154.16,54.672 L157.2,54.672 C159.76,54.672 160.24,56.624 160.24,57.872 C160.24,59.12 159.76,61.072 157.2,61.072 L154.16,61.072 L154.16,54.672 Z M166.928,71.408 C166.928,73.136 168.24,74.448 169.968,74.448 C171.664,74.448 173.008,73.136 173.008,71.408 C173.008,69.712 171.664,68.368 169.968,68.368 C168.24,68.368 166.928,69.712 166.928,71.408 L166.928,71.408 Z M180.4,65.008 L183.696,65.008 L186.928,74 L192.912,74 L188.656,63.984 C191.184,62.768 192.016,60.496 192.016,57.52 C192.016,52.944 189.904,50 183.44,50 L175.28,50 L175.28,74 L180.4,74 L180.4,65.008 Z M180.4,54.672 L183.888,54.672 C186.16,54.672 186.448,56.176 186.448,57.52 C186.448,58.832 186.16,60.368 183.888,60.368 L180.4,60.368 L180.4,54.672 Z M203.408,74.448 C207.056,74.448 212.336,73.008 212.336,66.416 L212.336,50 L207.216,50 L207.216,66.16 C207.216,69.264 205.2,69.808 203.408,69.808 C201.616,69.808 199.6,69.264 199.6,66.16 L199.6,50 L194.48,50 L194.48,66.416 C194.48,73.008 199.76,74.448 203.408,74.448 L203.408,74.448 Z"
            id="RGXP.RU"
          />
        </g>
      </g>
    </symbol>
    <symbol
      id="github"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="64"
      height="64">
      <path
        d="M15.999,4C9.373,4,4,9.373,4,16.001c0,5.301,3.438,9.799,8.207,11.386 c0.6,0.11,0.819-0.26,0.819-0.578c0-0.285-0.01-1.04-0.016-2.041c-3.338,0.725-4.042-1.609-4.042-1.609 c-0.546-1.386-1.332-1.755-1.332-1.755c-1.09-0.745,0.082-0.729,0.082-0.729c1.204,0.085,1.838,1.237,1.838,1.237 c1.07,1.834,2.809,1.304,3.492,0.997c0.109-0.775,0.419-1.304,0.762-1.604c-2.665-0.303-5.466-1.332-5.466-5.931 c0-1.31,0.468-2.381,1.235-3.22c-0.123-0.304-0.535-1.524,0.118-3.176c0,0,1.008-0.323,3.3,1.23 c0.957-0.266,1.984-0.399,3.004-0.404c1.019,0.005,2.046,0.138,3.004,0.404c2.291-1.553,3.297-1.23,3.297-1.23 c0.655,1.652,0.243,2.872,0.119,3.176c0.769,0.839,1.233,1.91,1.233,3.22c0,4.61-2.806,5.624-5.479,5.921 c0.431,0.37,0.815,1.103,0.815,2.222c0,1.604-0.015,2.898-0.015,3.292c0,0.321,0.216,0.694,0.825,0.577 C24.565,25.795,28,21.301,28,16.001C28,9.373,22.627,4,15.999,4z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </symbol>
    <symbol
      id="search"
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M22.4,19.6l-4.8-4.8c0.9-1.4,1.4-3,1.4-4.8c0-5-4-9-9-9s-9,4-9,9s4,9,9,9c1.8,0,3.4-0.5,4.8-1.4l4.8,4.8   c0.4,0.4,0.9,0.6,1.4,0.6c1.1,0,2-0.9,2-2C23,20.4,22.8,19.9,22.4,19.6z M5,10c0-2.8,2.2-5,5-5s5,2.2,5,5s-2.2,5-5,5S5,12.8,5,10z" />
      </g>
    </symbol>
    <svg
      id="arrow"
      viewBox="0 0 263 252"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M101,102.868675 L51.427643,152.441032 C39.7496536,164.119022 20.8200188,164.123149 9.14138633,152.444516 C-2.53467893,140.768451 -2.52818495,121.831315 9.14487036,110.15826 L109.489118,9.814012 C109.702333,9.58725813 109.919756,9.36301654 110.141386,9.14138633 C115.124375,4.15839787 121.429838,1.30317963 127.928758,0.574488133 C136.661739,-0.412309635 145.745893,2.44276345 152.444516,9.14138633 C152.666041,9.36291078 152.88336,9.58704889 153.096474,9.81370148 L253.441032,110.15826 C265.119022,121.836249 265.123149,140.765884 253.444516,152.444516 C241.768451,164.120582 222.831315,164.114088 211.15826,152.441032 L160.796871,102.079643 L160.796871,221.757868 C160.796871,238.273039 147.414516,251.66123 130.898435,251.66123 C114.385985,251.66123 101,238.266061 101,221.757868 L101,102.868675 Z" />
    </svg>
  </svg>
);

const SVGLink = ({ name, title, className }) => (
  <svg id={name} title={title} className={`icon ${className ? className : ''}`}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

SVGLink.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export { SVGLink, SVGSprites };