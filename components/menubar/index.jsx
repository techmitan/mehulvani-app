import React from "react";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { baseAPI } from "../../config";
import { useRouter } from "next/router";
import Link from "next/link";

const Menubar = () => {
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { asPath } = router;
  const splitLocation = asPath.split("/");

  useEffect(() => {
    const getCat = async () => {
      const response = await fetch(`${baseAPI}/api/category?isPublished=true`);

      const data = await response.json();
      setCategories(data.categories);
    };

    getCat();
  }, []);

  return (
    <div className={styles.menubar}>
      <ul>
        {categories.map((category) => {
          return (
            <li
              key={category._id}
              className={splitLocation[3] === category._id ? styles.active : ""}
            >
              <Link href={`/categories/${category.title}/${category._id}`}>
                <a>
                  <div className={styles.list}>
                    {category.imageUrl && (
                      <img src={category.imageUrl} alt="category" />
                    )}
                    {category.title}
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menubar;
