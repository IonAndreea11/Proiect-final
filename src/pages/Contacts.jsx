export default function Contacts() {
  return (
    <div className="pages-container">
      <div className="title-pages">
        <h1>Contact</h1>
      </div>
      <div className="content-all-pages">
        <h2>Contact</h2>
        <p>
          <strong>Telefon:</strong> 0744 440 089
        </p>
        <p>
          <strong>Email:</strong> carpeshelter@yahoo.com
        </p>
        <p>
          <strong>Adresă:</strong> Str. Lavandei, Clatesti
        </p>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359.34381490629085!2d26.59354378292195!3d44.141411830395896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae2ee372a65b55%3A0xf74f1c90fe8dde7c!2zOTE3MTc2IENsxIN0ZciZdGk!5e1!3m2!1sro!2sro!4v1739737889745!5m2!1sro!2sro"
            width="600"
            height="450"
            title="Hartă locație Clătești"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
