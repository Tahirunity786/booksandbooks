'use client';
import links from '@/ic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import styles from './sidebar.module.css'; // Import the CSS Module

const SideBar = memo(() => {
  const pathname = usePathname(); // Get the current path

  return (
    <aside className={styles.wrapper}
      style={{ marginTop: "50px" }}
    >
      <ul className={styles.list}>
        {links?.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <Link
              href={item.Link || "#"}

              className={`${styles.styledLink} ${pathname === item.Link ? styles.styledLinkActive : ''}`}
            >
              {item.Name || "Link"}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default SideBar;
