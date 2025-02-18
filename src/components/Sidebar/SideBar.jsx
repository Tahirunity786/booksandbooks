'use client';

import links from '@/ic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useState } from 'react';
import styles from './sidebar.module.css'; // Import the CSS Module

const SideBar = memo(() => {
  const pathname = usePathname(); // Get the current path
  const [isVisible, setIsVisible] = useState(true); // Initially visible

  const closeSidebar = () => {
    setIsVisible(false);
    // Update the global CSS variable to 0px
    document.documentElement.style.setProperty('--sidebar-width-variation', '0px');
  };

  const openSidebar = () => {
    setIsVisible(true);
    // Reset the global CSS variable to its original width
    document.documentElement.style.setProperty('--sidebar-width-variation', '250px');
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={styles.wrapper}
        style={{
          marginTop: '50px',
          position: 'relative',
          opacity: isVisible ? 1 : 0, // Fade in/out
          visibility: isVisible ? 'visible' : 'hidden', // Ensure it still takes up space
          transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth transition
          width: 'var(--sidebar-width-variation)', // Controlled via the global CSS variable
        }}
      >
        <div className={styles.circleCloser} onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
        <ul className={styles.list}>
          {links?.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <Link
                href={item.Link || '#'}
                className={`${styles.styledLink} ${
                  pathname === item.Link ? styles.styledLinkActive : ''
                }`}
              >
                {item.Name || 'Link'}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Reopen Sidebar Button */}
      {!isVisible && (
        <div
          className={styles.reopenButton}
          onClick={openSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" clas="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
      )}
    </>
  );
});

export default SideBar;
