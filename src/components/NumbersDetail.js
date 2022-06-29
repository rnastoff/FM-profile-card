
import classes from './NumbersDetail.module.css';

const NumbersDetail = (props) => {
  return (
    <div className={classes.numbersDetail}>
      <div className={classes.number}>{props.number}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  )
}

export default NumbersDetail;