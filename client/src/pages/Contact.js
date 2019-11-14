// display the home page that should contain the authentication
import React from "react";

import Jumbotron from "../components/Jumbotron";

function Contact() {
    return (
<div>
<Jumbotron backgroundImage="../../images/homepageExample.jpg">
        <h1>This is the Contact page</h1>
        <h2>Welcome with a login</h2>
      </Jumbotron>
</div>

    );
}

export default Contact;