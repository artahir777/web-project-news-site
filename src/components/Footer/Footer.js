import React, { useState } from "react";

import "./footer.scss"

function Footer(props) {

    return (
        <div class = "Footer" >
            <div class = "copyright" >
            <p  >COPYRIGHT &copy; 2020. Reproduction of this website's content
                 without express written permission from this site is strictly prohibited.</p>
            </div>
            <div class = "logo" >
            <p  >Powered By: Abdul Rehman TahiR</p>
            </div>
        </div>
    );


}

export default Footer;