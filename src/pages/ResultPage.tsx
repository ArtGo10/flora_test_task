import { Link } from "react-router-dom"
import Button from "../components/Button"
import DataBlock from "../components/DataBlock"
import InputLabel from "../components/InputLabel"
import PageSubtitle from "../components/PageSubtitle"
import PageTitle from "../components/PageTitle"
import PageWrapper from "../components/PageWrapper"
import ResultPageContainer from "../components/ResultPageContainer"

interface FormData {
  projectName: string
  projectUrl: string
  projectCategory: string
  workersQuantity: number
  projectGoal: string
  productLaunch: string
  email: string
}

const ResultPage = () => {
  const { projectName, projectUrl, projectCategory, projectGoal, workersQuantity, productLaunch, email }: FormData = JSON.parse(localStorage.getItem('formData') ?? '')

  return (
    <PageWrapper>
      <ResultPageContainer>
        <PageTitle>Submitted Data</PageTitle>
        <DataBlock>
          <PageSubtitle>Project Name:</PageSubtitle>
          <InputLabel>{projectName}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Project URL:</PageSubtitle>
          <InputLabel>{projectUrl}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Project Category:</PageSubtitle>
          <InputLabel>{projectCategory}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Project Goal:</PageSubtitle>
          <InputLabel>{projectGoal}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Number of Workers:</PageSubtitle>
          <InputLabel>{workersQuantity}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Product Launch:</PageSubtitle>
          <InputLabel>{productLaunch}</InputLabel>
        </DataBlock>
        <DataBlock>
          <PageSubtitle>Email:</PageSubtitle>
          <InputLabel>{email}</InputLabel>
        </DataBlock>
        <Button as={Link} to={'/'}>Back to Homepage</Button>
      </ResultPageContainer>
    </PageWrapper>
  )
}
  
export default ResultPage