import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const profileImgLink =
  'https://avatars.githubusercontent.com/u/83164003?s=400&u=8f4f9a562df856579f895abc5c565451a45c5376&v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={profileImgLink} alt="Profile Image" />
}

export default ProfileImage
