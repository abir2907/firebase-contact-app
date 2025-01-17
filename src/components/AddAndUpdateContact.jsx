import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => addContact(values)}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border" />
            </div>

            <button
              type="submit"
              className="self-end border bg-orange px-3 py-1.5"
            >
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
