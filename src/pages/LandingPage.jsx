import React from "react";
import { Container, Stack } from "react-bootstrap";
import FilterPets from "../components/FilterPets";

export function LandingPage() {
  return (
    <Container>
      <Stack>
        <FilterPets />
      </Stack>
    </Container>
  );
}
