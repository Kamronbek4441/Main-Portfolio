import React, { useState } from "react";
import "./Page1.css";
import { sendTelegramMessage } from "./sendMessage";

const Page1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendTelegramMessage(formData.name, formData.email, formData.message);
    alert("Xabar yuborildi!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="soft-contact" id="aloqa" name="contact">
      <div className="contact-shell">
        <h2 className="contact-heading">Contact with Me</h2>
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p>
              <strong>Call Number:</strong> +998 93 177 44 41
            </p>
            <p>
              <strong>Email:</strong> info@Kamronbek.uz
            </p>
            <p>
              <strong>Address:</strong> Namangan, O‘zbekiston
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;




// import React from "react";
// import "./Page1.css";


// const Page1 = () => {
//   return (
//    <div>  <section class="soft-contact" id="aloqa" name="contact">
//         <div class="contact-shell">
//           <h2 class="contact-heading">Contact with Me</h2>
//           <div class="contact-layout">
//             <form class="contact-form">
//               <input type="text" placeholder="Name" required />
//               <input type="email" placeholder="Email address" required />
//               <textarea
//                 rows="5"
//                 placeholder="Message..."
//                 required
//               ></textarea>
//               <button type="submit">Send</button>
//             </form>
//             <div class="contact-details">
//               <h3>Contact Information</h3>
//               <p>
//                 <strong>Call Number:</strong> +998 93 177 44 41
//               </p>
//               <p>
//                 <strong>Email:</strong> info@Kamronbek.uz
//               </p>
//               <p>
//                 <strong>Address:</strong> Namangan, O‘zbekiston
//               </p>
//             </div>
//           </div>
//         </div>
//       </section></div>
//   );
// };

// export default Page1;
