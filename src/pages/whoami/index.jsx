import { useColorStore } from "~/stores/color";

const WhoAmI = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="WhoAmIPage page-base !text-left">
      <div className={`page-title ${color}`}>whoami.</div>

      <div className="text-lg">
        First of all, Hello Mate! My name is Emre and I'm 22 years old. I live
        in{" "}
        <a
          href="https://goo.gl/maps/cadu4sCBbzi4B6F98"
          target="_blank"
          rel="noopener noreferrer"
          className="whoami-link"
        >
          Ankara/Turkey
        </a>
        . In the last years of secondary school, my interest in the world of
        informatics started. I've been learning since then. I continue to
        improve myself every day in the field of Front-End Development.
      </div>

      <div className="flex flex-col gap-5">
        <div className={`text-sm transition-colors ${color}`}>
          What I like to do and my hobbies are:
        </div>

        <div className="flex flex-col gap-4">
          <div>
            I love watching Movies and TV Series. And I like to talk to people
            about them. If you want to see the movies I watched and my watch
            list:{" "}
            <a
              target="_blank"
              href="https://letterboxd.com/Wiazeph/"
              rel="noopener noreferrer"
              className="whoami-link"
            >
              My Letterboxd Account
            </a>
          </div>
          <div>
            I love playing computer games since childhood. It's something I can
            never give up. If you are interested in games, you can check{" "}
            <a
              target="_blank"
              href="https://steamcommunity.com/id/Wiazeph"
              rel="noopener noreferrer"
              className="whoami-link"
            >
              My Steam Account
            </a>{" "}
            for the games I play and add me as a friend.
          </div>
          <div>
            Also, I have to say that finding new songs and creating playlists on
            Spotify are among my hobbies. You can check{" "}
            <a
              target="_blank"
              href="https://open.spotify.com/user/gb0jo18xvox7w4gmijbj3l301?si=089ed329e6da4203"
              rel="noopener noreferrer"
              className="whoami-link"
            >
              My Spotify Account
            </a>{" "}
            for playlists.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
