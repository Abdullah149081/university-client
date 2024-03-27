import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { monthNames } from '../../../constants/global';
import { useGetAllSemestersQuery } from '../../../redux/academicSemester/academicSemesterApi';
import { TAcademicSemester, TQueryParam } from '../../../types';

type TDataType = Pick<
  TAcademicSemester,
  'name' | 'year' | 'startMonth' | 'endMonth'
>; // Pick the fields that you want to display in the table

const AcademicSemester = () => {
  const [param, setParam] = useState<TQueryParam[]>([]);

  const { data: semesterData, isFetching } = useGetAllSemestersQuery(param);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  // Remove duplicate years from the data and create an array of unique years for the filter dropdown options
  const uniqueYears = Array.from(
    new Set(tableData?.map((data) => data.year) || [])
  );

  const yearFilters = uniqueYears.map((year) => ({
    text: year,
    value: year,
  }));

  const monthFilters = monthNames.map((month) => ({
    text: month,
    value: month,
  }));

  const columns: TableColumnsType<TDataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
    },
    {
      title: 'Year',
      dataIndex: 'year',
      filters: yearFilters,
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      filters: monthFilters,
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      filters: monthFilters,
    },

    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div>
          <Button type="primary">Edit</Button>
          <Button type="primary" danger style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const onChange: TableProps<TDataType>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const filterParams: TQueryParam[] = [];

      filters.name?.forEach((name) => {
        filterParams.push({ name: 'name', value: name as string });
      });

      filters.year?.forEach((year) => {
        filterParams.push({ name: 'year', value: year as string });
      });

      filters.startMonth?.forEach((startMonth) => {
        filterParams.push({ name: 'startMonth', value: startMonth as string });
      });

      filters.endMonth?.forEach((endMonth) => {
        filterParams.push({ name: 'endMonth', value: endMonth as string });
      });

      setParam(filterParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
