import {useState} from 'react'
import {
  BgContainer,
  PageContainer,
  PageHeading,
  PageInfo,
  DisplayImage,
  PageDescription,
  ToggleButton,
} from './styledComponents'

export const ReadMore = ({reactHooksDescription}) => {
  const [fullDescription, setFullDescription] = useState(false)

  const sliceDescription = () => {
    setFullDescription(fullDescription => !fullDescription)
  }

  return (
    <BgContainer>
      <PageContainer>
        <PageHeading>React Hooks</PageHeading>
        <PageInfo>Hooks are a new addition to React</PageInfo>
        <DisplayImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <PageDescription>
          {fullDescription
            ? `${reactHooksDescription}`
            : `${reactHooksDescription.slice(0, 170)}`}
        </PageDescription>
        <ToggleButton onClick={sliceDescription}>
          {fullDescription ? 'Read Less' : 'Read More'}
        </ToggleButton>
      </PageContainer>
    </BgContainer>
  )
}

export default ReadMore
