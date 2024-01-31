import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const allPages = Math.ceil(itemCount / pageSize);
  if (allPages <= 1) return null;
  return (
    <Flex align="center" gap="3">
      <Text>
        page {currentPage} of {allPages}{" "}
      </Text>
      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>

      <Button color="gray" variant="soft" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>

      <Button color="gray" variant="soft" disabled={currentPage === pageSize}>
        <ChevronRightIcon />
      </Button>

      <Button color="gray" variant="soft" disabled={currentPage === pageSize}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
