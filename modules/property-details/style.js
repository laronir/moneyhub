import styled from "styled-components";
import { convertTypography } from "../../utils";

export const AccountList = styled.ul`
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
`;

export const AccountLabel = styled.div`
  ${({ theme }) => convertTypography(theme.typography["xl"])}
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.space.s};
`;

export const AccountHeadline = styled.h2`
  ${({ theme }) => convertTypography(theme.typography["3xl"])}
  font-weight: normal;
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: ${({ theme }) => theme.space.m};
`;

export const InfoText = styled.div`
  ${({ theme }) => convertTypography(theme.typography["m"])}
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const HighlightedInfoText = styled(InfoText)`
  margin-left: auto;
  min-width: 150px;
  max-height: 26px;
  padding: 0 ${({ theme }) => theme.space.s};
  border-radius: 16px;
  text-align: center;
  background: ${({ theme }) => theme.colors.green.default};
  color: ${({ theme }) => theme.colors.green.dark};
  font-weight: 600;
`;

export const AccountSection = styled.div`
  padding: ${({ theme }) => theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const AccountListItem = styled.li`
  display: flex;
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.space.m};
  }
`;

export const Inset = styled.div`
  padding: 0 ${({ theme }) => theme.space.m};
`;
