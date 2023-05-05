import {Text, View, Pressable, FlatList, TextInput} from 'react-native';

import {useTheme} from '@react-navigation/native';
import type {FC} from 'react';
import type {PressableProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type {JobListType} from '@app-types';
interface JobCardComponentType
  extends JobListType,
    Pick<PressableProps, 'onPress'> {}
const JobCard: FC<JobCardComponentType> = props => {
  const {colors} = useTheme();
  const {
    uid,
    name,
    company_name,
    role,
    type,
    created_date_txt,
    invoice_name,
    address,
    onPress,
  } = props;
  return (
    <Pressable
      onPress={onPress}
      style={{
        elevation: 3,
        padding: 16,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        margin: 12,
        borderRadius: 8,
      }}>
      <Text style={{color: colors.primary, fontSize: 18, fontWeight: '700'}}>
        {uid} - {name}
      </Text>
      <Text style={{fontWeight: '500'}}>
        {company_name} - {role}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 8,
          gap: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="work-outline" />
          <Text style={{fontWeight: '500', fontSize: 16}}>{type}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="work-outline" />
            <Text style={{fontWeight: '500', fontSize: 16}}>
              {created_date_txt}
            </Text>
          </View>
        </View>

        {invoice_name != null && (
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <Icon name="work-outline" />
              <Text style={{fontWeight: '500', fontSize: 16}}>
                {invoice_name}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Icon name="location-on" />
          <Text>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default JobCard;
