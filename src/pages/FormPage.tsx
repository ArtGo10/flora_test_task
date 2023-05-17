import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import PageWrapper from "../components/PageWrapper";
import { useCallback, useRef, useState } from "react";
import PageSubtitle from "../components/PageSubtitle";
import PageTitle from "../components/PageTitle";
import InputWrapper from "../components/InputWrapper";
import InputLabel from "../components/InputLabel";
import Input from "../components/Input";
import InputInner from "../components/InputInner";
import CategoriesContainer from "../components/CategoriesContainer";
import Category from "../components/Category";
import Button from "../components/Button";
import RadioWrapper from "../components/RadioWrapper";
import RadioOuterCircle from "../components/RadioOuterCircle";
import RadioInnerCircle from "../components/RadioInnerCircle";
import ButtonsContainer from "../components/ButtonsContainer";
import WorkersContainer from "../components/WorkersContainer";
import WorkersQuantity from "../components/WorkersQuantity";
import RadioContainer from "../components/RadioContainer";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import MainContent from "../components/MainContent";

const sliderSettings: Settings = {
  dots: false,
  infinite: false,
  swipe: false,
  speed: 500,
  slidesToShow: 1,
};

enum ProjectCategory {
  NFT = 'NFT',
  GameFi = 'GameFi',
  DeFi = 'DeFi',
  DAO = 'DAO',
  Ecosystem = 'Ecosystem',
  Others = 'Others',
  SocialFi = 'SocialFi',
  Metaverse = 'Metaverse',
  Tools = 'Tools'
}
enum ProjectGoal {
  GROW = 'Grow My Community',
  ACTIVATION = 'Activate Existing Members',
  UNDERSTANDING = 'Understand My Members',
  OTHER = 'Other'
}
const projectCategoryList: ProjectCategory[] = [
  ProjectCategory.NFT,
  ProjectCategory.GameFi,
  ProjectCategory.DeFi,
  ProjectCategory.DAO,
  ProjectCategory.Ecosystem,
  ProjectCategory.Others,
  ProjectCategory.SocialFi,
  ProjectCategory.Metaverse,
  ProjectCategory.Tools
]
const projectGoalList: ProjectGoal[] = [
  ProjectGoal.GROW,
  ProjectGoal.ACTIVATION,
  ProjectGoal.UNDERSTANDING,
  ProjectGoal.OTHER
]

const FormPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [projectName, setProjectName] = useState('Awesome NFT Punch')
  const [projectUrl, setProjectUrl] = useState('Alphaguilty.io/awesomenftpunch')
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>(ProjectCategory.GameFi)
  const [projectGoal, setProjectGoal] = useState<ProjectGoal>(ProjectGoal.UNDERSTANDING)
  const [workersQuantity, setWorkersQuantity] = useState(4)
  const [productLaunch, setProductLaunch] = useState<'Pre Product' | 'Post Product'>('Pre Product')
  const [email, setEmail] = useState('awesomenft@gmail.com')

  const sliderEl = useRef<Slider>(null)
  const navigate = useNavigate()

  const goToNextSlide = useCallback(() => {
    if (!sliderEl?.current) return
    sliderEl.current.slickNext()
  }, [sliderEl?.current])

  const goToPrevSlide = useCallback(() => {
    if (!sliderEl?.current) return
    sliderEl.current.slickPrev()
  }, [sliderEl?.current])

  const handleSubmit = useCallback(() => {
    localStorage.setItem('formData', JSON.stringify({projectName, projectUrl, projectCategory, projectGoal, workersQuantity, productLaunch, email}))
    navigate('/results')
  }, [navigate, projectName, projectUrl, projectCategory, projectGoal, workersQuantity, productLaunch, email])

  return (
    <Slider
      afterChange={(slide) => setCurrentSlide(slide)}
      ref={sliderEl}
      {...sliderSettings}
    >
      <PageWrapper>
        <Pagination currentSlide={currentSlide} />
        <MainContent>
          <PageSubtitle>To Create Quest you need firstly create Project</PageSubtitle>
          <PageTitle>Add New Project</PageTitle>
          <InputWrapper>
            <InputLabel htmlFor="project-name">
              Project Name (it can be changed later)
            </InputLabel>
            <InputInner>
              <Input
                value={projectName}
                onChange={e => setProjectName(e.target.value)}
                id="project-name"
                name="project-name"
                type="text"
              />
            </InputInner>
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="project-url">
              Project URL (it cannot be changed after creation)
            </InputLabel>
            <InputInner className="before">
              <Input
                value={projectUrl}
                onChange={e => setProjectUrl(e.target.value)}
                id="project-url"
                name="project-url"
                type="text"
              />
            </InputInner>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>
              Project Category
              <br/>
              (it cannot be changed after creation)
            </InputLabel>
            <CategoriesContainer>
              {projectCategoryList.map((item, index) => (
                <Category
                  key={index}
                  className={item === projectCategory ? 'active' : ''}
                  onClick={() => setProjectCategory(item)}
                >
                  {item}
                </Category>
              ))}
            </CategoriesContainer>
          </InputWrapper>
          <Button onClick={goToNextSlide} type="button">Add Project</Button>
        </MainContent>
      </PageWrapper>
      <PageWrapper>
        <Pagination currentSlide={currentSlide}/>
        <MainContent>
          <PageSubtitle>Project Details</PageSubtitle>
          <PageTitle>What is your main goal with AlphaQuest</PageTitle>
          <RadioContainer>
            {projectGoalList.map((item, idx) => (
              <RadioWrapper onClick={() => setProjectGoal(item)} key={idx}>
                <RadioOuterCircle>
                  <RadioInnerCircle className={projectGoal === item ? 'active' : ''} />
                </RadioOuterCircle>
                <InputLabel>{item}</InputLabel>
              </RadioWrapper>
            ))}
          </RadioContainer>
          <ButtonsContainer>
            <Button onClick={goToPrevSlide} className="secondary" type="button">Back</Button>
            <Button onClick={goToNextSlide} type="button">Continue</Button>
          </ButtonsContainer>
        </MainContent>
      </PageWrapper>
      <PageWrapper>
        <Pagination currentSlide={currentSlide}/>
        <MainContent>
          <PageSubtitle>Create Project</PageSubtitle>
          <PageTitle className="less-margin">How many full-time workers on project?</PageTitle>
          <WorkersContainer>
            <Button
              theme={{ width: '48px' }}
              type="button"
              className="secondary"
              onClick={() => setWorkersQuantity(prev => prev > 0 ? prev - 1 : 0)}
            >
              -
            </Button>
            <WorkersQuantity>{workersQuantity}</WorkersQuantity>
            <Button
              theme={{ width: '48px' }}
              type="button"
              className="secondary"
              onClick={() => setWorkersQuantity(prev => prev + 1)}
            >
              +
            </Button>
          </WorkersContainer>
          <PageTitle className="less-margin">Are you pre or post product launch?</PageTitle>
          <RadioContainer>
            <RadioWrapper onClick={() => setProductLaunch('Pre Product')}>
              <RadioOuterCircle>
                <RadioInnerCircle className={productLaunch === 'Pre Product' ? 'active' : ''} />
              </RadioOuterCircle>
              <InputLabel>Pre Product</InputLabel>
            </RadioWrapper>
            <RadioWrapper onClick={() => setProductLaunch('Post Product')}>
              <RadioOuterCircle>
                <RadioInnerCircle className={productLaunch === 'Post Product' ? 'active' : ''} />
              </RadioOuterCircle>
              <InputLabel>Post Product</InputLabel>
            </RadioWrapper>
          </RadioContainer>
          <PageTitle className="less-margin">Contact Email</PageTitle>
          <InputWrapper>
            <InputInner className="no-margin">
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
              />
            </InputInner>
          </InputWrapper>
          <ButtonsContainer>
            <Button onClick={goToPrevSlide} className="secondary" type="button">Back</Button>
            <Button onClick={handleSubmit} type="button">Create Project</Button>
          </ButtonsContainer>
        </MainContent>
      </PageWrapper>
    </Slider>
  )
}

export default FormPage