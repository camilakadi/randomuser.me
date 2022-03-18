import React, { useEffect } from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import Styles from './HomeContent.styled';
import BoxUser from '../../components/BoxUser/BoxUser';

import User from './User.interface';

const HomeContent: NextPage = () => {
    const [userData, setUserData] = React.useState<User>();

    useEffect(() => {
        const randomizeUser = () => {
            axios.get('https://randomuser.me/api/').then(response => {
                setUserData(response.data.results[0]);
            });
        };

        randomizeUser();
    }, [setUserData]);

    return (
        <>
            <Styles.Wrapper>
                <Styles.Header>
                    <h1>Usuário Randomico</h1>
                </Styles.Header>

                <Styles.Main>
                    <div>
                        <BoxUser data={userData} />

                        <BoxUser data={userData} />

                        <BoxUser data={userData} />

                        <BoxUser data={userData} />

                        <BoxUser data={userData} />
                    </div>
                </Styles.Main>

                <Styles.Footer>
                    <small>
                        &copy; Copyright Camila Kadi Garcia 2021. All Rights Reserved.
                    </small>
                </Styles.Footer>
            </Styles.Wrapper>
        </>
    );
};

export default HomeContent;
