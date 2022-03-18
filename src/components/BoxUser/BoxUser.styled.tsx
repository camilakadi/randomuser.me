import styled from 'styled-components';
import Image from 'next/image';

const BoxUser = styled.div`
    border: 1px solid #e3e3e3;
    box-shadow: 0px 0px 3px #e3e3e3;
    padding: 48px;
    margin-bottom: 16px;

    @media (max-width: 1024px) {
        padding: 32px;
        margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        padding: 16px;
        margin-bottom: 4px;
    }
`;

const BtnReact = styled.button`
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    display: inline-flex;
    margin-left: 16px;
    margin-bottom: 16px;

    svg {
        margin-right: 4px;
        color: #09738a;
    }
`;

const BoxUserName = styled.h4`
    text-align: center;
    font-size: calc(1rem + 20%);
`;

const BoxUserImage = styled(Image)`
    border-radius: 100%;
    box-shadow: 1px 1px 1px #e3e3e3;
` as typeof Image;

const UserInfo = styled.div`
    display: grid;
    grid-template-columns: 126px 1fr;
    grid-gap: 16px;;
`;

const ButtonsReacts = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default { BoxUser, UserInfo, BtnReact, BoxUserName, BoxUserImage, ButtonsReacts };
