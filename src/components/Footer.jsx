const contacts = [
  ['bi-envelope-fill', 'george@example.com'],
  ['bi-telephone-fill', '+351 965 103 342'],
  ['bi-instagram', '@georgeportfolio'],
  ['bi-github', '@imbestgeorge'],
  ['bi-linkedin', 'George Aguiar'],
]

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary text-white border-top border-4 border-white position-relative mt-auto"
    >
      <div className="container py-4">
        <div className="row g-3 align-items-center justify-content-center">
          {contacts.map(([icon, value]) => (
            <div className="col-sm-6 col-lg-auto" key={value}>
              <div className="d-flex align-items-center justify-content-center gap-2 fw-semibold">
                <i className={`bi ${icon}`} aria-hidden="true"></i>
                <span>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
