import { Box, Stack } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './';
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'loading';

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, indx) => (
        <Box key={indx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
