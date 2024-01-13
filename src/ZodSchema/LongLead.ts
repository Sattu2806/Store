import { DeliveryToSiteStatus, FinalInspectionStatus, ManufacturingStatus, POStatus, RFQStatus, ReceivedQuotationStatus, TechnicalEvaluationandPRStatus } from "@prisma/client";
import {z} from "zod"

// LongLeadItem model
export const LongLeadItemSchema = z.object({
    image: z.string(),
    country: z.string(),
    category: z.string(),
    vendor: z.string(),
    description: z.string(),
    qty: z.number().int(),
    unit: z.string(),
    deliveryDate: z.date(),
    requiredAtSiteDate: z.date(),
    deliveryMode: z.string(),
    technicalEvaluation: z.optional(z.enum([TechnicalEvaluationandPRStatus.Completed,TechnicalEvaluationandPRStatus.Preparation, TechnicalEvaluationandPRStatus.UnderApproval])),
    prStatus:z.optional(z.enum([TechnicalEvaluationandPRStatus.Completed,TechnicalEvaluationandPRStatus.Preparation, TechnicalEvaluationandPRStatus.UnderApproval])),
    rfqStatus:z.optional(z.enum([RFQStatus.Pending,RFQStatus.Senttovendor])),
    receivedQuotation:z.optional(z.enum([ReceivedQuotationStatus.Pending,ReceivedQuotationStatus.Vendorselected])),
    poStatus:z.optional(z.enum([POStatus.Pending,POStatus.Placed,POStatus.UnderPreparation])),
    manufacturingStatus:z.optional(z.enum([ManufacturingStatus.Completed,ManufacturingStatus.Pending,ManufacturingStatus.QualityTest,ManufacturingStatus.Started])),
    finalInspection:z.optional(z.enum([FinalInspectionStatus.Completed,FinalInspectionStatus.Ongoing,FinalInspectionStatus.Pending])),
    deliveryToSite:z.optional(z.enum([DeliveryToSiteStatus.CustomClearance,DeliveryToSiteStatus.Delivered,DeliveryToSiteStatus.Pending, DeliveryToSiteStatus.UnderShipment]))
  });