// App.js
import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Usando o pacote do Expo

const posts = [
  {
    id: 1,
    user: 'john_doe',
    image: require('./assets/postImage1.jpg'), // Imagem local para o post
    likes: 1500,
    caption: 'Sunset vibes 🌅',
    comments: ['Amazing!', 'So beautiful!', 'I need to visit this place!'],
  },
  {
    id: 2,
    user: 'jane_smith',
    image: require('./assets/postImage2.jpg'), // Outra imagem local para o post
    likes: 2000,
    caption: 'Coffee time! ☕',
    comments: ['Yum!', 'Looks delicious!'],
  },
  // Adicione mais posts conforme necessário
];

const stories = [
  { id: 1, user: 'john_doe', avatar: require('./assets/avatar1.jpg') }, // Avatar local
  { id: 2, user: 'jane_smith', avatar: require('./assets/avatar2.jpg') },
  { id: 3, user: 'alice_wonder', avatar: require('./assets/avatar3.jpg') },
  { id: 4, user: 'bob_marley', avatar: require('./assets/avatar4.jpg') },
  { id: 5, user: 'mark_zuckerberg', avatar: require('./assets/avatar5.jpg') },
];

const HomeScreen = () => {
  const renderStory = (story) => {
    return (
      <View style={styles.storyContainer}>
        <Image source={story.avatar} style={styles.storyAvatar} />
        <Text style={styles.storyUsername}>{story.user}</Text>
      </View>
    );
  };

  const renderPost = (post) => {
    return (
      <View key={post.id} style={styles.postContainer}>
        <View style={styles.header}>
          <Image
            source={require('./assets/avatar1.jpg')} // Avatar local para o post
            style={styles.avatar}
          />
          <Text style={styles.username}>{post.user}</Text>
        </View>

        <Image source={post.image} style={styles.postImage} />

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="like2" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.likes}>{post.likes} likes</Text>
        <Text style={styles.caption}>{post.caption}</Text>

        {/* Comentários */}
        <View style={styles.comments}>
          <FlatList
            data={post.comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Barra de Navegação */}
        <View style={styles.headerBar}>
          <Text style={styles.appTitle}>Instagram</Text>
        </View>

        {/* Stories Section */}
        <View style={styles.storiesContainer}>
          <FlatList
            horizontal
            data={stories}
            renderItem={({ item }) => renderStory(item)}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Posts Section */}
        {posts.map(renderPost)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ff8500', // Cor típica de borda de stories
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  postContainer: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  iconButton: {
    marginRight: 20,
  },
  likes: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  caption: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontStyle: 'italic',
  },
  comments: {
    paddingLeft: 10,
  },
  comment: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
