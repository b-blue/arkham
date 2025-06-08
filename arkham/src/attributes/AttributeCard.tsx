import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface AttributeCardProps {
  attributeName: string;
  attributeValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function AttributeCard(attributeCardProps: AttributeCardProps) {
  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {attributeCardProps.attributeName}
            </Typography>
            <Typography variant="h2">
              {attributeCardProps.attributeValue}
            </Typography>

            <ButtonGroup
              variant="contained"
              orientation="vertical"
              aria-label="outlined primary button group"
            >
              <Button onClick={attributeCardProps.onIncrement}>+</Button>
              <Button onClick={attributeCardProps.onDecrement}>-</Button>
            </ButtonGroup>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
