import React from "react";
import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

const Refund = () => {
  return (
    <main>
      <section className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Refund Policy</h3>
            <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
              <span>
                <a href="index.html">Home</a>
              </span>
              <ChevronRight className="breadcrumb-icon" />
              <span>Refund Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-page-area pb-80 pt-50">
        <div className="container">
          <div className="ck-content">
            <h3 className="section-heading"><strong>Return And Refund Policy</strong></h3>

            <h3 className="section-heading"><strong>Return Policy</strong></h3>
            <ul className="terms-list">
              <li>All Products purchased from the Website enjoy Ten (10) days Return Policy.</li>
              <li>Any Product purchased from the Website can be returned to the Company within Ten (10) days of delivery by placing a Cancel Order request by logging a call with the Company’s Customer Care Centre at 9660339514 (Mon to Sat-10AM to 6PM).</li>
              <li>Any Product purchased from the Website can be returned only if the Product is damaged, defective, or different from what was ordered.</li>
              <li>The User shall ensure not to accept delivery of any Product whose original packaging is damaged or tampered in any manner.</li>
              <li>If the Product is damaged/defective/different from what was ordered, the User must immediately inform the Company’s Customer Care Centre, and the Company will arrange for replacement or a refund of the price, including shipping charges if applicable.</li>
              <li>In case of Cancellation (Return/Exchange) after delivery, the Customer must cooperate fully to return the Product with all original packaging, manuals, accessories, freebies, and other materials received with the Product. Refund or exchange will only be processed after receipt of the product.</li>
            </ul>

            <p className="section-text">All free gifts, in original packing and unused condition, must be returned along with the Product in case of cancellation of the Product with which the free gift(s) were given.</p>

            <h3 className="section-heading"><strong>Refund Policy</strong></h3>
            <ul className="terms-list">
              <li>Any cancellation/exchange in accordance with the above terms qualifies for payment reversal or replacement of the Product depending on availability and User preference.</li>
              <li>Refunds for cancellations before delivery will be subject to a 2% deduction plus applicable taxes of the Product Price (Transaction value) as banking and transaction charges. The balance amount will be processed for refund.</li>
              <li>Refunds will be initiated within Ten (10) working days of receipt of the Request for Cancellation or after the Company’s logistics partner picks up the Product from the User’s place. The refund will be credited to the User’s bank/credit card account based on banking channels’ processing time.</li>
              <li>Refunds will be credited to the account from which payment was made.</li>
              <li>Interest Fee Reversal: If an EMI facility was availed for the cancelled transaction, the interest fee debited to the User’s card will be reversed as per the bank’s terms. The User should contact the card-issuing bank for interest refund procedures.</li>
            </ul>

            <p className="section-text">
              The above terms and conditions in respect to refunds are referred to as the "Refund Policy."
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

export default Refund;
