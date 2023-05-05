import {View, FlatList, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {JobListType} from '@app-types';

import JobCard from './components/JobCard';

import type {JobStackListProps} from '@navigation/JobStack';

const JobList = (props: JobStackListProps) => {
  const {navigation} = props;
  const {colors} = useTheme();
  const job_list: JobListType[] = [
    {
      id: 1,
      uid: 'BM2023',
      name: 'Peter Parker',
      company_name: 'Stark Industries',
      role: 'Monitoring',
      type: 'Lead',
      invoice_name: null,
      created_date_txt: '05, May 2023',
      address: '1200 Industrial Ave, Long Beach, CA 90803',
    },
    {
      id: 2,
      uid: 'BM2023',
      name: 'Peter Parker',
      company_name: 'Stark Industries',
      role: 'Monitoring',
      type: 'Lead',
      invoice_name: null,
      created_date_txt: '05, May 2023',
      address: '1200 Industrial Ave, Long Beach, CA 90803',
    },
    {
      id: 3,
      uid: 'BM2023',
      name: 'Peter Parker',
      company_name: 'Stark Industries',
      role: 'Monitoring',
      type: 'Lead',
      invoice_name: null,
      created_date_txt: '05, May 2023',
      address: '1200 Industrial Ave, Long Beach, CA 90803',
    },
    {
      id: 4,
      uid: 'BM2023',
      name: 'Peter Parker',
      company_name: 'Stark Industries',
      role: 'Monitoring',
      type: 'Lead',
      invoice_name: null,
      created_date_txt: '05, May 2023',
      address: '1200 Industrial Ave, Long Beach, CA 90803',
    },
  ];

  return (
    <View style={{height: '100%'}}>
      <View style={{margin: 16, backgroundColor: colors.card}}>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: colors.border,
            paddingLeft: 16,
            color: colors.text,
            borderRadius: 8,
            height: 40,
          }}
        />
      </View>
      <FlatList
        data={job_list}
        renderItem={({item}) => (
          <JobCard
            {...item}
            onPress={() => navigation.navigate('JobDetail', {id: item.id})}
          />
        )}
      />
    </View>
  );
};

export default JobList;
