import styles from "./styles.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkButton from "../LinkButton";

export default function Profile(props) {
  function handleClick(ev) {
    console.log(ev);
    alert("Você está seguindo!");
  }

  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          Follow
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}
