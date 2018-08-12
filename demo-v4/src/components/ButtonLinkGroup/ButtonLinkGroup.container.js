import {withRouter} from 'react-router-dom'
import ButtonLinkGroup from './ButtonLinkGroup'
import connect from 'react-redux/lib/connect/connect';

function mapStateToProps(state, {match}){
    return {
        selectedItem: match.params.filter||'all'
    }
}


export default withRouter(
    connect(
        mapStateToProps
    )(ButtonLinkGroup)
);
