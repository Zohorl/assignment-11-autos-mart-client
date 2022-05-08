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
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </li>
                        <li>These databases have fixed or static or predefined schema</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>These databases are best suited for complex queries</li>
                        <li>Vertically Scalable</li>

                    </ul>
                    <h5>NoSQL : </h5>
                    <ul>
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema</li>
                        <li>These databases are best suited for hierarchical data storage.</li>
                        <li>These databases are not so good for complex queries</li>
                        <li>Horizontally scalable</li>
                    </ul>
                </Card.Text>
                <Card.Title>Q-3 : What is the purpose of jwt and how does it work?</Card.Title>
                <Card.Text>
                    JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Blogs;