import classes from "./Profiles.module.scss";

export interface Profile {
  attributes: {
    profile_link: string;
    username: string;
    profile_pic_url: string;
  };
  html: string;
}

export function isProfiles(arr: unknown[]): arr is Profile[] {
  return arr.every(
    (obj) => !!obj && typeof (obj as Profile).html === "string"
  );
}

interface ProfilesProps {
  profiles: Profile[];
}

export default ({ profiles }: ProfilesProps) => (
  <div className={classes.root}>
    {profiles && profiles.map(profile =>
      <a key={profile.attributes.username} href={profile.attributes.profile_link} target="_blank" className={classes.profile}>
        <div className={classes.img}>
          <img alt="" src={profile.attributes.profile_pic_url} />
        </div>
        <div className={classes.text}>
          <div className={classes.name}>{profile.attributes.username}</div>
          <div className={classes.description} dangerouslySetInnerHTML={{ __html: profile.html }} />
        </div>
      </a>
    )}
  </div>
)