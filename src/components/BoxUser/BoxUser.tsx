import React from 'react';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

import User from '../../content/home/User.interface';

import Styles from './BoxUser.styled';

interface BoxUserPros {
    data: User;
}

// eslint-disable-next-line max-len
const BoxUser: React.FC<BoxUserPros> = ({ data }) => (
    <Styles.BoxUser>
        <Styles.ButtonsReacts>
            <Styles.BtnReact type="button" title="Like">
                <ThumbUpIcon /> <span>Like</span>
            </Styles.BtnReact>

            <Styles.BtnReact type="button" title="Dislike">
                <ThumbDownIcon /> <span>Dislike</span>
            </Styles.BtnReact>

            <Styles.BtnReact type="button" title="Reportar comentário">
                <NotInterestedIcon /> Report Comment
            </Styles.BtnReact>
        </Styles.ButtonsReacts>

        <Styles.UserInfo>
            <div>
                {data?.picture?.large && <Styles.BoxUserImage src={data.picture.large} alt="avatar" width={128} height={128} layout="fixed" quality={100} />}
                <Styles.BoxUserName>{data?.name?.first} {data?.name?.last}</Styles.BoxUserName>
            </div>

            <article>
                My name is {data?.name?.first} {data?.name?.last},
                I live in {data?.location?.street?.name},
                {data?.location?.street?.number} - {data?.location?.city}/{data?.location?.state},
                my postcode is {data?.location?.postcode} and my country is {data?.location?.country}.
                My email is {data?.email}, I like to play League of Legends and my nickname is
                &quot;{data?.login?.username}&quot;. Call me to we talk, my cellphone is {data?.cell}.
            </article>
        </Styles.UserInfo>
    </Styles.BoxUser>
);

export default BoxUser;
