const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Created By:</p>
      <a rel="noreferrer" href="https://github.com/Tarun-Nayak" target="_blank">
        &nbsp;Tarun-Nayak
      </a>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background: var(--accents-2);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
