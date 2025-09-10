import Content from './content';
import Header from './Header/header';
import styles from './page.module.css';

export default async function Home() {
  return (
    <>
      <Header/>
      <Content/>
    </>
  );
};