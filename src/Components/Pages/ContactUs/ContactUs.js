import React, { useRef, useState } from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import Title from '../../Shared/Title/Title';
import './ContactUs.css'
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const services = [
        {
            label: 'Business Development',
            id:"business-development"
        },
        {
            label: 'Capture Management',
            id:"capture-management"
        },
        {
            label: 'Strategy Engagements',
            id:"strategy-engagements"
        },
        {
            label: 'Black Hat Competitive Reviews',
            id:"black-hat-competitive-reviews"
        },
        {
            label: 'Federal Opportunity Pipeline Development',
            id:"federal-opp-pipeline-development"
        },
        {
            label: 'Task Order Analysis/Reports',
            id:"task-order-analysis-reports"
        },
        {
            label: 'Business Development Recruitment/Referrals',
            id:"business-dev-recruitment-referrals"
        },
        {
            label: 'Business Development Training',
            id:"business-dev-training"
        }
    ]

    const onSubmit = (e) => {
        e.preventDefault();
        validateForm();
    }
    
    const validateForm = () => {
        let hasErrors = false;
        if(!name){
            hasErrors = true;
        } else if(!title){
            hasErrors = true;
        } else if(!org){
            hasErrors = true;
        } else if(!email){
            hasErrors = true;
        } else if(!phone){
            hasErrors = true;
        } else if(!problem){
            hasErrors = true;
        } else {
            hasErrors = false;
        }

        handleErrors(hasErrors);

    }

    const handleErrors = (hasErrors) => {
        if(hasErrors) {
            setFormErrors(true);
        } else {
            setFormErrors(false);
            sendEmail();
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
            clearForm();
        }
    }

    const clearForm = () => {
        setName('')
        setTitle('');
        setOrg('');
        setEmail('');
        setPhone('');
        setProblem('');
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach(box => box.checked = false)
        
    }


    const sendEmail = () => {        
        emailjs.sendForm('service_0yh4eyg', 'template_izc2b46', form.current, 'user_3GJo9YA8mRll4IvSsEQKl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const [formErrors, setFormErrors] = useState(false);
    const [success, setSuccess] = useState(false);

    // inputs
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [org, setOrg] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [problem, setProblem] = useState('');


    
    return (
        <div className='contact-us'>
            <PageHeading heading="Connect with d8 Group" page="Contact Us"/>
            <Title 
                heading="contact us" 
                subtitle="Request engagement iformation"
                paragraph="receive the latest updates from d8 Group!"
            />
            {
                success? 
                <div className="success-message">
                    <h2>Thank you for contacting us!</h2>
                    <p>We will get back to you as soon as possible.</p>
                </div>
                : null
            }
            <form ref={form} className='contact-form' onSubmit={onSubmit}>
                <input type="text" placeholder='FULL NAME' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='TITLE' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='ORGANIZATION' name='organization' value={org} onChange={(e) => setOrg(e.target.value)} />
                <input type="email" placeholder='EMAIL' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='PHONE' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div className='checkbox-container'>
                    <h3>SERVICES DESIRED</h3>
                    {
                        services.map((serv, i) => 
                        <div className="form-option" key={i}>
                            <input type="checkbox" name={serv.id} id={serv.id} />
                            <label htmlFor={serv.id}>{serv.label}</label>
                        </div>
                        )
                    }
                </div>
                <textarea type="text" placeholder='YOUR BIGGEST CHALLENGE WE CAN SOLVE' name='problem' value={problem} onChange={(e) => setProblem(e.target.value)} />
                {         
                formErrors ?
                <div className="form-errors">
                    Please make sure all fields are completed.
                </div>
                : null
                }
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default ContactUs;