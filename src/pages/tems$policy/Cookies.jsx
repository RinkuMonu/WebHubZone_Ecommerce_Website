import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Cookies = () => {
  return (
    <main>
      <section className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Cookies Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Cookies Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h1 className="section-heading"><strong>Cookie Policy for WEBHUB ZONE NETWORK PRIVATE LIMITED Pvt Ltd</strong></h1>
            <p>Last updated: Feb, 20, 2024</p>

            <h3 className="section-heading"><strong>What Are Cookies</strong></h3>
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.</p>

            <h3 className="section-heading"><strong>How We Use Cookies</strong></h3>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry-standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <h3 className="section-heading"><strong>Disabling Cookies</strong></h3>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the site. Therefore, it is recommended that you do not disable cookies.</p>

            <h3 className="section-heading"><strong>The Cookies We Set</strong></h3>
            <ul className="terms-list">
              <li>
                <strong>Site preferences cookies:</strong>
                <p>In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how the site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page affected by your preferences.</p>
              </li>
            </ul>

            <h3 className="section-heading"><strong>Third-Party Cookies</strong></h3>
            <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:</p>
            <ul className="terms-list">
              <li>
                <strong>Google Analytics:</strong>
                <p>This site uses Google Analytics to help us understand how you use the site and ways we can improve your experience. These cookies may track things such as how long you spend on the site and the pages you visit so we can continue to produce engaging content.</p>
              </li>
              <li>
                <strong>Testing New Features:</strong>
                <p>From time to time, we test new features and make subtle changes to the way the site is delivered. These cookies may be used to ensure that you receive a consistent experience and to understand which optimizations our users appreciate the most.</p>
              </li>
              <li>
                <strong>Advertising and Business Data:</strong>
                <p>As we sell products, it's important for us to track how many visitors to our site make a purchase. This data helps us accurately make business predictions, monitor our advertising, and ensure the best prices.</p>
              </li>
              <li>
                <strong>Google AdSense:</strong>
                <p>The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</p>
              </li>
              <li>
                <strong>Behavioural Advertising Cookies:</strong>
                <p>These cookies track your interests anonymously and help us provide the most relevant ads by tracking your interests.</p>
              </li>
              <li>
                <strong>Social Media Cookies:</strong>
                <p>We also use social media buttons and/or plugins to connect with social networks. These sites may set cookies through our site to enhance your profile or contribute to the data they hold for various purposes outlined in their privacy policies.</p>
              </li>
            </ul>

            <h3 className="section-heading"><strong>More Information</strong></h3>
            <p>Hopefully, that has clarified things for you. If you are unsure whether you need cookies, it is usually safer to leave them enabled as they interact with features you use on our site.</p>
            <p>For more general information on cookies, please read the <a href="https://www.cookiespolicy.com">Cookies Policy</a>.</p>
            <p>If you still have questions, you can contact us using the following contact methods:</p>
            <ul className="terms-list">
              <li>Email: <a href="mailto:Info@Finunique Small Pvt Ltd.in">info@webhub.net.in</a></li>
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .breadcrumb__area {
          background-color: #f5f5f5;
          padding-top: 60px;
          padding-bottom: 60px;
          margin: 0 15px;
        }

        .breadcrumb__content h3 {
          font-size: 24px;
          font-weight: bold;
        }

        .breadcrumb__list {
          font-size: 16px;
        }

        .breadcrumb-icon {
          margin: 0 8px;
        }

        .section-heading {
          background-color: #f2f2f2;
          font-family: 'PT Sans', sans-serif;
          font-size: 21px;
          font-weight: bold;
          padding: 10px 0;
          margin: 20px 0;
        }

        .terms-list {
          list-style: none;
          padding-left: 0;
          margin-left: 15px;
        }

        .terms-list li {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .section-text {
          font-family: 'PT Sans', sans-serif;
          font-size: 14px;
          line-height: 1.4;
          margin-top: 0;
          margin-bottom: 10px;
          color: #777;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export default Cookies;
