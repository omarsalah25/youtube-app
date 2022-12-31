import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: '#000',
          height: '106px',
        }}
      >
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="grey">
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
