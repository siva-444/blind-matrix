import {Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import type {JobStackDetailProps} from '@navigation/JobStack';

const JobDetail = (props: JobStackDetailProps) => {
  const {navigation} = props;
  const {colors} = useTheme();

  navigation.setOptions({
    headerTitle: 'BM2024',
  });

  return (
    <View style={{height: '100%', padding: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 12,
          alignItems: 'center',
        }}>
        <Icon name="account-circle" size={48} />
        <View style={{flex: 1}}>
          <Text>Mr.Robert Downey JR</Text>
          <Text>Stark Industries</Text>
        </View>
        <Icon name="arrow-drop-down-circle" size={16} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          style={{
            paddingVertical: 8,
            width: '40%',
            paddingHorizontal: 12,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF007F',
          }}>
          <Text style={{color: '#FFF', fontWeight: '500'}}>+ Add Product</Text>
        </Pressable>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 12,
          }}>
          <Pressable
            style={{
              width: 28,
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#FF007F',
              borderWidth: 1,
              borderRadius: 3,
            }}>
            <Icon name="photo-camera" color="#FF007F" size={18} />
          </Pressable>
          <Pressable
            style={{
              width: 28,
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#FF007F',
              borderWidth: 1,
              borderRadius: 3,
            }}>
            <Icon name="picture-as-pdf" color="#FF007F" size={18} />
          </Pressable>
          <Pressable
            style={{
              width: 28,
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: colors.border,
              borderWidth: 1,
              borderRadius: 3,
            }}>
            <Icon name="grid-view" size={18} />
          </Pressable>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default JobDetail;
