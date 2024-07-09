import classes from "../styles/main.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <aside className={classes.menuSide}>
        <ul>
          <li>
            <a href="">الأسئلة العامة</a>
          </li>
          <li>
            <a href="">مدن السعودية</a>
          </li>
          <li>
            <a href="">مجتمعات السعودية</a>
          </li>
          <li>
            <a href="">أهل السعودية</a>
          </li>
        </ul>
      </aside>
      <section className={classes.questionsCont}></section>
      <aside className={classes.statSide}></aside>
    </main>
  );
}
