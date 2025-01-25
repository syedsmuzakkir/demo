
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
// import Icon from 'react-native-vector-icons/Ionicons'; 


const API_KEY = 'AIzaSyCxPe4aae6SFsszD3VUsLK6BpJYRC8TVio';
const CHANNEL_ID = 'UCzc3rl8YXPCm4As_Z80MEUA';

const YouTubeChannelVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => backHandler.remove();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      );
      const data = await response.json();
      setVideos(data.items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  };

  const handleBackButton = () => {
    if (selectedVideo) {
      setSelectedVideo(null);
      return true;
    }
    return false;
  };

  const renderVideoItem = ({ item }) => {
    const videoId = item.id.videoId;
    const videoThumbnail = item.snippet.thumbnails.medium.url;

    return (
      <TouchableOpacity style={styles.videoItem} onPress={() => setSelectedVideo(videoId)}>
        <Image source={{ uri: videoThumbnail }} style={styles.videoThumbnail} />
        <Text style={styles.videoTitle}>{item.snippet.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : selectedVideo ? (
        <View style={styles.videoContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedVideo(null)}>
            {/* <Icon name="arrow-back" size={24} color="#fff" />  */}
          </TouchableOpacity>
          <WebView
            source={{ uri: `https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&controls=1&showinfo=0` }}
            style={styles.webView}
            allowsFullscreenVideo
            mediaPlaybackRequiresUserAction={false}
          />
        </View>
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={renderVideoItem}
          contentContainerStyle={styles.videoList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  videoList: {
    padding: 10,
  },
  videoItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  videoThumbnail: {
    width: 120,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  webView: {
    flex: 1,
  },
});

export default YouTubeChannelVideos;
