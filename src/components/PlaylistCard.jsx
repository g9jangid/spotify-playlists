import React from 'react';
import {
  PlaylistDiv,
} from 'assets/globalStyle';


const PlaylistCard = ({playlist: {images, name, description, tracks},innerRef,...rest}) => {
  const getPlainText = (text) => text.replace(/<[^>]+>/g, '');
  return (
    <PlaylistDiv className="d-flex my-2 mx-4 react-beatiful-dnd-copy" ref={innerRef} {...rest}>
    <img src={images[0].url} alt={name} />
    <div className="flex-1">
      <h3 className="mt-3 mx-3 mb-0">{name}</h3>
      <p className="mt-1 mx-3 mb-0">
        {getPlainText(description)}
      </p>
      <span className="mt-2 mx-3 mb-0">
        Total Tracks : {tracks.total}
      </span>
    </div>
  </PlaylistDiv>
  );
};
export default PlaylistCard;
