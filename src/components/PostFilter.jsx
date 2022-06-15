import React from 'react';
import CustomInput from "./UI/input/CustomInput";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <CustomInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
      />
      <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue={'Сортировка'}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
      />
    </div>
  );
};

export default PostFilter;