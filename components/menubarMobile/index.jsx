import React from "react";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { baseAPI } from "../../config";
import Link from "next/link";

const MenubarMobile = () => {
  const [categories, setCategories] = useState([]);

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
            <li key={category._id}>
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

export default MenubarMobile;
