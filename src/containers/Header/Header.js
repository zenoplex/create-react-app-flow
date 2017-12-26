// @flow
import {
  Header as RawHeader,
  type ActionProps,
} from '../../components/atoms/Header';
import { compose } from 'recompose';
import { push } from 'react-router-redux';
import { connect, type MapDispatchToProps } from 'react-redux';
import type { ReduxActions } from '../../store';

const mapDispatchToProps: MapDispatchToProps<
  ReduxActions,
  any,
  ActionProps,
> = dispatch => ({
  onAboutClick: () => dispatch(push('/about')),
  onHomeClick: () => dispatch(push('/')),
});

export const Header = compose(connect(undefined, mapDispatchToProps))(
  RawHeader,
);
