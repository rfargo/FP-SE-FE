import _ from 'lodash';

const selectHelper = {
	setOptions: (data, label = '', value = '') => {
		let arr = [];

    if (_.isPlainObject(data[0])) {
      arr = data;
      for (let i in data) {
        arr[i].label = data[i][label];
        arr[i].value = data[i][value];
      }
    } else if (_.isArray(data)){
      for (let i in data) {
        arr.push({
          label: data[i],
          value: data[i],
        });
      }
    } else {
			arr = {
				label: data,
				value: data,
			};
		}

		return arr;
	},

  setChange: (val, multi = '') => {
    if (val && multi === 'multi') {
      let arr = [];
      for (let i in val) {
        arr.push(val[i].value);
      }
      return arr;
    } else if (val === null)
			return '';
		else
      return val ? val.value : val;
  },

  convertArithmetics: (data) => {
    data.map((list) => {
      let label = list.label;

      if (label === '=')
        list.label = 'Equal to';
      else if (label === '<>')
        list.label = 'Not equal to';
      else if (label === 'IN')
        list.label = 'Equal to (multi value)';
      else if (label === 'NOT_IN')
        list.label = 'Not equal to (multi values)';
      else if (label === '<')
        list.label = 'Less than';
      else if (label === '<=')
        list.label = 'Equal to or less than';
      else if (label === '>')
        list.label = 'Greater than';
      else if (label === '>=')
        list.label = 'Equal to or greater than';
    });
    return data;
  }
};

export default selectHelper;
