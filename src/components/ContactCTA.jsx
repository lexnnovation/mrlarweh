import { FiMail } from "react-icons/fi";

const MAILTO = "mailto:lex@lexnnovation.com?subject=Let%27s%20work%20together";

const ContactCTA = ({ stacked = false, className = "" }) => (
  <a
    href={MAILTO}
    className={`flex items-center justify-center gap-2 rounded-lg border border-accent-amber px-4 py-2 text-sm font-mono text-accent-amber hover:bg-accent-amber hover:text-surface transition-colors ${
      stacked ? "w-full" : ""
    } ${className}`}
  >
    <FiMail />
    Let&apos;s Talk
  </a>
);

export default ContactCTA;
