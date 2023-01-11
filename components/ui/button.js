import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  const { link, children, onClick } = props;

  return (
    <>
      {
        link ? (
          <Link className={classes.btn} href={link}>
            {children}
          </Link>
        ): (
          <button className={classes.btn} onClick={onClick}>
            {children}
          </button>
        )
      }
    </>
  );
}

export default Button;