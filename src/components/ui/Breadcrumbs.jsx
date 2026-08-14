import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center gap-1.5 text-[0.7rem] font-mono text-[#78716C] tracking-wider mb-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-[#171515]/30">/</span>}
            {isLast ? (
              <span className="text-[#171515] font-medium">
                {item.label}
              </span>
            ) : item.path ? (
              <Link 
                to={item.path} 
                className="hover:text-[#171515] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
