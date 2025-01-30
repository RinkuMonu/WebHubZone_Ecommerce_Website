import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Privacy = () => {
  return (
    <main>
      <section className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Privacy Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h3 className="section-heading"><strong>Privacy Policy for DigihubUnique Tech Solutions Pvt. Ltd. Pvt Ltd</strong></h3>
            <p>Last updated: Feb, 20, 2024</p>

            <h3 className="section-heading"><strong>Introduction</strong></h3>
            <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <h3 className="section-heading"><strong>Interpretation and Definitions</strong></h3>
            <p><b>Interpretation:</b> The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.</p>

            <h3 className="section-heading"><strong>Definitions</strong></h3>
            <p><b>Account:</b> Means a unique account created for You to access our Service.</p>
            <p><b>Affiliate:</b> Means an entity that controls, is controlled by, or is under common control with a party.</p>
            <p><b>Company:</b> Refers to U62013RJ2024PTC093387, 213, 2nd floor Pushp enclave Tonk Road Pratap Nagar Jaipur Rajasthan- 302033.</p>
            <p><b>Cookies:</b> Small files placed on Your device to store details of your browsing history.</p>
            <p><b>Device:</b> Refers to any device that can access the Service such as a computer, cellphone, or tablet.</p>
            <p><b>Personal Data:</b> Any information that relates to an identified or identifiable individual.</p>
            <p><b>Service:</b> Refers to the Website.</p>

            <h3 className="section-heading"><strong>Collecting and Using Your Personal Data</strong></h3>
            <p><b>Types of Data Collected:</b></p>
            <p><b>Personal Data:</b> While using Our Service, We may ask You to provide Us with personally identifiable information such as Email address, Phone number, and Usage Data.</p>

            <h3 className="section-heading"><strong>Tracking Technologies and Cookies</strong></h3>
            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>

            <h3 className="section-heading"><strong>Use of Your Personal Data</strong></h3>
            <ul className="terms-list">
              <li><b>To provide and maintain our Service:</b> Including to monitor the usage of our Service.</li>
              <li><b>To manage Your Account:</b> To manage Your registration as a user of the Service.</li>
              <li><b>For the performance of a contract:</b> To develop, comply with, and undertake the purchase contract for products or services.</li>
              <li><b>To contact You:</b> To contact You with updates or other informative communications.</li>
            </ul>

            <h3 className="section-heading"><strong>Retention of Your Personal Data</strong></h3>
            <p>The Company will retain Your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy.</p>

            <h3 className="section-heading"><strong>Transfer of Your Personal Data</strong></h3>
            <p>Your information may be transferred to computers located outside Your jurisdiction and may be subject to different data protection laws.</p>

            <h3 className="section-heading"><strong>Security of Your Personal Data</strong></h3>
            <p>We strive to use commercially acceptable means to protect Your Personal Data, but no method of transmission over the Internet is 100% secure.</p>

            <h3 className="section-heading"><strong>Disclosure of Your Personal Data</strong></h3>
            <p>We may disclose Your Personal Data in the following situations:</p>
            <ul className="terms-list">
              <li><b>With Service Providers:</b> We may share Your personal information with Service Providers to monitor and analyze the use of our Service.</li>
              <li><b>For business transfers:</b> In the event of a merger, sale, or transfer of assets, Your Personal Data may be transferred.</li>
              <li><b>With Affiliates:</b> We may share Your information with Our affiliates.</li>
              <li><b>With Your consent:</b> We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>

            <h3 className="section-heading"><strong>Retention and Deletion of Your Personal Data</strong></h3>
            <p>You have the right to request the deletion of your personal data and to withdraw your consent at any time.</p>

            <h3 className="section-heading"><strong>Children's Privacy</strong></h3>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>

            <h3 className="section-heading"><strong>Links to Other Websites</strong></h3>
            <p>Our Service may contain links to other websites that are not operated by Us. We are not responsible for the content or privacy policies of third-party websites.</p>

            <h3 className="section-heading"><strong>Changes to this Privacy Policy</strong></h3>
            <p>We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>

            <h3 className="section-heading"><strong>Contact Us</strong></h3>
            <p>If you have any questions about this Privacy Policy, You can contact us via email at <a href="mailto:Finunique Small Pvt Ltdnew@gmail.com">Finunique Small Pvt Ltdnew@gmail.com</a>.</p>
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

export default Privacy;
