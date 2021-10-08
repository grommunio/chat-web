// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';
import {useIntl} from 'react-intl';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 114.16 100.51'
                enableBackground='new 0 0 500 500'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'grommunio Logo'})}
            >
                <path
                    style={style.st0}
                    d='M114.16,5.52,82.32,19.91,94.53,40.17l19.63-34Z'
                />
                <path
                    style={style.st0}
                    d='M31,23.6,33.08,0H1Z'
                />
                <path
                    style={style.st1}
                    d='M31.64,52.25l18.75,2.1L35.62,37.73Z'
                />
                <path
                    style={style.st1}
                    d='M29.86,31.79,0,8.3,24.6,50.92Z'
                />
                <path
                    style={style.st1}
                    d='M37.93,25.63,73,15.79,69.61,0H40.26Z'
                />
                <path
                    style={style.st1}
                    d='M71.48,23.62,40.37,32.34,60.19,54.65Z'
                />
                <path
                    style={style.st1}
                    d='M79.75,13.25,109.08,0H76.9Z'
                />
                <path
                    style={style.st1}
                    d='M68.18,53.55l21-4.18,1.28-2.12L78,26.54Z'
                />
                <path
                    style={style.st0}
                    d='M55.5,62.11l-26.18-3c11.8,20.43,21.51,37.26,23.91,41.4Z'
                />
                <path
                    style={style.st1}
                    d='M62.51,64.25l-2.07,35,13.22-22.9Z'
                />
                <path
                    style={style.st1}
                    d='M68.88,60.68l8.51,9.18,7.09-12.28Z'
                />
            </svg>
        </span>
    );
}

const style: CSSProperties = {
    st0: {
        fill: '#3f3f3f',
    },
    st1: {
        fill: '#2dcaff',
    },
};
