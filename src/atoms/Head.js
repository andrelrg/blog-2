import React from "react";
import {Helmet} from "react-helmet";
import favicon from '../../static/img/favicon.ico';

function Head() {
    console.log(favicon);
    return (
    <Helmet>
        <meta charset="utf-8" />
        <title>$programmer_life</title>
        <meta name="description" content="" />
        <link type="image/png" rel="icon" href={favicon} />
    </Helmet>);
}

export default Head;