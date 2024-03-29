import commonStyles from '@/commonStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: commonStyles.fontFamiy,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 15,
    fontWeight: '700',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today,
  },
  input: {
    fontFamily: commonStyles.fontFamiy,
    paddingHorizontal: 15,
    height: 50,
    margin: 15,
    backgroundColor: '#FFFF',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6,
  },
});
