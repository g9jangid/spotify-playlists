import React from 'react';
import {PlaylistWrapperDiv, PlaylistContainerHeaderDiv} from 'assets/globalStyle';
import {Droppable} from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import {useSelector} from 'react-redux';
import PlaylistCard from 'components/PlaylistCard';

const PlaylistContainer = styled.div`
  border: 1px ${(props) => (props.isDraggingOver ? 'dashed #ccc' : 'solid transparent')};
`;

const UserPlaylists = () => {
  const playlists = useSelector(({userPlaylist}) => userPlaylist.playlists);
  return (
    <PlaylistWrapperDiv className="flex-1 ml-3 d-flex flex-column">
      <PlaylistContainerHeaderDiv className="p-4">
        <h4 className="m-0">My Playlists</h4>
      </PlaylistContainerHeaderDiv>
      <Droppable droppableId="my_playlist">
        {(provided, snapshot) => (
          <PlaylistContainer
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
            className="flex-1 overflow-y-auto overflow-x-none py-2 d-flex flex-column"
          >
            {playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} />
            ))}
          </PlaylistContainer>
        )}
      </Droppable>
    </PlaylistWrapperDiv>
  );
};
export default UserPlaylists;
