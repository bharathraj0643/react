import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-1">
      Copyright ⓒ {year}
    </footer>
  );
}

export default Footer;
