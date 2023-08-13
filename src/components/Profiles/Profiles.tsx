import { IProfileJSON } from "interfaces/interfaces";
import classes from "./Profiles.module.scss";


export function isProfiles(arr: unknown[]): arr is IProfileJSON[] {
  return arr.every(
    (obj) => !!obj && typeof (obj as IProfileJSON).contentHTML === "string"
  );
}

interface ProfilesProps {
  profiles: IProfileJSON[];
}

export default ({ profiles }: ProfilesProps) => (
  <div className={classes.root}>
    {profiles && profiles.map(profile =>
      <a key={profile.username} href={profile.profile_link} target="_blank" className={classes.profile}>
        <div className={classes.img}>
          <img alt="" src={profile.display_image} />
        </div>
        <div className={classes.text}>
          <div className={classes.name}>{profile.username}</div>
          <div className={classes.description} dangerouslySetInnerHTML={{ __html: profile.contentHTML }} />
        </div>
      </a>
    )}
  </div>
)