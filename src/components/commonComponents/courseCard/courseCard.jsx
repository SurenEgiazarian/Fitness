// /* eslint-disable prettier/prettier */
import { StyledСourseCard, StyledCardContent } from './styleData/commonStyles'

export function CourseCard({
    title = 'Заголовок',
    width = '360px',
    height = '480px',
    activity = true,
    src = '',
    onClick = () => {},
    children = '',
}) {
    return (
        <StyledСourseCard
            onClick={activity ? onClick : () => {}}
            style={{
                src,
                width,
                height,
                activity,
            }}
        >
            <h1>{title}</h1>
            <StyledCardContent>{children}</StyledCardContent>
        </StyledСourseCard>
    )
}
