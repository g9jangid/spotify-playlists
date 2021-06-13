import React  from 'react';
import {
  PlaylistWrapperDiv,
  PlaylistContainerHeaderDiv,
} from 'assets/globalStyle';
import {useSelector} from 'react-redux';
import { Droppable, Draggable} from 'react-beautiful-dnd';
import PlaylistCard from 'components/PlaylistCard';

const FeaturedPlaylists = () => {
  const playlists = useSelector(({featuredPlaylist}) => featuredPlaylist.playlists);

  const getRenderItem = (items) => (provided, snapshot, rubric) => {
    const item = items[rubric.source.index];
    return (
      <PlaylistCard playlist={item} {...provided.draggableProps}   {...provided.dragHandleProps}  innerRef={provided.innerRef}
      style={provided.draggableProps.style} />
    );
  };

  return (
    <PlaylistWrapperDiv className="flex-1 mr-3 d-flex flex-column">
      <PlaylistContainerHeaderDiv className="p-4">
        <h4 className="m-0">Featured Playlists</h4>
      </PlaylistContainerHeaderDiv>
      <Droppable
        droppableId="featured_playlist"
        isDropDisabled={true}
        renderClone={getRenderItem(playlists)}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1 overflow-y-auto overflow-x-none py-2 d-flex flex-column"
          >
            {playlists.map((playlist, index) => {
              const shouldRenderClone = playlist.id === snapshot.draggingFromThisWith;

              return (
                <React.Fragment key={playlist.id}>
                  {shouldRenderClone ? (
                    <PlaylistCard playlist={playlist} />
                  ) : (
                    <Draggable draggableId={playlist.id} index={index}>
                      {(provided, snapshot) => (
                         <PlaylistCard playlist={playlist} {...provided.draggableProps}  isDragging={snapshot.isDragging} {...provided.dragHandleProps}  innerRef={provided.innerRef}
                         />
                      )}
                    </Draggable>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </Droppable>
    </PlaylistWrapperDiv>
  );
};
export default FeaturedPlaylists;
