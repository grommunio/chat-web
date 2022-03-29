// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getCurrentUserId, isCurrentUserSystemAdmin, isFirstAdmin} from 'mattermost-redux/selectors/entities/users';
import {getUseCaseOnboarding} from 'mattermost-redux/selectors/entities/preferences';

import {GlobalState} from 'types/store';

import RootRedirect from './root_redirect';

function mapStateToProps(state: GlobalState) {
    const useCaseOnboarding = getUseCaseOnboarding(state);
    let isElegibleForFirstAdmingOnboarding = useCaseOnboarding;
    if (isElegibleForFirstAdmingOnboarding) {
        isElegibleForFirstAdmingOnboarding = isCurrentUserSystemAdmin(state);
    }
    return {
        currentUserId: getCurrentUserId(state),
        isElegibleForFirstAdmingOnboarding,
        isFirstAdmin: isFirstAdmin(state),
    };
}

export default connect(mapStateToProps, null)(RootRedirect);
