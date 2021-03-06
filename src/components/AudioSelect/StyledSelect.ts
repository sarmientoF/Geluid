import { StylesConfig } from 'react-select/src/styles';

const customStyles: StylesConfig = {
  option: (
    base: any,
    { isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }
  ) => ({
    ...base,
    borderBottom: '1px solid #BFC5D1',
    padding: 10,
    fontSize: '13px',
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: isSelected ? '#75A7FA' : isFocused ? '#7D8DA8' : null,
    color: isFocused || (isSelected ? '#fff' : '#737B91')
  }),
  control: (base: any) => ({
    ...base,
    // none of react-selects styles are passed to <View />
    width: 300,
    height: 80,
    color: '#888',
    fontSize: 15,
    margin: '0 auto',
    paddingLeft: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    border: '0',
    boxShadow: '0px 30px 72px #DFE2E8;',
    position: 'relative'
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#888',
    ':before': {
      backgroundColor: 'red',
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10
    }
  }),
  input: (base: any) => ({
    ...base,
    ':before': {
      backgroundColor: 'red',
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10
    }
  }),
  indicatorsContainer: (base: any) => ({
    ...base,
    borderColor: 'red'
  }),
  singleValue: (base: any) => ({
    ...base,
    color: '#888',
    fontSize: 15
  })
};

export default customStyles;
