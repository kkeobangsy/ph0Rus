import React from "react";
import '../App.css';
import 'reactjs-popup/dist/index.css';


const Contact = () => {
    return(
            <body>
            <div class="contactBack">
                <div class="massage">
                    <label>
                        <p class="email">Email:</p>
                        <input type="text" class="inpute" />
                        <p class="name2">Name:</p>
                        <input type="text" class="inputn" />
                        <textarea id="subject" name="subject" placeholder={"Ask question?"}  />
                        <button class="button1">Submit</button>
                    </label>
                </div>
            </div>
            {/*    <div class="box1">
                <div class="green">

                </div>
                <div class="brown">

                </div>
            </div>*/}
            </body>
    )
}

export default Contact;