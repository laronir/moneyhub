import styled, { css } from "styled-components";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
`;

export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const InfoText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
`;

export const HighlightedInfoText = styled(InfoText)`
  margin-left: auto;
  min-width: 150px;
  max-height: 26px;
  padding: 0 ${(props) => props.theme.space.s};
  border-radius: 16px;
  text-align: center;
  background: ${({ theme }) => theme.colors.green.default};
  color: ${({ theme }) => theme.colors.green.dark};
  font-weight: 600;
`;

export const AccountSection = styled.div`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

export const AccountListItem = styled.div`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;
