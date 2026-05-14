const whatsappStyles = `
  @keyframes waPulse {
    0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
    70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }
  @keyframes waBounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-5px); }
  }

  .wa-btn {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 9999;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    animation: waPulse 2.2s ease-out infinite, waBounce 3s ease-in-out infinite;
    transition: transform 0.2s ease, background 0.2s ease;
    box-shadow: 0 4px 18px rgba(37, 211, 102, 0.45);
  }
  .wa-btn:hover {
    background: #1ebe5d;
    transform: scale(1.12) translateY(-3px) !important;
    animation-play-state: paused;
  }
  .wa-btn svg {
    width: 32px;
    height: 32px;
    fill: #fff;
  }
`

function WhatsAppButton({ phone = '541127135239', message = '' }) {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  return (
    <>
      <style>{whatsappStyles}</style>
      <a href={url} target="_blank" rel="noopener noreferrer" className="wa-btn" aria-label="Contactar por WhatsApp">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.363.632 4.607 1.737 6.554L2.667 29.333l6.98-1.696A13.276 13.276 0 0 0 16.002 29.333C23.364 29.333 29.333 23.363 29.333 16S23.364 2.667 16.002 2.667zm0 24.267a10.924 10.924 0 0 1-5.56-1.52l-.399-.237-4.143 1.006 1.04-3.98-.26-.41A10.912 10.912 0 0 1 5.035 16c0-6.04 4.928-10.965 10.967-10.965C22.04 5.035 26.965 9.96 26.965 16c0 6.04-4.926 10.934-10.963 10.934zm6.018-8.196c-.33-.165-1.95-.963-2.253-1.073-.302-.11-.522-.165-.742.165-.22.33-.852 1.073-1.044 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.641-1.954-1.834-2.284-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.743-1.79-1.018-2.45-.268-.644-.54-.557-.742-.567l-.633-.011c-.22 0-.578.082-.88.413-.303.33-1.155 1.128-1.155 2.752s1.183 3.191 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.79.251 1.51.216 2.078.131.634-.094 1.95-.797 2.225-1.567.275-.77.275-1.43.192-1.567-.082-.137-.302-.22-.633-.385z"/>
        </svg>
      </a>
    </>
  )
}

export default WhatsAppButton