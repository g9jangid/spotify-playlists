import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import {useDispatch, useSelector} from 'react-redux';
import {requestfeaturedPlaylist} from 'redux/modules/featuredPlaylist/actions';
import {setUserPlaylist} from 'redux/modules/userPlaylist/actions';
import FeaturedPlaylists from 'containers/FeaturedPlaylists';
import UserPlaylists from 'containers/UserPlaylists';
import Header from 'containers/Header';
import {DragDropContext} from 'react-beautiful-dnd';
import {toast} from 'react-toastify';

const ContainerDiv = styled.div`
  height: 100vh;
`;

const MainDiv = styled.div`
  max-height: calc(100vh - 80px);
`;

const PlaylistCreator = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(({featuredPlaylist}) => featuredPlaylist.playlists);
  const userPlaylists = useSelector(({userPlaylist}) => userPlaylist.playlists);
  useEffect(() => {
    dispatch(requestfeaturedPlaylist());
  }, []);

  const onDragEnd = (result) => {
    const {source, destination, draggableId} = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (
      source.droppableId === 'featured_playlist' &&
      destination.droppableId === 'my_playlist'
    ) {
      let playlistObject = playlists.find((playlist) => playlist.id === draggableId);
      let isPlaylistAlreadyAdded = !!userPlaylists.filter(
        (playlist) => playlist.id === draggableId
      ).length;
      if (!!playlistObject && !isPlaylistAlreadyAdded) {
        toast.success('Playlist Added!');
        dispatch(setUserPlaylist(playlistObject));
      }
      if (isPlaylistAlreadyAdded) {
        toast.info('Playlist Already Added!');
      }
    } else {
      return;
    }
  };

  return (
    <ContainerDiv className="d-flex flex-column col-12">
      <Header />
      <MainDiv className="flex-1 p-6 d-flex">
        <DragDropContext onDragEnd={onDragEnd}>
          <FeaturedPlaylists />
          <UserPlaylists />
        </DragDropContext>
      </MainDiv>
    </ContainerDiv>
  );
};
export default PlaylistCreator;
