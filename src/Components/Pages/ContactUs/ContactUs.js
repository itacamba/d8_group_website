import React from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import Title from '../../Shared/Title/Title';
import './ContactUs.css'

const ContactUs = () => {

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
    return (
        <div className='contact-us'>
            <PageHeading heading="Connect with d8 Group" content="Contact us today! We are ready to throw all our resources behind you to help you win."/>
            <Title 
                heading="CONTACT US" 
                subtitle="Request Engagement Information"
                paragraph="Receive the Latest Updates from d8 Group!"
            />
            <form className='contact-form'>
                <input type="text" placeholder='FULL NAME'/>
                <input type="text" placeholder='TITLE'/>
                <input type="text" placeholder='ORGANIZATION'/>
                <input type="email" placeholder='EMAIL'/>
                <input type="text" placeholder='PHONE'/>
                <div className='checkbox-container'>
                    <h3>SERVICES DESIRED</h3>
                    {
                        services.map((serv, i) => 
                        <div className="form-option" key={i}>
                            <input type="checkbox" name={serv.id}id={serv.id} />
                            <label htmlFor={serv.id}>{serv.label}</label>
                        </div>
                        )
                    }
                </div>
                <textarea type="text" placeholder='YOUR BIGGEST CHALLENGE WE CAN SOLVE'/>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default ContactUs;