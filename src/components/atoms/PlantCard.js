import styled from '@emotion/styled';


const PlantCard = styled.div`           
    min-height: 200px;
    margin: 22px;
    padding: 20px;
    width: 21%;
    border: 1px solid red;
    background-color: #fff;
    transition: background-color 0.7s ease-out;
    flex-direction: column;

    &:hover {
        background-color: lightgreen;
    }
`;




export default PlantCard;