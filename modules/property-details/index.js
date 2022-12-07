/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import { formatToGBP } from "../../utils";
import {
  AccountHeadline, AccountLabel, AccountList, AccountListItem, AccountSection, HighlightedInfoText, InfoText, Inset
} from "./style";


const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const AccountListLine = ({ children, highlightedInfoText }) => (<AccountListItem>
  <InfoText>{children}</InfoText>
  {highlightedInfoText && <HighlightedInfoText>{highlightedInfoText}</HighlightedInfoText>}
</AccountListItem>)

const Detail = ({ }) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  const originalPurchasePriceDate = new Date(account.originalPurchasePriceDate)
  const yearsSincePurchase = new Date().getFullYear() - originalPurchasePriceDate.getFullYear();
  const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice * 100;
  const annualAppreciation = sincePurchasePercentage / yearsSincePurchase
  const sincePurchaseHighlightedText = `${formatToGBP(sincePurchase)} (${sincePurchasePercentage}%)`

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {formatToGBP(account.recentValuation.amount, 2)}
        </AccountHeadline>
        <AccountList>
          <AccountListLine>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </AccountListLine>
          <AccountListLine>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </AccountListLine>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListLine>{account.name}</AccountListLine>
            <AccountListLine>{account.bankName}</AccountListLine>
            <AccountListLine>{account.postcode}</AccountListLine>
          </AccountList>
        </RowContainer>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Valuation change</AccountLabel>
        <AccountList>
          <AccountListLine>Purchased for <strong>{formatToGBP(account.originalPurchasePrice)}</strong> in {format(originalPurchasePriceDate, "MMMM yyyy")}</AccountListLine>
          <AccountListLine highlightedInfoText={sincePurchaseHighlightedText}>Since purchase</AccountListLine>
          <AccountListLine highlightedInfoText={`${annualAppreciation}%`}>Annual appreciation</AccountListLine>
        </AccountList>
      </AccountSection >
      {
        mortgage && (
          <AccountSection>
            <AccountLabel>Mortgage</AccountLabel>
            <RowContainer
              // This is a dummy action
              onClick={() => alert("You have navigated to the mortgage page")}
            >
              <AccountList>
                <AccountListLine>
                  {formatToGBP(Math.abs(account.associatedMortgages[0].currentBalance), 2)}
                </AccountListLine>
                <AccountListLine>{account.associatedMortgages[0].name}</AccountListLine>
              </AccountList>
            </RowContainer>
          </AccountSection>
        )
      }
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset >
  );
};

export default Detail;
