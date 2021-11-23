// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators, Dispatch} from 'redux';

import {getProfiles} from 'mattermost-redux/actions/users';
import {ActionFunc, GenericAction} from 'mattermost-redux/types/actions';
import {getTeamByName} from 'mattermost-redux/selectors/entities/teams';
import {getRedirectChannelNameForTeam} from 'mattermost-redux/selectors/entities/channels';
import {isCollapsedThreadsEnabled} from 'mattermost-redux/selectors/entities/preferences';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import {getIsRhsOpen, getIsRhsMenuOpen} from 'selectors/rhs';
import {getIsLhsOpen} from 'selectors/lhs';
import {getLastViewedChannelNameByTeamName} from 'selectors/local_storage';

import {GlobalState} from 'types/store';

import CenterChannel from './center_channel';

type Props = {
    match: {
        url: string;
        params: {
            team: string;
        };
    };
};

const mapStateToProps = (state: GlobalState, ownProps: Props) => {
    let channelName = getLastViewedChannelNameByTeamName(state, ownProps.match.params.team);
    if (!channelName) {
        const team = getTeamByName(state, ownProps.match.params.team);
        channelName = getRedirectChannelNameForTeam(state, team!.id);
    }
    const lastChannelPath = `${ownProps.match.url}/channels/${channelName}`;
    return {
        lastChannelPath,
        lhsOpen: getIsLhsOpen(state),
        rhsOpen: getIsRhsOpen(state),
        rhsMenuOpen: getIsRhsMenuOpen(state),
        isCollapsedThreadsEnabled: isCollapsedThreadsEnabled(state),
        currentUserId: getCurrentUserId(state),
    };
};

type Actions = {
    getProfiles: (page?: number, perPage?: number, options?: Record<string, string | boolean>) => ActionFunc;
}

function mapDispatchToProps(dispatch: Dispatch<GenericAction>) {
    return {
        actions: bindActionCreators<ActionCreatorsMapObject<ActionFunc|GenericAction>, Actions>({
            getProfiles,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterChannel);

