import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className="blog-post w-75 mx-auto pt-5">
                <h1>Difference between Authentication and Authorization</h1>
                <p>Authentication is done before the authorization process, whereas authorization process is done after the authentication process.</p>
                <p>In authentication process, the identity of users are checked for providing the access to the system.While in authorization process, person’s or user’s authorities are checked for accessing the resources.</p>
                <p>In authentication process, users or persons are verified.While in authorization process, users or persons are validated.</p>
                <p>Authentication determines whether the person is user or not. While authentication determines What permission do user have?</p>
            </div>
            <div className="blog-post w-75 mx-auto pt-5">
                <h1>Why I use firebase</h1>
                <p>In the initial years, Firebase was successful over many of its other alternatives. But, it started losing popularity when it was compared with MongoDB. Though MongoDB and Firebase offer different functionalities and have a different purpose to serve. The previous one is a database management system and the latter one is a model to sync, real-time data on the cloud and manages the user engagement for the clients’ mobile app.</p>
                <p>Authentication has been always crucial since we used to develop using C, C#, and C++. But, the upcoming technologies have not just simplified the implementation of authentication but made it really quick. Just like the Firebase Authentication. Firebase brings a highly secure authentication system that improves the user experience while they sign-up and sign-in.</p>
                <p>Parse is the first Firebase alternative on our list. This open source application stack framework features robust tools for developing apps. You can deploy it on any server without any issues.</p>
                <p>Another Firebase alternative is AWS Amplify. AWS Amplify is Amazon’s cloud platform. It offers a set of services and tools for building full-stack, scalable apps powered by Amazon. Some of its tools can be used in combination or alone.</p>
            </div>
            <div className="blog-post w-75 mx-auto pt-5">
                <h1>Other services of Firebase</h1>
                <p>Firebase ML Kit comes up with various machine learning features and even it has ready-to-use ML APIs that you can integrate with your mobile apps to utilize the common functionalities such as identifying the faces and text, scanning barcodes, labeling images, and recognizing location landmarks.</p>
                <p>Firebase comes up with the Firebase Real-time Database which is hosted on a cloud and is a NoSQL database. Hence, it allows you to store and sync JSON data, real-time. Like we discussed above, that is ideally the best feature for the apps having live streaming, messaging, GPS, etc.</p>
            </div>
        </div>
    );
};

export default Blogs;