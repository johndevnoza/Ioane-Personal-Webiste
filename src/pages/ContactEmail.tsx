import { useState } from "react";

export default function ContactEmail({ref, index}) {
  const [result, setResult] = useState("");

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

  return (
    <div ref={ref} tabIndex={index}>
      <form onSubmit={onSubmit} className="bg-slate-500">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <input type="text" name="message" required></input>
        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
