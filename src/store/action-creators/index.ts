import * as UserActions from '../../components/authorize/Login/actions';
import * as RegisterActions from '../../components/authorize/Register/actions';

const actions = {
    ...UserActions,
    ...RegisterActions
}

export default actions;