import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container'>
                <div>
                    <h3>Question - 1 : authorization and authentication</h3>
                    <p><b>Answer: </b> Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
                </div>

                <div>
                    <h3>Question - 2: why are you using firebase ? what other options do you have to implement authentication ?</h3>
                    <p><b>Answer:</b> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>

                <div>
                    <h3>What other services does firebase provide other than authentication ? </h3>
                    <p><b>Answer: </b>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics.</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;