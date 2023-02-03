import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Grid,
  GridItem,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Card,
  CardBody,
} from "@chakra-ui/react";

export default function Current() {
  const { city, setCity, weather } = useContext(WeatherContext);
  const handleSelect = (e) => {
    setCity(e.target.value);
  };
  console.log(weather.list);
  return (
    <Grid templateColumns="repeat(6,1fr)">
      <GridItem colStart={2} colSpan={4}>
        <FormControl as="fieldset">
          <FormLabel>Şehir</FormLabel>
          <Select onChange={handleSelect}>
            <option value="Ankara">Ankara</option>
            <option value="İstanbul">İstanbul</option>
          </Select>
        </FormControl>
      </GridItem>
      {/* <GridItem colStart={2} colSpan={4}>
        <Heading size="md" color="blue">{cityName}</Heading>
      </GridItem> */}
      <GridItem colStart={2} colSpan={4}>
        <Grid templateColumns="repeat(4,1fr)">
          {weather.list.map((w) => (
            <GridItem w="100%">
              <Card>
                <CardBody>
                  <Stat>
                    <StatLabel>Sıcaklık</StatLabel>
                    <StatNumber>{w.main.temp}</StatNumber>
                    <StatHelpText>{w.dt_txt}</StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
}
