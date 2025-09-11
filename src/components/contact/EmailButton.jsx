import emailjs from "@emailjs/browser";

function EmailButton() {
  const handleEmail = () => {
    // Ask user for name and message
    const name = window.prompt("What's your name?");
    if (!name) return; // cancel if empty

    const message = window.prompt("Write your message:");
    if (!message) return; // cancel if empty

    const email = window.prompt("Your email (optional, for a reply):");

    // Send email via EmailJS
    const templateParams = {
      from_name: name,
      message: message,
      reply_to: email || "No reply provided",
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Failed to send email. Please try again.");
    });
  };

  return (
    <button onClick={handleEmail} className="emailButton">
      Email Me
    </button>
  );
}

export default EmailButton;
