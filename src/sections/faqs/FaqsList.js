// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// _mock_
import { _faqs } from "../../_mock";
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <>
      {_faqs.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={
              <Iconify icon={"iconoir:plus"} width={20} height={20} />
            }
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{textAlign: 'start'}}>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
