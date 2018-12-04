import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  @media (min-width: 650px) {
    display: flex;
  }
  position: relative;
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${props => props.theme.lightGrey};
  }
  a {
    &:hover {
      text-decoration: ${props => props.theme.accent} underline;
    }
  }
`;

export const DocSidebar = styled.aside`
  text-align: left;
  justify-content: space-between;
  padding: 2rem;
  @media (min-width: 650px) {
    position: fixed;
    width: 20%;
    height: 100%;
    border-right: 1px solid ${props => props.theme.lightGrey};
  }
`;

export const CategoryWrapper = styled.div`
  padding: 1rem 0;
  a {
    display: block;
    cursor: pointer;
  }
`;

export const Category = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubCategory = styled.a`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Documentation = styled.div`
  padding: 2rem;
  @media (min-width: 650px) {
    flex-grow: 1;
    margin-left: 20%;
  }
`;

export const Doc = styled.div`
  margin: 3rem 0 3rem;
`;

export const SubDoc = styled.div`
  margin: 2rem 0;
`;

export const Code = styled.code`
  display: block;
  background-color: ${props => props.theme.grey};
  color: ${props => props.theme.light};
  margin: 2rem 0;
  padding: 2rem;
`;
