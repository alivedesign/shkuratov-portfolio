import React, { FC } from 'react';
import cn from 'classnames';

import styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
  className?: string;
  ytID?: string;
  vimeoID?: string;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ className, ytID, vimeoID }) => {
  return (
    <div className={cn(styles.wrap, className)}>
      {ytID && (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${ytID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {vimeoID && (
        <iframe
          className={styles.iframe}
          title="vimeo-player"
          src={`https://player.vimeo.com/video/809606352?h=10fe8c3a05&title=0&byline=0&portrait=0&sidedock=0`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
