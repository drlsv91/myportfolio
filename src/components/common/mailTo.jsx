const MailTo = ({ email, subject, body, children, className }) => {
  return (
    <a
      className={className}
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ''
      }&body=${encodeURIComponent(body) || ''}`}
    >
      {children}
    </a>
  )
}

export default MailTo
