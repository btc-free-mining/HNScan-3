import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "@urkellabs/ucl";

// Components
import Card from "components/styles/Card";
import StackedData from "components/shared/StackedData";

// Util
import { hnsValues } from "utils/util";

const AddressWrapper = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 20px;
  padding: 10px;
`;

const AddressHash = styled.div`
  font-size: 16px;
  max-width: 400px;
`;

const AddressTitle = styled(AddressHash)`
  font-weight: 700;
`;

const SkeletonWrapper = styled.div`
  width: 225px;
`;

export default function AddressSummary({ hash, received, spent, confirmed }) {
  return (
    <>
      <AddressWrapper>
        <AddressTitle>Address</AddressTitle>
        <AddressHash>{hash || <Skeleton />}</AddressHash>
      </AddressWrapper>
      <Card>
        <Card.Header>
          <Card.HeaderTitle>Address Summary</Card.HeaderTitle>
        </Card.Header>
        <Card.Content>
          <Row>
            <Col mobile={12} tablet>
              <Card.ItemContainer>
                <StackedData
                  label="Received"
                  value={
                    hnsValues(received) || (
                      <SkeletonWrapper>
                        <Skeleton />
                      </SkeletonWrapper>
                    )
                  }
                />
              </Card.ItemContainer>
            </Col>
            <Col mobile={12} tablet>
              <StackedData
                label="Spent"
                value={
                  hnsValues(spent) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )
                }
              />
            </Col>
            <Col mobile={12} tablet>
              <StackedData
                label="Balance"
                value={
                  hnsValues(confirmed) || (
                    <SkeletonWrapper>
                      <Skeleton />
                    </SkeletonWrapper>
                  )
                }
              />
            </Col>
          </Row>
        </Card.Content>
      </Card>
    </>
  );
}
