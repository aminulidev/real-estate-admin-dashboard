import React from 'react';

const CameraIcon = ({className}: {className: string}) => {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M1.5 6C1.5 4.75736 2.50736 3.75 3.75 3.75H5.31598C5.50537 3.75 5.6785 3.643 5.7632 3.47361L5.85676 3.28647C6.17437 2.65125 6.82362 2.25 7.53381 2.25H10.4662C11.1764 2.25 11.8256 2.65125 12.1432 3.28647L12.2368 3.47361C12.3215 3.643 12.4946 3.75 12.684 3.75H14.25C15.4926 3.75 16.5 4.75736 16.5 6V13.5C16.5 14.7426 15.4926 15.75 14.25 15.75H3.75C2.50736 15.75 1.5 14.7426 1.5 13.5V6ZM9 12.75C10.6569 12.75 12 11.4069 12 9.75C12 8.09315 10.6569 6.75 9 6.75C7.34315 6.75 6 8.09315 6 9.75C6 11.4069 7.34315 12.75 9 12.75ZM13.5 7.5C13.9142 7.5 14.25 7.16421 14.25 6.75C14.25 6.33579 13.9142 6 13.5 6C13.0858 6 12.75 6.33579 12.75 6.75C12.75 7.16421 13.0858 7.5 13.5 7.5Z"
              fill=""
            />
        </svg>

    );
};

export default CameraIcon;