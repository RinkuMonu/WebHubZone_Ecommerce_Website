import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Shipping = () => {
  return (
    <main>
      <section className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Shipping Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Shipping Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h3 className="section-heading">
              <strong>Finunique Small Pvt Ltd Small CENTERS - Service Terms &amp; Conditions</strong>
            </h3>
            <h3 className="section-heading">
              <strong>Introduction</strong>
            </h3>
            <p>
              Welcome to Finunique Small Pvt Ltd Services (hereinafter referred to as "Finunique Small Pvt Ltd Small Pvt Ltd"). By signing the Service Form (hereinafter referred to as the "Form") and handing over your product(s) for service, you agree to abide by these Terms and Conditions. These terms govern the service and repair of your product(s) by Digital Services Centers through its after-sales service, operated by an independent third party. If you do not agree to these terms and conditions, please do not submit the Form or hand over your product(s) for service.
            </p>

            <h3 className="section-heading">
              <strong>Definitions</strong>
            </h3>
            <p>
              <b><strong>You/Customer:</strong></b> Refers to the individual or entity handing over the product(s) for service.
            </p>
            <p>
              <b><strong>We/Us/Company:</strong></b> Refers to Digital Services Centers.
            </p>

            <h3 className="section-heading">
              <strong>In-Warranty Product Service</strong>
            </h3>
            <ul className="terms-list">
              <li><b><strong>Proof of Purchase:</strong></b> You must provide a clear and legible copy of the proof of purchase (such as a bill or invoice) and details of the product’s model and serial number.</li>
              <li><b><strong>Customer Responsibility:</strong></b> It is your sole responsibility to support the Company/service provider in offering its services.</li>
              <li><b><strong>Warranty Terms:</strong></b> The service of the product(s) is governed by the terms of the warranty conditions. Please refer to the warranty terms on our website for detailed inclusions and exclusions.</li>
              <li><b><strong>Warranty Expiration:</strong></b> The product warranty will expire as specified in the warranty terms. In the event of repair or replacement of any part, the warranty will continue only for the unexpired period of the main product’s warranty.</li>
              <li><b><strong>Free Service:</strong></b> Products covered under warranty will receive free service and replacement of components, provided the product is used as per the user manual instructions.</li>
              <li><b><strong>Property Rights:</strong></b> Replaced products or parts under warranty will become your property, and removed parts will become the property of the Company.</li>
              <li><b><strong>Service Charges:</strong></b> Charges will apply for products under warranty if the product is not used as per the user manual instructions.</li>
              <li><b><strong>External Accessories:</strong></b> The warranty does not cover repair, installation, or configuration of external accessories supplied by Digital Services Centers or third parties.</li>
              <li><b><strong>Replacement Products:</strong></b> In case of a free replacement, the same model will be provided. If discontinued, an alternate model will be provided with your consent.<br />
                <strong>Shipping Policy:</strong> Packages are generally dispatched within 6-7 days after receipt of payment and are shipped via reputed national couriers with tracking. We will provide you with a link to track your package online.</li>
            </ul>

            <h3 className="section-heading">
              <strong>Out-of-Warranty Product Service</strong>
            </h3>
            <ul className="terms-list">
              <li><b><strong>Service Charges:</strong></b> For products outside the warranty period, a service charge of Rs. 450 + GST or more (subject to prevailing charges) and replacement part charges will apply.</li>
              <li><b><strong>Cost Estimate:</strong></b> Service charges and part costs will be estimated after product inspection. If you reject the estimate after product inspection, inspection charges will apply, and your product will be returned without repair.</li>
              <li><b><strong>Service Types:</strong></b> Carry-In, Workshop, or Onsite Home repair work will be conducted based on accepted estimates.</li>
              <li><b><strong>Repeat Complaints:</strong></b> No service charges will apply if the same complaint recurs within 30 days of the last service.</li>
              <li><b><strong>GST:</strong></b> All services attract a GST of 18%.</li>
              <li><b><strong>Onsite Service:</strong></b> Onsite/In-Home service is available for specific products. Contact Customer Care for more details.</li>
              <li><b><strong>Damage Exclusions:</strong></b> Damage or failure due to unauthorized modifications, improper use, or removal of identification labels will be treated as outside warranty, and out-of-warranty charges will apply.</li>
              <li><b><strong>Modification Prohibition:</strong></b> Any modification to the product is strictly prohibited. The Company will not be liable for any accidents or damages resulting from modifications.</li>
            </ul>

            <h3 className="section-heading">
              <strong>Force Majeure</strong>
            </h3>
            <p>
              In unforeseen situations like acts of God, epidemics, pandemics, strikes, or lockouts, the Company’s services will be suspended. Once normalcy is restored, services will resume.
            </p>

            <h3 className="section-heading">
              <strong>Liability</strong>
            </h3>
            <p>
              The Company/Service provider and its employees are not liable for any special, indirect, incidental, or consequential damages from repair services. The sole liability is limited to the cost of repair or replacement of the affected product.
            </p>

            <h3 className="section-heading">
              <strong>Abandoned Products</strong>
            </h3>
            <p>
              If the Company/Service provider is unable to return the product due to lack of payment or refusal to collect within thirty (30) days of notification, the product will be considered abandoned. The Company may dispose of the product in accordance with applicable laws.
            </p>

            <h3 className="section-heading">
              <strong>Data Collection</strong>
            </h3>
            <p>
              You agree that it is necessary for the Company to collect, process, and use your personal data to perform service and support obligations under these terms and conditions.
            </p>

            <h3 className="section-heading">
              <strong>Contact Information</strong>
            </h3>
            <p>
              For further details, please contact our Customer Care or visit our website.
            </p>
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </main>
  );
};

export default Shipping;
