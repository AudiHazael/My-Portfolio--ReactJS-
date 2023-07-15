import React from 'react';
import '../assets/css/all.min.css';

const TermsAndConditions = () => {
  return (
    <div>
      <div className='hero'>
        <div className='container text-center animate__animated animate__zoomIn animate__slower'>
          <h1 className=''>Terms and Conditions </h1>
          <p className='text-center'>
            These Terms and Conditions ("Agreement") govern the use of Haza'El Devs' website and services. <br /> By using our website or services, you agree to be bound by this Agreement.
          </p>
        </div>
        <br />
      </div>

      <article>
        <div className='termsAndConditions'>
          <div className='container animate__animated animate__zoomIn animate__slower'>
            <div>
              <h5>1. Services</h5>
              <p>
                Haza'El Devs provides website development and related services to our clients. We strive to provide high-quality services and deliver them on time, but we cannot guarantee that our
                services will meet all of our clients' expectations. We reserve the right to modify, suspend, or terminate our services at any time, with or without notice.
              </p>
            </div>

            <div>
              <h5>2. Payment</h5>
              <p>
                Our services are provided for a fee, which is set out in our proposal or agreement with the client. We require payment in advance of starting work, unless otherwise agreed. If the
                project is ongoing, we may invoice the client at regular intervals. We reserve the right to suspend or terminate services if payment is not received on time.
              </p>
            </div>

            <div>
              <h5>3. Intellectual Property</h5>
              <p>
                All intellectual property rights, including copyrights and trademarks, in the work we produce for our clients, are owned by Haza'El Devs until full payment has been received. After
                payment, ownership of the work will transfer to the client. We retain the right to display the work in our portfolio and use it for promotional purposes.
              </p>
            </div>

            <div>
              <h5>4. Confidentiality </h5>
              <p>
                We will keep confidential any information provided by our clients that is not intended to be made public. We will not disclose such information to any third party, except as required
                by law or with the client's consent.
              </p>
            </div>

            <div>
              <h5>5. Limitation of Liability</h5>
              <p>
                {' '}
                Haza'El Devs shall not be liable for any damages, including but not limited to, direct, indirect, incidental, consequential, or punitive damages, arising out of the use or inability to
                use our website or services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h5>6. Indemnification</h5>
              <p>
                The client agrees to indemnify and hold Haza'El Devs harmless from and against any and all claims, damages, expenses, and liabilities arising from or related to the client's use of our
                website or services.
              </p>
            </div>

            <div>
              <h5>7. Governing Law</h5>
              <p>This Agreement shall be governed by and construed in accordance with the laws of Nigeria, without giving effect to any principles of conflicts of law.</p>
            </div>

            <div>
              <h5>8. Termination</h5>
              <p>
                {' '}
                Either party may terminate this Agreement at any time, with or without cause. Upon termination, the client shall pay Haza'El Devs for all services provided up to the date of
                termination.
              </p>
            </div>

            <div>
              <h5>9. Entire Agreement</h5>
              <p>
                {' '}
                This Agreement constitutes the entire agreement between Haza'El Devs and the client and supersedes all prior agreements or understandings, whether written or oral, relating to the
                subject matter of this Agreement.
              </p>
            </div>

            <div>
              <h5>10. Changes to Terms and Conditions</h5>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. If we make material changes to this Agreement, we will notify our clients via email or by placing a prominent
                notice on our website.
              </p>
            </div>

            <div>
              <h5>11. Contact Information</h5>
              <p>
                If you have any questions or concerns about this Agreement or our services, please contact us at
                <a href='mailto:hazael-devs@gmail.com'>hazaeldevs@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TermsAndConditions;
