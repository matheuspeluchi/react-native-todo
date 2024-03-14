import {Platform, StyleSheet} from 'react-native';
import commonStyles from '../../commonStyles';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  taskList: {
    flex: 7,

  },
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamiy,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamiy,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    
  },
  iconToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    
  },
  addButon: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: commonStyles.colors.today,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
