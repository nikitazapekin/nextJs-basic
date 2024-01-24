import Image from "next/image";
import styles from "./page.module.css";
import { TheFooter } from "./components/footer/footer";
import { TheHeader } from "./components/header/header";
import Test from "./components/test";

export default function Home() {
  return (
   <div>
    <TheHeader />
fewew
<div
 //className={styles.test}
 ></div>
    <TheFooter />
  <Test />
   </div>
  );
}


//https://github.com/michey85/next-blog-app/blob/main/services/getPosts.ts
//https://www.youtube.com/watch?v=VGiphTEApfo&t=281s