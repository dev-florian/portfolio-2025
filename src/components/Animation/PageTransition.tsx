'use client';

import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePathname } from 'next/navigation';
import './pageTransition.css'; // Importer les styles pour les transitions

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [inProp, setInProp] = useState(false);
  const pathname = usePathname();
  const nodeRef = useRef(null);

  // Déclenche la transition dès que le pathname change
  useEffect(() => {
    setInProp(false); // Reset avant la transition
    setInProp(true); // Déclenche immédiatement la transition
  }, [pathname]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={500}
      classNames="page"
      unmountOnExit
    >
      <div ref={nodeRef} className="page-transition-container">
        {children}
      </div>
    </CSSTransition>
  );
};

export default PageTransition;
