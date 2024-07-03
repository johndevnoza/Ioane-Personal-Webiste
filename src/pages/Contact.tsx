import { scrollManagment } from "scrollManagment";
import { useFocusElement } from "hooks/useFocusElement";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const elementId = scrollManagment((state) => state.elementId);
  const scrollInside = scrollManagment((state) => state.scrollInside);
  const isSubmit = scrollManagment((state) => state.isSubmit);
  const isOutro = scrollManagment((state) => state.isOutro);

  const elementCount = 4;

  const { setElementRef } = useFocusElement(elementId, elementCount);
  const [result, setResult] = useState("Submit");

  const submitAudioRef = useRef<HTMLAudioElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const onSubmit = async (event: any) => {
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
      submitAudioRef.current?.play();
      setTimeout(() => {
        setResult("Submit");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if (isSubmit && submitButtonRef.current) {
      submitButtonRef.current.click();
    }
    return () => {
      scrollManagment.setState({ isSubmit: false });
    };
  }, [isSubmit]);

  return (
    <div
      className={`flex flex-col gap-4 ${isOutro ? "animate-elementsFallDown" : ""}`}
    >
      {scrollInside ? null : (
        <div
          className={`flex h-full w-full flex-col gap-2 transition-all duration-300 ${scrollInside ? "opacity-0" : "opacity-100"} rounded-md bg-black p-2 outline outline-selectedColor`}
        >
          <p>Phone: 995 599 433346</p>
          <p>Email: ioandevnoza@gmail.com</p>
        </div>
      )}
      <div
        className={`z-50 flex flex-col gap-8 rounded-md transition-all ${scrollInside ? "opacity-100 outline outline-4 outline-selectedColor focus-within:bg-cyan-800/15" : "opacity-70"}`}
      >
        <h1 className="rounded-sm rounded-b-none bg-selectedColor text-center font-mono text-2xl font-bold focus:bg-orange-600">
          Send an Email!
        </h1>
        <form ref={formRef} onSubmit={onSubmit} className="relative">
          <div
            className={`left-0 flex w-full flex-col items-center transition-all duration-200 ${scrollInside ? "h-full scale-y-100 gap-2" : "h-0 scale-y-0 gap-0"}`}
          >
            <input
              type="email"
              name="email"
              tabIndex={2}
              ref={setElementRef(0)}
              required
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center group-focus:bg-red-600 ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              placeholder="Your Email"
            />
            <input
              type="text"
              name="name"
              ref={setElementRef(1)}
              required
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              placeholder="Subject, Example: Feedback"
            />
            <textarea
              name="message"
              ref={setElementRef(2)}
              className={`w-[90%] rounded-sm bg-black p-2 text-center outline-none transition-all placeholder:text-center ${scrollInside && "focus:w-full focus:py-4 focus:outline focus:outline-selectedColor"}`}
              required
              placeholder="Message, Example: You are HIRED!"
            />
            <button
              tabIndex={1}
              ref={(element) => {
                setElementRef(3)(element);
                submitButtonRef.current = element;
              }}
              className={`mb-4 mt-2 w-[90%] rounded-sm bg-black p-1 px-2 font-bold outline-none focus:w-min focus:outline-selectedColor ${result === "Form Submitted Successfully" ? "bg-green-500" : ""}`}
              type="submit"
            >
              {result}
            </button>
          </div>
        </form>
      </div>
      <audio ref={submitAudioRef} preload="auto" src="/submit-succes.mp3" />
    </div>
  );
};

export default Contact;
