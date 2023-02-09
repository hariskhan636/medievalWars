import styles from "../style";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const ContactRef = collection(db, "contact");

  const handleAdd = async () => {
    await addDoc(ContactRef, {
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Contact form submitted");
  };

  return (
    <section
      id="contactus"
      class="mb-4 mt-[100px] mb-5 cardbox1 p-[50px] container"
      style={{ width: "60%" }}
    >
      <div className="row d-flex justify-content-center">
        <div className="text-center">
          <h2 className={styles.heading2}>Contact us</h2>

          <p class="  my-2 pb-4 text-dimWhite ">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
        </div>
        <div class="row ">
          <div class="col-md-12  mb-md-0 mb-5   rounded-[10px]">
            <form id="contact-form" name="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="name" class="text-white mb-3 mt-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      class="form-control mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <label for="email" class="text-white mb-3 mt-2">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      name="email"
                      class="form-control mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <label for="subject" class="text-white mb-3 mt-2">
                      Subject
                    </label>
                    <input
                      placeholder="Enter subject"
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control mb-3"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <label class="text-white mb-3 mt-2" for="message">
                      Your message
                    </label>
                    <textarea
                      placeholder="Message here..."
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left mt-[40px] ">
              <button
                class=" w-full sendbutton py-2 rounded-[4px]"
                onClick={handleAdd}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
