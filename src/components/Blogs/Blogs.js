import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Card className="shadow-lg w-75 mx-auto my-5">
            <Card.Body>
                <Card.Title>Q-1 : Difference between Nodejs and JavaScript : </Card.Title>
                <Card.Text>
                    <h5>JavaScript : </h5>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is used in frontend development.</li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>

                    </ul>
                    <h5>Nodejs : </h5>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Some of the Nodejs modules are Lodash, express etc.</li>
                    </ul>
                </Card.Text>
                <Card.Title>Q-2 : Differences between sql and nosql databases :</Card.Title>
                <Card.Text>
                    <h5>SQL : </h5>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is used in frontend development.</li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>

                    </ul>
                    <h5>NoSQL : </h5>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Some of the Nodejs modules are Lodash, express etc.</li>
                    </ul>
                </Card.Text>
                <Card.Title>Q-3 : What is the purpose of jwt and how does it work?</Card.Title>
                <Card.Text>

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Blogs;