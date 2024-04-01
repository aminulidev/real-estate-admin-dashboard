import React from 'react';

const PageTitle = ({pageTitle}: {pageTitle: string}) => {
    return (
        <h1 className="text-lg font-semibold leading-6">{pageTitle}</h1>
    );
};

export default PageTitle;