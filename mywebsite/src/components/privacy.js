import React from 'react';
import '../assets/styles/styles.css';

const PrivacyPage = () => {
  return (
    <div>
      <div className='hero animate__animated'>
        <div className=' container text-center animate__animated animate__zoomIn animate__slower'>
          <h1 className=''>Privacy Policy </h1>
          <p className='text-center'>
            At Haza'El Devs, we take the privacy and security of our customers' personal information very seriously. This Privacy Policy outlines our policies and procedures for the collection, use,
            and disclosure of personal information we receive from users of our website and services. By using our website or services, you agree to the collection and use of information in accordance
            with this Privacy Policy.
          </p>
        </div>
        <br />
      </div>

      <article>
        <div className='privacy'>
          <div className='container animate__animated animate__zoomIn animate__slower'>
            <div>
              <h5>Information Collection and Use</h5>
              <p>
                We collect personal information from our clients when they fill out a form. This information may include your name, email address, phone number, billing address, and other relevant
                contact details. We use this information to provide the services requested, process payments, and communicate with our clients about their projects.
              </p>
            </div>

            <div>
              <h5>Security</h5>
              <p>
                We take appropriate measures to protect the personal information of our clients, including physical, technical, and administrative safeguards. We use industry-standard encryption
                technologies to protect data in transit and at rest. We also restrict access to personal information to only those team members that require it to perform their job duties.
              </p>
            </div>

            <div>
              <h5>Disclosure</h5>
              <p>
                We do not sell, trade, or otherwise transfer personal information to outside parties unless we provide our clients with advance notice. This does not include website hosting partners
                and other parties who assist us in operating our website or providing our services, as long as those parties agree to keep this information confidential. We may also release personal
                information when we believe it is necessary to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
              </p>
            </div>

            <div>
              <h5>Third-Party Services</h5>
              <p>
                We may use third-party services to help us operate our website or provide our services. These third-party service providers may have access to our clients' personal information only to
                perform specific tasks on our behalf, and they are obligated not to disclose or use it for any other purpose.
              </p>
            </div>

            <div>
              <h5>Data Retention</h5>
              <p>
                We retain personal information for as long as necessary to provide our services and to comply with our legal obligations. When personal information is no longer required, we securely
                delete or destroy it.
              </p>
            </div>

            <div>
              <h5>Your Rights</h5>
              <p>
                Our clients have the right to access, modify, or delete their personal information at any time. They can also request that we restrict the processing of their personal information, or
                object to its processing. If you wish to exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h5>Changes to Privacy Policy</h5>
              <p>
                We reserve the right to modify this Privacy Policy at any time. If we make material changes to this policy, we will notify our clients via email or by placing a prominent notice on our
                website.
              </p>
            </div>

            <div>
              <h5>Contact Information</h5>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href='mailto:hazael-devs@gmail.com'>hazaeldevs@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPage;
