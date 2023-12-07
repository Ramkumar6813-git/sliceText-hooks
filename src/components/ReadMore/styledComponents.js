import styled from 'styled-components'

export const BgContainer = styled.div`
  padding: 3% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`
export const PageHeading = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 28px;
  color: #1e293b;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    margin-top: 0;
  }
`

export const PageInfo = styled.p`
  text-align: center;
  margin-bottom: 22px;
  color: #334155;
  font-weight: 500;
`
export const DisplayImage = styled.img`
  width: 100%;
  max-width: 450px;
  max-height: 300px;
  margin-bottom: 10px;
`
export const PageDescription = styled.p`
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 10px;
  color: #334155;
  font-weight: 500;
`
export const ToggleButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  background-color: #1f81ff;
  color: #fff;
  font-weight: 500;
  border-radius: 6px;
  align-self: start;
  @media (min-width: 768px) {
    align-self: center;
  }
`
