import * as React from 'react'

export interface IconSpriteProps {
    name: string;
}

// Code to obtain original viewBox
//var clientrect = document.querySelector('svg path').getBBox();console.log(clientrect.x+' '+clientrect.y+' '+clientrect.width+' '+clientrect.height);

export const sprite = {
    basket: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25">
            <path fill="none" fillRule="evenodd" stroke="#353535" strokeWidth="2" d="M1 6.181h16v17H1v-17zm5 4.258V1.756C7.316 1.252 8.294 1 8.932 1c.64 0 1.617.252 2.933.756v8.683"/>
        </svg>
    ),
    hamburger: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
            <path fill="#333" fillRule="evenodd" d="M0 0h16v2H0V0zm0 6h16v2H0V6zm0 6h16v2H0v-2z"/>
        </svg>
    ),
    cross: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path fillRule="evenodd" d="M7 5.586L2.05.636.636 2.05 5.586 7l-4.95 4.95 1.414 1.414L7 8.414l4.95 4.95 1.414-1.414L8.414 7l4.95-4.95L11.95.636 7 5.586z"/>
        </svg>
    ),
    'arrow-right': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 13">
            <path fillRule="evenodd" d="M13.82 5.431H.084v2.138H13.82l-3.475 3.488 1.514 1.518 4.539-4.556 1.513-1.52L11.859.425l-1.514 1.52L13.82 5.43z"/>
        </svg>
    ),
    magnify: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
            <path fill="none" fillRule="evenodd" stroke="#353535" strokeWidth="2" d="M8.5 16a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm6-1.5l5.523 5.523L14.5 14.5z"/>
        </svg>    
    ),
    youtube: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.03214286267757416 148.39999389648438 1000.0642700195312 703.199951171875"><path d="M396.8 629.5L666.9 490 396.8 348.8v280.7zM500 148.4q93.8 0 181.1 2.5t128.1 5.4l40.7 2.2q.5 0 9.5 .8t12.8 1.7 13.1 2.5 15.9 4.5 15.7 7.2 17.3 10.9 16.1 14.8q3.4 3.3 8.7 10.3t16.2 32.7 14.8 56.3q4.4 35.7 6.9 76.2t3.1 63.3V537.9q.6 81 -10 161.9 -4 30.7 -14 55.5t-17.9 34.3l-7.8 9.5q-7.8 8.4 -16.1 14.8t-17.3 10.6 -15.7 7 -15.9 4.4 -13.4 2.5 -12.8 1.7 -9.2 .9Q709.8 851.6 500 851.6q-115.5 -1.2 -200.6 -3.7t-111.9 -4.2l-27.3 -2.2 -20.1 -2.2q-20.1 -2.8 -30.4 -5.6T81.2 822 49.7 799.1Q46.3 795.8 41 788.8T24.8 756.1 10 699.8Q5.6 664.1 3.1 623.6T0 560.3V462.1q-.6 -81 10 -161.9 4 -30.7 14 -55.5t17.9 -34.3l7.8 -9.5q7.8 -8.4 16.1 -14.8t17.3 -10.9T98.8 168t15.9 -4.5 13.1 -2.5 12.8 -1.7 9.5 -.8Q290.2 148.4 500 148.4z"/></svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 82.5996322631836 857.0999755859375 819.200439453125"><path d="M194.8 348.8v553H10.6v-553h184.2zM206.5 178q.5 40.8 -28.2 68.1t-75.6 27.3h-1.1q-45.8 0 -73.7 -27.3T0 178q0 -41.3 28.7 -68.3t75.1 -27.1 74.2 27.1 28.5 68.3zm650.6 406.8v317H673.5V606q0 -58.6 -22.6 -91.8T580.4 481q-35.2 0 -58.9 19.3T486 548q-6.1 16.7 -6.1 45.2v308.6H296.3q1.1 -222.7 1.1 -361.1t-.5 -165.1l-.6 -26.8h183.6v80.3h-1.1q11.2 -17.8 22.9 -31.2t31.5 -29 48.6 -24.3 63.8 -8.7q95.5 0 153.5 63.4t58 185.5z"/></svg>
    ),
    twitter: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="24.5999755859375 142.90003967285156 879.4000244140625 714.200012207031"><path d="M904 227.7q-37.4 54.7 -90.4 93.2 .6 7.8 .6 23.4 0 72.6 -21.2 144.8t-64.5 138.7T625.6 745.3t-144 81.4 -180.3 30.4q-151.2 0 -276.7 -80.9 19.5 2.3 43.5 2.3 125.5 0 223.8 -77 -58.6 -1.2 -105 -36t-63.6 -89q18.4 2.7 34.1 2.7 24 0 47.4 -6.1Q142.3 560.3 101.3 510.9t-41 -114.7V394q37.9 21.2 81.4 22.9Q104.9 392.3 83.1 352.7t-21.7 -86q0 -49.1 24.5 -90.9 67.6 83.1 164.4 133.1t207.3 55.5q-4.5 -21.2 -4.5 -41.3 0 -74.8 52.8 -127.5t127.5 -52.7q78.1 0 131.7 56.9 60.8 -11.7 114.4 -43.5 -20.7 64.1 -79.3 99.3Q852.1 250 904 227.7z"/></svg>
    ),
    facebook: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="53 0 482.20001220703125 928.5999755859375"><path d="M535.2 6.7V154h-87.7q-47.9 0 -64.7 20.1t-16.7 60.3v105.4h163.5L507.8 505H366.1v423.6H195.3V505H53V339.8h142.3V218.2q0 -103.8 58 -161T407.9 0Q490 0 535.2 6.7z"/></svg>
    ),
    'down-open': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="50.20000076293945 297.3999938964844 899.5999145507812 577.5999755859375"><path d="M939.2 450.9L525.1 864.4Q514.5 875 500 875t-25.1 -10.6L60.8 450.9Q50.2 440.3 50.2 425.5t10.6 -25.4L153.5 308q10.6 -10.6 25.1 -10.6t25.1 10.6L500 604.4 796.3 308q10.6 -10.6 25.1 -10.6t25.1 10.6l92.7 92.1q10.6 10.6 10.6 25.4t-10.6 25.4z"/></svg>
    ),
    'angle-down': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="43 364.3999938964844 556.9000244140625 324.7999572753906"><path d="M599.9 410.7q0 7.3 -5.6 12.8l-260 260.1q-5.6 5.6 -12.9 5.6t-12.8 -5.6L48.5 423.5Q43 418 43 410.7t5.5 -12.8l28 -27.9q5.5 -5.6 12.8 -5.6t12.8 5.6l219.3 219.3L540.7 370q5.6 -5.6 12.9 -5.6t12.8 5.6l27.9 27.9q5.6 5.6 5.6 12.8z"/></svg>
    ),
    'chevron-right': (        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.00800000037997961 0.010000000707805157 8 12.979000091552734">
            <path fillRule="evenodd" d="M4.64 6.5L.01 11.259l1.683 1.73L8.008 6.5 6.324 4.77 1.694.01.008 1.741 4.64 6.5z"/>
        </svg>
    ),
    'clipboard-lines': (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="57" viewBox="0 0 34 57">
            <g fill="none" fillRule="evenodd" stroke="#E82F8D" strokeWidth="1.5">
                <path d="M.75 4.75h32.5v51.5H.75z"/>
                <path strokeLinecap="square" d="M9 30h17M9 34h17M9 38h17M9 43h17M12 47h11M13 19h9M17.5 14.5v9"/>
                <rect width="14.5" height="7.5" x="10.75" y=".75" rx="3.75"/>
            </g>
        </svg>
    ),
    'statistics-list': (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50">
            <g fill="none" fillRule="evenodd" stroke="#E82F8D" transform="translate(1 1)">
                <circle cx="3" cy="17" r="3" strokeWidth="1.5"/>
                <circle cx="14" cy="3" r="3" strokeWidth="1.5"/>
                <circle cx="24" cy="17" r="3" strokeWidth="1.5"/>
                <circle cx="35" cy="3" r="3" strokeWidth="1.5"/>
                <path strokeLinecap="square" strokeWidth="1.5" d="M15.524 29.5h20.978M15.524 33.5h20.978M15.524 41.5h20.978M15.524 45.5h20.978M4.5 13.438l6.52-7.335M22.5 13.438l-6.52-7.335M25.5 13.438l6.52-7.335"/>
                <path strokeWidth="2" d="M2 32.227L4.682 35 10 28M2 44.227L4.682 47 10 40"/>
            </g>
        </svg>
    ),
    'check': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 18">
            <g fill="none" fillRule="evenodd" stroke="#0FA550" strokeLinecap="square" strokeWidth="5">
                <path d="M3.5 9.5l4.66 4.66M8.5 14.5L19.085 3.915"/>
            </g>
        </svg>
    ),
    'plectrum': (        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.83172607421875 0.05265892297029495 378.07135009765625 382.2386169433594">
            <path fillRule="evenodd" d="M178.943.093c32.944-.673 123.882 7.016 163.471 27.475 110.805 55.762-52.68 353.058-197.582 354.716C87.608 383.803-59.072 147.52 27.58 50.525 64.522 9.171 136.453.961 178.943.093z" />
        </svg>
    )
}

const IconSprite = ({name} : IconSpriteProps) => {
    return sprite[name]
}

export default IconSprite