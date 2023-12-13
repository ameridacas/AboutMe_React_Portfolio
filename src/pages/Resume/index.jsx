import React from 'react';
//import './style.css';

const Resume = () => {
    return (
        <div className="resume">
            <section className="personal-info">
                <h2>Alexander Merida Castillo</h2>
                <p>8838 N 2nd way Unit 6, Phoenix, Arizona 85020</p>
                <p>Phone: 602-554-5663</p>
                <p>Email: mcastilloalex@gmail.com</p>
            </section>

            <section className="education">
                <h3>Education</h3>
                <p>Arizona State University, Phoenix, Arizona</p>
                <p>Attended: August 2017 - Dec. 2018</p>

                <p>Cesar Chavez High School, Phoenix, Arizona</p>
                <p>Graduation: May 17th, 2017</p>
                <p>High School Diploma</p>
            </section>

            <section className="qualifications">
                <h3>Educational & Professional Qualifications</h3>
                <ul>
                    <li>Microsoft Office</li>
                    <li>Google Docs</li>
                    <li>Time Management Skills</li>
                    <li>Collaboration Skills</li>
                    <li>Problem-Solving Skills</li>
                    <li>Administrative Skills</li>
                    <li>Ability to work under pressure</li>
                    <li>Coaching: Training new employees</li>
                    <li>Language Skills: I am Bilingual. I can speak Spanish fluently.</li>
                    <li>Active Listening</li>
                    <li>Customer Service</li>
                </ul>
            </section>

            <section className="experience">
                <h3>Experience</h3>
                <p>Warehouse Technician/Contracto
                    Apex Systems/Wells Fargo
                    03/14/2022-03/03/2023
                    Phoenix, Arizona
                </p>
                <ul>
                    <li>Packing and Unpacking Different Machines for Daily Shipments</li>
                    <li>Building Kits for each device</li>
                    <li> Sanitizing and cleaning different machines</li>
                    <li>Inventory</li>
                    <li>Organizing power supplies and pallets</li>
                    <li> Imaging</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
