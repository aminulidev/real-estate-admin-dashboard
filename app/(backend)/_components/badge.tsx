import React from 'react';

type BadgeType = {
    text: string
}
const Badge = ({text} : BadgeType ) => {
    return (
        <div className="w-fit bg-primary/15 px-2 py-2.5 gap-2.5 rounded font-semibold text-[10px] leading-3 text-primary md:text-xs md:leading-4">
            {text}
        </div>
    );
};

export default Badge;