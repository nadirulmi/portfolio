import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../about/about.css";
import picture from "/public/images/contact.jpg";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const mensaje = () => {
    toast.success(t("header.form.button"), {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: "light",
      style: {
        boxShadow: "0 4px 8px rgba(255, 0, 127, 0.5)", 
      },
    });
  };
  const [t, i18n] = useTranslation("global");
  const form = useRef();

  const sendEmail = (setSubmitting) => {
    emailjs
      .sendForm(
        "service_wsrxsgi",
        "template_bwzqtya",
        form.current,
        "H1N0DiRLa0l2ZaoHf"
      )
      .then(
        (result) => {
          if (result) mensaje();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div id="contact">
      <div className=" flex justify-center items-center ">
        <div
          className={`w-full lg:w-2/4 h-screen bg flex flex-col justify-center`}
        >
          <h1 className="text-pink-500 text-4xl lg:text-5xl mb-6 font-bold m-10">
            // {t("header.contact.title")} //
          </h1>

          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                user_name: "",
                user_email: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.user_name) {
                  errors.user_name = t("header.form.name.user_name");
                } else if (
                  !/^[a-zA-ZñÑ\sáéíóúÁÉÍÓÚ]{3,30}$/.test(values.user_name)
                ) {
                  errors.user_name = t("header.form.name.name_user");
                }

                if (!values.user_email) {
                  errors.user_email = t("header.form.email");
                }

                if (!values.message) {
                  errors.message = t("header.form.message");
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                sendEmail(values, setSubmitting);
                setTimeout(() => {
                  resetForm();
                }, 2000);
              }}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                handleBlur,
                isSubmitting,
                handleSubmit,
              }) => (
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col bg-white w-9/12 p-8 mt-16 rounded-lg shadow-2xl shadow-pink-900/50"
                >
                  <label className="font-semibold m-2 text-start">
                    {t("header.contact.name")}
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="user_name"
                    value={values.user_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.user_name && errors.user_name && (
                    <div className="font-bold text-xs text-start m-1 text-orange-700">
                      {errors.user_name}
                    </div>
                  )}
                  <label className="m-2 font-semibold text-start">Email</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="email"
                    name="user_email"
                    value={values.user_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.user_email && errors.user_email && (
                    <div className="font-bold text-xs text-start m-1 text-orange-700">
                      {errors.user_email}
                    </div>
                  )}
                  <label className="m-2 font-semibold text-start">
                    {t("header.contact.mess")}
                  </label>
                  <textarea
                    className="w-full max-h-28 px-3 py-2 border border-gray-300 rounded"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.message && errors.message && (
                    <div className="font-bold text-xs text-start m-1 text-orange-700">
                      {errors.message}
                    </div>
                  )}
                  <input
                    className="w-full py-2 px-4 rounded mt-6 bg-pink-950 hover:bg-pink-800 text-white cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor:
                        Object.keys(errors).length > 0 ? "gray" : "",
                    }}
                    value={t("header.contact.send")}
                  />
                  <ToastContainer />
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="bg-pink-200 w-2/4 h-screen hidden lg:flex">
          <img src={picture} className="h-full"></img>
        </div>
      </div>
    </div>
  );
};
