// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';

import {isDesktopApp, isWindows, isMac} from 'utils/user_agent';

import Card from 'components/card/card';

import DownloadApps from './images/download-apps-svg';

type Props = {
    isMobileView: boolean;
    withinNextStep?: boolean;
}

function DownloadSection(props: Props): JSX.Element | null {
    if (props.isMobileView) {
        return (
            <div className='NextStepsView__tipsMobileMessage'>
                <Card expanded={true}>
                    <div className='Card__body'>
                        <i className='icon icon-laptop'/>
                        <FormattedMessage
                            id='next_steps_view.mobile_tips_message'
                            defaultMessage='To configure your workspace, continue on a desktop computer.'
                        />
                    </div>
                </Card>
            </div>
        );
    } else if (!isDesktopApp()) {
        return (
            <div
                className={classNames('NextStepsView__download', {
                    'NextStepsView__download--next-step': props.withinNextStep,
                })}
            >
                <DownloadApps/>
                <div className='NextStepsView__downloadText'>
                    <h4>
                        <FormattedMessage
                            id='next_steps_view.downloadDesktopAndMobile'
                            defaultMessage='Download the Desktop and Mobile apps'
                        />
                    </h4>
                    <div className='NextStepsView__downloadButtons'>
                        <button
                            className='NextStepsView__button NextStepsView__downloadForPlatformButton secondary'
                            onClick={() => downloadLatest()}
                        >
                            {getDownloadButtonString()}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

const getDownloadButtonString = () => {
    if (isWindows()) {
        return (
            <FormattedMessage
                id='next_steps_view.tips.getForWindows'
                defaultMessage='Get Mattermost for Windows'
            />
        );
    }

    if (isMac()) {
        return (
            <FormattedMessage
                id='next_steps_view.tips.getForMac'
                defaultMessage='Get Mattermost for Mac'
            />
        );
    }

    // TODO: isLinux?

    return (
        <FormattedMessage
            id='next_steps_view.tips.getForDefault'
            defaultMessage='Get Mattermost'
        />
    );
};

const downloadLatest = () => {
    window.open('https://grommunio.com/download/', '_blank');
};

export default DownloadSection;

