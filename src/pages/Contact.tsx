import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isSubmit = scrollManagment((state) => state.isSubmit);
  const elementCount = 4;
  const { setElementRef } = useFocusElement(elementId, elementCount);
  const [result, setResult] = useState("");
  console.log(elementId);
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEBFORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  useEffect(() => {
    if (isSubmit) {
      formRef.current?.querySelector('button[type="submit"]').click();
    }
    return () => {
      scrollManagment.setState({ isSubmit: false });
    };
  }, [isSubmit]);

  return (
    <div
      className={`z-50 flex flex-col gap-8 rounded-md opacity-70 transition-all ${scrollInside && "opacity-100 outline outline-4 outline-selectedColor focus-within:bg-cyan-800/15"}`}
    >
      <h1 className="rounded-sm rounded-b-none bg-selectedColor text-center font-mono text-2xl font-bold focus:bg-orange-600">
        Send an Email!
      </h1>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        {scrollInside ? (
          <>
            <input
              type="email"
              name="email"
              tabIndex={2}
              ref={setElementRef(0)}
              required
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              placeholder="Your Email"
            />
            <input
              type="text"
              name="name"
              ref={setElementRef(1)}
              required
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              placeholder="Subject"
            />
            <input
              type="text"
              name="message"
              ref={setElementRef(2)}
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              required
              placeholder="Message"
            />
            <button
              tabIndex={1}
              ref={setElementRef(3)}
              className={`focus:bg-green-500`}
              type="submit"
            >
              Submit Form
            </button>
          </>
        ) : null}
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;
