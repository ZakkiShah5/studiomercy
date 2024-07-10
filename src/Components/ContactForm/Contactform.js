import React from 'react'
import './Contactform.css'

const Contactform = () => {
    return (
        <div className='contact-form'>
            <div className="container">
                <form action="mailto:recipient@example.com" method="post" enctype="text/plain">
                    <fieldset>
                        <legend>Contact</legend>
                        <div className="flex-field">
                            <div>
                                <label htmlFor="fname">First Name</label> <br />
                                <input type="text" id='fname' required placeholder='Your first name' />
                            </div>

                            <div>
                                <label htmlFor="lname">Last Name</label> <br />
                                <input type="text" id='lname' required placeholder='Your last name' />
                            </div>
                        </div>
                        <div className="flex-field">
                            <div>
                                <label htmlFor="mail">Email Address</label> <br />
                                <input type="email" id='mail' placeholder='Enter Your Email Address...' required />
                            </div>
                            <div>
                            <label htmlFor="num">Phone (optional)</label> <br />
                            <input type="number" id='num' placeholder='Enter Your Phone number...'  />
                        </div>
                        </div>
                        <div>
                            <label htmlFor="msg">Your Message</label><br />
                            <textarea name="msg" id="msg" cols="30" rows="10" required></textarea>
                        </div>
                        <div className="centered-btn border-btn">
                            <button type='submit'>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Contactform