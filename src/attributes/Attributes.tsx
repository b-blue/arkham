import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AttributeCard from "./AttributeCard";

export interface AttributesProps {
  willpower: number;
  intellect: number;
  combat: number;
  health: number;
  sanity: number;
  resources: number;
  clues: number;
  doom: number;
}

export default function Attributes(attrProp: AttributesProps) {
  const [attributes, setAttributes] = useState(() => {
    const storedAttributes = localStorage.getItem("attributes");
    return storedAttributes ? JSON.parse(storedAttributes) : attrProp;
  });

  const handleAttributeChange = (key: keyof AttributesProps, delta: number) => {
    setAttributes((prevAttributes: AttributesProps) => ({
      ...prevAttributes,
      [key]: prevAttributes[key] + delta,
    }));
  };

  useEffect(() => {
    localStorage.setItem(
      "attributes",
      JSON.stringify({
        ...attributes,
      })
    );
  }, [attributes]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Accordion>
          <AccordionSummary>
            <Box>
              <Typography variant="h4" gutterBottom>
                Attributes
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {[
                  { label: "Willpower", value: attributes.willpower },
                  { label: "Intellect", value: attributes.intellect },
                  { label: "Combat", value: attributes.combat },
                  { label: "Health", value: attributes.health },
                  { label: "Sanity", value: attributes.sanity },
                  { label: "Resources", value: attributes.resources },
                  { label: "Clues", value: attributes.clues },
                  { label: "Doom", value: attributes.doom },
                ].map((attr, idx, arr) => (
                  <Box
                    key={attr.label}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box sx={{ textAlign: "center", minWidth: 32 }}>
                      <Typography>{attr.label}</Typography>
                      <Typography>{attr.value}</Typography>
                    </Box>
                    {idx < arr.length - 1 && (
                      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <AttributeCard
              attributeName="Willpower"
              attributeValue={attributes.willpower}
              onIncrement={() => handleAttributeChange("willpower", 1)}
              onDecrement={() => handleAttributeChange("willpower", -1)}
            />
            <AttributeCard
              attributeName="Intellect"
              attributeValue={attributes.intellect}
              onIncrement={() => handleAttributeChange("intellect", 1)}
              onDecrement={() => handleAttributeChange("intellect", -1)}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
