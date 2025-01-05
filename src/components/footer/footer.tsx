import FooterCTA from "./footer-cta";

const Footer = ({ cta }: { cta: boolean }) => {
  return (
    <>
      {cta && <FooterCTA />}
      <footer>
        <section className="container">
            
        </section>
      </footer>
    </>
  );
};

export default Footer;
