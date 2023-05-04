import {Text, View, Pressable, FlatList, TextInput} from 'react-native';

const JobList = ({navigation}) => {
  return (
    <View>
      <View style={{margin: 16}}>
        <TextInput style={{backgroundColor: '#ddd', borderRadius: 8}} />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('JobDetail')}
            style={{
              elevation: 3,
              padding: 32,
              backgroundColor: '#FFF',
              borderWidth: 1,
              borderColor: '#DDD',
              margin: 12,
              borderRadius: 5,
            }}>
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default JobList;
