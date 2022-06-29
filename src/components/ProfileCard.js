import classes from './ProfileCard.module.css';

import Card from './Card';
import NumbersDetail from './NumbersDetail';

import bgPatternCard from '../images/bg-pattern-card.svg';
import imageVictor from '../images/image-victor.jpg';

const ProfileCard = () => {
  return (
    <Card>
      <div className={classes.top}>
        <img className={classes.bgPattern} src={bgPatternCard} alt="card pattern" />
        <img className={classes.profilePic} src={imageVictor} alt="victor" />
      </div>

      <div className={classes.bottom}>
        <div className={classes.name}>Victor Crest <span className={classes.age}>26</span></div>
        <div className={classes.city}>London</div>
        <hr />
        <div className={classes.numbersDetailGroup}>
          <NumbersDetail number="80K" text="Followers" />
          <NumbersDetail number="803K" text="Likes" />
          <NumbersDetail number="1.4K" text="Photos" />
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard;