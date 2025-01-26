import React, { useEffect, useState } from "react"
import { View, FlatList, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image, BackHandler } from "react-native"
import { WebView } from "react-native-webview"

const API_KEY = "AIzaSyCxPe4aae6SFsszD3VUsLK6BpJYRC8TVio"
const CHANNEL_ID = "UCzc3rl8YXPCm4As_Z80MEUA"

const YouTubeChannelVideos = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    fetchVideos()
    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton)
    return () => backHandler.remove()
  }, [])

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9000`,
      )
      const data = await response.json()
      setVideos(data.items)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching videos:", error.message)
      setLoading(false)
    }
  }

  const handleBackButton = () => {
    if (selectedVideo) {
      setSelectedVideo(null)
      setIsPlaying(false)
      return true
    }
    return false
  }

  const renderVideoItem = ({ item }) => {
    const videoId = item.id.videoId
    const videoThumbnail = item.snippet.thumbnails.medium.url

    return (
      <TouchableOpacity style={styles.videoItem} onPress={() => setSelectedVideo(videoId)}>
        <Image source={{ uri: videoThumbnail }} style={styles.videoThumbnail} />
        <Text style={styles.videoTitle}>{item.snippet.title}</Text>
      </TouchableOpacity>
    )
  }

  // const generateYouTubePlayerHTML = (videoId) => {
  //   return `
  //     <!DOCTYPE html>
  //     <html>
  //       <body style="margin:0;padding:0">
  //         <div id="player"></div>
  //         <script src="https://www.youtube.com/iframe_api"></script>
  //         <script>
  //           var player;
  //           function onYouTubeIframeAPIReady() {
  //             player = new YT.Player('player', {
  //               height: '100%',
  //               width: '100%',
  //               videoId: '${videoId}',
  //               playerVars: {
  //                 'autoplay': 1,
  //                 'playsinline': 1,
  //                 'modestbranding': 1,
  //                 'controls': 1,
  //                 'showinfo': 0
  //               },
  //               events: {
  //                 'onReady': onPlayerReady
  //               }
  //             });
  //           }
  //           function onPlayerReady(event) {
  //             event.target.playVideo();
  //           }
  //         </script>
  //       </body>
  //     </html>
  //   `
  // }

  const generateYouTubePlayerHTML = (videoId) => {
    return `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&controls=1"
            frameborder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowfullscreen
          ></iframe>
        </body>
      </html>
    `;
  };
  

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : selectedVideo ? (
        <View style={styles.videoContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedVideo(null)}>
            <Text style={{ color: "white" }}>Back</Text>
          </TouchableOpacity>
          {!isPlaying && (
            <TouchableOpacity style={styles.playButton} onPress={() => setIsPlaying(true)}>
              <Text style={{ color: "white" }}>Play Video</Text>
            </TouchableOpacity>
          )}
          {isPlaying && (
            <WebView
              source={{ html: generateYouTubePlayerHTML(selectedVideo) }}
              style={styles.webView}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsInlineMediaPlayback={true}
              mediaPlaybackRequiresUserAction={false}
              onError={(e) => console.error("WebView Error: ", e.nativeEvent)}
              onHttpError={(e) => console.error("WebView HTTP Error: ", e.nativeEvent)}
              onRenderProcessGone={(e) => console.error("WebView Render Process Gone: ", e.nativeEvent)}
              onContentProcessDidTerminate={(e) => console.error("WebView Content Process Terminated: ", e.nativeEvent)}
              onLoad={(e) => console.log("WebView Loaded: ", e.nativeEvent)}
            />
          )}
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  videoList: {
    padding: 10,
  },
  videoItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
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
    fontWeight: "600",
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderRadius: 30,
  },
  webView: {
    flex: 1,
  },
})

export default YouTubeChannelVideos



