import { useMemo } from "react"
import Bullet from "./Bullet"
import BulletContainer from "./BulletContainer"
import BulletWrapper from "./BulletWrapper"
import InputLabel from "../InputLabel"
import Line from "../Line"
import PaginationContainer from "./PaginationContainer"

interface PaginationProps {
  currentSlide: number
}

const bulletsQuantity = 3

const paginationDescriptions = ['Start First Project', 'Project Details', 'Create Project']

const Pagination = ({ currentSlide }: PaginationProps) => {
  const activePaginationButtons = useMemo(() => {
    const activeButtonIndexes: number[] = []
      for (let i = 0; i < bulletsQuantity; i++) {
        activeButtonIndexes[i] = i
      }
      return activeButtonIndexes
  }, [bulletsQuantity])

  return (
    <PaginationContainer>
      {activePaginationButtons.map(idx => (
        <BulletWrapper key={idx}>
          <BulletContainer>
            <Bullet
              className={idx === currentSlide 
                ? 'active'
                : currentSlide > idx
                  ? 'passed'
                  : ''
              }
            />
            <InputLabel
              theme={{ display: 'none' }}
              className={idx === currentSlide
                ? ''
                : currentSlide > idx
                  ? 'passed'
                  : 'faint'
              }
            >
              {paginationDescriptions[idx]}
            </InputLabel>
          </BulletContainer>
          {idx !== bulletsQuantity - 1 && (<Line className={currentSlide > idx ? 'passed' : ''} />)}
        </BulletWrapper>
      ))}
    </PaginationContainer>
  )
}

export default Pagination