import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <style>{`
        .backToTop {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          z-index: 999;
        }

        .backToTop.show {
          opacity: 1;
          visibility: visible;
        }

        .svgIcon {
          width: 10px;
          transition: 0.3s ease;
        }

        .svgIcon path {
          fill: white;
        }

        .backToTop:hover {
          width: 110px;
          border-radius: 40px;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
        }

        .backToTop:hover .svgIcon {
          transform: translateY(-200%);
        }

        .backToTop::before {
          position: absolute;
          content: "Back to Top";
          color: white;
          font-size: 0;
          transition: 0.3s ease;
          white-space: nowrap;
        }

        .backToTop:hover::before {
          font-size: 12px;
          font-weight: 600;
        }
      `}</style>
      <button
        className={`backToTop ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
        id="backToTopBtn"
        aria-label="Back to Top"
      >
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>
    </>
  );
};