import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    ${'' /* text-align: center; */}
    ${'' /* padding: 10px 0px 0px; */}
    justify-content: center;
    display: flex;
    align-items: center;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! 30% off above 500/-
        </Container>
    )
}

export default Announcement;