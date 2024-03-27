import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';
import F1 from './Frame(1).svg';
import F2 from './Frame(2).svg';
import F3 from './Frame(3).svg';
import F4 from './Frame(4).svg';
import F5 from './Frame(5).svg';
import F6 from './Frame(6).svg';



const Home = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        survey: '',
        dropdown: '',
        message: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');
    };

    const handleChangePhone = (e) => {
        const { name, value } = e.target;
        // Only update the state if the input value contains only numeric characters
        if (/^\d*$/.test(value)) {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const isEmailValid = (email) => {
        // Regular expression to validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        let emptyFields = [];
        for (const field in formData) {
            // Exclude the 'message' field from the check
            if (field !== 'message' && !formData[field]) {
                emptyFields.push(field);
            }
        }

        if (emptyFields.length > 0) {
            // const errorMessage = `Please fill in all required fields: ${emptyFields.join(', ')}`;
            const errorMessage = `Please fill in all required fields !`;

            setError(errorMessage);
            return;
        }

        try {
            const response = await axios.post('http://34.93.154.200/api/submit-form', formData);
            // const response = await axios.post('http://localhost:5000/api/submit-form', formData);

            if (response.status === 201) {
                console.log('Form submitted successfully!');
                navigate('/thankyou')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    survey: '',
                    dropdown: '',
                    message: ''
                });
                setError('');
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };



    const [selectedOption, setSelectedOption] = useState('');

    const handleChangedrop = (event) => {
        const { name, value } = event.target;
        setSelectedOption(value);
        setFormData({
            ...formData,
            [name]: value
        });
    };


    useEffect(() => {
        // Loop through all input fields
        const inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            // Remove the auto-fill styles
            inputs[i].addEventListener('animationstart', function (e) {
                if (e.animationName === 'onAutoFillStart') {
                    e.target.style.boxShadow = 'inherit';
                    e.target.style.backgroundColor = 'inherit';
                    e.target.style.color = 'inherit';
                }
            });
        }
    }, []);


    return (
        <>
            <div>
                <div className='Container'>

                    <div className='Header'>
                        <Header />
                    </div>
                    <div className='body'>
                        <div className='Heading'>Record your interest</div>
                        <div className='content'>
                            <div className='left'>
                                <div>Welcome to Batcave! We are the hub for people passionate about cars. Our vision is to create an unforgettable experience for every car enthusiast.
                                </div>
                                <div>We're planning an exciting launch event by offering a chance to ride an exotic car on a race track during our launch week. Your feedback will help us ensure that our events truly match your interests and preferences.
                                </div>
                                <div>Please show us your interests by filling this form
                                </div>

                                <div className='scroll'>
                                    <div>
                                        <div><img src={F1} /></div>
                                        <div>Organized Road Trips</div>
                                    </div>
                                    <div>
                                        <div><img src={F2} /></div>
                                        <div>Exotic Car Shows</div>
                                    </div>
                                    <div>
                                        <div><img src={F3} /></div>
                                        <div>Local Meets</div>
                                    </div>
                                    <div>
                                        <div><img src={F4} /></div>
                                        <div>Earn Rewards</div>
                                    </div>
                                    <div>
                                        <div><img src={F5} /></div>
                                        <div>Exclusive Offers</div>
                                    </div>
                                    <div>
                                        <div><img src={F6} /></div>
                                        <div>High-Quality Networks</div>
                                    </div>
                                    <div>
                                        <div><img src={F1} /></div>
                                        <div>Organized Road Trips</div>
                                    </div>
                                    <div>
                                        <div><img src={F2} /></div>
                                        <div>Exotic Car Shows</div>
                                    </div>
                                    <div>
                                        <div><img src={F3} /></div>
                                        <div>Local Meets</div>
                                    </div>
                                    <div>
                                        <div><img src={F4} /></div>
                                        <div>Earn Rewards</div>
                                    </div>
                                    <div>
                                        <div><img src={F5} /></div>
                                        <div>Exclusive Offers</div>
                                    </div>
                                    <div>
                                        <div><img src={F6} /></div>
                                        <div>High-Quality Networks</div>
                                    </div>

                                </div>


                            </div>


                            <div className='right'>
                                <form className="form1" action="">
                                    <div className="inputset">
                                        <input
                                            required
                                            name="name"
                                            onChange={handleChange}
                                            value={formData.name}
                                            type="text"
                                            style={{ background: "transparent" }}
                                        />
                                        <label className='label'>  <span className="char" >Name *</span></label>
                                    </div>
                                    <div className='input2'>
                                        <div className="inputset">
                                            <input
                                                required
                                                // autoComplete='off'
                                                type="email"
                                                name="email"
                                                // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {/* <label className="label">
                                                <span className="char" style={{ transitionDelay: '00ms' }}>E</span>
                                                <span className="char" style={{ transitionDelay: '50ms' }}>m</span>
                                                <span className="char" style={{ transitionDelay: '100ms' }}>a</span>
                                                <span className="char" style={{ transitionDelay: '150ms' }}>i</span>
                                                <span className="char" style={{ transitionDelay: '200ms' }}>l</span>
                                                <span className="char" style={{ transitionDelay: '250ms' }}>*</span>

                                            </label> */}
                                            <label className='label'>  <span className="char" >Email *</span></label>
                                        </div>

                                        <div className="inputset">
                                            <input
                                                type="tel"
                                                // autoComplete='off'
                                                name="phone"
                                                required
                                                pattern="[0-9]{10}"
                                                maxLength="10"
                                                value={formData.phone}
                                                onChange={handleChangePhone}
                                            />
                                            {/* <label className="label">
                                                <span className="char" style={{ transitionDelay: '00ms' }}>P</span>
                                                <span className="char" style={{ transitionDelay: '50ms' }}>h</span>
                                                <span className="char" style={{ transitionDelay: '100ms' }}>o</span>
                                                <span className="char" style={{ transitionDelay: '150ms' }}>n</span>
                                                <span className="char" style={{ transitionDelay: '200ms' }}>e</span>
                                                <span className="char" style={{ transitionDelay: '250ms' }}></span>
                                                <span className="char" style={{ transitionDelay: '300ms' }}>N</span>
                                                <span className="char" style={{ transitionDelay: '350ms' }}>u</span>
                                                <span className="char" style={{ transitionDelay: '400ms' }}>m</span>
                                                <span className="char" style={{ transitionDelay: '450ms' }}>b</span>
                                                <span className="char" style={{ transitionDelay: '500ms' }}>e</span>
                                                <span className="char" style={{ transitionDelay: '550ms' }}>r</span>
                                                <span className="char" style={{ transitionDelay: '600ms' }}>*</span>


                                            </label> */}
                                        <label className='label'>  <span className="char" >Phone Number *</span></label>

                                        </div>


                                    </div>
                                    <div className='inputsetRadio'>
                                        <label className="label">Would you like to enjoy a ride in an exotic car along with our lifetime premium membership (all inclusive for under 10K)?*
                                        </label> <br /> <br />
                                        <div className='radio-opt'>
                                            <input
                                                type="radio"
                                                name="survey"
                                                value="Yes"
                                                className="transparent-radio"
                                                checked={formData.survey === 'Yes'}
                                                onChange={handleChange}
                                            />  <label htmlFor="yes" className='radioLabel' >Definitely, Yes</label>
                                        </div>
                                        <div className='radio-opt'>

                                            <input
                                                type="radio"
                                                name="survey"
                                                value="CantAfford"
                                                checked={formData.survey === 'CantAfford'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="CantAfford" className='radioLabel'>Can’t Afford</label>
                                        </div>
                                        <div className='radio-opt'>

                                            <input
                                                type="radio"
                                                name="survey"
                                                value="No"
                                                checked={formData.survey === 'No'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor=" No" className='radioLabel'> No</label>
                                        </div>

                                    </div>

                                    {/* <div className="inputsetDrop">
                                        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
                                            <option value="" hidden disabled style={{ marginLeft: "10px" }}>Which Cars would you love to drive *</option>
                                            <option style={{ fontFamily: "Outfit" }} value="Porsche">Porsche 712</option>
                                            <option value="Ford">Ford mustang</option>
                                            <option value="Audi">Audi rs</option>
                                        </select>
                                    </div> */}

                                    {/* <div className="inputsetDrop">
                                        <label htmlFor="dropdown" className="dropdown-label">Which Cars would you love to drive *</label>
                                        <select name="dropdown" id="dropdown" value={selectedOption} onChange={handleChangedrop} className="dropdown-select">
                                            {selectedOption === '' && <option value="" hidden>Select an option</option>}
                                            <option value="Porsche">Porsche 712</option>
                                            <option value="Ford">Ford mustang</option>
                                            <option value="Audi">Audi rs</option>
                                        </select>
                                    </div> */}



                                    {/* <select className="gNnnTd" jsname="YPqjbf" id="gender" aria-labelledby="gender-label">
                                        <option className="XZzHec" value="">Gender</option>
                                        <option value="2" className="XZzHec">Female</option>
                                        <option value="1" className="XZzHec">Male</option>
                                        <option value="3" className="XZzHec">Rather not say</option>
                                        <option value="4" className="XZzHec">Custom</option>
                                    </select> */}

                                    {/* <div className="inputsetDrop">
                                        <label htmlFor="dropdown" className="dropdown-label">Which Cars would you love to drive *</label>
                                        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
                                            <option style={{ fontFamily: "Outfit" }} hidden disabled value=""> </option>
                                            <option style={{ fontFamily: "Outfit" }} value="Porsche">Porsche 712</option>
                                            <option style={{ fontFamily: "Outfit" }} value="Ford">Ford mustang</option>
                                            <option style={{ fontFamily: "Outfit" }} value="Audi">Audi rs</option>
                                        </select>
                                    </div> */}

                                    <div className="inputsetDrop">
                                        <label className='label'>  <span className="charMsg" style={{fontSize:"14px", fontWeight:"200", opacity:"60%"}}>Which Cars would you love to drive *</span></label>

                                        <select className="select-container" id="dropdown" style={{ fontFamily: "Outfit", marginBottom: "35px" }} name="dropdown" value={selectedOption} onChange={handleChangedrop}>
                                            <option className="select-option" style={{ fontFamily: "Outfit", marginBottom: "20px" }}  hidden value="Choose a car">Choose a car</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "20px" }} value="Aston">Aston Martin</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "20px" }} value="BMW">BMW M</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "10px" }} value="Audi">Audi RS</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "20px" }} value="Porsche">Porsche</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "20px" }} value="Ford">Ford Mustang</option>
                                            <option style={{ fontFamily: "Outfit", marginBottom: "10px" }} value="Mercedes">Mercedes AMG</option>

                                        </select>
                                    </div>

                                    <div className="inputset">
                                        <input
                                            // required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        {/* <label className="label">
                                            <span className="char" style={{ transitionDelay: '00ms' }}>S</span>
                                            <span className="char" style={{ transitionDelay: '50ms' }}>h</span>
                                            <span className="char" style={{ transitionDelay: '100ms' }}>a</span>
                                            <span className="char" style={{ transitionDelay: '150ms' }}>r</span>
                                            <span className="char" style={{ transitionDelay: '200ms' }}>e</span>
                                            <span className="char" style={{ transitionDelay: '250ms' }}>&nbsp;</span>
                                            <span className="char" style={{ transitionDelay: '300ms' }}>y</span>
                                            <span className="char" style={{ transitionDelay: '350ms' }}>o</span>
                                            <span className="char" style={{ transitionDelay: '400ms' }}>u</span>
                                            <span className="char" style={{ transitionDelay: '450ms' }}>r</span>
                                            <span className="char" style={{ transitionDelay: '500ms' }}>&nbsp;</span>
                                            <span className="char" style={{ transitionDelay: '550ms' }}>t</span>
                                            <span className="char" style={{ transitionDelay: '600ms' }}>h</span>
                                            <span className="char" style={{ transitionDelay: '650ms' }}>o</span>
                                            <span className="char" style={{ transitionDelay: '700ms' }}>u</span>
                                            <span className="char" style={{ transitionDelay: '750ms' }}>g</span>
                                            <span className="char" style={{ transitionDelay: '800ms' }}>h</span>
                                            <span className="char" style={{ transitionDelay: '850ms' }}>t</span>
                                            <span className="char" style={{ transitionDelay: '900ms' }}>s</span>
                                            <span className="char" style={{ transitionDelay: '950ms' }}>/</span>
                                            <span className="char" style={{ transitionDelay: '1000ms' }}>s</span>
                                            <span className="char" style={{ transitionDelay: '1050ms' }}>u</span>
                                            <span className="char" style={{ transitionDelay: '1100ms' }}>g</span>
                                            <span className="char" style={{ transitionDelay: '1150ms' }}>g</span>
                                            <span className="char" style={{ transitionDelay: '1200ms' }}>e</span>
                                            <span className="char" style={{ transitionDelay: '1250ms' }}>s</span>
                                            <span className="char" style={{ transitionDelay: '1300ms' }}>t</span>
                                            <span className="char" style={{ transitionDelay: '1350ms' }}>i</span>
                                            <span className="char" style={{ transitionDelay: '1400ms' }}>o</span>
                                            <span className="char" style={{ transitionDelay: '1450ms' }}>n</span>
                                            <span className="char" style={{ transitionDelay: '1500ms' }}></span>
                                            <span className="char" style={{ transitionDelay: '1550ms' }}>a</span>
                                            <span className="char" style={{ transitionDelay: '1600ms' }}>b</span>
                                            <span className="char" style={{ transitionDelay: '1650ms' }}>o</span>
                                            <span className="char" style={{ transitionDelay: '1700ms' }}>u</span>
                                            <span className="char" style={{ transitionDelay: '1750ms' }}>t</span>
                                            <span className="char" style={{ transitionDelay: '1800ms' }}></span>
                                            <span className="char" style={{ transitionDelay: '1850ms' }}>t</span>
                                            <span className="char" style={{ transitionDelay: '1900ms' }}>h</span>
                                            <span className="char" style={{ transitionDelay: '1950ms' }}>i</span>
                                            <span className="char" style={{ transitionDelay: '2000ms' }}>s</span>
                                            <span className="char" style={{ transitionDelay: '2050ms' }}>&nbsp;</span>
                                            <span className="char" style={{ transitionDelay: '2100ms' }}>i</span>
                                            <span className="char" style={{ transitionDelay: '2150ms' }}>d</span>
                                            <span className="char" style={{ transitionDelay: '2200ms' }}>e</span>
                                            <span className="char" style={{ transitionDelay: '2250ms' }}>a</span>
                                        </label> */}
                                        <label className='label'>  <span className="charMsg" style={{fontSize:"14px", fontWeight:"200"}}>Share your thoughts/suggestion about this idea </span></label>

                                    </div>
                                    {error && <div className="errormessages">{error}</div>}

                                </form>



                            </div>
                        </div>
                        <button type="button" onClick={handleSubmit} disabled={!isEmailValid(formData.email)}>Submit</button>


                    </div>
                    <div className='Footer'>
                        <Footer />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Home;
