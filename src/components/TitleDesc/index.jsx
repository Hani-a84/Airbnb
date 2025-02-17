import classes from "./index.module.css";


export default function TitleDesc() {
  return (
    <div className={classes.container}>
      <h2>Online Experiences</h2>
      <p className={classes.desc}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
