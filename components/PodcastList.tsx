import Link from "next/link";

type Props = {
  podcasts: [];
};

export const PodcastList: React.FC<Props> = ({ podcasts }) => (
  <>
    {podcasts.map((podcast: any) => (
      <Link href={`/podcast?id=${podcast.id}`} key={podcast.id}>
        <a className="podcast">
          <h3>{podcast.title}</h3>
          <div className="meta">{Math.ceil(podcast.duration / 60)} minutes</div>
        </a>
      </Link>
    ))}
    <style jsx>
      {`
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}
    </style>
  </>
);
