import styled from 'styled-components';

export const ProfilePageWrapper = styled.div`
  width: 100%;
  padding-bottom: 95px;
`;

export const ProfileTextHeader = styled.h1`
  margin-top: 75px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const ProfileTextHeader2 = styled.h2`
  margin-top: 75px;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const ProfileTextRegular = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProfileInfoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ProfileCourses = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 40px;
`;

export const CourseCardActionButton = styled.div`
  margin-top: auto;
`;

export const CourseCardWrapper = styled.div`
  box-shadow: 10px -10px 16px rgba(0, 0, 0, 0.1),
    -10px 10px 15.9988px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;
